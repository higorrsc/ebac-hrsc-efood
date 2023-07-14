import { useGetRestaurantsQuery } from '../../services/api'

import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
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
  const { data, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <RestaurantList restaurants={data!} />
    </>
  )
}

export default Home
