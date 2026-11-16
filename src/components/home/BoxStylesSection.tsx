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
 * BoxStylesSection — Figma Group 443
 * Canvas: # 1920w light (1920px)
 * Section: width=1640px, left=0px, height=1158px
 *
 * Exact Figma proportions (all mapped to exact percentages of 1920px viewport):
 *  • Navy col (Group 431):    0 → 48.49vw (931px)   border-radius: 0 270px 0 0
 *  • Text content (Group 430): 14.51vw (278.55px), width 25.54vw (490.34px)
 *  • Gap text-to-photo:        5.00vw (96.0px)
 *  • Photo card (Group 432):   45.05vw (864.89px), width 40.37vw (775.11px)
 *    -> Photo overlaps navy by exactly 3.44vw (66.11px: 931px - 864.89px)
 *  • Photo right edge:         85.42vw (1640.0px)
 *  • Right white margin:       14.58vw (280.0px outside section)
 *  • Specs description:        starts at 981px (51.09vw) -> in white area right of navy
 */
export const BoxStylesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("01");

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white overflow-hidden"
    >
      {/* ════════════════════════════════════════════════════════════════
          MOBILE / TABLET (<lg) — Stacked card layout
         ════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-5 sm:px-8 py-10 sm:py-14">
        {/* Navy card */}
        <div className="bg-[#041F49] rounded-2xl rounded-tr-[100px] sm:rounded-tr-[140px] p-6 sm:p-9 text-white mb-6 sm:mb-8">
          <EyebrowLabel />
          <SectionHeading />
          <BodyDescription />
          <BoxStyleTabs activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
        </div>

        {/* Portrait photo card */}
        <div
          className="w-full overflow-hidden rounded-[22px] sm:rounded-[26px] bg-[#F2F0EB] relative shadow-[0_20px_60px_-10px_rgba(4,31,73,0.18)] mb-5 sm:mb-6"
          style={{ aspectRatio: "775.11 / 860" }}
        >
          <Image
            src="/images/box-styles/Two-Piece Box Style.webp"
            alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <SpecsBlock />
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP (≥lg) — Exact Figma Group 443 Layout
          • Navy background bleeds from screen left to 48.49vw (931px)
          • Left text at 14.51vw (278.55px)
          • Photo at 45.05vw (864.89px) overlapping navy curve by 66px
          • Specs under photo with text at 981px
         ════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:flex relative w-full overflow-hidden"
        style={{
          minHeight: "clamp(800px, 60.31vw, 1158px)",
          paddingTop: "clamp(50px, 4.9vw, 94px)",
          paddingBottom: "clamp(40px, 4.5vw, 86px)",
        }}
      >
        {/* Navy bleed layer: screen-left to 48.49vw (931px at 1920px) */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 pointer-events-none bg-[#041F49]"
          style={{
            left: "-100vw",
            width: "calc(100vw + 48.49vw)",
            borderRadius: "0 clamp(160px, 14.06vw, 270px) 0 0",
          }}
        />

        {/* Left Column: Group 430 (Text Content) */}
        <div
          className="relative z-10 text-white flex flex-col flex-shrink-0"
          style={{
            marginLeft: "14.51vw",
            width: "25.54vw",
          }}
        >
          <EyebrowLabel />
          <SectionHeading />
          <BodyDescription />
          <BoxStyleTabs activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
        </div>

        {/* Right Column: Group 432 (Photo Card + Specs) */}
        <div
          className="relative z-20 flex flex-col flex-shrink-0"
          style={{
            marginLeft: "5.0vw",
            width: "40.37vw",
            marginRight: "14.58vw",
          }}
        >
          {/* Portrait photo card — Figma: 775.11px wide, border-radius 30px */}
          <div
            className="w-full overflow-hidden bg-[#F2F0EB] relative shadow-[0_20px_60px_-10px_rgba(4,31,73,0.18)]"
            style={{
              aspectRatio: "775.11 / 860",
              borderRadius: "clamp(18px, 1.56vw, 30px)",
            }}
          >
            <Image
              src="/images/box-styles/Two-Piece Box Style.webp"
              alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
              fill
              sizes="(max-width: 1280px) 42vw, (max-width: 1536px) 41vw, 775px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Specs block below photo */}
          <SpecsBlock />
        </div>
      </div>
    </section>
  );
};

