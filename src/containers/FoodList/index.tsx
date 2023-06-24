import { List } from './styles'

import Food from '../../components/Food'

import FoodModel from '../../models/FoodModel'

type Props = {
  foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => (
  <List>
    {foods.map((food) => (
      <Food
        key={food.id}
        photo={food.photo}
        name={food.name}
        description={food.description}
      />
    ))}
  </List>
)

export default FoodList
