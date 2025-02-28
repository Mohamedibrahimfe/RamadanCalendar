import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/themeReducer";
import { useEffect } from "react";
import React from "react";
const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full  srounded  dark:bg-gray-600 cursor-pointer w-10"
    >
      {theme === "light" ? (
        <span className="text-gray-100">🌙</span>
      ) : (
        "☀️"
      )}
    </button>
  );
};

export default ThemeToggle;
