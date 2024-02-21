// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalPageIndex: 0,
    modalDisplayIndex: 0
  },
  reducers: {

    goToNextPage: (state) => {
      state.modalPageIndex = state.modalPageIndex + 1;
    },
    goToPrevPage: (state) => {
      state.modalPageIndex = state.modalPageIndex - 1;
    },
    displayIndexFunc: (state, action) => {
        state.modalDisplayIndex = action.payload
        console.log(state.modalDisplayIndex)
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc } = modalSlice.actions;

export default modalSlice.reducer;
