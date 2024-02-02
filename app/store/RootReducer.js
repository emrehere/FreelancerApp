// rootReducer.js

import { combineReducers } from 'redux';
import NavReducer from '../components/NavbarComp/NavReducer'


const rootReducer = combineReducers({
    navbar: NavReducer,
});

export default rootReducer;
