import { takeEvery, put, call } from 'redux-saga/effects';
import {  signupErrorSetter, registerCompleteSetter } from './signupReducer';

function* registerUserSaga(action) {
    console.log("triggered signupsaga", action.payload)
    const { name, surname, email, password } = action.payload;
    console.log("payload goster bakalim",name, surname, email, password)

    try {
        const res = yield call(fetch, 'http://localhost:8008/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                surname,
                email,
                password
            })
        });

        if ( res.status === 200 ) {
            const data = yield res.json();
            localStorage.setItem('token', JSON.stringify(data.token));
            console.log('User registered successfully');
            yield put(registerCompleteSetter(true));
        } else {
            const errorData = yield res.json();
            console.log("error data", errorData.error)
            yield put(signupErrorSetter(errorData.error));  
        }
    } catch (error) {
        console.log('Error during registration:', error);
     
    }
}

export function* watchRegisterUser() {
    yield takeEvery('signup/signupSetter', registerUserSaga); // Adjust the action type as needed
}


