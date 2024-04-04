// rootReducer.js

import { combineReducers } from 'redux';
import NavReducer from '../components/NavbarComp/NavReducer'
import searchParamsReducer from '../components/LandingComp/searchReducer'
import searchPageReducer from '../pages/searchPage/searchPageReducer'
import modalReducer from '../pages/jobNoticeForm/modalReducer'
import loginSlice from '../pages/signin/signinReducer'
import signupReducer from '../pages/signup/signupReducer';
import freelancerModalsReducer from '../pages/freelancerForm/freelancerModalsReducer';
import categoryReducer from '../components/LoggedInNavbar/categoryReducer';


const rootReducer = combineReducers({
    navbar: NavReducer,
    searchParamReducer: searchParamsReducer,
    searchPageReducer: searchPageReducer,
    modalReducer: modalReducer,
    loginReducer: loginSlice,
    signupReducer: signupReducer,
    freelancerModalsReducer:freelancerModalsReducer,
    categoryReducer:categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
