import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: false,
    email: '',
    password: '',
  },
  reducers: {
    loginSetter: (state, action) => {
      state.login = action.payload;
    },
    setCredentials: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
  },
});

export const { loginSetter, setCredentials } = loginSlice.actions;

export default loginSlice.reducer;
