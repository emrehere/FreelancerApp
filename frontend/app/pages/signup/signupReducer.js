import { createSlice } from '@reduxjs/toolkit';


const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    email: '',
    password: '',
    name: '',
    surname: '',
    signup: false,
    signupError: '',
    registerComplete: false
  },
  reducers: {
    signupSetter: (state, action) => {
      state.signup = action.payload;
      console.log("signup setter", state.signup)
    },
    registerCompleteSetter: (state, action) => {
      state.registerComplete = action.payload
      console.log("register complete", state.registerComplete)
    },
    signupErrorSetter: (state, action) => {
      state.signupError = action.payload;
    },
    setCredentials: (state, action) => {
      const { email, password, name, surname } = action.payload;
      state.email = email;
      state.password = password;
      state.name = name;
      state.surname = surname;
    },
  },
});

export const { signupSetter, setCredentials, signupErrorSetter, registerCompleteSetter } = signupSlice.actions;

export default signupSlice.reducer;
