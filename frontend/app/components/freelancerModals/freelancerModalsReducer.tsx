import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillsState {
  skills: string[];
}

const initialState: SkillsState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<string>) => {
      state.skills.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<number>) => {
      state.skills.splice(action.payload, 1);
    },
  },
});

export const { addSkill, removeSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
