import React, { useState, useEffect, useContext } from "react";
import { toggleTheme } from "../redux/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);
  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };
  const handleLanguageChange = () => {
    dispatch(toggleLanguage());
  };

  const handleNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        localStorage.setItem("notificationPermission", "granted");
      } else {
        console.log("Notification permission denied.");
      }
    });
  };

  return (
    <div className="container mx-auto mt-10 p-8 bg-white shadow-md rounded-lg dark:bg-gray-800 dark:text-white w-[90%]">
      <h2
        className="text-2xl font-bold text-gray-800 mb-6 dark:text-white"
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {language === "ar" ? "الإعدادات" : "Settings"}
      </h2>
      <div
        className="settings-options space-y-4"
        style={{
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        <div className="setting-item flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-300">
            {language === "ar" ? "الوضع المظلم" : "Dark Mode"}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={handleThemeChange}
              className=" w-6 h-6"
            />{" "}
            {/* Use sr-only to hide checkbox */}
            <span className="slider round"></span>{" "}
            {/* Slider now styled with Tailwind classes from index.css */}
          </label>
        </div>
        <div className="setting-item flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-300">
            {language === "ar" ? "اللغة" : "Language"}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={language === "en"}
              onChange={handleLanguageChange}
              className="w-6 h-6"
            />{" "}
            {/* Use sr-only to hide checkbox */}
            <span className="slider round"></span>{" "}
            {/* Slider now styled with Tailwind classes from index.css */}
          </label>
        </div>
        <div className="setting-item flex justify-between items-center">
          <span className="text-gray-700 dark:text-gray-300">
            {language === "ar" ? "الإشعارات" : "Notifications"}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              // checked={notificationsEnabled}
              onChange={handleNotificationPermission}
              className="w-6 h-6"
            />{" "}
            {/* Use sr-only to hide checkbox */}
            <span className="slider round"></span>{" "}
            {/* Slider now styled with Tailwind classes from index.css */}
          </label>
        </div>
        {/* Add more settings options here */}
      </div>
      <div className="mt-6">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          {language === "ar" ? "حذف الحساب" : "Delete Account"}
        </button>
      </div>
    </div>
  );
}

export default Settings;
