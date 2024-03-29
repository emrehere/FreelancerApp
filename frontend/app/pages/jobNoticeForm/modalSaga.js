import { takeEvery,  call } from 'redux-saga/effects';



function* hireInfoSaga(action) {
    console.log("hala hire infodayim")
    console.log("payload",action.payload)

    const { hireInfo } = action.payload

    console.log("hireinfo in saga",hireInfo)
    const token = JSON.parse(localStorage.getItem('token'))
   

    try {
        const res = yield call(fetch, 'http://localhost:8008/api/freelancer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({
                hireInfo     
            }),
        });

        console.log("my res", res)

        if (res.ok) {
            const data = yield res.json();
            console.log("data", data)
        } else {
            
            const errorData = yield res.json(); 
            console.log("error data", errorData)
        }
    } catch (error) {
        console.log('Error during login:', error);

    }
}

export function* watchHireInfo() {
    yield takeEvery('modal/sendHireInfo', hireInfoSaga);
}