import { storiesOf } from '@storybook/vue'
import Card from './Card.vue'
import store from '~src/store'
import '~src/assets/css/storybook.css'

storiesOf('Card', module).add('default', () => ({
  components: { Card },
  store,
  template: `<Card />`
}))
