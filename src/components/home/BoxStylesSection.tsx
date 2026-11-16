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
 * Exact 1:1 Implementation of Figma Screenshot (Group 443):
 * - Left Column: Dark Navy (#041F49) Card with signature top-right sweep curve (rounded-tr-[160px] to [240px]),
 *   Eyebrow, 3-line Headline, Description, and 7 Box Styles tab list with 01 Two-Piece Box Style active.
 * - Right Column: Fixed Two-Piece Box Style showcase photo card (30px border-radius) + Specifications block below
 *   (Rigid greyboard, jewellery/watches, foil/insert/ribbon).
 * - Equal Left and Right Spacing: Balanced master container across desktop and mobile.
 */
export const BoxStylesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("01");

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 xl:py-24 border-b border-[#E5EBF5] shadow-[0_8px_30px_-6px_rgba(4,31,73,0.06)] relative z-10"
    >
      {/* Balanced Master Container: Equal Left and Right Spacing */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* =========================================================
              LEFT COLUMN: Dark Navy (#041F49) Card with Signature Curve
             ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 bg-[#041F49] rounded-2xl lg:rounded-[32px] rounded-tr-[120px] sm:rounded-tr-[160px] lg:rounded-tr-[200px] xl:rounded-tr-[240px] p-6 sm:p-10 lg:p-10 xl:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5 select-none">
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

            {/* 2. Heading: Libre Franklin 300 */}
            <h2
              id="box-styles-heading"
              className="text-[34px] sm:text-[44px] lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-light text-white tracking-[-1.5px] xl:tracking-[-2px] leading-[1.08] xl:leading-[1.05] mb-5 xl:mb-6"
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

            {/* 3. Description */}
            <p
              className="text-[14px] sm:text-[15.5px] xl:text-[17px] 2xl:text-[18px] font-[350] text-[rgba(245,248,255,0.66)] leading-[1.6] mb-7 xl:mb-9 max-w-[460px]"
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

            {/* 4. 7-Item Box Styles Selector (Matching Figma Exactly) */}
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
                    className={`w-full h-[54px] sm:h-[62px] xl:h-[68px] border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group ${
                      isActive
                        ? "text-white"
                        : "text-[rgba(245,248,255,0.66)] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center min-w-0 pr-2">
                      <span
                        className={`w-6 sm:w-8 text-[12px] shrink-0 transition-colors ${
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

          {/* =========================================================
              RIGHT COLUMN: Fixed Showcase Photo Card + Specifications Table
              (Exact Two-Piece Box Style from Figma)
             ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start w-full relative">
            {/* Top Showcase Photo Card (Figma border-radius: 30px) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.18/1] lg:aspect-[1.15/1] xl:aspect-[775/650] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#F2F0EB] shadow-[0_20px_50px_-10px_rgba(4,31,73,0.14)] border border-[#E5EBF5]">
              <Image
                src="/images/box-styles/Two-Piece Box Style.webp"
                alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Bottom Specifications Block (Figma Group 432 & 429) */}
            <div className="mt-6 sm:mt-8 xl:mt-9 flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8 px-1 sm:px-2">
              {/* Left Description Paragraph */}
              <div className="max-w-[340px] xl:max-w-[380px]">
                <p
                  className="text-[14.5px] sm:text-[15.7px] text-[#000000] font-normal leading-[25px]"
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
              <div className="w-full sm:w-auto min-w-[260px] sm:min-w-[300px] space-y-3 shrink-0">
                {/* Row 1: BOARD */}
                <div className="flex items-baseline gap-5">
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
                    className="text-[14.1px] font-normal text-[#000000] leading-[23px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    Rigid greyboard, paper wrapped
                  </span>
                </div>

                {/* Row 2: BEST FOR */}
                <div className="flex items-baseline gap-5">
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
                    className="text-[14.1px] font-normal text-[#000000] leading-[23px]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    Jewellery, watches, gift sets
                  </span>
                </div>

                {/* Row 3: ADD */}
                <div className="flex items-baseline gap-5">
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
                    className="text-[14.1px] font-normal text-[#000000] leading-[23px]"
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
