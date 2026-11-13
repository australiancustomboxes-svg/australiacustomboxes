"use client";

import React from "react";
import Link from "next/link";

interface FeatureItem {
  label: string;
}

const features: FeatureItem[] = [
  { label: "No Minimum Order Quantity" },
  { label: "Fast Turnaround & Free Shipping" },
  { label: "Friendly Customer Support" },
  { label: "Easy Online Payment" },
];

// Duplicated for a seamless continuous 100% infinite marquee on mobile
const mobileLoopFeatures = [...features, ...features];

/**
 * SubHeaderBar
 * Tier 2 Header Value Proposition Bar:
 * - Desktop (>= md): Static, elegant layout aligned with .site-container
 * - Mobile (< md): Smooth, continuous horizontal infinite marquee ticker without ugly scrollbars
 */
export const SubHeaderBar: React.FC = () => {
  return (
    <div
      className="w-full border-b overflow-hidden"
      style={{
        backgroundColor: "#041F49",
        borderColor: "#F5F8FF24",
      }}
    >
      {/* 
        1. MOBILE VIEW (< md): Continuous Infinite Auto-Scrolling Marquee 
        Moves continuously across the screen smoothly, eliminates ugly browser scrollbar
      */}
      <div
        className="flex md:hidden h-[36px] w-full items-center overflow-hidden select-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div className="flex items-center gap-6 w-max animate-subbar-marquee">
          {mobileLoopFeatures.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-1.5 shrink-0"
            >
              <svg
                className="w-2 h-2 text-[#F2B329] shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="tracking-wide text-white/90 whitespace-nowrap text-[11px] font-normal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 
        2. DESKTOP VIEW (>= md): Static Row with Site Container Alignment
      */}
      <div className="hidden md:flex site-container h-[41px] items-center justify-between text-[#F5F8FF] text-[11.5px] font-normal">
        {/* Left Side: Value Propositions with Golden Diamonds */}
        <div className="flex items-center gap-5 xl:gap-7 py-1">
          {features.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 shrink-0 select-none"
            >
              <svg
                className="w-2 h-2 text-[#F2B329] shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="tracking-wide text-white/90 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Quick Action Links */}
        <div className="flex items-center gap-4 xl:gap-6 shrink-0 font-medium">
          <Link
            href="/get-a-quote"
            className="text-white/85 hover:text-[#F2B329] transition-colors tracking-wide whitespace-nowrap"
          >
            Request a quote
          </Link>

          <Link
            href="/contact-us"
            className="text-white/85 hover:text-[#F2B329] transition-colors tracking-wide whitespace-nowrap"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderBar;
