import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from './styles'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/vector.png'

const Header = () => {
  const dispath = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispath(open())
  }

  return (
    <Container style={{ backgroundImage: `url(${background})` }}>
      <h3>Restaurantes</h3>
      <Link to="/">
        <img src={logo} alt="eFood" />
      </Link>
      <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
    </Container>
  )
}

export default Header
