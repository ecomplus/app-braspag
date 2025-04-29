const admin = require('firebase-admin')
const axios = require('axios')
const { logger } = require('../../../context')

module.exports = function ({
  storeId,
  clientId,
  clientSecret,
  EstablishmentCode,
  MerchantName,
  MCC
}) {
  const isSandbox = clientId === 'dba3a8db-fa54-40e0-8bab-7bfb9b6f2e2e'
  const documentRef = admin.firestore().doc(`braspag_token_3ds/${storeId}`)
  return new Promise((resolve, reject) => {
    const authenticate = (accessToken) => {
      resolve({ accessToken, isSandbox })
    }
    const handleAuth = () => {
      const url = isSandbox
        ? 'https://mpisandbox.braspag.com.br/v2/auth/token'
        : 'https://mpi.braspag.com.br/v2/auth/token'
      axios.post(url, {
        EstablishmentCode,
        MerchantName,
        MCC
      }, {
        auth: {
          username: clientId,
          password: clientSecret
        }
      })
        .then((data) => {
          authenticate(data.access_token)
          documentRef.set({
            accessToken: data.accessToken,
            expiresAt: Date.now() + (Number(data.expires_in) || 120) * 1000,
            isSandbox
          })
            .catch(logger.error)
        })
        .catch(reject)
    }
    documentRef.get()
      .then((documentSnapshot) => {
        if (
          documentSnapshot.exists &&
          isSandbox === documentSnapshot.get('isSandbox') &&
          Date.now() < documentSnapshot.get('expiresAt')
        ) {
          authenticate(documentSnapshot.get('accessToken'))
        } else {
          handleAuth()
        }
      })
      .catch(reject)
  })
}
