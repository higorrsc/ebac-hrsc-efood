import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'

import FoodList from '../../containers/FoodList'

import { RestaurantType } from '../Home'

const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Presentation
        key={restaurant.id}
        foodType={restaurant.tipo}
        imageUrl={restaurant.capa}
        restaurantName={restaurant.titulo}
      />
      <FoodList restaurant={restaurant} />
    </>
  )
}

export default Restaurant
