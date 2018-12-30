import { firebaseMutations, firebaseAction } from 'vuexfire'
import orderBy from 'lodash/orderBy'
import Vue from 'vue'
import Vuex from 'vuex'

import { usersRef, postsRef } from '~src/plugins/firebase'
import account from './account'
import post from './post'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      posts: []
    },
    getters: {
      posts: state => orderBy(state.posts, 'date', 'desc'),
      users: state => state.users
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      initUsers: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      initPosts: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('posts', postsRef)
      })
    },
    modules: {
      account,
      post
    }
  })
}

export default createStore
