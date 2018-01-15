<template>
  <transition name="fade">
    <div
      class="card bg-dark text-white"
      ontouchstart=""
      v-show="isShow"
    >
      <img
        :src="post.body"
        :title="post.body"
        class="card-img-top"
      />
      <div class="card-img-overlay">
        <button
          @click="thumbsUp()"
          :class="isUp ? 'btn-primary' : 'btn-outline-light'"
          :disabled="!user"
          class="btn"
          type="button"
        >
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          <span class="badge">{{ post.thumbsup }}</span>
        </button>
        <button
          @click="thumbsDown()"
          :class="isDown ? 'btn-primary' : 'btn-outline-light'"
          :disabled="!user"
          class="btn"
          type="button"
        >
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          <span class="badge">{{ post.thumbsdown }}</span>
        </button>
        <button
          @click="copyUrl()"
          :class="isCopy ? 'btn-primary' : 'btn-outline-light'"
          class="btn"
          type="button"
          v-clipboard="post.body"
        >
          <i class="fa fa-clipboard" aria-hidden="true" />
          <span class="badge">{{ isCopy ? 'Copied!' : 'Copy' }}</span>
        </button>
      </div>
      <div class="card-body">
        <p class="card-text">
          <small class="text-muted">
            <strong v-if="post.user">{{post.user.name}}</strong>
            updated {{formatDate}} ago
          </small>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'
import { mapGetters } from 'vuex'

export default {
  name: 'Card',
  data() {
    return {
      isShow: false,
      isCopy: false,
      isUp: false,
      isDown: false
    }
  },
  props: {
    post: Object
  },
  methods: {
    copyUrl: function() {
      this.isCopy = true
      setTimeout(() => {
        this.isCopy = false
      }, 1000)
    },
    thumbsUp() {
      this.post.thumbsup++
      this.$store.dispatch('thumbsUp', {
        id: this.post['.key'],
        thumbsup: this.post.thumbsup
      })
      this.isUp = true
      setTimeout(() => {
        this.isUp = false
      }, 1000)
    },
    thumbsDown() {
      this.post.thumbsdown++
      this.$store.dispatch('thumbsDown', {
        id: this.post['.key'],
        thumbsdown: this.post.thumbsdown
      })
      this.isDown = true
      setTimeout(() => {
        this.isDown = false
      }, 1000)
    },
    handleScroll() {
      if (!this.isShow) {
        const top = this.$el.getBoundingClientRect().top
        console.log(top, window.innerHeight)
        this.isShow = top < window.innerHeight + 100
      }
    }
  },
  computed: {
    ...mapGetters(['user']),
    formatDate: function() {
      return distanceInWordsToNow(this.post.date)
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    setTimeout(() => {
      this.handleScroll()
    }, 8000)
  }
}
</script>

<style scoped>
img {
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.card:hover img {
  opacity: 0.3;
}

.card-img-overlay {
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
