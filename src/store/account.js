import { firestoreAction } from 'vuexfire'
import firebase, { usersRef } from '~src/plugins/firebase'

export const state = () => ({
  email: null,
  icon: null,
  name: null
})

export const getters = {
  account: state => state
}

export const mutations = {
  setAccount(state, { displayName, email, photoURL }) {
    state.email = email
    state.icon = photoURL
    state.name = displayName
  }
}

export const actions = {
  authAccount: () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  },
  addAccount: firestoreAction(async ({ commit }, { account }) => {
    // eslint-disable-next-line no-console
    if (!account) return
    const index = account.email.replace('@', '_at_').replace(/\./g, '_dot_')

    // await usersRef.child(index).set({
    await usersRef.doc(index).set({
      email: account.email,
      icon: account.photoURL,
      name: account.displayName
    })

    commit('setAccount', account)
  }),
  initAccount: async ({ commit }, { account }) => {
    if (!account) return
    commit('setAccount', account)
  }
}
