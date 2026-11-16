"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface BoxStyleItem {
  id: string;
  num: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  board: string;
  bestFor: string;
  add: string;
}

export const boxStylesData: BoxStyleItem[] = [
  {
    id: "two-piece",
    num: "01",
    title: "Two-Piece Box Style",
    image: "/images/box-styles/two-piece-box-style.webp",
    alt: "Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging",
    description:
      "A separate lid and base in wrapped rigid board. The classic for jewellery, watches and gift sets.",
    board: "Rigid greyboard, paper wrapped",
    bestFor: "Jewellery, watches, gift sets",
    add: "Foil, insert, ribbon",
  },
  {
    id: "gable-box",
    num: "02",
    title: "Gable Box Style",
    image: "/images/box-styles/gable-box-style.webp",
    alt: "Custom Gable Box Style with Built-in Handle for Takeaways and Events",
    description:
      "Convenient integrated carry handle on top with auto-locking bottom. Ideal for food, takeaways and event hampers.",
    board: "Corrugated E-flute or Kraft paperboard",
    bestFor: "Takeaways, bakery, event hampers",
    add: "Window cutout, custom handles",
  },
  {
    id: "tuck-top",
    num: "03",
    title: "Tuck Top Box Style",
    image: "/images/box-styles/tuck-top-box-style.webp",
    alt: "Custom Tuck Top Box Style for Retail Products",
    description:
      "Classic tuck-top folding carton for retail displays and lightweight merchandise. Simple, clean, and quick to pack.",
    board: "SBS paperboard or recycled kraft",
    bestFor: "Cosmetics, candles, pharmaceuticals",
    add: "Embossing, spot UV, matte lamination",
  },
  {
    id: "6-corners",
    num: "04",
    title: "6 Corners Box Styles",
    image: "/images/box-styles/6-corners-box-style.webp",
    alt: "Custom 6 Corners Box Style with Attached Hinged Lid",
    description:
      "Collapsible pre-glued tray with attached lid that pops open instantly. Heavy-duty presentation for bulk bakery and gift packs.",
    board: "Heavy kraft or folding boxboard",
    bestFor: "Donuts, apparel, luxury patisserie",
    add: "Window patch, greaseproof lining",
  },
  {
    id: "mailer-box",
    num: "05",
    title: "Mailer Box Style",
    image: "/images/box-styles/mailer-box-style.webp",
    alt: "Custom Mailer Box Style for E-commerce Postal Shipping",
    description:
      "Tuck-front corrugated shipping box engineered to withstand postal transit and deliver an unforgettable branded unboxing experience.",
    board: "Corrugated flute (E-flute, B-flute)",
    bestFor: "E-commerce, subscription boxes, PR kits",
    add: "Inside printing, custom foam insert",
  },
  {
    id: "auto-lock",
    num: "06",
    title: "Auto Lock Box Style",
    image: "/images/box-styles/auto-lock-box-style.webp",
    alt: "Custom Auto Lock Bottom Box Style for Fast Packing",
    description:
      "Bottom automatically snaps into locked position in one movement, dramatically speeding up high-volume packing operations.",
    board: "Corrugated board or rigid paperboard",
    bestFor: "Heavy retail goods, bottles, wholesale",
    add: "Reinforced base, security tape",
  },
  {
    id: "hang-tab",
    num: "07",
    title: "Hang Tab Box Style",
    image: "/images/box-styles/hang-tab-box-style.webp",
    alt: "Custom Hang Tab Box Style with Hanging Slot for Retail Peg Hooks",
    description:
      "Retail hanging packaging featuring a punched Euro-hole or delta tab for high visibility on retail peg-hook displays.",
    board: "SBS paperboard with gloss or matte finish",
    bestFor: "Accessories, cosmetics, retail peg items",
    add: "Clear acetate window, foil stamping",
  },
];

