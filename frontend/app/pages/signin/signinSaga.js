"use client"
import { takeEvery,  call } from 'redux-saga/effects';
import { loginSetter } from '../../pages/signin/signinReducer'; // Adjust the path


function* loginUserSaga(action) {
    console.log("triggered signinsaga")
    const { email, password } = action.payload;
    console.log(email, password)


    try {
        const res = yield call(fetch, 'http://localhost:8008/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        console.log("status", res.status)

        if (res.status === 200)  {
            const data = yield res.json();
            console.log("data", data)
            localStorage.setItem('token', JSON.stringify(data.token));
            console.log('User logged in');
            yield put(loginSetter({ login: true }));
        } else {
            
            const errorData = yield res.json(); 
            console.log("error data", errorData)
        }
    } catch (error) {
        console.log('Error during login:', error);
        // Handle the error or dispatch an action if needed
    }
}

export function* watchLoginUser() {
    yield takeEvery('login/loginSetter', loginUserSaga);
}