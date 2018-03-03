<template>
  <transition name="fade">
    <div
      v-show="isShow"
      class="card"
      ontouchstart=""
    >
      <img
        :src="post.body || '/assets/img/post.jpeg'"
        :title="post.body || 'title'"
        class="card-img-top"
      >
      <div class="card-img-overlay">
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
      </div>
      <div class="card-body">
        <p><strong>{{ post.user ? post.user.name : '*' }}</strong><!--
        -->&nbsp;Updated {{ formatDate(post.date) }} ago</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'
import { mapGetters } from 'vuex'
import copy from 'copy-to-clipboard'
import Button from '~/components/Button'

export default {
  name: 'Card',
  components: {
    Button
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
    ...mapGetters(['account'])
  },
  methods: {
    copyUrl() {
      copy(this.post.body)
      this.copyText = 'Copied!'
      setTimeout(() => {
        this.copyText = 'Copy'
      }, 1000)
    },
    formatDate(date = new Date()) {
      return distanceInWordsToNow(date)
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
.card {
  background-clip: content-box;
  background-color: #343a40;
  border-radius: 0.25rem;
  display: inline-block;
  margin-bottom: 0.5rem;
  max-width: 400px;
  position: relative;
  width: 100%;
}

.card img {
  border-radius: 0.25rem 0.25rem 0 0;
  transition: 0.5s ease;
  width: 100%;
}

.card:hover img {
  opacity: 0.3;
}

.card-body {
  color: #868e96;
  font-size: 0.75rem;
  padding: 1rem;
}

.card-img-overlay {
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
}

.card-img-overlay:hover {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
