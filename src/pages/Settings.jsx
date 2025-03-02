import React, { useState, useEffect, useContext } from "react";
import { toggleTheme } from "../redux/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
import { motion } from "framer-motion";

function Settings() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);
  const handleThemeChange = () => dispatch(toggleTheme());
  const handleLanguageChange = () => dispatch(toggleLanguage());

  const settingsGroups = [
    {
      title: { en: "Appearance", ar: "المظهر" },
      settings: [
        {
          name: { en: "Dark Mode", ar: "الوضع المظلم" },
          checked: theme === "dark",
          onChange: handleThemeChange,
          icon: theme === "dark" ? "🌙" : "☀️"
        },
        {
          name: { en: "Language", ar: "اللغة" },
          checked: language === "en",
          onChange: handleLanguageChange,
          icon: language === "en" ? "🇺🇸" : "🇦🇪"
        }
      ]
    },
    {
      title: { en: "Notifications", ar: "الإشعارات" },
      settings: [
        {
          name: { en: "Prayer Times", ar: "أوقات الصلاة" },
          checked: localStorage.getItem("prayerNotifications") === "true",
          onChange: () => localStorage.setItem("prayerNotifications", "true"),
          icon: "🕌"
        },
        {
          name: { en: "Daily Reminders", ar: "التذكيرات اليومية" },
          checked: localStorage.getItem("dailyReminders") === "true",
          onChange: () => localStorage.setItem("dailyReminders", "true"),
          icon: "⏰"
        }
      ]
    },
    {
      title: { en: "Preferences", ar: "التفضيلات" },
      settings: [
        {
          name: { en: "Show Progress", ar: "إظهار التقدم" },
          checked: localStorage.getItem("showProgress") === "true",
          onChange: () => localStorage.setItem("showProgress", "true"),
          icon: "📊"
        },
        {
          name: { en: "Auto-start Tasks", ar: "بدء المهام تلقائياً" },
          checked: localStorage.getItem("autoStartTasks") === "true",
          onChange: () => localStorage.setItem("autoStartTasks", "true"),
          icon: "▶️"
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto p-6 max-w-2xl"
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        {language === "ar" ? "الإعدادات" : "Settings"}
      </h1>

      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: groupIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-700">
              {language === "ar" ? group.title.ar : group.title.en}
            </h2>
            <div className="space-y-4">
              {group.settings.map((setting, settingIndex) => (
                <div
                  key={settingIndex}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-400 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{setting.icon}</span>
                    <span className="text-gray-700 dark:text-gray-700">
                      {language === "ar" ? setting.name.ar : setting.name.en}
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={setting.checked}
                      onChange={setting.onChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center mx-auto space-x-2">
            <span>🗑️</span>
            <span>{language === "ar" ? "حذف الحساب" : "Delete Account"}</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Settings;
