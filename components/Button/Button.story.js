import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Button from './Button.vue'
import '~/assets/css/storybook.css'

storiesOf('Button', module)
  .addDecorator(VueInfoAddon)
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
