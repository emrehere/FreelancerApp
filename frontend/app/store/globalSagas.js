import { all } from 'redux-saga/effects';
import { watchLoginUser } from '../pages/signin/signinSaga';

export function* globalSaga() {

    yield all([
        // Add your global sagas here
        watchLoginUser()
    ]);
    
}

export default globalSaga;