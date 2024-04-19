import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    login: false,
  },
  reducers: {
    // Add reducers for additional action types here

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
