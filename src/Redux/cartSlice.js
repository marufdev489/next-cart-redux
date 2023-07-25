"use client"
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "Cart",
    initialState:[],
    reducers: {
        addToCart: (state, action) => {
          state.push(action.payload);
        },
        removeFromCart: (state, action) => {
          return state.filter(item => item.id !== action.payload);
        },
        clearCart: () => [],
      },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;