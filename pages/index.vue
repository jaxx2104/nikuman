<template>
  <div>
    <Navi/>
    <InputText/>
    <div class="col-12" v-if="isLoaded">
      <div class="card-columns" >
        <Card v-for="post in posts" :key="post['.key']" :post="post"/>
      </div>
    </div>
    <div class="loading" v-else>Loading</div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import Navi from '~/components/Navi'
import InputText from '~/components/InputText'
import auth from '~/plugins/auth'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isLoaded: false
    }
  },
  components: {
    Card,
    InputText,
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
