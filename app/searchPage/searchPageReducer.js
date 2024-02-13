import { createSlice } from '@reduxjs/toolkit';

const searchPageSlice = createSlice({
  name: 'searchPageReducer',
  initialState: {
    jobOrTalent: "work", // Corrected spelling of 'searchParam'
    freelancerIndex: "",
    showFreelancer: false
  },
  reducers: {
    // Use (state, action) instead of just (state)
    jobOrTalentSetter: (state, action) => {
        state.jobOrTalent= action.payload; // Corrected action.payload assignment
    },
    freelancerIndexSetter: (state, action) => {
        state.freelancerIndex= action.payload; // Corrected action.payload assignment
        console.log(state.freelancerIndex)
    },
    showFreelancerSetter: (state, action) => {
        state.showFreelancer= action.payload; // Corrected action.payload assignment
        console.log(state.showFreelancer)
    }

  },
});

// Corrected the exported action name
export const { jobOrTalentSetter, freelancerIndexSetter, showFreelancerSetter } = searchPageSlice.actions;

export default searchPageSlice.reducer;
