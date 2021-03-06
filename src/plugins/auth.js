import firebase from '../plugins/firebase'

function auth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(account => {
      resolve(account || false)
    })
  })
}

export default auth
