import { useDispatch } from 'react-redux'

import { Container, FoodInfo, RemoveFood } from './styles'

import { remove } from '../../store/reducers/cart'

import { MenuType } from '../../pages/Home'

import { priceFormat } from '../Food'

import lixeira from '../../assets/images/lixeira.png'

type Props = {
  item: MenuType
}
const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch()
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <Container>
      <img src={item.foto} alt={item.nome} />
      <FoodInfo>
        <h3>{item.nome}</h3>
        <p>{priceFormat(item.preco)}</p>
      </FoodInfo>
      <RemoveFood>
        <img
          className="remove-item"
          src={lixeira}
          alt="Remover item do carrinho"
          onClick={() => removeItem(item.id)}
        />
      </RemoveFood>
    </Container>
  )
}
export default CartItem
