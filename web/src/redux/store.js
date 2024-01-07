import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from '../features/ui/navbar'
import inputReducer from '../features/ui/input'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    input: inputReducer,
  },
})