<template>
  <InputBtn>
    <input
      v-model.trim="input"
      :placeholder="isDisabled ? 'http://ABCDEF.png' : 'Please Login'"
      type="url"
    />
    <Button
      :disabled="!isDisabled"
      @click.native="addPost"
      body="Submit"
      size="m"
    />
  </InputBtn>
</template>

<script>
import { mapGetters } from 'vuex'
import styled from 'vue-styled-components'
import Button from '../Button'

const InputBtn = styled.section`
  display: flex;
  margin-bottom: 0.25rem;
  padding: 0.375rem 0.75rem;

  > input {
    background-clip: padding-box;
    background-color: #343a40;
    border-radius: 0.3rem 0 0 0.3rem;
    border: 1px solid #ced4da;
    color: white;
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    width: 100%;
  }

  > button {
    border-radius: 0 0.3rem 0.3rem 0;
  }
`

export default {
  name: 'InputText',
  components: {
    Button,
    InputBtn
  },
  data() {
    return {
      isDisabled: !this.account,
      input: ''
    }
  },
  computed: {
    ...mapGetters('account', ['account'])
  },
  methods: {
    async addPost() {
      await this.$store.dispatch('post/addPost', {
        email: this.account.email,
        body: this.input
      })
      this.input = ''
    }
  }
}
</script>
