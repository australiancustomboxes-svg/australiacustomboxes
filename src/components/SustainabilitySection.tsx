"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface SustainabilityCardItem {
  id: string;
  name: string;
  caption: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  bgColor: string;
  isTaller?: boolean;
}

const archCards: SustainabilityCardItem[] = [
  {
    id: "natural-kraft",
    name: "Natural Kraft",
    caption: "UNBLEACHED",
    image: "/images/sustainability/natural-kraft.jpg",
    alt: "Natural Kraft unbleached custom cardboard packaging box",
    width: 302,
    height: 305,
    bgColor: "#DDE8DC",
  },
  {
    id: "paperboard",
    name: "Paperboard",
    caption: "LIGHTWEIGHT",
    image: "/images/sustainability/paperboard.jpg",
    alt: "Lightweight recyclable paperboard packaging box",
    width: 280,
    height: 360,
    bgColor: "#C9B8E8",
    isTaller: true,
  },
  {
    id: "corrugated",
    name: "Corrugated",
    caption: "RECYCLABLE",
    image: "/images/sustainability/corrugated.jpg",
    alt: "Recyclable corrugated cardboard shipping box",
    width: 311,
    height: 305,
    bgColor: "#D4EFE4",
  },
];

const checklistRows = [
  { left: "Recyclable materials", right: "Corrugated cardboard" },
  { left: "Natural kraft", right: "Soy-based inks" },
  { left: "Paperboard", right: "Rigid stock" },
  { left: "Plastic-free inserts", right: "Right-sized boxes, less void fill" },
];

export const SustainabilitySection: React.FC = () => {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-heading"
      className="w-full bg-white relative overflow-hidden"
    >
      {/* ════════════════════════════════════════════════════════════════
          MOBILE / TABLET (<1024px)
         ════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-4 sm:px-6 py-10 sm:py-14">
        {/* Horizontal scrollable row of arch cards: smooth touch scroll without clipping */}
        <div className="flex items-end justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto pb-6 mb-6 pt-2 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {archCards.map((card) => {
            const aspect = card.isTaller ? "aspect-[280/360]" : "aspect-[302/305]";
            const maxW = card.isTaller ? "w-[130px] sm:w-[160px]" : "w-[138px] sm:w-[172px]";

            return (
              <div key={card.id} className={`flex flex-col items-center flex-shrink-0 snap-center ${maxW}`}>
                <div
                  className={`relative w-full ${aspect} rounded-t-[999px] overflow-hidden shadow-[0_12px_28px_rgba(4,31,73,0.14)]`}
                  style={{ backgroundColor: card.bgColor }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 140px, 180px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/12 pointer-events-none" aria-hidden="true" />
                </div>

                <div className="mt-2.5 text-center select-none">
                  <span
                    className="block font-semibold text-[#0B1527] text-[13px] sm:text-[14px] leading-tight"
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {card.name}
                  </span>
                  <span
                    className="block text-[10px] sm:text-[11px] text-[#4A5568] tracking-[0.15em] uppercase mt-0.5"
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {card.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navy Content Card */}
        <div className="bg-[#0A3974] rounded-tl-[80px] sm:rounded-tl-[120px] rounded-2xl p-6 sm:p-10 text-white shadow-xl">
          <EyebrowRow />
          <HeadingText isMobile />
          <ParagraphText isMobile />
          <ChecklistRows isMobile />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP (≥1024px, Designed at 1920px artboard)
         ════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex w-full items-stretch min-h-[729px] relative justify-between">
        {/* LEFT cluster: 3 arch cards bottom-aligned, overlapping navy panel by ~31px */}
        <div
          className="relative z-10 flex items-end flex-shrink-0 self-end -mr-[31px]"
          style={{
            paddingLeft: "clamp(32px, 6.3vw, 121px)",
            paddingBottom: "clamp(60px, 11.35vw, 218px)",
            gap: "clamp(12px, 0.833vw, 16px)",
          }}
        >
          {archCards.map((card) => {
            // Pixel-perfect proportions at 1920px, responsive down to 1024px
            const widthStyle = card.isTaller
              ? "clamp(170px, 14.58vw, 280px)"
              : card.id === "corrugated"
              ? "clamp(190px, 16.2vw, 311px)"
              : "clamp(185px, 15.73vw, 302px)";

            const heightStyle = card.isTaller
              ? "clamp(220px, 18.75vw, 360px)"
              : "clamp(185px, 15.88vw, 305px)";

            return (
              <div key={card.id} className="flex flex-col items-center flex-shrink-0">
                {/* Arch Card Container: rounded-t-[999px] */}
                <div
                  className="rounded-t-[999px] overflow-hidden relative shadow-[0_16px_36px_-6px_rgba(4,31,73,0.18)]"
                  style={{
                    width: widthStyle,
                    height: heightStyle,
                    backgroundColor: card.bgColor,
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1440px) 18vw, 311px"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle dark overlay per spec */}
                  <div className="absolute inset-0 bg-black/12 pointer-events-none" aria-hidden="true" />
                </div>

                {/* Under each arch: centered label with gap ≈ 12px */}
                <div className="mt-[12px] text-center select-none">
                  <span
                    className="block font-semibold text-[#0B1527] leading-snug"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      fontSize: "clamp(12.5px, 0.73vw, 14px)",
                      fontWeight: 600,
                    }}
                  >
                    {card.name}
                  </span>
                  <span
                    className="block text-[#4A5568] uppercase mt-0.5 tracking-[0.15em]"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      fontSize: "clamp(10px, 0.57vw, 11px)",
                    }}
                  >
                    {card.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT navy panel: flex-1, bg-navy, rounded-tl-[290px], full bleed to right */}
        <div
          className="flex-1 bg-[#0A3974] rounded-tl-[160px] xl:rounded-tl-[220px] 2xl:rounded-tl-[290px] min-h-[729px] flex flex-col justify-center text-white"
          style={{
            paddingLeft: "clamp(72px, 9.27vw, 178px)",
            paddingTop: "clamp(48px, 3.54vw, 68px)",
            paddingRight: "clamp(40px, 6.82vw, 131px)",
            paddingBottom: "clamp(48px, 3.54vw, 68px)",
          }}
        >
          <div className="max-w-[700px]">
            <EyebrowRow />
            <HeadingText />
            <ParagraphText />
            <ChecklistRows />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══ Sub-Components ═══════════════════════════════════════════════════════ */

function EyebrowRow() {
  return (
    <div className="flex items-center gap-[13px] select-none">
      {/* 7px gold square rotated 45deg */}
      <div className="w-[7px] h-[7px] bg-[#F6CA65] rotate-45 flex-shrink-0" aria-hidden="true" />
      <span
        className="text-[11.5px] font-semibold uppercase text-white/80"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontWeight: 600,
          lineHeight: "19px",
          letterSpacing: "2.765px", // 0.24em
        }}
      >
        SUSTAINABILITY
      </span>
    </div>
  );
}

function HeadingText({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <h2
        id="sustainability-heading-mobile"
        className="font-light text-white leading-[1.08] mt-4 mb-4"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontSize: "clamp(30px, 7vw, 44px)",
          letterSpacing: "-1.2px",
          fontWeight: 300,
        }}
      >
        Better packaging.
        <br />
        <span
          className="italic text-[#F6CA65]"
          style={{
            fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            fontWeight: 200,
          }}
        >
          Better future.
        </span>
      </h2>
    );
  }

  return (
    <h2
      id="sustainability-heading"
      className="text-white mt-[20px]"
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontSize: "clamp(38px, 3.33vw, 64px)",
        lineHeight: "clamp(42px, 3.38vw, 65px)",
        letterSpacing: "clamp(-1.4px, -0.116vw, -2.24px)",
      }}
    >
      <span className="font-light block" style={{ fontWeight: 300 }}>
        Better packaging.
      </span>
      <span
        className="italic text-[#F6CA65] block"
        style={{
          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontWeight: 200,
        }}
      >
        Better future.
      </span>
    </h2>
  );
}

