import { createSlice } from '@reduxjs/toolkit';



type StateType = {
    open1: boolean;
    open2: boolean;
    open3: boolean;
    open4: boolean;
    open5: boolean;
    open6: boolean;
    open7: boolean;
    open8: boolean;
    open9: boolean;
    [key: string]: boolean; // Index signature allowing any string key to access boolean values
}

// Now you can define your state object with the StateType
const state: StateType = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open8: false,
    open9: false
};
const categorySlice = createSlice({
    name: 'category',
    initialState: state,
    reducers: {
        setOpenState: (state, action) => {
            const { category, isOpen } = action.payload;
            state[category] = isOpen;
        },
    },
});

export const { setOpenState } = categorySlice.actions;

export default categorySlice.reducer;
