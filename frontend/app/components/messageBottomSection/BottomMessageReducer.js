
import { createSlice } from '@reduxjs/toolkit';
import ChatDatas from '@/app/datas/chatDatas';

const messageArray = Array(ChatDatas.length - 1)
        .fill(null) 
        .map(() => ({ chatStart: false,
            dateStart: "" })); 


const BottomMessageSlice = createSlice({
  name: 'BottomMessage',
  initialState: {
    openChatBox: false,
    clickedIndividualChat: null,
    clickedIndex: null,
    messageStates : messageArray
  },
  reducers: {
    openChatBoxSetter: (state, action) => {
      state.openChatBox = action.payload;
      console.log("trig")
    },
    clickedIndividualChatSetter: (state, action) => {
      state.clickedIndividualChat = action.payload;
      console.log("clickedIndividualChat", state.clickedIndividualChat)
    },
    clickedIndexSetter: (state, action) => {
      state.clickedIndex = action.payload
    }
  },
});

export const {  openChatBoxSetter, clickedIndividualChatSetter  } = BottomMessageSlice.actions;

export default BottomMessageSlice.reducer;
