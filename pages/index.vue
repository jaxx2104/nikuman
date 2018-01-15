<template>
  <div>
    <Navi/>
    <InputText/>
    <div class="col-12" v-if="isLoaded">
        <div class="card-columns">
          <Card
            :key="post['.key']"
            :post="post"
            v-for="post in posts"
          />
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
  data() {
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
  async mounted() {
    if (!process.browser) {
      return
    }
    let user
    if (!this.user) user = await auth()
    const promiseList = [
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('setCredential', { user: user || null }),
      this.posts.length ? Promise.resolve() : this.$store.dispatch('initPosts'),
      this.users.length ? Promise.resolve() : this.$store.dispatch('initUsers')
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
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 1s;
}
</style>
