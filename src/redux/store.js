import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import productSlice from './features/product/productSlice'
import cartSlice from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
    cart: cartSlice
  },
})