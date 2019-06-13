import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
import 'firebase/firestore'
if (process.client) {
  require('firebase/performance')
}

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export let perf = () => {}
if (process.client) {
  perf = firebase.performance()
}

// const db = firebase.database()
const db = firebase.firestore()

// export const usersRef = db.ref('users')
// export const postsRef = db.ref('posts')
export const usersRef = db.collection('users')
export const postsRef = db.collection('posts')

export default firebase
