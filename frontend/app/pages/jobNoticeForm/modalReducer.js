
import { createSlice } from '@reduxjs/toolkit';

const initialInfoState =  {
    unvan: "",
    soru: "",
    title: "",
    description: "",
    chosenCityToDB: "",
    chosenCountyToDB: "",
    name: "",
    surname: "",
    phone: "",
  }


const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalPageIndex: 0,
    modalDisplayIndex: 0,
    citiesOpen: false,
    countyOpen: false,
    chosenCity: "",
    citySearchTerm: "",
    hireInfo: initialInfoState,
    sendData: initialInfoState 
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
    showCounty: (state, action) => {
      state.countyOpen = !state.countyOpen

    },
    getChosenCity: (state, action) => {
      state.chosenCity = action.payload
    },
    getCitySearchTerm: (state, action) => {
      state.citySearchTerm = action.payload
    }, sendHireInfo: (state, action) => {
      console.log("action in redux", action.payload)
      state.sendData = action.payload
    },
    hireInfosetter: (state, action) => {
      const { unvan, soru, title, description, chosenCityToDB, chosenCountyToDB, 
        name, surname, phone } = action.payload;
      if (unvan) {
        state.hireInfo.unvan = unvan
      } if (soru) {
        state.hireInfo.soru = soru
      } if (title) {
        state.hireInfo.title = title
      } if (description) {
        state.hireInfo.description = description
      } if (chosenCityToDB) {
        state.hireInfo.chosenCityToDB = chosenCityToDB
      } if (chosenCountyToDB) {
        state.hireInfo.chosenCountyToDB = chosenCountyToDB
      }  if (name) {
        state.hireInfo.name = name
      } if (surname) {
        state.hireInfo.surname = surname 
      } if (phone) {
        state.hireInfo.phone = phone
      }
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc, showCities, showCounty,
  getChosenCity, getCitySearchTerm, hireInfosetter, sendHireInfo } = modalSlice.actions;

export default modalSlice.reducer;
