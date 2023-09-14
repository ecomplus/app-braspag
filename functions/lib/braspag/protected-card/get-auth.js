const auth = require('./create-auth')

module.exports = function (clientId, clientSecret, storeId, isSandbox = false, firestoreColl = 'braspag_protected_card') {
  const self = this

  let documentRef
  const hashLogin = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  if (firestoreColl) {
    documentRef = require('firebase-admin')
      .firestore()
      .doc(`${firestoreColl}/${storeId}-${hashLogin}`)
  }

  this.preparing = new Promise((resolve, reject) => {
    const authenticate = (accessToken) => {
      self.accessToken = accessToken
      resolve(self)
    }

    const handleAuth = (isSandbox) => {
      console.log(`> Protected Card Braspag Auth #${storeId} ${isSandbox ? 'SandBox' : ''}`)
      auth(hashLogin, isSandbox, storeId)
        .then((data) => {
          console.log(`> Protected Card Braspag ${JSON.stringify(data)}`)
          authenticate(data.access_token)
          if (documentRef) {
            documentRef.set({
              accessToken: data.access_token,
              expiresIn: Date.now() + data.expires_in
            }).catch(console.error)
          }
        })
        .catch(reject)
    }

    if (documentRef) {
      documentRef.get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists &&
            Date.now() < documentSnapshot.get('expiresIn')
          ) {
            authenticate(documentSnapshot.get('accessToken'), isSandbox)
          } else {
            handleAuth(isSandbox)
          }
        })
        .catch(console.error)
    } else {
      handleAuth(isSandbox)
    }
  })
}
