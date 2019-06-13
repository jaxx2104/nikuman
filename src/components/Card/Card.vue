<template>
  <transition name="fade">
    <StyledCard v-show="isShow" ontouchstart="">
      <img :src="image" :title="image" />
      <CardOverray>
        <Button @click.native="thumbsUp" :body="post.thumbsup" prefix="👍" />
        <Button
          @click.native="thumbsDown"
          :body="post.thumbsdown"
          prefix="👎"
        />
        <Button @click.native="copyUrl" :body="copyUrlLabel" />
        <Button @click.native="copyMarkdown" :body="copyLgtmLabel" />
      </CardOverray>
      <CardBody>
        <p>
          <strong>{{ author }}</strong
          >&nbsp;{{ authored }}
        </p>
      </CardBody>
    </StyledCard>
  </transition>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'
import { mapGetters, mapActions } from 'vuex'
import copyToClipboard from 'copy-to-clipboard'
import styled from 'vue-styled-components'
import Button from '~src/components/Button'

const StyledCard = styled.div`
  background-clip: content-box;
  background-color: #343a40;
  border-radius: 0.25rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  max-width: 400px;
  position: relative;
  width: 100%;

  img {
    border-radius: 0.25rem 0.25rem 0 0;
    transition: 0.5s ease;
    width: 100%;
  }

  &:hover img {
    opacity: 0.3;
  }
`

const CardBody = styled.div`
  color: #868e96;
  font-size: 0.75rem;
  padding: 1rem;
`

const CardOverray = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  left: 0;
  padding-bottom: 3rem;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    opacity: 1;
  }
`

export default {
  name: 'Card',
  components: {
    Button,
    StyledCard,
    CardOverray,
    CardBody
  },
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isShow: true,
      copyUrlLabel: 'URL',
      copyLgtmLabel: 'LGTM'
    }
  },
  computed: {
    ...mapGetters(['users']),
    ...mapGetters('account', ['account']),

    image() {
      return this.post.body || '/post.jpeg'
    },
    author() {
      /* eslint-disable no-console */
      const user = this.users.find(({ email }) => email === this.post.from)
      return user ? user.name : '*'
    },
    authored() {
      const unixtime = this.post.date.seconds
        ? Number(`${this.post.date.seconds}000`)
        : this.post.date
      const date = distanceInWordsToNow(unixtime)
      return `Updated ${date} ago`
    }
  },
  methods: {
    ...mapActions('post', ['up', 'down']),

    copyUrl() {
      copyToClipboard(this.post.body)
      this.copyUrlLabel = 'Copied!'
      setTimeout(() => (this.copyUrlLabel = 'URL'), 1000)
    },
    copyMarkdown() {
      copyToClipboard(`![LGTM](${this.post.body})`)
      this.copyLgtmLabel = 'Copied!'
      setTimeout(() => (this.copyLgtmLabel = 'LGTM'), 1000)
    },
    thumbsUp() {
      // const id = this.post['.key']
      const id = this.post.id
      this.up({ id })
    },
    thumbsDown() {
      // const id = this.post['.key']
      const id = this.post.id
      this.down({ id })
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
