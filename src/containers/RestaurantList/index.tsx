import { List } from './styles'

import Restaurant from '../../components/Restaurant'

import { RestaurantType } from '../../pages/Home'

type Props = {
  restaurants: RestaurantType[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        title={restaurant.titulo}
        highlighted={restaurant.destacado}
        kind={restaurant.tipo}
        score={restaurant.avaliacao}
        description={restaurant.descricao}
        photo={restaurant.capa}
      />
    ))}
  </List>
)

export default RestaurantList
