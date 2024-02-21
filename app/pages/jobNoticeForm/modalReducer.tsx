// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalIndex: 0,
    modalDisplayIndex: 0
  },
  reducers: {

    goToNextPage: (state) => {
      state.modalIndex = state.modalIndex + 1;
    },
    goToPrevPage: (state) => {
      state.modalIndex = state.modalIndex - 1;
    },
    displayIndexFunc: (state, action) => {
        state.modalDisplayIndex = action.payload
        console.log(state.modalDisplayIndex)
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc } = modalSlice.actions;

export default modalSlice.reducer;
