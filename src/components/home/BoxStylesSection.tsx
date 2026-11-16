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
 * BoxStylesSection — Figma Group 443 (1640px × 1158px · canvas 1920w light)
 *
 * Desktop layout (≥1024px):
 *  ┌────────────────────────────────┬──────────────────────────────────┐
 *  │  NAVY (#041F49) full-bleed     │  Photo card (portrait 775×969)   │
 *  │  left edge → 56.8% width       │  border-radius: 30px             │
 *  │  border-radius: 0 270px 0 0    │                                  │
 *  │  Content starts at 280px left  │                                  │
 *  │  ◆ BOX STYLES eyebrow          │                                  │
 *  │  Heading (64px Libre 300)      │                                  │
 *  │  Description (19.5px 350)      │                                  │
 *  │  7 × Tab rows (72px each)      ├────────────────┬─────────────────┤
 *  │                                │ Spec desc left │ BOARD / ADD     │
 *  └────────────────────────────────┴────────────────┴─────────────────┘
 *
 * Photo card is PORTRAIT — height ≈ 1.25 × width (Figma: 775 × 969 px).
 */
export const BoxStylesSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("01");

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      /* White background; overflow-hidden to clip the left bleed pseudo-element */
      className="w-full bg-white overflow-hidden border-b border-[#E5EBF5]"
    >
      {/*
        Outer wrapper — full viewport width, centered content up to 1920px.
        On desktop we use a 12-col grid. The left col has a navy bleed that
        extends all the way to the screen's left edge.
      */}
      <div className="max-w-[1920px] mx-auto">
        {/* ── MOBILE: stacked card ─────────────────────────────────────── */}
        <div className="lg:hidden px-4 sm:px-6 py-10 sm:py-14">
          {/* Mobile Navy card */}
          <div className="bg-[#041F49] rounded-2xl rounded-tr-[100px] sm:rounded-tr-[140px] p-6 sm:p-8 text-white mb-6 sm:mb-8">
            <Eyebrow />
            <Heading />
            <Description />
            <TabList activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
          </div>
          {/* Mobile photo + specs */}
          <PhotoCard />
          <SpecsArea />
        </div>

        {/* ── DESKTOP: side-by-side ────────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:items-start">

          {/* ── LEFT COL (navy, 5/12 ≈ 490px text in 1640px canvas) ──── */}
          {/*
            The navy background must cover from x=0 (screen left edge) to
            ~56.8% of the total section width, with 270px top-right radius.
            We achieve this by giving the col "relative" and placing an
            absolute navy layer that bleeds to the left via left:-100vw.
            Content has padding-left that aligns with the site grid (~280px
            on a 1920px viewport → xl:pl-[280px] approximated below).
          */}
          <div className="lg:col-span-5 relative self-stretch">
            {/* Navy background bleed layer */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 left-[-100vw] bg-[#041F49] rounded-tr-[180px] xl:rounded-tr-[240px] 2xl:rounded-tr-[270px] z-0"
            />
            {/* Content on top of navy */}
            <div className="relative z-10 text-white
              py-10 xl:py-14 2xl:py-20
              pl-6 sm:pl-10 lg:pl-12 xl:pl-16 2xl:pl-[280px]
              pr-4 lg:pr-6 xl:pr-8"
            >
              <Eyebrow />
              <Heading />
              <Description />
              <TabList activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
            </div>
          </div>

          {/* ── RIGHT COL (photo + specs, 7/12) ──────────────────────── */}
          {/*
            Photo card: portrait aspect 775:969 (w:h ≈ 0.8:1).
            Specs area below the card, in the white section background.
            Right side has padding matching the left content margin (~280px).
          */}
          <div className="lg:col-span-7
            py-10 xl:py-14 2xl:py-20
            pr-6 sm:pr-10 lg:pr-8 xl:pr-12 2xl:pr-[280px]
            pl-4 lg:pl-6 xl:pl-8
            flex flex-col"
          >
            {/* Portrait photo card — Figma border-radius: 30px */}
            <div
              className="w-full overflow-hidden rounded-[22px] xl:rounded-[30px] bg-[#F2F0EB] relative shadow-[0_20px_60px_-10px_rgba(4,31,73,0.18)]"
              style={{ aspectRatio: "775 / 969" }}
            >
              <Image
                src="/images/box-styles/Two-Piece Box Style.webp"
                alt="Custom Two-Piece Rigid Box Style with Gold Tray for Jewellery and Luxury Packaging"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 55vw, (max-width: 1536px) 50vw, 775px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Specs below photo (white area) */}
            <SpecsArea />
          </div>

        </div>
      </div>
    </section>
  );
};

