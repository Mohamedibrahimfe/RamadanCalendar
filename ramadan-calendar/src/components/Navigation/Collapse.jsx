import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../../redux/collapse";
import collapse from "../../redux/collapse";
export default function Collapse() {
  const Dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const collapse = useSelector((state) => state.collapse.collapse);

  return (
    <li onClick={() => Dispatch(toggleCollapse())}>
      <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
        <svg
          className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 32 32"
          fill="currentColor"
          style={collapse ?  {transform:"rotate(180deg)"}: { transform: "" }}
        >
          <path d="M7 28a.999.999 0 0 1-1-1V5a1 1 0 0 1 1.521-.854l18 11a1.001 1.001 0 0 1 0 1.708l-18 11A1 1 0 0 1 7 28zM8 6.783v18.434L23.082 16 8 6.783z" />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">
          {language === "en" ? "collapse" : "إخفاء"}
        </span>
      </div>
    </li>
  );
}
