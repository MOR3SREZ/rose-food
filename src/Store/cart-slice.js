import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, NewItem(action.payload)];
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
const NewItem = (item) => {
  return { id: item.id, item: item, qty: 1 };
};
export const cartActions = cartSlice.actions;

export default cartSlice;
