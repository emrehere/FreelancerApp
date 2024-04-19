// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'navbar',
  initialState: {
    searchToggle: false,
    warningModal: false,
    savedLink: "",
  },
  reducers: {
    navSearchToggle: (state, action) => {
      state.searchToggle = action.payload;      
    },
    warningModalOpen: (state, action) => {
      state.warningModal = action.payload;
    },
    saveTheLink: (state, action) => {
      state.savedLink = action.payload;
    }
  },
});

export const { navSearchToggle, warningModalOpen, saveTheLink } = navSlice.actions;

export default navSlice.reducer;
