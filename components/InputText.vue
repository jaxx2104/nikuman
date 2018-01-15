<template>
  <section class="input-text">
    <div class="input-group col-12">
      <input
        :disabled="!user"
        :placeholder="user ? 'http://i.imgur.com/ABCDEF.png' : 'Please Login'"
        class="form-control form-control-lg bg-dark text-white"
        type="url"
        v-model="input"
      />
      <div class="input-group-append">
        <button
          :disabled="!user"
          @click="addPost"
          class="btn btn-light btn-lg"
          type="button"
        >Submit</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InputText',
  data() {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async addPost() {
      await this.$store.dispatch('addPost', {
        email: this.user.email,
        body: this.input
      })
      this.input = ''
    }
  }
}
</script>

<style scoped>
.input-text {
  margin-bottom: 20px;
}
</style>
