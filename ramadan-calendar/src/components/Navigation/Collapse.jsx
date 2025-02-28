import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../../redux/collapse";
import collapse from "../../redux/collapse";
export default function Collapse() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const collapse = useSelector((state) => state.collapse.collapse);

  return (
    <li
      onClick={() => dispatch(toggleCollapse())}
      className="w-full p-2 flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
    >

      <svg
        className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white ${collapse ? 'rotate-180' : ''
          } ${language === 'ar' ? '-scale-x-100' : ''}`}
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M7 28a.999.999 0 0 1-1-1V5a1 1 0 0 1 1.521-.854l18 11a1.001 1.001 0 0 1 0 1.708l-18 11A1 1 0 0 1 7 28z" />
      </svg>
      <span className={`flex-1 ms-3 whitespace-nowrap ${collapse ? 'hidden' : 'block'}`}>
        {language === "en" ? "Collapse" : "طي القائمة"}
      </span>

    </li>
  );
}
