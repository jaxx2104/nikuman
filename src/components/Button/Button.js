import styled from 'vue-styled-components'

const StyledButton = styled.button`
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

  &.m {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  &.l {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
  }

  &:hover {
    background-color: white;
    color: rebeccapurple;
  }

  &.selected {
    color: white !important;
    background-color: rebeccapurple !important;
    border: 1px solid transparent !important;
  }
`

export default {
  name: 'Button',
  render() {
    return (
      <StyledButton
        class={[this.selected, this.size]}
        nativeOnClick={() => this.onClick()}
      >
        {this.prefix}
        {this.body}
      </StyledButton>
    )
  },
  props: {
    body: { type: [String, Number], default: '0' },
    prefix: { type: String, default: '' },
    size: { type: String, default: 's' }
  },
  data() {
    return {
      isClick: false
    }
  },
  computed: {
    selected() {
      return this.isClick ? 'selected' : ''
    }
  },
  methods: {
    onClick() {
      this.changeStatus()
    },
    changeStatus() {
      this.isClick = true
      const reset = () => (this.isClick = false)
      setTimeout(reset, 1000)
    }
  }
}
