import { createSlice } from '@reduxjs/toolkit';


const searchPageSlice = createSlice({
  name: 'searchPageReducer',
  initialState: {
    jobOrTalent: "work", // Corrected spelling of 'searchParam'
    freelancerIndex: "",
    showFreelancer: false,
    workIndex: "",
    showWork: false,
    hireDatas: [],
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
      
    },
    showWorkSetter: (state, action) => {
        state.showWork= action.payload; // Corrected action.payload assignment          
    },  setAllHireInfo: (state, action) => { // Use correct action type name
        const newData = action.payload;
      if (Array.isArray(newData)) { // Check if newData is an array
        state.hireDatas = newData; // Update hireDatas only if newData is an array
      } else if (typeof newData === 'object') { // Check if newData is an object
        state.hireDatas = [newData]; // Convert object to array with single item
      } else {
        console.error("SET_ALL_HIRE_INFO payload is neither an array nor an object:", newData);
      }
    
  }

  },
});

// Corrected the exported action name
export const { jobOrTalentSetter, freelancerIndexSetter, showFreelancerSetter, workIndexSetter,
   showWorkSetter, setAllHireInfo } = searchPageSlice.actions;

export default searchPageSlice.reducer;
