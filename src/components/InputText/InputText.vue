<template>
  <InputBtn>
    <StyledInput
      v-model="input"
      :placeholder="isDisabled ? 'http://ABCDEF.png' : 'Please Login'"
      type="url"
    />
    <Button
      :disabled="!isDisabled"
      :action="addPost"
      body="Submit"
      size="m"
    />
  </InputBtn>
</template>

<script>
import { mapGetters } from 'vuex'
import styled from 'vue-styled-components'
import Button from '~/src/components/Button'

const InputBtn = styled.section`
  display: flex;
  margin-bottom: 0.25rem;
  padding: 0.375rem 0.75rem;

  > input {
    border-radius: 0.3rem 0 0 0.3rem;
  }

  > button {
    border-radius: 0 0.3rem 0.3rem 0;
  }
`

const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: #343a40;
  border-radius: 0.3rem;
  border: 1px solid #ced4da;
  color: white;
  display: block;
  font-size: 1.25rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  width: 100%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

export default {
  name: 'InputText',
  components: {
    Button,
    InputBtn,
    StyledInput
  },
  data() {
    return {
      isDisabled: !this.account,
      input: ''
    }
  },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    async addPost() {
      await this.$store.dispatch('addPost', {
        email: this.account.email,
        body: this.input
      })
      this.input = ''
    }
  }
}
</script>
