import Vue from 'vue'
import Vuex from 'vuex'
import firebase, { usersRef, postsRef } from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const provider = new firebase.auth.GoogleAuthProvider()

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      post: null,
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
      post: state => {
        const post = state.post
        if (!post) return null
        post.user = state.users.find(user => user.email === post.from)
        return post
      },
      users: state => state.users,
      user: state => state.user
    },
    mutations: {
      saveCredential(state, { user }) {
        state.user = user
      },
      savePost(state, { post }) {
        state.post = post
      },
      ...firebaseMutations
    },
    actions: {
      addPost: firebaseAction((ctx, { email, body }) => {
        if (body.trim() === '') {
          return
        }
        postsRef.push({
          body,
          date: firebase.database.ServerValue.TIMESTAMP,
          from: email,
          thumbsdown: 0,
          thumbsup: 0
        })
      }),
      callAuth: () => {
        firebase.auth().signInWithRedirect(provider)
      },
      initSingle: async ({ commit }, { id }) => {
        const snapshot = await postsRef.child(id).once('value')
        commit('savePost', { post: snapshot.val() })
      },
      initUsers: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('users', usersRef)
      }),
      initPosts: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef('posts', postsRef)
      }),
      setCredential: async ({ commit }, { user }) => {
        if (!user) return
        await usersRef
          .child(user.email.replace('@', '_at_').replace(/\./g, '_dot_'))
          .set({
            name: user.displayName,
            email: user.email,
            icon: user.photoURL
          })
        commit('saveCredential', { user })
      },
      thumbsDown({ commit }, { id, thumbsdown }) {
        postsRef.child(id).update({ thumbsdown })
      },
      thumbsUp({ commit }, { id, thumbsup }) {
        postsRef.child(id).update({ thumbsup })
      }
    }
  })
}

export default createStore
