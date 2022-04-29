import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favoriteItems: [] },
  reducers: {
    addToFavorite(state, action) {
      state.favoriteItems = [...state.favoriteItems, action.payload];
    },
    removeFromFavorite(state, action) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
