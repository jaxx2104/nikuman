import Vue from 'vue'
import Vuex from 'vuex'
import Account from './Account'
import Post from './Post'

import { usersRef, postsRef } from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
      posts: []
    },
    getters: {
      posts: state => {
        return state.posts
          .map(post => {
            post.user = state.users.find(user => user.email === post.from)
            return post
          })
          .reverse()
      },
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
      account: Account,
      post: Post
    }
  })
}

export default createStore
