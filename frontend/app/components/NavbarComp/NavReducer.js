// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'navbar',
  initialState: {
    searchToggle: false,
  },
  reducers: {
    navSearchToggle: (state) => {
      state.searchToggle = !state.searchToggle;
      
    },
  },
});

export const { navSearchToggle } = navSlice.actions;

export default navSlice.reducer;
