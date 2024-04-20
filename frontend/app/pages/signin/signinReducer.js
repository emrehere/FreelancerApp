import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    login: false,
    loginComplete: false,
    signinError: '',
  },
  reducers: {
    // Add reducers for additional action types here

    loginSetter: (state, action) => {
      state.login = action.payload;
    },
    loginCompleteSetter: (state, action) => {
      state.loginComplete = action.payload
    },
    signinErrorSetter: (state, action) => {
      state.signinError = action.payload
    },
    setCredentials: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
  },
});

export const { loginSetter, setCredentials, loginCompleteSetter, signinErrorSetter } = loginSlice.actions;

export default loginSlice.reducer;
