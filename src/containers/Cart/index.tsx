import { CartContainer, OverLay, Sidebar } from './styles'

import CartItem from '../../components/CartItem'

const Cart = () => {
  return (
    <CartContainer>
      <OverLay />
      <Sidebar>
        <div>Carrinho</div>
        <CartItem />
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
