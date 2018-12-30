<template>
  <div class="auth">
    <Icon
      v-if="account.email || isAuth"
      :src="account.icon || '/user.png'"
      :title="account.name || 'user'"
    />
    <Button v-else @click.native="authAccount" :body="text" size="m" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import styled from 'vue-styled-components'
import Button from '~src/components/Button'

const Icon = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`

export default {
  name: 'Auth',
  components: {
    Button,
    Icon
  },
  props: {
    isAuth: { type: Boolean, default: false }
  },

  data() {
    return {
      text: 'Login'
    }
  },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    ...mapActions(['authAccount'])
  }
}
</script>
