import { createSlice } from '@reduxjs/toolkit';

const searchParamSlice = createSlice({
  name: 'searchParamReducer',
  initialState: {
    searchParam: "", // Corrected spelling of 'searchParam'
  },
  reducers: {
    // Use (state, action) instead of just (state)
    searchParamSetter: (state, action) => {
        state.searchParam = action.payload; // Corrected action.payload assignment
    }
  },
});

// Corrected the exported action name
export const { searchParamSetter } = searchParamSlice.actions;

export default searchParamSlice.reducer;
