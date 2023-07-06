import { useGetRestaurantsQuery } from '../../services/api'

import Hero from '../../components/Hero'
import RestaurantList from '../../containers/RestaurantList'

export interface MenuType {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuType[]
}
const Home = () => {
  const { data } = useGetRestaurantsQuery()

  if (data) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={data} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
