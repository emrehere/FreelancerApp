import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    email: '',
    password: '',
    name: '',
    surname: ''
  },
  reducers: {
    signupSetter: (state, action) => {
      state.signup = action.payload;
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

export const { signupSetter, setCredentials } = signupSlice.actions;

export default signupSlice.reducer;
