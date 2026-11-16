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
 * Exact 1:1 Implementation of Figma Master Blueprint (Group 443 | 1640px x 1158px | # 1920w light):
 * - Group 431 (Navy Container):
 *     width: 931px (desktop bleed to left: 0px),
 *     background: #041F49,
 *     border-radius: 0px 270px 0px 0px;
 * - Group 430 (Content Block):
 *     width: 490.34px, left: 278.55px (aligned with 280px master grid).
 *     Eyebrow: ◆ BOX STYLES (Libre Franklin 600, 11.5px, tracking 2.765px, rgba(245,248,255,0.66))
 *     Heading: Packaging / designed around / your brand. (Libre Franklin 300 64px, italic gold #F2B329)
 *     Description: Libre Franklin 350, 19.5px, line-height 31px, rgba(245,248,255,0.66)
 *     Tablist: 7 items, 72.69px row height, border rgba(245,248,255,0.14),
 *              01 Two-Piece Box Style active with gold arrow SVG (#F2B329).
 * - Group 432 (Right Showcase Card & Specs):
 *     left: 864.89px, width: 775.11px, right: 280px margin on 1920w canvas.
 *     border-radius: 30px (rounded-[30px]).
 *     Image: Two-Piece Box Style.webp (FIXED - no unwanted box swapping).
 *     Specs Description (left): "A separate lid and base in wrapped rigid board. The classic for jewellery, watches and gift sets."
 *     Specs List (right):
 *       BOARD: Rigid greyboard, paper wrapped
 *       BEST FOR: Jewellery, watches, gift sets
 *       ADD: Foil, insert, ribbon
 *       (Terms in Libre Franklin 600 #F2B329 10.6px uppercase, Values in 14.1px #000000).
 */
export const BoxStylesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("01");

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24 border-b border-[#E5EBF5]"
    >
      <div className="w-full max-w-[1920px] mx-auto relative">
        {/* =========================================================
            DESKTOP NAVY BACKGROUND BLEED (Group 431 in Figma)
            Bleeds from screen left edge (0px) to 931px with signature
            top-right 270px radius curve.
           ========================================================= */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 left-0 bg-[#041F49] rounded-tr-[270px] z-0 pointer-events-none"
          style={{
            width: "calc((100% - 1360px) / 2 + 651px)",
            minWidth: "50%",
            maxWidth: "931px",
          }}
          aria-hidden="true"
        />

        {/* =========================================================
            MASTER BALANCED CONTAINER:
            Left content margin: ~280px | Right content margin: ~280px
           ========================================================= */}
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-[280px] relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-8 xl:gap-12">
            {/* =========================================================
                LEFT COLUMN: Dark Navy (#041F49) Content & 7 Tab Styles
                (Group 430 in Figma: width 490.34px, left 278.55px)
               ========================================================= */}
            <div className="w-full lg:w-[490px] xl:w-[490px] shrink-0 bg-[#041F49] lg:bg-transparent rounded-2xl lg:rounded-none rounded-tr-[120px] sm:rounded-tr-[180px] p-6 sm:p-10 lg:p-0 text-white shadow-2xl lg:shadow-none">
              {/* 1. Eyebrow: ◆ BOX STYLES */}
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5 select-none pt-1">
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
                className="text-[36px] sm:text-[48px] lg:text-[54px] xl:text-[64px] font-light text-white tracking-[-1.5px] xl:tracking-[-2.24px] leading-[1.05] xl:leading-[65px] mb-5 xl:mb-6"
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
                className="text-[15px] sm:text-[17px] xl:text-[19.5px] font-[350] text-[rgba(245,248,255,0.66)] leading-[1.6] xl:leading-[31px] mb-8 xl:mb-10 max-w-[490px]"
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
                      className={`w-full h-[58px] sm:h-[66px] xl:h-[72.7px] border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group ${
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
                          className={`pl-4 sm:pl-7 xl:pl-8 text-[16px] sm:text-[18px] xl:text-[20.8px] truncate transition-colors ${
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
                RIGHT COLUMN: Fixed Two-Piece Box Style Showcase Photo Card
                + Specifications Block (Group 432 & 429 in Figma)
               ========================================================= */}
            <div className="w-full lg:max-w-[775px] flex flex-col items-start shrink-0">
              {/* 1. Photo Card: border-radius: 30px (Figma exact) */}
              <div className="w-full aspect-[4/3] sm:aspect-[1.15/1] lg:aspect-[775/680] xl:aspect-[775/720] 2xl:h-[760px] rounded-[24px] sm:rounded-[30px] overflow-hidden bg-[#F2F0EB] relative shadow-[0_20px_50px_-10px_rgba(4,31,73,0.14)] border border-[#E5EBF5]/80">
                <Image
                  src="/images/box-styles/Two-Piece Box Style.webp"
                  alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
                  fill
                  sizes="(max-width: 1024px) 100vw, 775px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* 2. Specifications Block below image (Figma exact coordinates) */}
              <div className="mt-6 sm:mt-8 xl:mt-9 w-full flex flex-col sm:flex-row items-start justify-between gap-6 sm:gap-8 px-1">
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
      </div>
    </section>
  );
};

export default BoxStylesSection;
