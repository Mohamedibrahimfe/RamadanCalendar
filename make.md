Ramadan Calendar Web App - Project Setup

Tech Stack

Vite + React - Fast development & optimized builds

Framer Motion - Smooth animations

React Router DOM - Navigation between pages

Redux Toolkit - State management

Tailwind CSS - Styling and responsiveness

TanStack Query - Efficient API fetching (if needed)

No Backend - Using a simpler translation approach

Folder Structure

ramadan-calendar/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   │   ├── store.js
│   │   ├── languageSlice.js
│   ├── translations.js
│   ├── App.js
│   ├── main.jsx
│   ├── index.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js

Installation

npx create-vite@latest ramadan-calendar --template react
cd ramadan-calendar
npm install react-router-dom @reduxjs/toolkit react-redux framer-motion @tanstack/react-query
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Tailwind Configuration (tailwind.config.js)

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-rtl")],
};

Redux Language Slice (src/redux/languageSlice.js)

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

Translations (src/translations.js)

export const translations = {
  en: {
    welcome: "Welcome to your Ramadan Planner",
    schedule: "Your Schedule",
    toggleDarkMode: "Toggle Dark Mode",
  },
  ar: {
    welcome: "مرحبًا بك في مخطط رمضان",
    schedule: "جدولك الزمني",
    toggleDarkMode: "تغيير وضع الظلام",
  },
};

Redux Store (src/redux/store.js)

import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

Using Translations (src/components/Header.jsx)

import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
import { translations } from "../translations";

const Header = () => {
  const lang = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <header className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between">
      <h1>{translations[lang].welcome}</h1>
      <button onClick={() => dispatch(toggleLanguage())} className="p-2 bg-blue-500 text-white rounded">
        {lang === "en" ? "عربي" : "English"}
      </button>
    </header>
  );
};

export default Header;

Connecting Redux in main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

Next Steps

Set up React Router for navigation

Design Calendar UI with Tailwind

Implement Framer Motion animations

Develop AI-powered routine scheduling feature

Add task tracking and progress visualization

This should get you started! 🚀 Let me know if you need any modifications.