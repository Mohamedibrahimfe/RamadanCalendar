import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      
      // Update both data-theme and dark class
      document.documentElement.setAttribute("data-theme", state.theme);
      if (state.theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Initialize theme on app load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.classList.remove("dark");
  document.documentElement.setAttribute("data-theme", "light");
}

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
