import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSearchBoxVisible: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setIsSearchBoxVisible: (state) => {
      state.isSearchBoxVisible = !(state.isSearchBoxVisible)
    },
  },
})

export const { setIsSearchBoxVisible } = navbarSlice.actions

export default navbarSlice.reducer