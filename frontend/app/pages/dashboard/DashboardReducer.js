import { createSlice } from '@reduxjs/toolkit';

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    postOpen: false,
  },
  reducers: {
    postOpenSetter: (state, action) => {
      state.postOpen = action.payload
    }
  },
});

export const { postOpenSetter  } = DashboardSlice.actions;

export default DashboardSlice.reducer;
