import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import themeReducer from "./themeReducer";
import collapseSlice from "./collapse";
import calendarSlice from "./calendarSlice";
export const store = configureStore({
  reducer: {
    language: languageReducer,
    theme: themeReducer,
    collapse: collapseSlice,
    calendar: calendarSlice,
  },
});