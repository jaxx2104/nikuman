import { firestoreAction } from 'vuexfire'

import firebase, { postsRef } from '../plugins/firebase'

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
  addPost: firestoreAction((_, { email, body }) => {
    if (body.trim() === '') return
    postsRef.add({
      body,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      from: email,
      thumbsdown: 0,
      thumbsup: 0
    })
  }),
  initSingle: firestoreAction(async ({ commit }, { id }) => {
    const snapshot = await postsRef.doc(id).get()
    commit('setPost', snapshot.data())
  }),
  down: firestoreAction(async ({ commit }, { id }) => {
    const snapshot = await postsRef.doc(id).get()
    let { thumbsdown } = snapshot.data()
    thumbsdown++
    postsRef.doc(id).update({ thumbsdown })
    commit('setPost', Object.assign(snapshot.data(), { thumbsdown }))
  }),
  up: firestoreAction(async ({ commit }, { id }) => {
    const snapshot = await postsRef.doc(id).get()
    let { thumbsup } = snapshot.data()
    thumbsup++
    postsRef.doc(id).update({ thumbsup })
    commit('setPost', Object.assign(snapshot.data(), { thumbsup }))
  })
}
