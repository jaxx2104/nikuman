import { firebaseAction } from 'vuexfire'
import firebase, { postsRef } from '~src/plugins/firebase'
import assignWith from 'lodash/assignWith'

export const state = () => ({
  body: '',
  date: '',
  from: '',
  thumbsdown: 0,
  thumbsup: 0
})

export const getters = {
  post: state => state
}

export const mutations = {
  setPost(state, { body, date, from, thumbsdown, thumbsup }) {
    state.body = body
    state.date = date
    state.from = from
    state.thumbsdown = thumbsdown
    state.thumbsup = thumbsup
  }
}

export const actions = {
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
  down: async ({ commit }, { id }) => {
    const snapshot = await postsRef.child(id).once('value')
    let thumbsdown = snapshot.val().thumbsdown
    thumbsdown++
    await snapshot.ref.update({ thumbsdown })
    commit('setPost', assignWith(snapshot.val(), { thumbsdown }))
  },
  up: async ({ commit }, { id }) => {
    const snapshot = await postsRef.child(id).once('value')
    let thumbsup = snapshot.val().thumbsup
    thumbsup++
    await snapshot.ref.update({ thumbsup })
    commit('setPost', assignWith(snapshot.val(), { thumbsup }))
  }
}
