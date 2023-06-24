import { List } from './styles'

import Restaurant from '../../components/Restaurant'

import RestaurantModel from '../../models/RestaurantModel'

type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        photo={restaurant.photo}
        name={restaurant.name}
        score={restaurant.score}
        description={restaurant.description}
        infos={restaurant.infos}
        profile={restaurant.profile}
      />
    ))}
  </List>
)

export default RestaurantList
