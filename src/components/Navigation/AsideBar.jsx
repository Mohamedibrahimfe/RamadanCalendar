import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Collapse from "./Collapse";
export default function AsideBar() {
  const collapse = useSelector((state) => state.collapse.collapse);
  const language = useSelector((state) => state.language.language);
  return (
    <aside className={`fixed top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r dark:border-gray-700
      transition-all duration-300 ease-in-out
      ${collapse ? 'w-16' : 'w-64'}
      ${language === 'ar' ? 'right-0' : 'left-0'}
      ${collapse ? 'translate-x-0 collapsed' : '-translate-x-full md:translate-x-0'}
      ${language === 'ar' ?
        (collapse ? 'translate-x-0 collapsed' : 'translate-x-full md:translate-x-0') :
        (collapse ? 'translate-x-0' : '-translate-x-full md:translate-x-0')}`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {/* Update each navigation item's span to include collapse-based visibility */}
          {/* Calendar */}
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                fill="currentColor"
              >
                <defs></defs>
                <g id="calendar_number" data-name="calendar number">
                  <path
                    className="cls-1"
                    d="M22.5 3H21V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h-4V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H7V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2.5A1.5 1.5 0 0 0 1 4.5v18A1.5 1.5 0 0 0 2.5 24h20a1.5 1.5 0 0 0 1.5-1.5v-18A1.5 1.5 0 0 0 22.5 3zM19 2h1v3h-1zm-7 0h1v3h-1zM5 2h1v3H5zM2.5 4H4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h1.5a.5.5 0 0 1 .5.5V8H2V4.5a.5.5 0 0 1 .5-.5zm20 19h-20a.5.5 0 0 1-.5-.5V9h21v13.5a.5.5 0 0 1-.5.5z"
                  />
                  <path
                    className="cls-1"
                    d="M10.62 15.89a3.35 3.35 0 0 0-1.28-.26h-.18l2.14-2.38.09-.12a.29.29 0 0 0 0-.14v-.39a.26.26 0 0 0-.07-.2.25.25 0 0 0-.19-.07h-4.4a.24.24 0 0 0-.18.07.26.26 0 0 0-.07.2v.4a.25.25 0 0 0 .07.19.28.28 0 0 0 .18.06H10L7.85 15.6l-.08.13a.33.33 0 0 0 0 .17v.3a.27.27 0 0 0 .07.19.29.29 0 0 0 .19.07H9a2 2 0 0 1 1.2.31 1.17 1.17 0 0 1 .43 1 1.26 1.26 0 0 1-.48 1.07 1.93 1.93 0 0 1-1.15.4 3.53 3.53 0 0 1-.72-.08 1.53 1.53 0 0 1-.64-.31 1.15 1.15 0 0 1-.38-.62.31.31 0 0 0-.18-.23.27.27 0 0 0-.18 0h-.54a.24.24 0 0 0-.17.06.22.22 0 0 0-.07.16 1.65 1.65 0 0 0 .2.7 1.91 1.91 0 0 0 .54.64 2.56 2.56 0 0 0 .87.46 3.79 3.79 0 0 0 1.27.16 3.55 3.55 0 0 0 1.46-.28 2.42 2.42 0 0 0 1-.8 2.12 2.12 0 0 0 .37-1.27 2.15 2.15 0 0 0-.31-1.21 1.85 1.85 0 0 0-.9-.73zM18.47 14.05a2.73 2.73 0 0 0-.49-1 2.26 2.26 0 0 0-.86-.65 3.1 3.1 0 0 0-1.29-.24 3 3 0 0 0-1.28.24 2.26 2.26 0 0 0-.86.65 2.93 2.93 0 0 0-.5 1A4.76 4.76 0 0 0 13 15.2V17.17a5.31 5.31 0 0 0 .17 1.15 2.69 2.69 0 0 0 .49 1 2.09 2.09 0 0 0 .86.65 3.1 3.1 0 0 0 1.29.24 3.11 3.11 0 0 0 1.3-.24 2.06 2.06 0 0 0 .85-.65 2.86 2.86 0 0 0 .49-1 4 4 0 0 0 .17-1.15V15.2a4 4 0 0 0-.15-1.15zm-.91 2.43v.63a2.59 2.59 0 0 1-.43 1.55 1.49 1.49 0 0 1-1.28.57 1.48 1.48 0 0 1-1.27-.57 2.59 2.59 0 0 1-.44-1.55V15.27a2.68 2.68 0 0 1 .44-1.55 1.44 1.44 0 0 1 1.27-.58 1.47 1.47 0 0 1 1.28.58 2.68 2.68 0 0 1 .43 1.55v.61z"
                  />
                </g>
              </svg>
              <span className="ms-3">
                {language === "en" ? "Calendar" : "التقويم"}
              </span>
            </Link>
          </li>
          {/* recommended */}
          <li>
            <Link
              to="/dashboard/recommended"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-7 -ml-1 h-7 -mr-1  transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#FFFFFF"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>ic_fluent_recommended_24_filled</title>{" "}
                  <desc>Created with Sketch.</desc>{" "}
                  <g
                    id="🔍-Product-Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="#AAAFB7"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="ic_fluent_recommended_24_filled"
                      fill="#AAAFB7"
                      fillRule="nonzero"
                    >
                      {" "}
                      <path
                        d="M17.0020594,17.4830721 L17.0007001,22.2453233 C17.0007001,22.7945586 16.4297842,23.157512 15.9324488,22.9244522 L12.0005291,21.0818879 L8.07069102,22.9243915 C7.5733438,23.1575726 7.00231009,22.7946207 7.00231009,22.2453233 L7.00260026,17.4861909 C8.43218245,18.4424048 10.1509746,19 12,19 C13.8510348,19 15.5715531,18.4411922 17.0020594,17.4830721 Z M12,2 C16.418278,2 20,5.581722 20,10 C20,14.418278 16.418278,18 12,18 C7.581722,18 4,14.418278 4,10 C4,5.581722 7.581722,2 12,2 Z M11.8084497,6.58610926 L11.7712148,6.64234387 L10.8586922,8.49499737 L8.81472896,8.79035658 C8.62860433,8.81725218 8.54185205,9.02358857 8.63135587,9.17274189 L8.67333197,9.22553178 L10.1533251,10.6658938 L9.80260908,12.7010893 C9.77067264,12.8864156 9.94010228,13.0326834 10.1096137,12.9936511 L10.1727912,12.9700424 L12,12.0075816 L13.8272087,12.9700424 C13.9935181,13.0576439 14.1849216,12.9418506 14.2003028,12.7686538 L14.1974269,12.7012993 L13.8484251,10.6658938 L15.326776,9.22542655 C15.4614232,9.09422981 15.4102807,8.87641205 15.2502405,8.80838398 L15.185271,8.79035658 L13.1413078,8.49499737 L12.2287851,6.64234387 C12.1560771,6.494728 11.9762193,6.46192448 11.8558892,6.54393329 L11.8084497,6.58610926 L11.8084497,6.58610926 Z"
                        id="🎨-Color"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                {language === "en"
                  ? "Hint For Routine"
                  : "تلميحات للعبادات اليومية"}
              </span>
            </Link>
          </li>
          {/* hadith */}
          <li>
            <Link
              to="/dashboard/hadith"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                {language === "en" ? "Hadith sharif" : "حديث شريف"}
              </span>
            </Link>
          </li>
          {/* ai */}
          <li>
            <Link
              to="/dashboard/ai"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white "
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="#AAAFB7"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>ai</title>{" "}
                  <g id="Layer_2" data-name="Layer 2">
                    {" "}
                    <g id="invisible_box" data-name="invisible box">
                      {" "}
                      <rect width="48" height="48" fill="none"></rect>{" "}
                    </g>{" "}
                    <g id="Q3_icons" data-name="Q3 icons">
                      {" "}
                      <g>
                        {" "}
                        <path d="M45.6,18.7,41,14.9V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2L24,5.9,18.5,2.2,17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4L2.4,18.7a.8.8,0,0,0-.4.8v9H2a.8.8,0,0,0,.4.8L7,33.1v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2L24,42.1l5.5,3.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l4.6-3.8a.8.8,0,0,0,.4-.7V19.4h0A.8.8,0,0,0,45.6,18.7Zm-5.1,6.8H42v1.6l-3.5,2.8-.4.3-.4-.2a1.4,1.4,0,0,0-2,.7,1.5,1.5,0,0,0,.6,2l.7.3h0v5.4l-6.6,3.1-4.2-2.8-.7-.5V25.5H27a1.5,1.5,0,0,0,0-3H25.5V9.7l.7-.5,4.2-2.8L37,9.5v5.4h0l-.7.3a1.5,1.5,0,0,0-.6,2,1.4,1.4,0,0,0,1.3.9l.7-.2.4-.2.4.3L42,20.9v1.6H40.5a1.5,1.5,0,0,0,0,3ZM21,25.5h1.5V38.3l-.7.5-4.2,2.8L11,38.5V33.1h0l.7-.3a1.5,1.5,0,0,0,.6-2,1.4,1.4,0,0,0-2-.7l-.4.2-.4-.3L6,27.1V25.5H7.5a1.5,1.5,0,0,0,0-3H6V20.9l3.5-2.8.4-.3.4.2.7.2a1.4,1.4,0,0,0,1.3-.9,1.5,1.5,0,0,0-.6-2L11,15h0V9.5l6.6-3.1,4.2,2.8.7.5V22.5H21a1.5,1.5,0,0,0,0,3Z"></path>{" "}
                        <path d="M13.9,9.9a1.8,1.8,0,0,0,0,2.2l2.6,2.5v2.8l-4,4v5.2l4,4v2.8l-2.6,2.5a1.8,1.8,0,0,0,0,2.2,1.5,1.5,0,0,0,1.1.4,1.5,1.5,0,0,0,1.1-.4l3.4-3.5V29.4l-4-4V22.6l4-4V13.4L16.1,9.9A1.8,1.8,0,0,0,13.9,9.9Z"></path>{" "}
                        <path d="M31.5,14.6l2.6-2.5a1.8,1.8,0,0,0,0-2.2,1.8,1.8,0,0,0-2.2,0l-3.4,3.5v5.2l4,4v2.8l-4,4v5.2l3.4,3.5a1.7,1.7,0,0,0,2.2,0,1.8,1.8,0,0,0,0-2.2l-2.6-2.5V30.6l4-4V21.4l-4-4Z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                {language === "en"
                  ? "AI Routine Generator"
                  : "استخدام الذكاء الاصطناعي"}
              </span>
            </Link>
          </li>
          {/* Salah Tutorial */}
          <li>
            <Link
              to="/dashboard/salah-tutorial"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 16V8.94c0-1.07-.87-1.94-1.94-1.94H4.94C3.87 7 3 7.87 3 8.94V16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 .06c0 .1-.1.19-.19.19H5.19c-.1 0-.19-.09-.19-.19V9.06c0-.1.1-.19.19-.19h13.62c.1 0 .19.09.19.19v7zM12 9.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
              <span className={`flex-1 ms-3 whitespace-nowrap ${collapse ? 'hidden' : 'block'}`}>
                {language === "en" ? "Salah Tutorial" : "تعليم الصلاة"}
              </span>
            </Link>
          </li>
          {/* prayer Times */}
          <li>
            <Link
              to="/dashboard/prayer-times"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" />
                <path d="M13 7H11V13H17V11H13V7Z" />
              </svg>
              <span className={`flex-1 ms-3 whitespace-nowrap ${collapse ? 'hidden' : 'block'}`}>
                {language === "en" ? "Prayer Times" : "أوقات الصلاة"}
              </span>
            </Link>
          </li>
          {/* progress */}
          <li>
            <Link
              to="/dashboard/progress"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                width="192px"
                height="192px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>file_type_progress</title>
                  <path
                    d="M29.107,9.963h0v14a1.079,1.079,0,0,1-.489.845l-.458.274L24.67,27.1l-2.357,1.372-.489.274V13.6L8.719,6.03l6.224-3.587.574-.327a1.081,1.081,0,0,1,.977,0L25.122,7.1,29.1,9.4v.563Z"
                  // style="fill:#020400"
                  ></path>
                  <path
                    d="M18.909,15.284l-2.687-1.553L9.935,10.1a1.1,1.1,0,0,0-.977,0L3.378,13.322l-.486.283,9.466,5.464V30l5.571-3.219.491-.274a1.081,1.081,0,0,0,.489-.845Z"
                  // style="fill:#020400"
                  ></path>
                  <polygon
                    points="2.893 24.536 9.441 28.318 9.441 20.749 2.893 24.536"
                  // style="fill:#020400"
                  ></polygon>
                </g>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                {language === "en" ? "Progress " : "التقدم"}
              </span>
            </Link>
          </li>
          {/* settings */}
          <li>
            <Link
              to="/dashboard/settings"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm8.99-5L19.415,9c-.008-.022-.036-.107-.046-.129l1.11-1.11a2.011,2.011,0,0,0,0-2.842l-1.4-1.4a2,2,0,0,0-1.421-.588h0a2,2,0,0,0-1.419.588L15.07,4.612,15,4.58V3.009A2.011,2.011,0,0,0,12.99,1H11.01A2.011,2.011,0,0,0,9,3.009L9,4.566l-.086.049-.043.016L7.765,3.522a2,2,0,0,0-1.42-.589h0a2,2,0,0,0-1.421.588l-1.4,1.4a2.011,2.011,0,0,0,0,2.842l1.1,1.143c-.013.029-.033.063-.043.093H3.01A2.011,2.011,0,0,0,1,11.009v1.982A2.011,2.011,0,0,0,3.01,15l1.575,0c.008.022.036.107.046.129l-1.11,1.11a2.011,2.011,0,0,0,0,2.842l1.4,1.4a2.059,2.059,0,0,0,2.842,0l1.115-1.115c.022.011.1.047.121.056v1.571A2.011,2.011,0,0,0,11.01,23h1.98A2.011,2.011,0,0,0,15,20.991l0-1.557.129-.065,1.109,1.109a2.058,2.058,0,0,0,2.843,0l1.4-1.4a2.011,2.011,0,0,0,0-2.842l-1.1-1.143c.013-.029.033-.063.043-.093H20.99A2.011,2.011,0,0,0,23,12.991V11.009A2.011,2.011,0,0,0,20.99,9Zm0,4H19.421a2.1,2.1,0,0,0-1.466,3.54l1.109,1.124-1.414,1.4-1.11-1.109A2.1,2.1,0,0,0,13,19.42L12.99,21,11,20.991V19.42a2.043,2.043,0,0,0-1.307-1.881,2.138,2.138,0,0,0-.816-.164,2,2,0,0,0-1.417.58L6.336,19.064l-1.4-1.414,1.108-1.108A2.1,2.1,0,0,0,4.579,13L3,12.991,3.01,11H4.579A2.1,2.1,0,0,0,6.045,7.46L4.936,6.336l1.414-1.4L7.46,6.045a2.04,2.04,0,0,0,2.227.419l.018-.007A2.04,2.04,0,0,0,11,4.58L11.01,3,13,3.009V4.58a2,2,0,0,0,1.227,1.845c.026.013.057.027.087.039a2.038,2.038,0,0,0,2.226-.419l1.124-1.109,1.4,1.414L17.956,7.458A2.1,2.1,0,0,0,19.421,11H20.99l.01.009Z"></path>
                </g>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">
                {language === "en" ? "Settings" : "الإعدادات"}
              </span>
            </Link>
          </li>
          <Collapse />
        </ul>
      </div>
    </aside>
  );
}
