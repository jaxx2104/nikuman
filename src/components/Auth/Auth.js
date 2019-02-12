import { mapGetters, mapActions } from 'vuex'
import styled from 'vue-styled-components'
import Button from '~src/components/Button'

const Icon = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`

export default {
  name: 'Auth',
  render() {
    return (
      <div class="auth">
        {this.account.email || this.isAuth ? (
          <Icon
            src={this.account.icon || '/user.png'}
            title={this.account.name || 'user'}
          />
        ) : (
          <Button
            nativeOnClick={() => this.authAccount()}
            body={this.text}
            size="m"
          />
        )}
      </div>
    )
  },
  props: {
    isAuth: { type: Boolean, default: false }
  },
  data() {
    return {
      text: 'Login'
    }
  },
  computed: {
    ...mapGetters('account', ['account'])
  },
  methods: {
    ...mapActions('account', ['authAccount'])
  }
}
