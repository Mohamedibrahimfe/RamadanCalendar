import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: localStorage.getItem("theme") || "light" };

const languageSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Save to local storage
    },
  },
});

export const { toggleTheme } = languageSlice.actions;
export default languageSlice.reducer;
