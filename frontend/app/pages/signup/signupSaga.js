import { takeEvery, put, call } from 'redux-saga/effects';
import { signupSetter } from './signupReducer';

function* registerUserSaga(action) {
    console.log("triggered signupsaga")
    const { name, surname, email, password } = action.payload;
    console.log("payload",name, surname, email, password)

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

        if (res.ok) {
            const data = yield res.json();
            localStorage.setItem('token', JSON.stringify(data.token));
            console.log('User registered successfully');
        } else {
            const errorData = yield res.json();
            console.log("error data", errorData)
           
        }
    } catch (error) {
        console.log('Error during registration:', error);
     
    }
}

export function* watchRegisterUser() {
    yield takeEvery('signup/signupSetter', registerUserSaga); // Adjust the action type as needed
}


// const saveTheUser = async () => {
//     setLoading(true)
//     try {
//       const res = await fetch('http://localhost:8008/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           surname,
//           email,
//           password
//         })
//       })
//       console.log(res)
//       if (res.ok) {

//         const data = await res.json();


//         localStorage.setItem('token', JSON.stringify(data.token));

//         console.log('user saved')

//       } else {
//         const errorData = await res.json();
//         setSignupError(errorData.error)
//       }

//     } catch (error) {
//       console.log(error)
//     }
//     finally {
//       setLoading(false)
//     }
//   }