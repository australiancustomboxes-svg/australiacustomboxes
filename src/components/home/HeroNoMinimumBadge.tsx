"use client";

import React from "react";

/**
 * HeroNoMinimumBadge
 * Exact 124px x 124px circular gold badge from Figma:
 * - Background: Gold / Amber (#F2B329) with drop shadow
 * - Perimeter Text: "NO MINIMUMS ·" on top arc, "NO MINIMUMS ·" on bottom arc (Archivo 800)
 * - Center Headline: "1 box" (Archivo 900 bold sans-serif in deep navy #041F49)
 * - Center Subtitle: "MINIMUM" (Libre Franklin 700 uppercase wide tracking in deep navy #041F49)
 * - 100% centered via Flexbox to eliminate SVG font-fallback issues
 */
export const HeroNoMinimumBadge: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-[110px] h-[110px] lg:w-[124px] lg:h-[124px] rounded-full select-none cursor-pointer group transition-all duration-300 hover:scale-105 bg-[#F2B329] ${className}`}
      style={{
        boxShadow: "0 14px 28px rgba(4, 31, 73, 0.45)",
      }}
      aria-label="1 Box Minimum Packaging Guarantee"
    >
      {/* 1. Perimeter Text via Symmetrical Top and Bottom Arcs */}
      <svg
        viewBox="0 0 124 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0 pointer-events-none"
      >
        <defs>
          {/* Top Arc: 9:30 o'clock to 2:30 o'clock (apex at 12 o'clock) */}
          <path
            id="badgeTopArc"
            d="M 16.5, 62 A 45.5,45.5 0 0,1 107.5, 62"
            fill="none"
          />
          {/* Bottom Arc: 3:30 o'clock to 8:30 o'clock (nadir at 6 o'clock) */}
          <path
            id="badgeBotArc"
            d="M 107.5, 62 A 45.5,45.5 0 0,1 16.5, 62"
            fill="none"
          />
        </defs>

        {/* Top Arc Text: "NO MINIMUMS ·" perfectly centered at 12 o'clock */}
        <text
          fill="#041F49"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="1.2"
          style={{
            fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
            letterSpacing: "1.2px",
          }}
        >
          <textPath href="#badgeTopArc" startOffset="50%" textAnchor="middle">
            NO MINIMUMS ·
          </textPath>
        </text>

        {/* Bottom Arc Text: "NO MINIMUMS ·" perfectly centered at 6 o'clock */}
        <text
          fill="#041F49"
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="1.2"
          style={{
            fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
            letterSpacing: "1.2px",
          }}
        >
          <textPath href="#badgeBotArc" startOffset="50%" textAnchor="middle">
            NO MINIMUMS ·
          </textPath>
        </text>
      </svg>

      {/* 2. Center Content: "1 box" and "MINIMUM" mathematically centered via Flexbox */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10">
        {/* Headline: "1 box" */}
        <div className="flex items-baseline justify-center text-[#041F49] leading-none">
          <span
            className="text-[26px] lg:text-[28px] font-black tracking-tight"
            style={{
              fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
              fontWeight: 900,
            }}
          >
            1
          </span>
          <span
            className="text-[20px] lg:text-[22px] font-extrabold ml-1 tracking-tight"
            style={{
              fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
              fontWeight: 800,
            }}
          >
            box
          </span>
        </div>

        {/* Subtitle: "MINIMUM" */}
        <span
          className="text-[#041F49] text-[8.5px] lg:text-[9.5px] font-bold uppercase tracking-[0.26em] ml-[0.26em] mt-[3px] leading-none"
          style={{
            fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            fontWeight: 700,
          }}
        >
          MINIMUM
        </span>
      </div>
    </div>
  );
};

export default HeroNoMinimumBadge;
