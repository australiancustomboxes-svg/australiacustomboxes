import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroLeftContent } from "./HeroLeftContent";
import { HeroInfiniteShowcase } from "./HeroInfiniteShowcase";
import { HeroBottomTicker } from "./HeroBottomTicker";
import { HeroMobileView } from "./HeroMobileView";

interface HeroSectionProps {
  children?: React.ReactNode;
}

/**
 * Section - HERO
 * Desktop: Exact Figma dual-conveyor tilted showcase (100% preserved)
 * Mobile (<1024px): Bespoke mobile hero with dedicated compact interactive packaging slider
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section
      id="hero"
      aria-label="Australian Custom Boxes Hero Section"
      className="w-full relative overflow-hidden bg-[#041F49] flex flex-col justify-between min-h-0 lg:min-h-[calc(100vh-162px)] h-auto 2xl:h-[1032px]"
      style={{
        backgroundColor: "#041F49",
      }}
    >
      {/* 
        1. MOBILE VIEW (Visible on screens < 1024px)
        Bespoke high-converting mobile layout with dedicated slider
      */}
      <div className="block lg:hidden w-full relative overflow-visible">
        <HeroMobileView />
      </div>

      {/* 
        2. DESKTOP VIEW (Visible on screens >= 1024px)
        100% Untouched Figma implementation with tilted dual conveyor
      */}
      <div className="hidden lg:flex w-full flex-1 relative overflow-visible items-center py-2 sm:py-3 lg:py-4">
        {/* 
          Left Content:
          Contained inside .site-container so it aligns with x = 276px (.site-container on desktop)
          and max-width: 555px matches Figma CSS exactly.
        */}
        <div className="site-container w-full relative z-20 pointer-events-none py-1 sm:py-2">
          <div className="w-full lg:max-w-[500px] xl:max-w-[530px] 2xl:max-w-[555px] pointer-events-auto">
            {children || <HeroLeftContent />}
          </div>
        </div>

        {/* 
          Right Tilted Dual-Conveyor Showcase:
          Exact Figma CSS: left: 807px, top: -108px, width: 976.72px, height: 1284.19px.
          Positioned at 46.5% - 47% so Column 2 aligns with the Header CTA button ("Get a Quote")
          and Column 1 provides generous clearance so left checkpoints are never clipped.
        */}
        <div className="w-full lg:w-auto lg:absolute lg:left-[46%] xl:left-[46.5%] 2xl:left-[47%] [@media(min-width:1920px)]:left-[807px] lg:top-[-60px] xl:top-[-80px] 2xl:top-[-108px] flex items-center justify-start z-10 overflow-visible pointer-events-auto mt-6 lg:mt-0">
          <HeroInfiniteShowcase />
        </div>

        {/* 
          Carousel Nav Buttons (Optional visual parity from Figma)
        */}
        <div className="hidden [@media(min-width:1920px)]:block absolute z-30 pointer-events-auto" style={{ top: "187.73px" }}>
          {/* Button - Previous box */}
          <button
            type="button"
            aria-label="Previous box"
            className="absolute w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#041F49]/70 active:scale-95"
            style={{
              left: "1518px",
              background: "rgba(4, 31, 73, 0.35)",
              border: "1px solid rgba(245, 248, 255, 0.4)",
            }}
          >
            <ChevronLeft className="w-4 h-4 text-white stroke-[2.2]" />
          </button>

          {/* Button - Next box */}
          <button
            type="button"
            aria-label="Next box"
            className="absolute w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#041F49]/70 active:scale-95"
            style={{
              left: "1570px",
              background: "rgba(4, 31, 73, 0.35)",
              border: "1px solid rgba(245, 248, 255, 0.4)",
            }}
          >
            <ChevronRight className="w-4 h-4 text-white stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* 3. Bottom Category Running Ticker Strip (Sits at the bottom of the frame) */}
      <HeroBottomTicker />
    </section>
  );
};

export default HeroSection;