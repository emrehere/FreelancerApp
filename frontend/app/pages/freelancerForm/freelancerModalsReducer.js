import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  skills: [],
};



const freelancerSlice = createSlice({
  name: 'freelancerSlice',
  initialState,
  reducers: {
    addSkill(state, action) {
      state.skills.push(action.payload);
    },
    removeSkill(state, action) {
      state.skills.splice(action.payload, 1);
    }, sendFreelancerInfo: (state, action) => {
      console.log("action in redux", action.payload)
      state.sendData = action.payload
    },
  },
});

export const { addSkill, removeSkill, sendFreelancerInfo } = freelancerSlice.actions;

export default freelancerSlice.reducer;
