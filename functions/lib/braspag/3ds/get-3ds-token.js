const axios = require('axios')
const { logger } = require('../../../context')

module.exports = function ({
  storeId,
  clientId,
  clientSecret,
  EstablishmentCode,
  MerchantName,
  MCC,
  firestoreColl = 'braspag_token_3ds'
}) {
  const isSandbox = clientId === 'dba3a8db-fa54-40e0-8bab-7bfb9b6f2e2e'
  let documentRef
  if (firestoreColl) {
    documentRef = require('firebase-admin')
      .firestore()
      .doc(`${firestoreColl}/${storeId}`)
  }
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
          if (documentRef) {
            documentRef.set({
              accessToken: data.accessToken,
              expiresAt: Date.now() + (Number(data.expires_in) || 120) * 1000,
              isSandbox
            })
              .catch(logger.error)
          }
        })
        .catch(reject)
    }
    if (documentRef) {
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
    } else {
      handleAuth()
    }
  })
}
