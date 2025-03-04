import React from "react";
import ThemeToggle from "./ThemeToggle";
import ToggleLanguage from "./ToggleLanguage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCollapse } from "../../redux/collapse";
import { useAuth, UserButton } from "@clerk/clerk-react"; // Update import

export default function HeaderBar() {
  const language = useSelector((state) => state.language.language);
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleCollapse())}
              className="p-2 rounded-lg md:hidden text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Toggle sidebar"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
            <img src="/pngegg.png" className="h-8 mx-3" alt="Logo" />
            <span className="text-xl font-semibold hidden sm:block dark:text-white">
              {language === "en" ? "Ramadan Tracker" : "الي الله اقرب"}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <span className="text-gray-700 dark:text-gray-200 font-semibold">
                {user?.firstName || user?.username || 'User'}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <ToggleLanguage />
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                    userButtonTrigger: "focus:shadow-none"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
