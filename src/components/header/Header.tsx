import React from "react";
import { TopNotificationBar } from "./TopNotificationBar";
import { SubHeaderBar } from "./SubHeaderBar";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* 1. Topmost Notification Bar (Height: 36.72px, BG: #0A3974) */}
      <TopNotificationBar />

      {/* 2. Secondary Feature & Sub-Links Bar (Height: 41px, Top: 36.72px, BG: #041F49, Border-Bottom: 1px) */}
      <SubHeaderBar />

      {/* 3. Main Navigation Bar (Height: 84px, Top: 77.72px, BG: #FFFFFF) */}
      <Navbar />
    </header>
  );
};

export default Header;
