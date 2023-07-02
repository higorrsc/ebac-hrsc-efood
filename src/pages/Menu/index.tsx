import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import FoodList from '../../containers/FoodList'

import italianFoodBanner from '../../assets/images/italian_food_banner.png'
import pizza from '../../assets/images/pizza.png'

import FoodModel from '../../models/FoodModel'

const comidas: FoodModel[] = [
  {
    id: 1,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    photo: pizza,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Menu = () => (
  <>
    <Header />
    <Presentation
      key="La Dolce Vita Trattoria"
      foodType="Italiana"
      imageUrl={italianFoodBanner}
      restaurantName="La Dolce Vita Trattoria"
    />
    <FoodList foods={comidas} />
  </>
)

export default Menu
