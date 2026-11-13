"use client";

import React from "react";
import Image from "next/image";

/**
 * HeroBottomTicker - Background+HorizontalBorder
 * Directly mapped from Figma CSS:
 *
 * Container:
 * - height: 99.42px
 * - background: #041F49
 * - border-top: 1px solid rgba(245, 248, 255, 0.14)
 *
 * Typography:
 * - font-family: 'Libre Franklin', sans-serif
 * - font-weight: 300 (Light)
 * - font-size: 33.6px
 * - line-height: 54px
 * - letter-spacing: -0.672px
 *
 * Pattern:
 * - Alternating sequence of:
 *   1. Outlined / Hollow text (-webkit-text-stroke: 1px rgba(245, 248, 255, 0.55), color: transparent)
 *   2. Australian Logo badge (26px x 26px, rounded-full)
 *   3. Solid White text (color: #FFFFFF)
 *   4. Uniform gap: ~33.5px
 */

interface TickerGroup {
  outline: string;
  solid: string;
}

const tickerGroups: TickerGroup[] = [
  {
    outline: "Rigid Boxes",
    solid: "Magnetic Closure",
  },
  {
    outline: "Mailer Boxes",
    solid: "Drawer Boxes",
  },
  {
    outline: "Folding Cartons",
    solid: "Presentation Boxes",
  },
  {
    outline: "Gift Boxes",
    solid: "Shipping Cartons",
  },
  {
    outline: "Display Packaging",
    solid: "Custom Die-Cuts",
  },
  {
    outline: "Eco-Friendly Boxes",
    solid: "Cosmetics Packaging",
  },
];

export const HeroBottomTicker: React.FC = () => {
  // Duplicated for seamless 100% continuous infinite marquee
  const loopGroups = [...tickerGroups, ...tickerGroups];

  return (
    <div
      className="w-full bg-[#041F49] border-t border-[rgba(245,248,255,0.14)] overflow-hidden flex items-center relative z-30 select-none h-[48px] sm:h-[52px] lg:h-[56px]"
      style={{
        backgroundColor: "#041F49",
        borderTop: "1px solid rgba(245, 248, 255, 0.14)",
      }}
    >
      <div className="flex items-center gap-[18px] sm:gap-[22px] lg:gap-[26px] w-max animate-hero-marquee">
        {loopGroups.map((group, index) => (
          <React.Fragment key={`${group.outline}-${index}`}>
            {/* 1. Outlined / Hollow Category */}
            <span
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-none whitespace-nowrap cursor-default transition-all duration-300 hover:text-white/80"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                WebkitTextStroke: "1px rgba(245, 248, 255, 0.55)",
                color: "transparent",
              }}
            >
              {group.outline}
            </span>

            {/* 2. australian-custom-boxes-logo.png Badge */}
            <div
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] rounded-full bg-[#041F49] border border-white/40 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-[2px]"
            >
              <Image
                src="/images/logo/Australian-Flag-Kangaroo-Icon.png"
                alt="Australia Custom Boxes"
                width={20}
                height={20}
                className="w-full h-full object-contain"
              />
            </div>

            {/* 3. Solid White Category */}
            <span
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-none whitespace-nowrap cursor-default transition-all duration-300 hover:text-[#F2B329]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.5px",
                color: "#FFFFFF",
              }}
            >
              {group.solid}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeroBottomTicker;
