<template>
  <section class="input-text">
    <div class="input-group col-12">
      <input
        class="form-control form-control-lg bg-dark text-white"
        placeholder="http://i.imgur.com/ABCDEF.png"
        type="url"
        v-model="input"
      />
      <div class="input-group-append">
        <button
          type="button"
          class="btn btn-secondary btn-lg"
          @click="addPost"
        >OK</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InputText',
  data () {
    return {
      input: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async addPost () {
      await this.$store.dispatch('ADD_POST', {
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
