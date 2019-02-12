import { firebaseMutations, firebaseAction } from 'vuexfire'
import Vue from 'vue'
import Vuex from 'vuex'

import { usersRef, postsRef } from '~src/plugins/firebase'

Vue.use(Vuex)

export const state = () => ({
  users: [],
  posts: []
})

export const getters = {
  posts: state => [...state.posts].reverse(),
  users: state => state.users
}

export const mutations = {
  ...firebaseMutations
}

export const actions = {
  initUsers: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('users', usersRef)
  }),
  initPosts: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('posts', postsRef)
  })
}
