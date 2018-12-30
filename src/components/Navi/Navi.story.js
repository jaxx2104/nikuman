import { storiesOf } from '@storybook/vue'
import Navi from './Navi.vue'
import store from '~src/store'
import '~src/assets/css/storybook.css'

storiesOf('Navi', module).add('default', () => ({
  components: { Navi },
  store,
  template: `<Navi />`
}))
