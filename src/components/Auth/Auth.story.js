import { storiesOf } from '@storybook/vue'
import Auth from './Auth.js'
import store from '~src/store'
import '~src/assets/css/storybook.css'

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
