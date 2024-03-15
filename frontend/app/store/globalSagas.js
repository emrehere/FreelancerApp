import { all } from 'redux-saga/effects';
import { watchLoginUser } from '../pages/signin/signinSaga';
import { watchRegisterUser } from '../pages/signup/signupSaga';
import { watchHireInfo } from '../pages/jobNoticeForm/modalSaga';
import { watchGetAllHireInfo } from '../pages/searchPage/searchPageSaga';

export function* globalSaga() {

    yield all([
        // Add your global sagas here
        watchLoginUser() ,
        watchRegisterUser(),
        watchHireInfo(),
        watchGetAllHireInfo()
    ]);
    
}

export default globalSaga;