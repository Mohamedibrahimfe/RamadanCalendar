import { createSlice } from "@reduxjs/toolkit";

const initialState = { lang: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.lang = state.lang === "en" ? "ar" : "en";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;