/**
 * BoxStylesSection
 * "Packaging designed around your brand."
 * Positioned directly below the Free Quote Form Section.
 * Fully responsive across Mobile, Tablet, Laptop, and Large Desktop viewports:
 * - Desktop: Full-bleed Navy (#041F49) container extending to the screen's left edge,
 *            with the exact Figma 270px top-right curve (rounded-tr-[270px]),
 *            Libre Franklin 300 64px typography, and 72.69px interactive tab rows.
 * - Mobile / Tablet: Refined dark navy card with signature top-right curve (rounded-tr-[90px] sm:rounded-tr-[140px]),
 *                    breathable padding, touch-friendly tab selectors, and active state indicators.
 * - Right Showcase: 30px rounded photo card with smooth dynamic image swap and structured specs table.
 */
export const BoxStylesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("two-piece");

  const activeItem =
    boxStylesData.find((item) => item.id === activeId) || boxStylesData[0];

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white relative overflow-hidden border-b border-[#E5EBF5] shadow-[0_8px_30px_-6px_rgba(4,31,73,0.06)] z-10"
    >
      <div className="site-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start py-10 sm:py-16 lg:py-[96px]">
          {/* =========================================================
              LEFT COLUMN: Full-Bleed Dark Navy (#041F49) on Desktop
             ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            {/* Desktop Full-Bleed Navy Background extending from screen's left edge */}
            <div
              className="hidden lg:block absolute -top-[96px] -bottom-[96px] -left-[100vw] -right-8 xl:-right-12 2xl:-right-16 bg-[#041F49] rounded-tr-[200px] xl:rounded-tr-[240px] 2xl:rounded-tr-[270px] z-0 pointer-events-none"
              aria-hidden="true"
            />
            {/* Mobile / Tablet Navy Card Background */}
            <div
              className="lg:hidden absolute inset-0 bg-[#041F49] rounded-2xl rounded-tr-[90px] sm:rounded-tr-[140px] z-0 pointer-events-none shadow-xl"
              aria-hidden="true"
            />

            {/* Left Content Lockup (Figma Group 430) */}
            <div className="relative z-10 p-5 sm:p-8 lg:p-0 max-w-[490.34px] mx-auto lg:mx-0">
              {/* 1. Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-5 select-none">
                <div
                  className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
                  aria-hidden="true"
                />
                <span
                  className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[rgba(245,248,255,0.66)]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    lineHeight: "19px",
                  }}
                >
                  BOX STYLES
                </span>
              </div>

              {/* 2. Heading: Libre Franklin 300, Fluid scale from mobile to 64px desktop */}
              <h2
                id="box-styles-heading"
                className="text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[56px] 2xl:text-[64px] font-light text-white tracking-[-1.2px] sm:tracking-[-1.6px] xl:tracking-[-2.24px] leading-[1.08] xl:leading-[65px] mb-4 sm:mb-6 xl:mb-7"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontWeight: 300,
                }}
              >
                Packaging
                <br />
                designed around
                <br />
                <span
                  className="italic text-[#F2B329]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  your brand.
                </span>
              </h2>

              {/* 3. Description: Libre Franklin 350, Fluid scale from mobile to 19.5px */}
              <p
                className="text-[13.5px] sm:text-[15px] xl:text-[19.5px] font-[350] text-[rgba(245,248,255,0.66)] leading-[1.6] xl:leading-[31px] mb-6 sm:mb-8 xl:mb-11 max-w-[490px]"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                }}
              >
                From luxury rigid boxes to everyday shipping mailers, we build
                custom designed boxes that protect your product and make the
                first impression count. Pick a structure below, then we&apos;ll
                size it, print it and finish it to suit.
              </p>

              {/* 4. Interactive 7-Item Box Styles Selector (Figma Tablist) */}
              <div
                role="tablist"
                aria-label="Box styles selector"
                className="w-full max-w-[488.89px] border-t border-[rgba(245,248,255,0.14)]"
              >
                {boxStylesData.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveId(item.id)}
                      onMouseEnter={() => setActiveId(item.id)}
                      className={`w-full h-[52px] sm:h-[62px] xl:h-[72.69px] border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group px-1 sm:px-0 ${
                        isActive
                          ? "text-white bg-white/[0.04] sm:bg-transparent rounded-lg sm:rounded-none px-2 sm:px-0"
                          : "text-[rgba(245,248,255,0.66)] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center min-w-0 pr-2">
                        <span
                          className={`w-5 sm:w-7 text-[11px] sm:text-[12px] shrink-0 transition-colors ${
                            isActive
                              ? "text-white font-normal"
                              : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                          }`}
                          style={{
                            fontFamily:
                              "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                            letterSpacing: "0.72px",
                            lineHeight: "19px",
                          }}
                        >
                          {item.num}
                        </span>
                        <span
                          className={`pl-3 sm:pl-6 xl:pl-8 text-[14.5px] sm:text-[17px] lg:text-[18px] xl:text-[20.8px] truncate transition-colors ${
                            isActive
                              ? "text-white font-light"
                              : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                          }`}
                          style={{
                            fontFamily:
                              "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                            fontWeight: 300,
                            letterSpacing: "-0.416px",
                            lineHeight: "34px",
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Figma Gold Arrow Indicator */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-all duration-200 shrink-0 ${
                          isActive
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14"
                          stroke="#F2B329"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Action Indicator: Prompts user to view active selection below */}
              <div className="mt-4 pt-2.5 flex items-center justify-between text-white/60 text-[11.5px] lg:hidden border-t border-white/10">
                <span>
                  Selected:{" "}
                  <strong className="text-[#F2B329] font-medium">
                    {activeItem.title}
                  </strong>
                </span>
                <a
                  href="#box-styles-showcase"
                  className="text-[#F2B329] hover:underline flex items-center gap-1 font-medium"
                >
                  View mockup & specs ↓
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Showcase Photo Card + Specifications Table
             ========================================================= */}
          <div
            id="box-styles-showcase"
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start w-full max-w-[775px] mx-auto lg:mx-0 relative z-10 pt-4 lg:pt-0"
          >
            {/* Top Showcase Photo Card (Figma border-radius: 30px) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.18/1] lg:aspect-[1.12/1] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#F2F0EB] shadow-[0_20px_50px_-10px_rgba(4,31,73,0.14),0_8px_24px_-4px_rgba(4,31,73,0.06)] border border-[#E5EBF5]">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>

            {/* Bottom Specifications Block (Figma Group 432 & 429) */}
            <div className="mt-6 sm:mt-8 xl:mt-11 flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8">
              {/* Left Description Paragraph */}
              <div className="max-w-[340px] xl:max-w-[370px]">
                <p
                  className="text-[14px] sm:text-[15.7px] text-[#000000] font-normal leading-[23px] sm:leading-[25px]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  }}
                >
                  {activeItem.description}
                </p>
              </div>

              {/* Right Specifications List (BOARD, BEST FOR, ADD) */}
              <div className="w-full sm:w-auto min-w-[260px] sm:min-w-[300px] space-y-2.5 sm:space-y-3 shrink-0">
                {/* Row 1: BOARD */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-18 sm:w-20 text-[10.5px] sm:text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      letterSpacing: "2.112px",
                      lineHeight: "17px",
                    }}
                  >
                    BOARD
                  </span>
                  <span
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px] sm:leading-[23px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {activeItem.board}
                  </span>
                </div>

                {/* Row 2: BEST FOR */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-18 sm:w-20 text-[10.5px] sm:text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      letterSpacing: "2.112px",
                      lineHeight: "17px",
                    }}
                  >
                    BEST FOR
                  </span>
                  <span
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px] sm:leading-[23px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {activeItem.bestFor}
                  </span>
                </div>

                {/* Row 3: ADD */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-18 sm:w-20 text-[10.5px] sm:text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      letterSpacing: "2.112px",
                      lineHeight: "17px",
                    }}
                  >
                    ADD
                  </span>
                  <span
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px] sm:leading-[23px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {activeItem.add}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxStylesSection;
