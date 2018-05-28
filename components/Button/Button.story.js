import { storiesOf } from '@storybook/vue'
import Button from './Button.vue'
import '~/assets/css/storybook.css'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button prefix="👍"/>`
  }))
  .add('midium', () => ({
    components: { Button },
    template: `<Button prefix="👍" size="m"/>`
  }))
  .add('large', () => ({
    components: { Button },
    template: `<Button prefix="👍" size="l"/>`
  }))
