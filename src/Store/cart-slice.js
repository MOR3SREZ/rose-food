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
    increaseQty(state, action) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.qty++;
        }
      });
    },
    decreaseQty(state, action) {
      state.cartItems.map((item) => {
        if (item.id === action.payload) {
          item.qty > 1 ? item.qty-- : (item.qty = 1);
        }
      });
    },
  },
});

// Create new item and Add Quantity to it!
const NewItem = (item) => {
  return { id: item.id, item: item, qty: 1 };
};
export const cartActions = cartSlice.actions;

export default cartSlice;
