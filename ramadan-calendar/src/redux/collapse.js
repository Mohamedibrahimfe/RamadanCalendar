import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: localStorage.getItem("collapse") || false, // Default to English
};

const collapseSlice = createSlice({
  name: "collapse",
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.collapse = state.collapse === false ? true : false; // Toggle the language;
      localStorage.setItem("collapse", state.collapse); // Save to local storage
    },
  },
});

export const { toggleCollapse } = collapseSlice.actions;
export default collapseSlice.reducer;
