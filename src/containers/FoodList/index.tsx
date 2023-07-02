import { List } from './styles'

import Food from '../../components/Food'

import { RestaurantType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantType
}

const FoodList = ({ restaurant }: Props) => (
  <List>
    {restaurant.cardapio.map((food) => (
      <Food key={food.id} option={food} />
    ))}
  </List>
)

export default FoodList
