import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import InputText from './InputText.vue'
import store from '~/store'
import '~/assets/css/storybook.css'

storiesOf('InputText', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { InputText },
    store,
    template: `<InputText />`
  }))