function ParagraphText({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <p
      className={`text-white/85 ${isMobile ? "mt-3 mb-6 text-[14.5px] leading-[1.6]" : "mt-[28px] max-w-[586px]"}`}
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontSize: isMobile ? undefined : "clamp(14px, 1.015vw, 19.5px)",
        lineHeight: isMobile ? undefined : "clamp(23px, 1.61vw, 31px)",
        fontWeight: 350,
      }}
    >
      Good packaging shouldn&apos;t cost the planet. Our custom cardboard boxes are made in Australia from recyclable
      corrugated cardboard, natural kraft and paperboard, printed with soy-based inks, so your boxes look premium and
      still go in the kerbside recycling bin.
    </p>
  );
}

function ChecklistRows({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    // Flatten rows into a clean responsive single-list on mobile, 2-column on tablet
    const allItems = checklistRows.flatMap((r) => [r.left, r.right]);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
        {allItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-b border-white/15 py-3"
          >
            <Check className="w-[18px] h-[18px] text-[#F6CA65] flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <span
              className="text-white text-[14px]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif", fontWeight: 400 }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-[38px] max-w-[622px]">
      {checklistRows.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-2 h-[52px] items-center border-b border-white/15"
          style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}
        >
          {/* Left Column Item */}
          <div className="flex items-center gap-3 pr-4">
            <Check className="w-[18px] h-[18px] text-[#F6CA65] flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <span
              className="text-white truncate"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(13px, 0.807vw, 15.5px)",
                lineHeight: "25px",
                fontWeight: 400,
              }}
            >
              {row.left}
            </span>
          </div>

          {/* Right Column Item */}
          <div className="flex items-center gap-3 pl-2">
            <Check className="w-[18px] h-[18px] text-[#F6CA65] flex-shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <span
              className="text-white truncate"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(13px, 0.807vw, 15.5px)",
                lineHeight: "25px",
                fontWeight: 400,
              }}
            >
              {row.right}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SustainabilitySection;
