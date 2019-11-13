import firebase from '~/plugins/firebase'
import { firebaseAction } from 'vuexfire'
import { postsRef } from '~/plugins/firebase'
import assignWith from 'lodash/assignWith'

export default {
  state: {
    body: '',
    date: '',
    from: '',
    thumbsdown: 0,
    thumbsup: 0
  },
  getters: {
    post: state => {
      const post = state.post
      if (!post) return null
      post.user = state.users.find(user => user.email === post.from)
      return post
    }
  },
  mutations: {
    setPost(state, { body, date, from, thumbsdown, thumbsup }) {
      state.body = body
      state.date = date
      state.from = from
      state.thumbsdown = thumbsdown
      state.thumbsup = thumbsup
    }
  },
  actions: {
    addPost: firebaseAction((ctx, { email, body }) => {
      if (body.trim() === '') return
      postsRef.push({
        body,
        date: firebase.database.ServerValue.TIMESTAMP,
        from: email,
        thumbsdown: 0,
        thumbsup: 0
      })
    }),
    initSingle: async ({ commit }, { id }) => {
      const snapshot = await postsRef.child(id).once('value')
      commit('setPost', snapshot.val())
    },
    thumbsDown: async ({ commit }, { id, thumbsdown }) => {
      const snapshot = await postsRef.child(id).once('value')
      await snapshot.ref.update({ thumbsdown })
      commit('setPost', assignWith(snapshot.val(), { thumbsdown }))
    },
    thumbsUp: async ({ commit }, { id, thumbsup }) => {
      const snapshot = await postsRef.child(id).once('value')
      await snapshot.ref.update({ thumbsup })
      commit('setPost', assignWith(snapshot.val(), { thumbsup }))
    }
  }
}
