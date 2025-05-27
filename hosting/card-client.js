;(function () {
  const form = document.createElement('form')
  form.id = 'fingerprintForm'
  document.body.appendChild(form)

  const sessionInput = document.createElement('input')
  sessionInput.id = 'mySessionId'
  sessionInput.type = 'hidden'
  form.appendChild(sessionInput)

  function injectClearSaleScript (app, sessionId) {
    const scriptContent = `
      (function (a, b, c, d, e, f, g) {
        a['CsdpObject'] = e; a[e] = a[e] || function () {
        (a[e].q = a[e].q || []).push(arguments)
        }, a[e].l = 1 * Date.now(); f = b.createElement(c),
        g = b.getElementsByTagName(c)[0]; f.defer = 1; f.src = d; g.parentNode.insertBefore(f, g)
      })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
      csdp('app', '${app}');
      ${sessionId ? `csdp('sessionid', '${sessionId}');` : "csdp('outputsessionid', 'mySessionId');"}
    `
    const scriptElement = document.createElement('script')
    scriptElement.innerHTML = scriptContent
    document.body.appendChild(scriptElement)
  }
  const fingerprintApp = window._braspagFingerprintApp || 'seu_app'
  injectClearSaleScript(fingerprintApp)

  const load3ds = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 6000)
    const cardClient = window._braspag3dsCard
    window._braspag3dsCard = null
    const settings = window.storefront?.settings || {}
    const { amount, customer, items } = window.storefrontApp

    const setup3dsForm = async () => {
      const form = document.createElement('form')
      form.id = 'braspag3ds'
      form.style.display = 'none'
      const shippingAddress = customer.addresses?.[0] || {}

      const formatDate = (date) => {
        if (!date) return
        if (typeof date === 'string') date = new Date(date)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
      }
      const createHiddenInput = (className, value, name) => {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.className = className
        input.value = value == null ? '' : value
        if (name) input.name = name
        return input
      }

      let ip64
      try {
        const ipResponse = await fetch('https://api64.ipify.org/')
        if (ipResponse.ok) {
          ip64 = await ipResponse.text()
        }
      } catch {
        //
      }

      // https://docs.cielo.com.br/gateway/docs/2-mapeando-as-classes
      const fields = {
        bpmpi_auth: true,
        bpmpi_auth_notifyonly: true,
        bpmpi_accesstoken: window._braspag3dsToken,
        bpmpi_ordernumber: `R${(Math.random() * (999999 - 199999) + 199999)}`,
        bpmpi_currency: 'BRL',
        bpmpi_totalamount: Math.round(amount.total * 100),
        bpmpi_installments: /* transaction.installments?.number */ 1,
        bpmpi_paymentmethod: 'credit',
        bpmpi_cardnumber: cardClient.number,
        bpmpi_cardexpirationmonth: cardClient.month.toString(),
        bpmpi_cardexpirationyear: `20${cardClient.year.toString()}`,
        bpmpi_default_card: true,
        bpmpi_billto_customerid: customer.doc_number,
        bpmpi_merchant_newcustomer: customer.orders?.length > 1,
        bpmpi_billto_contactname: customer.fullname || cardClient.name,
        bpmpi_billto_name: customer.fullname || cardClient.name,
        bpmpi_billto_phonenumber: customer.phones?.[0]?.number,
        bpmpi_billto_email: customer.main_email,
        bpmpi_billto_street1: shippingAddress.street || shippingAddress.line_address,
        bpmpi_billto_street2: shippingAddress.number,
        bpmpi_billto_city: shippingAddress.city,
        bpmpi_billto_state: shippingAddress.province_code,
        bpmpi_billto_country: shippingAddress.country_code || 'BR',
        bpmpi_billto_zipcode: shippingAddress.zip,
        bpmpi_shipto_sameasbillto: true,
        bpmpi_device_ipaddress: /* order.browser_ip */ ip64,
        bpmpi_device_1_fingerprint: cardClient.fingerPrintId,
        bpmpi_device_1_provider: 'clearsale',
        bpmpi_device_channel: 'Browser',
        // bpmpi_mdd1: order._id,
        bpmpi_transaction_mode: 'S',
        bpmpi_merchant_url: settings.domain && `https://${settings.domain}`,
        bpmpi_order_recurrence: false,
        bpmpi_order_productcode: 'PHY',
        bpmpi_order_marketingoptin: customer.accepts_marketing,
        // bpmpi_order_marketingsource: 'marketingSource',
        bpmpi_useraccount_guest: false,
        bpmpi_useraccount_createddate: formatDate(customer.created_at),
        bpmpi_useraccount_changeddate: formatDate(customer.updated_at)
      }
      let nItems = 0
      items?.forEach((item, i) => {
        if (!item.quantity || !item.sku) return
        const price = item.final_price || item.price
        if (!price) return
        nItems += 1
        fields[`bpmpi_cart_${nItems}_description`] = item.name || item.sku
        fields[`bpmpi_cart_${nItems}_name`] = item.name || item.sku
        fields[`bpmpi_cart_${nItems}_sku`] = item.sku
        fields[`bpmpi_cart_${nItems}_quantity`] = item.quantity
        fields[`bpmpi_cart_${nItems}_unitprice`] = Math.round(price * 100)
      })
      Object.keys(fields).forEach(function (className) {
        form.appendChild(createHiddenInput(className, fields[className]))
      })
      document.body.appendChild(form)
      console.log('3ds form', form)
    }

    function getQueryString (field) {
      const href = window.location.href
      const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
      const string = reg.exec(href)
      return string ? string[1] : null
    }
    const env = getQueryString('env')

    window.bpmpi_config = function () {
      return {
        onReady: function () {
          // Evento indicando quando a inicialização do script terminou.
          console.log('3ds onReady')
          window.bpmpi_authenticate()
        },
        onSuccess: function (e) {
          // Cartão elegível para autenticação, e portador autenticou com sucesso.
          console.log('3ds onSuccess', e)
          resolve(0)
        },
        onFailure: function (e) {
          // Cartão elegível para autenticação, porém o portador finalizou com falha.
          console.log('3ds onFailure', e)
          resolve(1)
        },
        onUnenrolled: function (e) {
          // Cartão não elegível para autenticação (não autenticável).
          console.log('3ds onUnenrolled', e)
          resolve(2)
        },
        onDisabled: function () {
          // Loja não requer autenticação do portador (classe "bpmpi_auth" false -> autenticação desabilitada).
          console.log('3ds onDisabled')
          resolve(3)
        },
        onError: function (e) {
          // Erro no processo de autenticação.
          console.log('3ds onError', e)
          resolve(4)
        },
        onUnsupportedBrand: function (e) {
          // Bandeira não suportada para autenticação.
          console.log('3ds onUnsupportedBrand', e)
          resolve(5)
        },
        Environment: env || (window._braspag3dsIsSandbox ? 'SDB' : 'PRD'),
        Debug: true
      }
    }

    console.log('3ds send order')
    setup3dsForm().then(() => {
      const script = document.createElement('script')
      script.src = window._braspag3dsIsSandbox
        ? 'https://mpisandbox.braspag.com.br/Scripts/BP.Mpi.3ds20.min.js'
        : 'https://mpi.braspag.com.br/Scripts/BP.Mpi.3ds20.min.js'
      script.async = true
      document.body.appendChild(script)
    })
  })

  window._braspagHashCard = function (cardClient) {
    const isSandbox = window._braspagIsSandbox
    const accessToken = window._braspagAccessToken
    const fingerPrintId = document.getElementById('mySessionId').value
    if (fingerPrintId && fingerPrintId !== '') {
      console.log('Session ID captured:', fingerPrintId)
      injectClearSaleScript(fingerprintApp, fingerPrintId)
    } else {
      return Promise.reject(new Error('Session ID (mySessionId) not captured.'))
    }

    const elementsForm = `
    <input type="text" class="bp-sop-cardtype" value="creditCard" style="display: none;>
    <input type="text" class="bp-sop-cardcvvc" value="${cardClient.cvc}" style="display: none;">
    <input type="text" class="bp-sop-cardnumber" value="${cardClient.number}" style="display: none;">
    <input type="text" class="bp-sop-cardexpirationdate" value="${cardClient.month.toString()}/20${cardClient.year.toString()}" style="display: none;">
    <input type="text" class="bp-sop-cardholdername" value="${cardClient.name}" style="display: none;">
    `

    const newForm = document.createElement('form')
    newForm.setAttribute('id', 'formBraspag')
    newForm.innerHTML = elementsForm
    document.body.appendChild(newForm)

    return new Promise((resolve, reject) => {
      const options = {
        accessToken,
        onSuccess (response) {
          if (response.PaymentToken) {
            const data = JSON.stringify({ token: response.PaymentToken, fingerPrintId })
            if (window._braspag3dsToken) {
              window._braspag3dsCard = { ...cardClient, fingerPrintId }
              delete window._braspag3dsCard.cvc
              console.log('3ds load')
              load3ds()
                .catch(console.error)
                .finally(() => resolve(window.btoa(data)))
            } else {
              resolve(window.btoa(data))
            }
          } else {
            const error = new Error('Payment Token not found. Please try again or refresh the page.')
            reject(error)
          }
        },
        onError (response) {
          reject(response)
        },
        onInvalid (validationResults) {
          reject(validationResults)
        },
        environment: isSandbox ? 'sandbox' : 'production',
        language: 'PT',
        enableBinQuery: false,
        enableVerifyCard: true,
        enableTokenize: false,
        cvvrequired: false
      }
      window.bpSop_silentOrderPost(options)
    })
  }
}())
