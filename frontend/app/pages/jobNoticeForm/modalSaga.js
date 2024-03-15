import { takeEvery,  call } from 'redux-saga/effects';

function* hireInfoSaga(action) {
    console.log("triggered hireinfosaga")
  
    const { name, surname, phone, title, description, chosenCityToDB, chosenCountyToDB, unvan, soru } = action.payload;

    console.log("payload",name, surname, phone, title, description, chosenCityToDB, chosenCountyToDB, unvan, soru)
   
  

    // try {
    //     const res = yield call(fetch, 'http://localhost:8008/api/hire', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Bearer': JSON.parse(localStorage.getItem('token')),
    //         },
    //         body: JSON.stringify({
    //             hireInfo     
    //         }),
    //     });

    //     console.log("my res", res)

    //     if (res.ok) {
    //         const data = yield res.json();
    //         console.log("data", data)
    //     } else {
            
    //         const errorData = yield res.json(); 
    //         console.log("error data", errorData)
    //     }
    // } catch (error) {
    //     console.log('Error during login:', error);

    // }
}

export function* watchHireInfo() {
    yield takeEvery('modal/sendHireInfo', hireInfoSaga);
}