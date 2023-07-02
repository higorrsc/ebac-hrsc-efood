import { List } from './styles'

import Food from '../../components/Food'

import { RestaurantType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantType
}

const FoodList = ({ restaurant }: Props) => (
  <List>
    {restaurant.cardapio.map((food) => (
      <Food
        key={food.id}
        photo={food.foto}
        name={food.nome}
        description={food.descricao}
      />
    ))}
  </List>
)

export default FoodList
