"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface BoxStyleTab {
  id: string;
  num: string;
  title: string;
}

export const boxStylesList: BoxStyleTab[] = [
  { id: "01", num: "01", title: "Two-Piece Box Style" },
  { id: "02", num: "02", title: "Gable Box Style" },
  { id: "03", num: "03", title: "Tuck Top Box Style" },
  { id: "04", num: "04", title: "6 Corners Box Styles" },
  { id: "05", num: "05", title: "Mailer Box Style" },
  { id: "06", num: "06", title: "Auto Lock Box Style" },
  { id: "07", num: "07", title: "Hang Tab Box Style" },
];

/**
 * BoxStylesSection
 * "Packaging designed around your brand."
 * Positioned directly below the Free Quote Form Section.
 *
 * Exact 1:1 Implementation of Figma Blueprint (Group 443 | 1640px x 1158px | # 1920w light):
 * - Left Column (Group 431 & 430):
 *     Dark Navy (#041F49) bleeds to screen left edge (0px) on desktop with signature
 *     top-right curve sweep (border-radius: 0px 270px 0px 0px).
 *     Inner content aligns with master grid. Eyebrow, 3-line heading, description,
 *     and 7 box styles tabs with 01 Two-Piece Box Style active.
 * - Right Column (Group 432 & 429):
 *     Showcase Photo Card with border-radius: 30px (rounded-[30px]) fixed to Two-Piece Box Style.
 *     Clean white margin on the right balancing the left content margin.
 *     Below Photo: Specifications description on left & specifications table (BOARD, BEST FOR, ADD) on right.
 */
export const BoxStylesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("01");

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white relative overflow-hidden py-10 sm:py-14 lg:py-16 xl:py-20 border-b border-[#E5EBF5]"
    >
      <div className="w-full max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* =========================================================
              LEFT COLUMN: Dark Navy (#041F49) Background & 7 Tab Styles
              - Desktop: Bleeds to screen left edge (left: -100vw to right: 0)
                with signature 270px top-right sweep.
              - Mobile/Tablet: Stacked card with signature rounded-tr sweep.
             ========================================================= */}
          <div className="lg:col-span-5 relative">
            {/* Desktop Navy Bleed Background to left edge */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 right-0 left-[-100vw] bg-[#041F49] rounded-tr-[180px] xl:rounded-tr-[240px] 2xl:rounded-tr-[270px] z-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner Content Block */}
            <div className="relative z-10 bg-[#041F49] lg:bg-transparent rounded-2xl lg:rounded-none rounded-tr-[100px] sm:rounded-tr-[140px] p-6 sm:p-8 lg:p-0 text-white shadow-xl lg:shadow-none">
              {/* 1. Eyebrow: ◆ BOX STYLES */}
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4 select-none pt-1">
                <div
                  className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
                  aria-hidden="true"
                />
                <span
                  className="text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[rgba(245,248,255,0.66)]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    lineHeight: "19px",
                  }}
                >
                  BOX STYLES
                </span>
              </div>

              {/* 2. Heading: Libre Franklin 300, 64px line-height 65px */}
              <h2
                id="box-styles-heading"
                className="text-[32px] sm:text-[42px] lg:text-[44px] xl:text-[54px] 2xl:text-[62px] font-light text-white tracking-[-1.5px] xl:tracking-[-2.2px] leading-[1.06] xl:leading-[1.03] mb-4 sm:mb-5"
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

              {/* 3. Description: Libre Franklin 350, 19.5px, line-height 31px */}
              <p
                className="text-[13.5px] sm:text-[15px] xl:text-[17px] 2xl:text-[18.5px] font-[350] text-[rgba(245,248,255,0.66)] leading-[1.55] xl:leading-[29px] mb-6 sm:mb-8 max-w-[480px]"
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

              {/* 4. 7-Item Box Styles Tab List */}
              <div
                role="tablist"
                aria-label="Box styles selector"
                className="w-full border-t border-[rgba(245,248,255,0.14)]"
              >
                {boxStylesList.map((item) => {
                  const isActive = item.id === activeTabId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTabId(item.id)}
                      className={`w-full h-[50px] sm:h-[56px] xl:h-[64px] border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group ${
                        isActive
                          ? "text-white"
                          : "text-[rgba(245,248,255,0.66)] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center min-w-0 pr-2">
                        <span
                          className={`w-6 sm:w-8 text-[11.5px] sm:text-[12px] shrink-0 transition-colors ${
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
                          className={`pl-3 sm:pl-6 xl:pl-8 text-[15px] sm:text-[17px] xl:text-[19.5px] truncate transition-colors ${
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

                      {/* Gold Arrow SVG on Active Tab */}
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
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Showcase Photo Card + Specifications Area
              - Border Radius: 30px on photo card
              - Clean White Margin on the right matching container
              - Fixed Two-Piece Box Style Mockup (no swapping)
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            {/* 1. Photo Card (Figma exact 30px border-radius) */}
            <div className="w-full aspect-[4/3] sm:aspect-[1.18/1] lg:aspect-[1.12/1] xl:aspect-[775/680] rounded-[22px] sm:rounded-[26px] lg:rounded-[30px] overflow-hidden bg-[#F2F0EB] relative shadow-[0_20px_50px_-10px_rgba(4,31,73,0.14)] border border-[#E5EBF5]/80">
              <Image
                src="/images/box-styles/Two-Piece Box Style.webp"
                alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 58vw, 775px"
                className="object-cover"
                priority
              />
            </div>

            {/* 2. Specifications Area below image (Figma exact coordinates) */}
            <div className="mt-5 sm:mt-6 xl:mt-8 w-full flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8 px-1">
              {/* Left Description Paragraph */}
              <div className="max-w-[320px] xl:max-w-[360px]">
                <p
                  className="text-[14px] sm:text-[15.2px] text-[#000000] font-normal leading-[24px]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  }}
                >
                  A separate lid and base in wrapped rigid board. The classic
                  for jewellery, watches and gift sets.
                </p>
              </div>

              {/* Right Specifications List (BOARD, BEST FOR, ADD) */}
              <div className="w-full sm:w-auto min-w-[260px] sm:min-w-[290px] space-y-2.5 shrink-0">
                {/* Row 1: BOARD */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-20 text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
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
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    Rigid greyboard, paper wrapped
                  </span>
                </div>

                {/* Row 2: BEST FOR */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-20 text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
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
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    Jewellery, watches, gift sets
                  </span>
                </div>

                {/* Row 3: ADD */}
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span
                    className="w-20 text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
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
                    className="text-[13.5px] sm:text-[14.1px] font-normal text-[#000000] leading-[22px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    Foil, insert, ribbon
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