/* ══ Reusable sub-components ══════════════════════════════════════════════ */

function EyebrowLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-3 xl:mb-4 select-none">
      <div
        className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 flex-shrink-0"
        aria-hidden="true"
      />
      <span
        className="text-[11px] xl:text-[11.5px] font-semibold uppercase tracking-[2.6px] xl:tracking-[2.765px] text-[rgba(245,248,255,0.66)]"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          lineHeight: "19px",
        }}
      >
        BOX STYLES
      </span>
    </div>
  );
}

function SectionHeading() {
  return (
    <h2
      id="box-styles-heading"
      className="font-light text-white mb-4 xl:mb-5"
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(30px, 3.33vw, 64px)",
        letterSpacing: "clamp(-1.2px, -0.117vw, -2.24px)",
        lineHeight: "1.02",
      }}
    >
      Packaging
      <br />
      designed around
      <br />
      <span
        className="italic text-[#F2B329]"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontWeight: 300,
        }}
      >
        your brand.
      </span>
    </h2>
  );
}

function BodyDescription() {
  return (
    <p
      className="font-[350] text-[rgba(245,248,255,0.66)] leading-[1.6] mb-6 xl:mb-8"
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontSize: "clamp(13px, 1.015vw, 19.5px)",
        maxWidth: "490px",
      }}
    >
      From luxury rigid boxes to everyday shipping mailers, we build custom
      designed boxes that protect your product and make the first impression
      count. Pick a structure below, then we&apos;ll size it, print it and
      finish it to suit.
    </p>
  );
}

function BoxStyleTabs({
  activeTabId,
  setActiveTabId,
}: {
  activeTabId: string;
  setActiveTabId: (id: string) => void;
}) {
  return (
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
            className={`w-full border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group ${
              isActive ? "text-white" : "text-[rgba(245,248,255,0.66)] hover:text-white"
            }`}
            style={{ height: "clamp(46px, 3.78vw, 72.7px)" }}
          >
            <div className="flex items-center min-w-0 pr-2">
              <span
                className={`flex-shrink-0 transition-colors ${
                  isActive ? "text-white" : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                }`}
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.72px",
                  width: "clamp(24px, 2vw, 32px)",
                }}
              >
                {item.num}
              </span>
              <span
                className={`truncate transition-colors ${
                  isActive ? "text-white font-light" : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                }`}
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(14px, 1.083vw, 20.8px)",
                  letterSpacing: "-0.416px",
                  lineHeight: "34px",
                  paddingLeft: "clamp(12px, 1.5vw, 28px)",
                }}
              >
                {item.title}
              </span>
            </div>

            {/* Gold arrow — only visible on active tab */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`flex-shrink-0 transition-all duration-200 ${
                isActive
                  ? "opacity-100"
                  : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
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
  );
}

function SpecsBlock() {
  return (
    <div className="mt-5 lg:mt-6 xl:mt-7 flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-6">
      {/* Left: description — pl-[15%] on lg ensures text starts at ~981px in white space */}
      <p
        className="text-black font-normal lg:pl-[15%]"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontSize: "clamp(13px, 0.818vw, 15.7px)",
          lineHeight: "25px",
          maxWidth: "400px",
        }}
      >
        A separate lid and base in wrapped rigid board. The classic for
        jewellery, watches and gift sets.
      </p>

      {/* Right: spec rows */}
      <div className="flex-shrink-0 space-y-2 xl:space-y-2.5">
        {[
          { label: "BOARD", value: "Rigid greyboard, paper wrapped" },
          { label: "BEST FOR", value: "Jewellery, watches, gift sets" },
          { label: "ADD", value: "Foil, insert, ribbon" },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-baseline gap-3 xl:gap-4">
            <span
              className="font-semibold text-[#F2B329] uppercase flex-shrink-0"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "10.6px",
                letterSpacing: "2.112px",
                lineHeight: "17px",
                width: "68px",
              }}
            >
              {label}
            </span>
            <span
              className="text-black font-normal"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(12px, 0.734vw, 14.1px)",
                lineHeight: "23px",
              }}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxStylesSection;
