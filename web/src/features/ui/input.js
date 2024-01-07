import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isPasswordVisible: false,
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setIsPasswordVisible: (state) => {
      state.isPasswordVisible = !state.isPasswordVisible
    }
  },
})

export const { setIsPasswordVisible } = inputSlice.actions

export default inputSlice.reducer