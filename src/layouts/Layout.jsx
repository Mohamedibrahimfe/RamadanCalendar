import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navigation/Navbar";
import DayModal from "../components/Calendar/DayModal";
import { useSelector } from "react-redux";

const Layout = () => {
  const language = useSelector((state) => state.language.language);
  const collapse = useSelector((state) => state.collapse.collapse);

  return (
    <div className={`flex min-h-screen bg-gray-50 dark:bg-gray-900 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
      <Navbar />
      <main 
        className={`flex-1 transition-all duration-300 ease-in-out pt-16
          ${collapse ? 'sm:ml-16' : 'sm:ml-64'} 
          ${language === 'ar' 
            ? (collapse ? 'sm:mr-16 mr-0' : 'sm:mr-64 mr-0') 
            : (collapse ? 'sm:ml-16 ml-0' : 'sm:ml-64 ml-0')}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Outlet />
        </div>
      </main>
      <DayModal />
    </div>
  );
};

export default Layout;
