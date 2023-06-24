import { Container } from './styles'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/vector.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <Container style={{ backgroundImage: `url(${background})` }}>
    <h3>Restaurantes</h3>
    <Link to="/">
      <img src={logo} alt="eFood" />
    </Link>
    <p>0 produto(s) no carrinho</p>
  </Container>
)

export default Header
