import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
import 'firebase/firestore'

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// const db = firebase.database()
const db = firebase.firestore()

// export const usersRef = db.ref('users')
// export const postsRef = db.ref('posts')
export const usersRef = db.collection('users')
export const postsRef = db.collection('posts')

export default firebase
