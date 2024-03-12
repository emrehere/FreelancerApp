import { all } from 'redux-saga/effects';
import { watchLoginUser } from '../pages/signin/signinSaga';
import { watchRegisterUser } from '../pages/signup/signupSaga';

export function* globalSaga() {

    yield all([
        // Add your global sagas here
        watchLoginUser() ,
        watchRegisterUser()
    ]);
    
}

export default globalSaga;