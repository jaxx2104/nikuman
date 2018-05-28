import { storiesOf } from '@storybook/vue'
import Card from './Card.vue'
import store from '~/store'
import '~/assets/css/storybook.css'

storiesOf('Card', module).add('default', () => ({
  components: { Card },
  store,
  template: `<Card />`
}))
