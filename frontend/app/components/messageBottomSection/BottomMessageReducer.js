// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const BottomMessageSlice = createSlice({
  name: 'BottomMessage',
  initialState: {
    openChatBox: false
  },
  reducers: {
    openChatBoxSetter: (state, action) => {
      state.openChatBox = action.payload;
      console.log("openChatBoxSetter", state.openChatBox)
    }
  },
});

export const {  openChatBoxSetter  } = BottomMessageSlice.actions;

export default BottomMessageSlice.reducer;
