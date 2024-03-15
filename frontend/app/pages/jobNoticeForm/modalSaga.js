import { takeEvery,  call } from 'redux-saga/effects';

function* hireInfoSaga(action) {
    console.log("triggered signinsaga")
    
}

export function* watchHireInfo() {
    yield takeEvery('modal/sendHireInfo', hireInfoSaga);
}