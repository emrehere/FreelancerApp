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
    citySearchTerm: "",
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
 
    },
    showCities: (state, action) => {
        state.citiesOpen = !state.citiesOpen 

    },
    showCounty: (state , action) => {
        state.countyOpen = !state.countyOpen 
    
    },
    getChosenCity: (state, action) => {
        state.chosenCity = action.payload
    },
    getCitySearchTerm: (state, action) => {
        state.citySearchTerm = action.payload
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc, showCities, showCounty,
  getChosenCity, getCitySearchTerm } = modalSlice.actions;

export default modalSlice.reducer;
