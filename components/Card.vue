<template>
  <div class="card bg-dark text-white">
    <img
      class="card-img-top"
      :src="post.body"
      :title="post.body"
    />
    <div class="card-img-overlay">
      <button type="button" class="btn btn-outline-light">
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <span class="badge">4</span>
      </button>
      <button type="button" class="btn btn-outline-light">
        <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
        <span class="badge">0</span>
      </button>
      <button type="button" class="btn btn-outline-light">
        <i class="fa fa-clipboard" aria-hidden="true"></i>
        <span class="badge">copy</span>
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
</template>

<script>
import { distanceInWordsToNow } from 'date-fns'

export default {
  name: 'Card',
  data () {
    return {
      src: ''
    }
  },
  props: {
    post: Object
  },
  computed: {
    formatDate: function () {
      return distanceInWordsToNow(this.post.date)
    }
  }
}
</script>

<style scoped>
img {
  transition: .5s ease;
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
</style>
