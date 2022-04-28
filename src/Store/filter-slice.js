import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { category: '', search: '', sortBy: '' },
  reducers: {
    categoryFilter(state, action) {
      state.category = action.payload;
    },
    searchFilter(state, action) {
      state.search = action.payload;
    },
    sortByFilter(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
