import { takeEvery, call, put } from 'redux-saga/effects';
import { setAllHireInfo } from './searchPageReducer';

function* getAllHireInfoSaga() {
    console.log("Triggered getAllHireInfoSaga");

    try {
        const token = JSON.parse(localStorage.getItem('token'));

        const res = yield call(fetch, 'http://localhost:8008/api/getAllJobs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });

        if (res.ok) {
            const data = yield res.json();
            const jobNoticeData = data.jobNotices
            console.log("Data: in saga", data);
            yield put(setAllHireInfo(jobNoticeData));
        } else {
            const errorData = yield res.json(); 
            console.log("Error data:", errorData);

        }
    } catch (error) {
        console.log('Error during fetching hire info:', error);

    }
}

export function* watchGetAllHireInfo() {
    yield takeEvery('searchPageReducer/GET_ALL_HIRE_INFO', getAllHireInfoSaga);
}
