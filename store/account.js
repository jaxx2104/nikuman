import { auth } from 'firebase'
import { usersRef } from '~/plugins/firebase'

export default {
  state: {
    email: null,
    icon: null,
    name: null
  },
  getters: {
    account: state => state
  },
  mutations: {
    setAccount(state, { displayName, email, photoURL }) {
      state.email = email
      state.icon = photoURL
      state.name = displayName
    }
  },
  actions: {
    authAccount: () => {
      const provider = new auth.GoogleAuthProvider()
      auth().signInWithRedirect(provider)
    },
    addAccount: async ({ commit }, { account }) => {
      if (!account) return
      const index = account.email.replace('@', '_at_').replace(/\./g, '_dot_')
      await usersRef.child(index).set(account)
      commit('setAccount', account)
    },
    initAccount: async ({ commit }, { account }) => {
      if (!account) return
      commit('setAccount', account)
    }
  }
}
