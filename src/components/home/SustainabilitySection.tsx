"use client";

import React from "react";
import Image from "next/image";

export interface SustainabilityMaterialItem {
  id: string;
  name: string;
  badge: string;
  image: string;
  alt: string;
  isTaller?: boolean;
}

const materials: SustainabilityMaterialItem[] = [
  {
    id: "natural-kraft",
    name: "Natural Kraft",
    badge: "UNBLEACHED",
    image: "/images/sustainability/natural-kraft.webp",
    alt: "Natural Kraft unbleached custom cardboard packaging box",
    isTaller: false,
  },
  {
    id: "paperboard",
    name: "Paperboard",
    badge: "LIGHTWEIGHT",
    image: "/images/sustainability/paperboard.webp",
    alt: "Lightweight recyclable paperboard packaging box",
    isTaller: true,
  },
  {
    id: "corrugated",
    name: "Corrugated",
    badge: "RECYCLABLE",
    image: "/images/sustainability/corrugated.webp",
    alt: "Recyclable corrugated cardboard shipping box",
    isTaller: false,
  },
];

const sustainabilityFeatures = [
  "Recyclable materials",
  "Corrugated cardboard",
  "Natural kraft",
  "Soy-based inks",
  "Paperboard",
  "Rigid stock",
  "Plastic-free inserts",
  "Right-sized boxes, less void fill",
];

/**
 * SustainabilitySection — "Better packaging. Better future."
 * Figma Group 442 (1799px x 729px)
 *  • Right Blue Section: Group 434 (background #0A3974, border-radius 290px 0 0 0)
 *  • Left Arch Cards: Group 441 (3 arch-top cards: Natural Kraft, Paperboard [taller], Corrugated)
 *  • 8-item checkmark list in 2 columns
 */
