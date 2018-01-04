<template>
  <div class="auth">
    <img
      :src="user.photoURL"
      :title="user.displayName"
      class="rounded-circle"
      v-if="user"
    />
    <button
      @click="callAuth"
      class="btn btn-outline-light btn-lg"
      type="button"
      v-else
    >
      {{text}}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Auth',
  data () {
    return {
      text: 'Login'
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['callAuth'])
  }
}
</script>

<style scoped>
.auth img {
  width: 48px;
  height: 48px;
  margin: 0 auto;
}



</style>
