import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navigation/Navbar";
import DayModal from "../components/Calendar/DayModal"; // Fix import path
const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 mt-16 mx-2">
        <Outlet />
      </div>
      <DayModal />
    </div>
  );
};

export default Layout;
