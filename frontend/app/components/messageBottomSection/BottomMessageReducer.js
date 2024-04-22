
import { createSlice } from '@reduxjs/toolkit';
import ChatDatas from '@/app/datas/chatDatas';

const messageArray = Array(ChatDatas.length - 1)
        .fill(null) 
        .map(() => ({ chatStart: false,
            dateStart: "",
            chatName: "" })); 


const BottomMessageSlice = createSlice({
  name: 'BottomMessage',
  initialState: {
    openChatBox: false,
    clickedIndividualChat: null,
    messageStates : messageArray
  },
  reducers: {
    openChatBoxSetter: (state, action) => {
      state.openChatBox = action.payload;
      console.log("trig")
    },
    clickedIndividualChatSetter: (state, action) => {
      state.clickedIndividualChat = action.payload;
      state.messageStates = state.messageStates.map((item, index) => {
        if (index === state.clickedIndividualChat.index) {
          return { ...item, chatStart: true, dateStart: new Date().getTime(),
             chatName: state.clickedIndividualChat.name };
        }
        return item;
      });
    },
    messageArraySetter: (state, action) => {
      state.messageStates = action.payload
    }
  },
});

export const {  openChatBoxSetter, clickedIndividualChatSetter, messageArraySetter  } = BottomMessageSlice.actions;

export default BottomMessageSlice.reducer;
