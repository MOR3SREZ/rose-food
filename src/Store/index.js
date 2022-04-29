import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import favoriteSlice from './favorite-slice';
import filterSlice from './filter-slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    filter: filterSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export default store;
