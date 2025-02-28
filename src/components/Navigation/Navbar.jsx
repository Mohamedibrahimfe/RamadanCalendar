import React from "react";
import HeaderBar from "./HeaderBar";
import AsideBar from "./AsideBar";
import { useSelector } from "react-redux";

export default function Navbar() {
  const language = useSelector((state) => state.language.language);
  
  return (
    <>
      <HeaderBar />
      <aside className={`fixed top-16 ${language === 'ar' ? 'right-0' : 'left-0'} h-full z-40`}>
        <AsideBar />
      </aside>
    </>
  );
}
