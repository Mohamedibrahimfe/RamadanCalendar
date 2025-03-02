import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeReducer";
import React from "react";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 cursor-pointer w-10 transition-colors duration-200"
    >
      {theme === "light" ? (
        <span className="text-gray-800">🌙</span>
      ) : (
        <span className="text-yellow-300">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;
