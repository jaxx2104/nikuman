import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Navi from './Navi.vue'
import store from '~/src/store'
import '~/src/assets/css/storybook.css'

storiesOf('Navi', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { Navi },
    store,
    template: `<Navi />`
  }))
