import { useEffect, useState } from 'react'

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
  const [restaurantes, setRestaurantes] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
