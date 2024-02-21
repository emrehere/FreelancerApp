// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalPageIndex: 0,
    modalDisplayIndex: 0,
    citiesOpen: false,
    countyOpen: false,
    chosenCity: "",
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
    },
    showCities: (state, action) => {
        state.citiesOpen = !state.citiesOpen 

    },
    showCounty: (state , action) => {
        state.countyOpen = !state.countyOpen 
        console.log(state.countyOpen)
    },
    getChosenCity: (state, action) => {
        state.chosenCity = action.payload
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc, showCities, showCounty,
  getChosenCity } = modalSlice.actions;

export default modalSlice.reducer;
