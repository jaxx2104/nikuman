<template>
  <div>
    <Navi/>
    <InputText/>
    <div class="col-12" v-if="isLoaded">
      <div class="card-columns" >
        <Card v-for="post in posts" :key="post['.key']" :post="post"/>
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import auth from '~/plugins/auth'
import Card from '~/components/Card'
import InputText from '~/components/InputText'
import Loading from '~/components/Loading'
import Navi from '~/components/Navi'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    Card,
    InputText,
    Loading,
    Navi
  },
  async mounted () {
    if (!process.browser) {
      return
    }
    let user
    if (!this.user) user = await auth()
    const promiseList = [
      this.user ? Promise.resolve() : this.$store.dispatch('SET_CREDENTIAL', { user: user || null }),
      this.posts.length ? Promise.resolve() : this.$store.dispatch('INIT_POSTS'),
      this.users.length ? Promise.resolve() : this.$store.dispatch('INIT_USERS')
    ]
    await Promise.all(promiseList)
    this.isLoaded = true
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts'])
  }
}
</script>

<style>


</style>
