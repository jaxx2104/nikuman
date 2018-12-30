<template>
  <Spinner>
    <Bouce />
    <BouceDelay />
  </Spinner>
</template>

<script>
import styled from 'vue-styled-components'

const Spinner = styled.div`
  height: 40px;
  margin: 100px auto;
  position: relative;
  width: 40px;
`

const Bouce = styled.div`
  animation: sk-bounce 2s infinite ease-in-out;
  background-color: rebeccapurple;
  border-radius: 50%;
  height: 100%;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
`

const BouceDelay = Bouce.extend`
  animation-delay: -1s;
`

export default {
  components: {
    Bouce,
    BouceDelay,
    Spinner
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
