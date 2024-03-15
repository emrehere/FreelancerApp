import { all } from 'redux-saga/effects';
import { watchLoginUser } from '../pages/signin/signinSaga';
import { watchRegisterUser } from '../pages/signup/signupSaga';
import { watchHireInfo } from '../pages/jobNoticeForm/modalSaga';

export function* globalSaga() {

    yield all([
        // Add your global sagas here
        watchLoginUser() ,
        watchRegisterUser(),
        watchHireInfo()
    ]);
    
}

export default globalSaga;