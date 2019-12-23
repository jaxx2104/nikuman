/* eslint-disable no-console */
import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
import 'firebase/firestore'
if (process.client) {
  require('firebase/performance')
}

const config = {
  apiKey: 'AIzaSyBJCf0Z90kyE2KaeU65Pa0vIcUxSdMjd_Q',
  authDomain: 'nikuman-46d52.firebaseapp.com',
  databaseURL: 'https://nikuman-46d52.firebaseio.com',
  projectId: 'nikuman-46d52',
  storageBucket: 'nikuman-46d52.appspot.com',
  messagingSenderId: '135609400101',
  appId: '1:135609400101:web:c3ea916a079d81d7'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// eslint-disable-next-line import/no-mutable-exports
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
