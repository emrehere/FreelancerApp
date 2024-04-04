
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
        state.hireInfo = {
          ...state.hireInfo,
          unvan: unvan !== undefined ? unvan : state.hireInfo.unvan,
          soru: soru !== undefined ? soru : state.hireInfo.soru,
          title: title !== undefined ? title : state.hireInfo.title,
          description: description !== undefined ? description : state.hireInfo.description,
          chosenCityToDB: chosenCityToDB !== undefined ? chosenCityToDB : state.hireInfo.chosenCityToDB,
          chosenCountyToDB: chosenCountyToDB !== undefined ? chosenCountyToDB : state.hireInfo.chosenCountyToDB,
          name: name !== undefined ? name : state.hireInfo.name,
          surname: surname !== undefined ? surname : state.hireInfo.surname,
          phone: phone !== undefined ? phone : state.hireInfo.phone,
        };
    }
  },
});

export const { goToNextPage, goToPrevPage, displayIndexFunc, showCities, showCounty,
  getChosenCity, getCitySearchTerm, hireInfosetter, sendHireInfo } = modalSlice.actions;

export default modalSlice.reducer;
