// src/redux/filtersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Selector to get the name filter from the state
export const selectNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;