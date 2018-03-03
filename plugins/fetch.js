import auth from '~/plugins/auth'

export default async function({ store }) {
  if (process.browser) {
    alert(1)
    let user
    try {
      user = await auth()
    } catch (e) {
      console.log(e)
    }
    console.log(user)
    await store.account.dispatch('save', { user: user || null })
    await store.dispatch('initPosts')
  }
}
