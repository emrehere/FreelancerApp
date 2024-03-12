// rootReducer.js

import { combineReducers } from 'redux';
import NavReducer from '../components/NavbarComp/NavReducer'
import searchParamsReducer from '../components/LandingComp/searchReducer'
import searchPageReducer from '../pages/searchPage/searchPageReducer'
import modalReducer from '../pages/jobNoticeForm/modalReducer'


const rootReducer = combineReducers({
    navbar: NavReducer,
    searchParamReducer: searchParamsReducer,
    searchPageReducer: searchPageReducer,
    modalReducer: modalReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
