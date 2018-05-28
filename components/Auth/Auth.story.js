import { storiesOf } from '@storybook/vue'
import Auth from './Auth.vue'
import store from '~/store'
import '~/assets/css/storybook.css'

storiesOf('Auth', module)
  .add('default', () => ({
    components: { Auth },
    store,
    template: `<Auth />`
  }))
  .add('login', () => ({
    components: { Auth },
    store,
    template: `<Auth :isAuth="true"/>`
  }))
