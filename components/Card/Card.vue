<template>
  <transition name="fade">
    <StyledCard
      v-show="isShow"
      ontouchstart=""
    >
      <img
        :src="post.body || '/assets/img/post.jpeg'"
        :title="post.body || 'title'"
      >
      <CardOverray>
        <Button
          :action="thumbsUp"
          :body="post.thumbsup"
          prefix="👍"
        />
        <Button
          :action="thumbsDown"
          :body="post.thumbsdown"
          prefix="👎"
        />
        <Button
          :action="copyUrl"
          :body="copyText"
        />
      </CardOverray>
      <CardBody>
        <p><strong>{{ author }}</strong>&nbsp;{{ authored }}</p>
      </CardBody>
    </StyledCard>
  </transition>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'
import { mapGetters } from 'vuex'
import copy from 'copy-to-clipboard'
import styled from 'vue-styled-components'
import Button from '~/components/Button'

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
      copyText: 'Copy'
    }
  },
  computed: {
    ...mapGetters(['account']),
    author() {
      /* eslint-disable no-console */
      console.log(this.post.user)
      return this.post.user ? this.post.user.name : '*'
    },
    authored() {
      const date = distanceInWordsToNow(this.post.date)
      return `Updated ${date} ago`
    }
  },
  methods: {
    copyUrl() {
      copy(this.post.body)
      this.copyText = 'Copied!'
      setTimeout(() => {
        this.copyText = 'Copy'
      }, 1000)
    },
    thumbsUp() {
      this.post.thumbsup++
      this.$store.dispatch('thumbsUp', {
        id: this.post['.key'],
        thumbsup: this.post.thumbsup
      })
    },
    thumbsDown() {
      this.post.thumbsdown++
      this.$store.dispatch('thumbsDown', {
        id: this.post['.key'],
        thumbsdown: this.post.thumbsdown
      })
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
