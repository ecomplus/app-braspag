const { parseAddress, parsePaymentType } = require('./parse-utils')

const parseFraudAnalysis = (appData, params, Address, fingerPrintId) => {
  const { amount, buyer, items } = params
  const isAnalyseFirst = Boolean(appData.is_analyse_first)
  const isAnalyseAlways = Boolean(appData.is_analyse_always)
  const fraudAnalysis = {
    Sequence: isAnalyseFirst ? 'AnalyseFirst' : 'AuthorizeFirst',
    SequenceCriteria: isAnalyseFirst ? 'Always' : (isAnalyseAlways ? 'Always' : 'OnSuccess'),
    Provider: 'ClearSale',
    TotalOrderAmount: (amount.total * 100),
    FingerPrintId: fingerPrintId,
    Shipping: {
      Addressee: buyer.fullname,
      Method: 'Other',
      Identity: buyer.doc_number,
      IdentityType: buyer.registry_type.toUpperCase() === 'P' ? '1' : '2',
      ...Address
    },
    Cart: {
      ReturnsAccepted: true,
      Items: items.map(item => {
        return {
          Name: item.name || item.variation_id || item.product_id,
          Quantity: item.quantity,
          Sku: item.sku,
          UnitPrice: Math.floor((item.final_price || item.price) * 100),
          Type: 'Default'
        }
      })
    }
  }
  if (!isAnalyseFirst) {
    fraudAnalysis.CaptureOnLowRisk = true
    fraudAnalysis.VoidOnHighRisk = true
  }
  return fraudAnalysis
}

const parsePhone = (phone) => {
  const lengthPhone = phone.length
  const ddd = phone.substring(0, 2)

  if (lengthPhone > 9) {
    const numberStart = phone.substring(2, lengthPhone - 4)
    const numberEnd = phone.substring(lengthPhone - 4, lengthPhone)
    return ` ${ddd} ${numberStart}-${numberEnd}`
  } else {
    const numberWitoutDDD = phone.substring(2, lengthPhone)
    return ` ${ddd} ${numberWitoutDDD}`
  }
}

module.exports = (appData, orderId, params, methodPayment, isCielo) => {
  const { amount, buyer, to } = params

  const methodConfig = appData[methodPayment]

  const Address = to && to.street ? parseAddress(to) : parseAddress(params.billing_address)
  const body = {
    MerchantOrderId: orderId,
    Customer: {
      Name: buyer.fullname,
      Identity: buyer.doc_number,
      IdentityType: buyer.registry_type.toUpperCase() === 'P' ? 'CPF' : 'CNPJ',
      Address
    },
    Payment: {
      Provider: methodConfig.provider,
      Type: parsePaymentType[methodPayment] || 'CreditCard',
      Amount: (amount.total * 100)
    }
  }

  if (methodPayment === 'credit_card') {
    const hashCard = JSON.parse(Buffer.from(params.credit_card.hash, 'base64'))
    const installmentsNumber = params.installments_number || 1

    if (isCielo) {
      delete body.Payment.Provider
    }

    if (buyer.email) {
      Object.assign(body.Customer, { Email: buyer.email })
    }

    if (buyer.phone) {
      let phone = buyer.phone.country_code ? `+${buyer.phonecountry_code}` : '+55'
      phone += parsePhone(buyer.phone.number)
      Object.assign(body.Customer, { Phone: phone })
    }

    if (buyer.birth_date) {
      const { day, month, year } = buyer.birth_date
      const Birthdate = `${year}-` + `${month}`.padStart(2, '0') + '-' + `${day}`.padStart(2, '0')
      Object.assign(body.Customer, { Birthdate })
    }

    if (params.browser_ip) {
      Object.assign(body.Customer, { IpAddress: params.browser_ip })
    }

    Object.assign(body.Customer, { DeliveryAddress: Address })

    const fraudAnalysis = parseFraudAnalysis(appData, params, Address, hashCard.fingerPrintId)
    Object.assign(body.Payment, {
      Installments: installmentsNumber,
      CreditCard: {
        PaymentToken: hashCard.token
      }
    })
    if (hashCard.out3ds?.Cavv && hashCard.out3ds.ReferenceId) {
      Object.assign(body.Payment, {
        Authenticate: true,
        ExternalAuthentication: hashCard.out3ds,
        Capture: true
      })
    } else {
      Object.assign(body.Payment, {
        FraudAnalysis: fraudAnalysis,
        Capture: !fraudAnalysis.CaptureOnLowRisk
      })
    }
  } else if (methodPayment === 'account_deposit') {
    if (isCielo) {
      delete body.Payment.Provider
    }

    Object.assign(body.Payment, { QrCodeExpiration: 86400 })
  }

  return body
}
