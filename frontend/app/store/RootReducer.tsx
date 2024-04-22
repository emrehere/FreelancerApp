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
import UserNavbarReducer from '../components/LoggedInNavbar/UserNavbarReducer'
import DashboardReducer from '../pages/dashboard/DashboardReducer'
import BottomMessageReducer from '../components/messageBottomSection/BottomMessageReducer';

const rootReducer = combineReducers({
    navbar: NavReducer,
    searchParamReducer: searchParamsReducer,
    searchPageReducer: searchPageReducer,
    modalReducer: modalReducer,
    loginReducer: loginSlice,
    signupReducer: signupReducer,
    freelancerModalsReducer:freelancerModalsReducer,
    categoryReducer:categoryReducer,
    UserNavbarReducer:UserNavbarReducer,
    DashboardReducer:DashboardReducer,
    BottomMessageReducer:BottomMessageReducer 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
