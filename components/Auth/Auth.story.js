import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import VueInfoAddon from 'storybook-addon-vue-info'
import Auth from './Auth.vue'
import store from '~/store'
import '~/assets/css/storybook.css'

storiesOf('Auth', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', () => {
    const isAuth = boolean('isAuth', true)

    return {
      components: { Auth },
      store,
      template: `<Auth :isAuth="${isAuth}"/>`
    }
  })
  .add('login', () => ({
    components: { Auth },
    store,
    template: `<Auth :isAuth="true"/>`
  }))
