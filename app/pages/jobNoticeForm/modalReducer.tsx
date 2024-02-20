// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIndex: 0,
  },
  reducers: {

    goToNextPage: (state) => {
      state.modalIndex = state.modalIndex + 1;
    },
    goToPrevPage: (state) => {
      state.modalIndex = state.modalIndex - 1;
    }
  },
});

export const { goToNextPage, goToPrevPage } = modalSlice.actions;

export default modalSlice.reducer;
