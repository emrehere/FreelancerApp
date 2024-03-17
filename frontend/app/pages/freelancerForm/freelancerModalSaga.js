import { takeEvery,  call } from 'redux-saga/effects';



function* freelancerInfoSaga(action) {
    console.log("HAYDAAAAAA")
 

    const { freelancerInfo } = action.payload

    console.log("freelancerinfo in saga",freelancerInfo)
    const token = JSON.parse(localStorage.getItem('token'))
   

    try {
        const res = yield call(fetch, 'http://localhost:8008/api/freelancer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({
                freelancerInfo     
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

export function* watchFreelancerInfo() {
    yield takeEvery('freelancerSlice/sendFreelancerInfo', freelancerInfoSaga);
}