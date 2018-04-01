<template>
  <div>
    <Navi/>
    <InputText/>
    <div
      v-if="isLoaded"
      class="card-columns"
    >
      <Card
        v-for="post in posts"
        :key="post['.key']"
        :post="post"
      />
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
  components: {
    Card,
    InputText,
    Loading,
    Navi
  },
  data() {
    return {
      isLoaded: false
    }
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts', 'account'])
  },
  async mounted() {
    if (!process.browser) {
      return
    }

    const account = this.account.email ? this.account : await auth()
    const promiseList = [
      this.account.email
        ? Promise.resolve()
        : this.$store.dispatch('initAccount', { account: account } || null),
      this.posts.length ? Promise.resolve() : this.$store.dispatch('initPosts'),
      this.users.length ? Promise.resolve() : this.$store.dispatch('initUsers')
    ]

    await Promise.all(promiseList)
    this.isLoaded = true
  }
}
</script>

<style scoped>
.card-columns {
  column-count: 4;
  column-gap: 0.5rem;
  padding: 0.375rem 0.75rem;
}

@media (min-width: 480px) and (max-width: 920px) {
  .card-columns {
    column-count: 3;
  }
}

@media (max-width: 480px) {
  .card-columns {
    column-count: 1;
  }
}
</style>
