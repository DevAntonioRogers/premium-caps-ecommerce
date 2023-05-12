import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state){
      state.isOpen = !state.isOpen
    }
  }
})

export const {toggleCart} = cartSlice.actions
export default cartSlice.reducer