/* ── Sub-components ─────────────────────────────────────────────────────── */

function Eyebrow() {
  return (
    <div className="flex items-center gap-2.5 mb-3 xl:mb-4 select-none">
      <div
        className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
        aria-hidden="true"
      />
      <span
        className="text-[11px] xl:text-[11.5px] font-semibold uppercase tracking-[2.6px] xl:tracking-[2.765px] text-[rgba(245,248,255,0.66)]"
        style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", lineHeight: "19px" }}
      >
        BOX STYLES
      </span>
    </div>
  );
}

function Heading() {
  return (
    <h2
      id="box-styles-heading"
      className="text-[32px] sm:text-[40px] lg:text-[42px] xl:text-[52px] 2xl:text-[62px] font-light text-white tracking-[-1.5px] xl:tracking-[-2.24px] leading-[1.06] xl:leading-[1.04] mb-4 xl:mb-5"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", fontWeight: 300 }}
    >
      Packaging
      <br />
      designed around
      <br />
      <span
        className="italic text-[#F2B329]"
        style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", fontWeight: 300 }}
      >
        your brand.
      </span>
    </h2>
  );
}

function Description() {
  return (
    <p
      className="text-[13.5px] sm:text-[14.5px] xl:text-[17px] 2xl:text-[19px] font-[350] text-[rgba(245,248,255,0.66)] leading-[1.6] xl:leading-[29px] 2xl:leading-[31px] mb-6 xl:mb-8 max-w-[480px]"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      From luxury rigid boxes to everyday shipping mailers, we build custom
      designed boxes that protect your product and make the first impression
      count. Pick a structure below, then we&apos;ll size it, print it and
      finish it to suit.
    </p>
  );
}

function TabList({
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
            className={`w-full h-[50px] sm:h-[56px] xl:h-[64px] 2xl:h-[72px] border-b border-[rgba(245,248,255,0.14)] flex items-center justify-between text-left transition-colors duration-200 cursor-pointer group ${
              isActive ? "text-white" : "text-[rgba(245,248,255,0.66)] hover:text-white"
            }`}
          >
            <div className="flex items-center min-w-0 pr-2">
              <span
                className={`w-6 xl:w-8 text-[11.5px] xl:text-[12px] shrink-0 transition-colors ${
                  isActive ? "text-white" : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", letterSpacing: "0.72px" }}
              >
                {item.num}
              </span>
              <span
                className={`pl-4 xl:pl-7 text-[14.5px] sm:text-[16px] xl:text-[19px] 2xl:text-[20.8px] truncate transition-colors ${
                  isActive ? "text-white font-light" : "text-[rgba(245,248,255,0.66)] group-hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", fontWeight: 300, letterSpacing: "-0.416px", lineHeight: "34px" }}
              >
                {item.title}
              </span>
            </div>
            {/* Gold arrow — visible only on active tab */}
            <svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`shrink-0 transition-all duration-200 ${
                isActive ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
              }`}
              aria-hidden="true"
            >
              <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14" stroke="#F2B329" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}

function PhotoCard() {
  return (
    <div
      className="w-full overflow-hidden rounded-[22px] sm:rounded-[26px] bg-[#F2F0EB] relative shadow-[0_20px_60px_-10px_rgba(4,31,73,0.18)] mb-5 sm:mb-6"
      style={{ aspectRatio: "775 / 969" }}
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
  );
}

function SpecsArea() {
  return (
    <div className="mt-5 xl:mt-7 flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-6">
      {/* Left: description */}
      <p
        className="text-[13.5px] sm:text-[14.5px] xl:text-[15.7px] text-black font-normal leading-[23px] xl:leading-[25px] max-w-[300px] xl:max-w-[340px]"
        style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
      >
        A separate lid and base in wrapped rigid board. The classic for
        jewellery, watches and gift sets.
      </p>

      {/* Right: specs table */}
      <div className="space-y-2 xl:space-y-3 shrink-0">
        {[
          { label: "BOARD", value: "Rigid greyboard, paper wrapped" },
          { label: "BEST FOR", value: "Jewellery, watches, gift sets" },
          { label: "ADD", value: "Foil, insert, ribbon" },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-baseline gap-3 sm:gap-4">
            <span
              className="w-[68px] xl:w-[76px] text-[9.5px] xl:text-[10.6px] font-semibold text-[#F2B329] uppercase shrink-0"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", letterSpacing: "2.112px", lineHeight: "17px" }}
            >
              {label}
            </span>
            <span
              className="text-[13px] xl:text-[14.1px] font-normal text-black leading-[22px] xl:leading-[23px]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
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
