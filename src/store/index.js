// import { vuexfireMutations, firebaseAction } from 'vuexfire'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
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
  ...vuexfireMutations
}

export const actions = {
  // initUsers: firebaseAction(({ bindFirebaseRef }) => {
  initUsers: firestoreAction(({ bindFirestoreRef }) => {
    // bindFirebaseRef('users', usersRef)
    bindFirestoreRef('users', usersRef)
  }),
  // initPosts: firebaseAction(({ bindFirebaseRef }) => {
  initPosts: firestoreAction(({ bindFirestoreRef }) => {
    // bindFirebaseRef('posts', postsRef)
    bindFirestoreRef('posts', postsRef)
  })
}
