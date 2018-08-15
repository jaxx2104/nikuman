<template>
  <Header>
    <Brand>{{ title }}</Brand>
    <Menu>
      <Auth/>
    </Menu>
  </Header>
</template>

<script>
import styled from 'vue-styled-components'
import Auth from '~/components/Auth'

const Header = styled.header`
  align-items: center;
  background-color: rebeccapurple;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const Brand = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  padding: 1.45rem 1.0875rem;
  text-decoration: none;
`

const Menu = styled.div`
  padding: 1rem;
`

export default {
  name: 'Navi',
  components: {
    Auth,
    Brand,
    Header,
    Menu
  },
  data() {
    return {
      title: 'Nikuman'
    }
  }
}
</script>
