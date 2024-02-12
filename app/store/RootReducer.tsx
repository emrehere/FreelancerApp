// rootReducer.js

import { combineReducers } from 'redux';
import NavReducer from '../components/NavbarComp/NavReducer'
import searchParamsReducer from '../components/LandingComp/searchReducer'
import searchPageReducer from '../searchPage/searchPageReducer'


const rootReducer = combineReducers({
    navbar: NavReducer,
    searchParamReducer: searchParamsReducer,
    searchPageReducer: searchPageReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
