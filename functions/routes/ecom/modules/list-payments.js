const { /* hostingUri, */ isSandbox } = require('../../../__env')
const addInstallments = require('../../../lib/payments/add-payments')
const TokenSOPBraspag = require('../../../lib/braspag/sop/get-access-token')
const get3dsToken = require('../../../lib/braspag/3ds/get-3ds-token')
const { logger } = require('../../../context')

exports.post = async ({ appSdk }, req, res) => {
  /**
   * Requests coming from Modules API have two object properties on body: `params` and `application`.
   * `application` is a copy of your app installed by the merchant,
   * including the properties `data` and `hidden_data` with admin settings configured values.
   * JSON Schema reference for the List Payments module objects:
   * `params`: https://apx-mods.e-com.plus/api/v1/list_payments/schema.json?store_id=100
   * `response`: https://apx-mods.e-com.plus/api/v1/list_payments/response_schema.json?store_id=100
   *
   * Examples in published apps:
   * https://github.com/ecomplus/app-pagarme/blob/master/functions/routes/ecom/modules/list-payments.js
   * https://github.com/ecomplus/app-custom-payment/blob/master/functions/routes/ecom/modules/list-payments.js
   */

  const { params, application } = req.body
  const { storeId } = req

  // merge all app options configured by merchant
  const appData = Object.assign({}, application.data, application.hidden_data)
  const listPaymentMethod = ['banking_billet', 'account_deposit']
  const providersCieloBanking = [
    'Simulado',
    'Bradesco2',
    'BancoDoBrasil2',
    'BancoDoBrasil3'
  ]

  const isCielo = appData.is_cielo

  if (!appData.merchant_id || !appData.merchant_key) {
    return res.status(409).send({
      error: 'NO_BRASPAG_KEYS',
      message: 'merchantId e/ou merchantKey da API indefinido(s) (lojista deve configurar o aplicativo)'
    })
  }

  const haveCredentialsAdmin = appData.braspag_admin &&
    appData.braspag_admin.client_id &&
    appData.braspag_admin.client_secret

  let accessTokenSOP
  const merchantId = appData.merchant_id

  if (haveCredentialsAdmin) {
    const getTokenSOPBraspag = new TokenSOPBraspag(
      appData.braspag_admin.client_id,
      appData.braspag_admin.client_secret,
      merchantId,
      storeId,
      isSandbox || appData.credit_card?.provider === 'Simulado'
    )

    try {
      await getTokenSOPBraspag.preparing
      accessTokenSOP = await getTokenSOPBraspag.accessToken
      if (accessTokenSOP) {
        listPaymentMethod.push('credit_card')
      }
    } catch (error) {
      logger.error(error)
    }
  }

  const response = {
    payment_gateways: []
  }

  // setup payment gateway objects
  const intermediator = {
    name: 'Braspag',
    link: 'https://braspag.github.io/',
    code: 'braspag'
  }

  const { discount } = appData
  for (let i = 0; i < listPaymentMethod.length; i++) {
    const paymentMethod = listPaymentMethod[i]
    const isPix = paymentMethod === 'account_deposit'
    const isCreditCard = paymentMethod === 'credit_card'
    const methodConfig = appData[paymentMethod] || {}
    let methodEnable = !methodConfig.disable

    if (paymentMethod === 'banking_billet' && isCielo) {
      // https://developercielo.github.io/manual/cielo-ecommerce#boleto
      methodEnable = providersCieloBanking.includes(methodConfig.provider)
      logger.warn('Provider for banking billet not allowed for Cielo API')
    }

    const amount = { ...params.amount } || {}
    const minAmount = methodConfig?.min_amount || 0
    const validateAmount = amount.total ? (amount.total >= minAmount) : true // Workaround for showcase
    if (methodEnable && validateAmount) {
      let label = methodConfig.label
      if (!label) {
        if (isCreditCard) {
          label = 'Cartão de crédito'
        } else {
          label = !isPix ? 'Boleto bancário' : 'Pix'
        }
      }
      const gateway = {
        label,
        icon: methodConfig.icon,
        text: methodConfig.text,
        payment_method: {
          code: paymentMethod,
          name: `${label} - ${intermediator.name}`
        },
        // type,
        intermediator
      }

      if (discount[paymentMethod]) {
        if (discount.apply_at !== 'freight') {
          // default discount option
          response.discount_option = {
            label: appData.discount_option_label || gateway.label,
            min_amount: discount.min_amount,
            apply_at: discount.apply_at,
            type: discount.type,
            value: discount.value
          }
        }

        // check amount value to apply discount
        if (!(amount.total < discount.min_amount)) {
          gateway.discount = {
            apply_at: discount.apply_at,
            type: discount.type,
            value: discount.value
          }
          // fix local amount object
          const applyDiscount = discount.apply_at
          const maxDiscount = amount[applyDiscount || 'subtotal']
          let discountValue
          if (discount.type === 'percentage') {
            discountValue = maxDiscount * discount.value / 100
          } else {
            discountValue = discount.value
            if (discountValue > maxDiscount) {
              discountValue = maxDiscount
            }
          }
          if (discountValue) {
            amount.discount = (amount.discount || 0) + discountValue
            amount.total -= discountValue
            if (amount.total < 0) {
              amount.total = 0
            }
          }
        }
      }

      if (isCreditCard) {
        const fingerprintApp = appData.fingerprint_app
        /*
        if (!gateway.icon) {
          gateway.icon = `${hostingUri}/credit-card.png`
        }
        */

        // https://braspag.github.io//manual/braspag-pagador

        let baseScriptUri = 'https://www.pagador.com.br' // https://www.pagador.com.br/post/scripts/silentorderpost-1.0.min.js
        const scriptIsSandBox = Boolean(isSandbox || appData.credit_card?.provider === 'Simulado')
        if (isCielo) {
          // https://developercielo.github.io/manual/cielo-ecommerce

          // SANDBOX https://transactionsandbox.pagador.com.br/post/scripts/silentorderpost-1.0.min.js
          // PRODUÇÃO https://transaction.cieloecommerce.cielo.com.br/post/scripts/silentorderpost-1.0.min.js
          baseScriptUri = scriptIsSandBox
            ? 'https://transactionsandbox.pagador.com.br'
            : 'https://transaction.cieloecommerce.cielo.com.br'
        }

        gateway.js_client = {
          script_uri: 'https://ecom-braspag.web.app/dist/card-client.min.js',
          container_html: `<script>
            window._braspagSopSrc="${baseScriptUri}/post/scripts/silentorderpost-1.0.min.js";
            window._braspagFingerprintApp="${fingerprintApp}";
          </script>`,
          onload_expression: `window._braspagAccessToken="${accessTokenSOP}";` +
            `window._braspagIsSandbox=${scriptIsSandBox};`,
          cc_hash: {
            function: '_braspagHashCard',
            is_promise: true
          }
        }
        if (appData.braspag_3ds?.client_id && appData.braspag_3ds.client_secret) {
          const a3dsToken = await get3dsToken({
            storeId,
            clientId: appData.braspag_3ds.client_id,
            clientSecret: appData.braspag_3ds.client_secret,
            EstablishmentCode: appData.braspag_3ds.establishment_code,
            MerchantName: appData.braspag_3ds.merchant_name,
            MCC: appData.braspag_3ds.mcc
          })
            .catch(logger.warn)
          logger.info(`#${storeId} 3DS`, { a3dsToken })
          if (a3dsToken?.accessToken) {
            gateway.js_client.onload_expression = `window._braspag3dsToken="${a3dsToken.accessToken}";` +
              `window._braspag3dsIsSandbox=${a3dsToken.isSandbox};` +
              gateway.js_client.onload_expression
          }
        }
        const { installments } = appData
        if (installments) {
          // list all installment options and default one
          addInstallments(amount, installments, gateway, response)
        }
      }
      response.payment_gateways.push(gateway)
    }
  }
  res.send(response)
}
