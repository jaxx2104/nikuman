<template>
  <div class="auth">
    <img
      v-if="account.email || isAuth"
      :src="account.icon || '/assets/img/user.png'"
      :title="account.name || 'user'"
    >
    <Button
      v-else
      :action="authAccount"
      :body="text"
      size="m"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '../Button/'

export default {
  name: 'Auth',
  components: {
    Button
  },
  props: {
    isAuth: { type: Boolean, default: false }
  },

  data() {
    return { text: 'Login' }
  },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    ...mapActions(['authAccount'])
  }
}
</script>

<style scoped>
.auth img {
  border-radius: 50%;
  height: 48px;
  width: 48px;
}
</style>
