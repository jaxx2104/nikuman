import { firebaseMutations, firebaseAction } from 'vuexfire'
import orderBy from 'lodash/orderBy'
import Vue from 'vue'
import Vuex from 'vuex'

import { usersRef, postsRef } from '~src/plugins/firebase'

Vue.use(Vuex)

export const state = () => ({
  users: [],
  posts: []
})

export const getters = {
  posts: state => orderBy(state.posts, 'date', 'desc'),
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
