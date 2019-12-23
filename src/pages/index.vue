<template>
  <div>
    <Navi />
    <InputText />
    <CardColumns v-if="isLoaded">
      <Card v-for="post in posts" :key="post['.key']" :post="post" />
    </CardColumns>
    <Loading v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import styled from 'vue-styled-components'

import auth from '../plugins/auth'
import Card from '../components/Card'
import InputText from '../components/InputText'
import Loading from '../components/Loading'
import Navi from '../components/Navi'

const CardColumns = styled.div`
  column-count: 4;
  column-gap: 0.5rem;
  padding: 0.375rem 0.75rem;

  @media (min-width: 480px) and (max-width: 920px) {
    column-count: 3;
  }

  @media (max-width: 480px) {
    column-count: 1;
  }
`

export default {
  components: {
    CardColumns,
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
    ...mapGetters(['users', 'posts']),
    ...mapGetters('account', ['account'])
  },
  async mounted() {
    if (!process.browser) return
    // account
    if (!this.account.email) {
      const account = await auth()
      this.$store.dispatch('account/addAccount', { account })
      this.$store.dispatch('account/initAccount', { account })
    }
    // posts
    await Promise.all([
      this.posts.length ? Promise.resolve() : this.$store.dispatch('initPosts'),
      this.users.length ? Promise.resolve() : this.$store.dispatch('initUsers')
    ])
    this.isLoaded = true
  }
}
</script>