export const SustainabilitySection: React.FC = () => {
  return (
    <section
      id="sustainability"
      aria-labelledby="sustainability-heading"
      className="w-full bg-white relative overflow-hidden"
    >
      {/* ════════════════════════════════════════════════════════════════
          MOBILE / TABLET (<lg) — Stacked Card Layout
         ════════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-4 sm:px-6 py-14 sm:py-18">
        {/* Arch Cards Row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-10 max-w-lg mx-auto">
          {materials.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div
                className={`w-full overflow-hidden rounded-t-full bg-[#F4F7FB] relative shadow-md ${
                  item.isTaller ? "aspect-[2/3.1]" : "aspect-[2/2.7]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-3 text-center">
                <span
                  className="block font-semibold text-[#000000] text-[13px] sm:text-[15px] leading-tight"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  }}
                >
                  {item.name}
                </span>
                <span
                  className="block text-[10px] sm:text-[11px] text-black/75 tracking-[1.4px] uppercase mt-0.5"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  }}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navy Content Card */}
        <div className="bg-[#0A3974] rounded-2xl rounded-tl-[80px] sm:rounded-tl-[120px] p-6 sm:p-10 text-white shadow-xl">
          <EyebrowLabel />
          <SectionHeading />
          <BodyParagraph />
          <ChecklistGrid />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP (≥lg) — Exact Figma Group 442 Blueprint
          • Right col: Blue background #0A3974 with border-radius: 290px 0 0 0
          • Left col: 3 Arch-topped cards overlapping blue curve
         ════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden lg:flex relative w-full items-center"
        style={{
          minHeight: "clamp(680px, 37.96vw, 750px)",
        }}
      >
        {/* Right Blue Background Layer (#0A3974) */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 pointer-events-none bg-[#0A3974]"
          style={{
            left: "52.86vw",
            width: "calc(100vw - 52.86vw + 50vw)",
            borderRadius: "clamp(180px, 15.1vw, 290px) 0 0 0",
          }}
        />

        {/* ── LEFT: 3 Arch Cards (Group 441) ─────────────────────────── */}
        <div
          className="relative z-20 flex items-end flex-shrink-0"
          style={{
            marginLeft: "clamp(40px, 6.3vw, 121px)",
            gap: "clamp(16px, 1.6vw, 30px)",
          }}
        >
          {materials.map((item) => {
            const cardHeight = item.isTaller
              ? "clamp(300px, 18.75vw, 360px)"
              : "clamp(250px, 15.88vw, 305px)";
            const cardWidth = "clamp(200px, 14.0vw, 270px)";

            return (
              <div key={item.id} className="flex flex-col items-center">
                {/* Arch Card Container: border-radius 999px 999px 0 0 */}
                <div
                  className="overflow-hidden bg-[#F4F7FB] relative shadow-[0_16px_36px_-8px_rgba(4,31,73,0.18)] flex-shrink-0"
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: "999px 999px 0px 0px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1280px) 16vw, 270px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Labels Below Card */}
                <div className="mt-4 text-center">
                  <span
                    className="block font-semibold text-[#000000] leading-snug"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      fontSize: "clamp(15px, 0.885vw, 17px)",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="block font-normal text-[rgba(0,0,0,0.75)] uppercase mt-0.5"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      fontSize: "clamp(11px, 0.625vw, 12px)",
                      letterSpacing: "1.68px",
                      lineHeight: "19px",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: Content inside Blue Section (Group 433) ──────────── */}
        <div
          className="relative z-10 text-white flex flex-col flex-shrink-0"
          style={{
            marginLeft: "clamp(40px, 4.5vw, 90px)",
            width: "clamp(460px, 31.08vw, 597px)",
            paddingRight: "clamp(24px, 3.5vw, 68px)",
            paddingTop: "clamp(30px, 3.5vw, 68px)",
            paddingBottom: "clamp(30px, 3.5vw, 68px)",
          }}
        >
          <EyebrowLabel />
          <SectionHeading />
          <BodyParagraph />
          <ChecklistGrid />
        </div>
      </div>
    </section>
  );
};

/* ══ Sub-Components ═══════════════════════════════════════════════════════ */

function EyebrowLabel() {
  return (
    <div className="flex items-center gap-2.5 mb-3 xl:mb-3.5 select-none">
      <div
        className="w-[7px] h-[7px] bg-[#F6CA65] rotate-45 flex-shrink-0"
        aria-hidden="true"
      />
      <span
        className="text-[11px] xl:text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[rgba(255,255,255,0.8)]"
        style={{
          fontFamily:
            "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          lineHeight: "19px",
        }}
      >
        SUSTAINABILITY
      </span>
    </div>
  );
}

function SectionHeading() {
  return (
    <h2
      id="sustainability-heading"
      className="font-light text-white leading-[1.02] mb-4 xl:mb-5"
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(32px, 3.33vw, 64px)",
        letterSpacing: "clamp(-1.2px, -0.117vw, -2.24px)",
      }}
    >
      Better packaging.
      <br />
      <span
        className="italic text-[#F6CA65]"
        style={{
          fontFamily:
            "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontWeight: 200,
        }}
      >
        Better future.
      </span>
    </h2>
  );
}

function BodyParagraph() {
  return (
    <p
      className="font-[350] text-[rgba(255,255,255,0.85)] leading-[1.6] mb-6 xl:mb-8"
      style={{
        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
        fontSize: "clamp(13.5px, 1.015vw, 19.5px)",
        lineHeight: "clamp(22px, 1.61vw, 31px)",
      }}
    >
      Good packaging shouldn&apos;t cost the planet. Our custom cardboard boxes
      are made in Australia from recyclable corrugated cardboard, natural kraft
      and paperboard, printed with soy-based inks, so your boxes look premium and
      still go in the kerbside recycling bin.
    </p>
  );
}

function ChecklistGrid() {
  // 8 items displayed in 2 columns of 4
  const col1 = sustainabilityFeatures.slice(0, 4);
  const col2 = sustainabilityFeatures.slice(4, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 xl:gap-y-3.5">
      <div className="space-y-3 xl:space-y-3.5">
        {col1.map((item) => (
          <ChecklistItem key={item} label={item} />
        ))}
      </div>
      <div className="space-y-3 xl:space-y-3.5">
        {col2.map((item) => (
          <ChecklistItem key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

function ChecklistItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* Gold Checkmark SVG */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M3.75 9.5L7.25 13L14.25 5"
          stroke="#F6CA65"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="text-white font-normal"
        style={{
          fontFamily:
            "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          fontSize: "clamp(13px, 0.807vw, 15.5px)",
          lineHeight: "25px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default SustainabilitySection;
