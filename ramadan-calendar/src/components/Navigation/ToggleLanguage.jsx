import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../redux/languageSlice";
import { useEffect } from "react";
import React from "react";
const LanguageToggle = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <button
      onClick={() => dispatch(toggleLanguage())}
      className="p-2 mx-1 rounded-full   dark:bg-gray-600 w-10 cursor-pointer"
    >
      {language === "en" ? (
        <span className="text-gray-100">🇦🇪 </span>
      ) : (
        <span className="text-gray-100">En </span>
      )}
    </button>
  );
};

export default LanguageToggle;
