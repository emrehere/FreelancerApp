// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const UserNavbarSlice = createSlice({
  name: 'UserNavbar',
  initialState: {
    openMenu: false
  },
  reducers: {
    openMenuSetter: (state, action) => {
      state.openMenu = action.payload;
    }
  },
});

export const {  openMenuSetter } = UserNavbarSlice.actions;

export default UserNavbarSlice.reducer;
