import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
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

        console.log("my res", res)

        if (res.ok) {
            const data = yield res.json();
            console.log("data", data)
            localStorage.setItem('token', JSON.stringify(data.token));
            console.log('User logged in');
        } else {
            console.log('User not logged in. Status:', res.status);
            const errorData = yield res.json(); // If the server returns error details in the response body
            // Handle the error or dispatch an action if needed
        }
    } catch (error) {
        console.log('Error during login:', error);
        // Handle the error or dispatch an action if needed
    }
}

export function* watchLoginUser() {
    yield takeLatest('login/loginSetter', loginUserSaga);
}