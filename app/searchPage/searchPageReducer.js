import { createSlice } from '@reduxjs/toolkit';

const searchPageSlice = createSlice({
  name: 'searchPageReducer',
  initialState: {
    jobOrTalent: "", // Corrected spelling of 'searchParam'
  },
  reducers: {
    // Use (state, action) instead of just (state)
    jobOrTalentSetter: (state, action) => {
        state.jobOrTalent= action.payload; // Corrected action.payload assignment
    }
  },
});

// Corrected the exported action name
export const { jobOrTalentSetter } = searchPageSlice.actions;

export default searchPageSlice.reducer;
