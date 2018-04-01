<template>
  <button
    :class="[isClick ? 'selected' : '', size]"
    @click="onClick()"
  >
    {{ prefix }}{{ body }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    action: { type: Function, default: () => {} },
    body: { type: [String, Number], default: '0' },
    prefix: { type: String, default: '' },
    size: { type: String, default: 's' }
  },
  data() {
    return {
      isClick: false
    }
  },
  computed: {},
  created() {},
  destroyed() {},
  mounted() {},
  methods: {
    onClick() {
      this.action()
      this.changeStatus()
    },
    changeStatus() {
      this.isClick = true
      setTimeout(() => {
        this.isClick = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
button {
  color: white;
  background-color: transparent;
  border-radius: 0.25rem;
  border: 1px solid white;
  display: inline-block;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  padding: 0.375rem 0.75rem;
  text-align: center;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

button.m {
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

button.l {
  font-size: 1.25rem;
  padding: 0.625rem 1.25rem;
}

button:hover {
  background-color: white;
  color: rebeccapurple;
}

.selected {
  color: white !important;
  background-color: rebeccapurple !important;
  border: 1px solid transparent !important;
}
</style>
