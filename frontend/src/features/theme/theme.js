import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: true,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isDark = !(state.isDark);
            console.log(state.isDark);
            
        },
    },
});

export const { toggleMode } = themeSlice.actions;

export default themeSlice.reducer;
