import React from "react";
import { TopNotificationBar } from "./TopNotificationBar";
import { SubHeaderBar } from "./SubHeaderBar";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <>
      {/* 1. Top Announcement & Marquee Bars (Scroll naturally with page on mobile, static on desktop) */}
      <div className="w-full">
        <TopNotificationBar />
        <SubHeaderBar />
      </div>

      {/* 2. Main Navigation Bar: STICKY ONLY on Mobile (< lg), static on desktop (lg:static) */}
      <header className="w-full sticky top-0 z-40 lg:static bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgba(4,31,73,0.06)] lg:shadow-none">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
