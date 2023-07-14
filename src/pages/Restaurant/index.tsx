import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
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
    return <Loader />
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
