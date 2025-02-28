import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("language") || "en", // Default to English
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "ar" : "en";
      localStorage.setItem("language", state.language); // Save to local storage
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
