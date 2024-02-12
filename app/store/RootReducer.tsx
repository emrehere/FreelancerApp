// rootReducer.js

import { combineReducers } from 'redux';
import NavReducer from '../components/NavbarComp/NavReducer'
import searchParamsReducer from '../components/LandingComp/searchReducer'


const rootReducer = combineReducers({
    navbar: NavReducer,
    searchParamReducer: searchParamsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
