import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RestaurantType } from '../../pages/Home'

type CartState = {
  items: RestaurantType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RestaurantType>) => {
      const restaurant = state.items.find(
        (item) => item.id === action.payload.id
      )
      const menu = state.items.find(
        (item) => item.cardapio === action.payload.cardapio
      )

      if (restaurant && menu) {
        alert('O item já está no carrinho!')
      } else {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
