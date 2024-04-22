// NavActions.js
import { createSlice } from '@reduxjs/toolkit';

const BottomMessageSlice = createSlice({
  name: 'BottomMessage',
  initialState: {
    openChatBox: false,
    openIndividualChat: false
  },
  reducers: {
    openChatBoxSetter: (state, action) => {
      state.openChatBox = action.payload;
    },
    openIndividualChatSetter: (state, action) => {
      state.openIndividualChat = action.payload;
      console.log("openIndividualChat", state.openIndividualChat)
    }
  },
});

export const {  openChatBoxSetter, openIndividualChatSetter  } = BottomMessageSlice.actions;

export default BottomMessageSlice.reducer;
