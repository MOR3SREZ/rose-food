import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import filterSlice from './filter-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
