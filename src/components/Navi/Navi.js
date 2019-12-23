import styled from 'vue-styled-components'
import Auth from '../Auth'

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
  render() {
    return (
      <Header>
        <Brand>{this.title}</Brand>
        <Menu>
          <Auth />
        </Menu>
      </Header>
    )
  },
  data() {
    return {
      title: 'Nikuman'
    }
  }
}
