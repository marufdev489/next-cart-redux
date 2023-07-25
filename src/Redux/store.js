import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
   // Add your reducers here
    cart: cartReducer,
  },
});
export default store;