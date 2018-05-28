import { storiesOf } from '@storybook/vue'
import InputText from './InputText.vue'
import store from '~/store'
import '~/assets/css/storybook.css'

storiesOf('InputText', module).add('default', () => ({
  components: { InputText },
  store,
  template: `<InputText />`
}))
