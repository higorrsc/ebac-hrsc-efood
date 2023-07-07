import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, OverLay, Sidebar, TotalContainer } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import CartItem from '../../components/CartItem'
import ActionButton from '../../components/ActionButton'
import { priceFormat } from '../../components/Food'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalCartValue = () => {
    return items.reduce((totalValue, actualValue) => {
      return (totalValue += actualValue.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <OverLay onClick={closeCart} />
      <Sidebar>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <TotalContainer>
          <div className="total-price">
            <p>Valor total</p>
            <p>{priceFormat(getTotalCartValue())}</p>
          </div>
          <ActionButton kind="secondary" type="button" title="Continuar">
            Continuar com a entrega
          </ActionButton>
        </TotalContainer>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
