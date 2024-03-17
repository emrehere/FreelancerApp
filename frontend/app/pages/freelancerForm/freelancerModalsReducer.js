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
    },
  },
});

export const { addSkill, removeSkill } = freelancerSlice.actions;

export default freelancerSlice.reducer;
