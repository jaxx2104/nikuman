import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Card from './Card.vue'
import store from '~/src/store'
import '~/src/assets/css/storybook.css'

storiesOf('Card', module)
  .addDecorator(VueInfoAddon)
  .add('default', () => ({
    components: { Card },
    store,
    template: `<Card />`
  }))
