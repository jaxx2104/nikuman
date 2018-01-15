<template>
  <header>
    <div class="brand">
      <h1>{{title}}</h1>
    </div>
    <div class="menu">
      <Auth/>
    </div>
  </header>
</template>

<script>
import Auth from '~/components/Auth'

export default {
  name: 'Navi',
  components: {
    Auth
  },
  data() {
    return {
      title: 'Nikuman'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  align-items: center;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.45rem;
}
.brand {
  padding: 1.45rem 1.0875rem;
}
.menu {
  padding: 1rem;
}
.brand h1 {
  font-weight: 800;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  margin: 0;
}
</style>
