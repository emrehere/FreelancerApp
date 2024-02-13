import { createSlice } from '@reduxjs/toolkit';

const searchPageSlice = createSlice({
  name: 'searchPageReducer',
  initialState: {
    jobOrTalent: "work", // Corrected spelling of 'searchParam'
    freelancerIndex: "",
    showFreelancer: false,
    workIndex: "",
    showWork: false,
  },
  reducers: {
    // Use (state, action) instead of just (state)
    jobOrTalentSetter: (state, action) => {
        state.jobOrTalent= action.payload; // Corrected action.payload assignment
    },
    freelancerIndexSetter: (state, action) => {
        state.freelancerIndex= action.payload; // Corrected action.payload assignment
      
    },
    showFreelancerSetter: (state, action) => {
        state.showFreelancer= action.payload; // Corrected action.payload assignment
    
    },
    workIndexSetter: (state, action) => {
        state.workIndex= action.payload; // Corrected action.payload assignment
        console.log(state.workIndex)
    },
    showWorkSetter: (state, action) => {
        state.showWork= action.payload; // Corrected action.payload assignment
        console.log(state.showWork)
    }

  },
});

// Corrected the exported action name
export const { jobOrTalentSetter, freelancerIndexSetter, 
  showFreelancerSetter, workIndexSetter, showWorkSetter } = searchPageSlice.actions;

export default searchPageSlice.reducer;
