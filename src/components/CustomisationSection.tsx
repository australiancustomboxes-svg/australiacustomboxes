"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface CustomisationFeature {
  id: number;
  label: string;
  pinX: number; // percentage from left
  pinY: number; // percentage from top
  tooltip: string;
}

export interface FinishCard {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

const features: CustomisationFeature[] = [
  {
    id: 1,
    label: "Custom print on paperboard (inside & outside)",
    pinX: 56.7,
    pinY: 21.2,
    tooltip: "Full-colour custom print inside the lid with your brand message",
  },
  {
    id: 2,
    label: "Tuck-in / hinged lid (multiple styles)",
    pinX: 67.1,
    pinY: 9.5,
    tooltip: "Hinged presentation lid with secure front tuck closure",
  },
  {
    id: 3,
    label: "Flexible structure & size (fits your product)",
    pinX: 51.7,
    pinY: 67.2,
    tooltip: "Custom sized tissue wraps, stickers, and structural fit",
  },
  {
    id: 4,
    label: "Personalized inserts (thank-you card, info card, etc.)",
    pinX: 25.3,
    pinY: 77.3,
    tooltip: "Branded satin ribbons, custom inserts, and presentation cards",
  },
  {
    id: 5,
    label: "High-quality paperboard material (sturdy & recyclable)",
    pinX: 72.6,
    pinY: 56.9,
    tooltip: "Premium rigid paperboard walls — strong, durable, and recyclable",
  },
];

const finishCards: FinishCard[] = [
  {
    id: "foil-stamping",
    title: "Foil Stamping",
    caption: "GOLD, SILVER, ROSE GOLD",
    image: "/images/customisation/foil-stamping.webp?v=3",
    alt: "Custom navy packaging box with luxury metallic gold foil stamping",
  },
  {
    id: "emboss-deboss",
    title: "Emboss & Deboss",
    caption: "RAISED OR PRESSED LOGO",
    image: "/images/customisation/emboss-deboss.webp?v=3",
    alt: "Australian Custom Boxes embossed and debossed logo comparison",
  },
  {
    id: "spot-uv",
    title: "Spot UV",
    caption: "GLOSS HIGHLIGHTS ON MATTE",
    image: "/images/customisation/spot-uv.webp?v=3",
    alt: "Glossy Spot UV varnish logo highlight on matte navy paperboard",
  },
  {
    id: "soft-touch",
    title: "Soft Touch Coating",
    caption: "HIDDEN MAGNET, CLEAN",
    image: "/images/customisation/soft-touch.webp?v=3",
    alt: "GiftAura luxury magnetic closure box with velvet matte soft touch coating",
  },
];

const specifications = [
  {
    label: "DIMENSIONS",
    value: "Any L × W × H, in mm, cm or inches",
  },
  {
    label: "PRINTING",
    value: "Outside, inside or both · full colour CMYK",
  },
  {
    label: "FINISHES",
    value: "Foil stamping, embossing, debossing, spot UV",
  },
  {
    label: "COATINGS",
    value: "Gloss, matte, soft touch, aqueous",
  },
];

export const CustomisationSection: React.FC = () => {
  const [activePin, setActivePin] = useState<number>(1);

  return (
    <section
      id="customisation"
      aria-labelledby="customisation-heading"
      className="w-full bg-[#F5F8FF] py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 xl:px-12">
        {/* ════════════════════════════════════════════════════════════════
            TOP ROW: Left Interactive Showcase vs Right Copy & Specs
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* ────────────────────────────────────────────────────────────
              LEFT COLUMN: Interactive Hotspot Presentation Box Image
             ──────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="relative w-full max-w-[580px] aspect-[4/3.2] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_16px_40px_-10px_rgba(4,31,73,0.14)] bg-[#E8EDF5]">
              {/* Main Presentation Box Photographic Image */}
              <Image
                src="/images/customisation/presentation-box.webp"
                alt="Finished presentation packaging box with custom inside printing and presentation props"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 580px"
                className="object-cover object-center"
                priority
              />

              {/* Interactive Hotspot Pins (1 to 5) */}
              {features.map((feature) => {
                const isActive = activePin === feature.id;

                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => setActivePin(feature.id)}
                    onMouseEnter={() => setActivePin(feature.id)}
                    aria-label={`Feature ${feature.id}: ${feature.label}`}
                    style={{
                      left: `${feature.pinX}%`,
                      top: `${feature.pinY}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-[13px] transition-all duration-300 cursor-pointer z-20 touch-manipulation select-none ${
                      isActive
                        ? "bg-[#041F49] text-[#F2B329] scale-110 sm:scale-125 shadow-[0_0_0_3px_rgba(242,179,41,0.65),0_8px_20px_rgba(4,31,73,0.4)]"
                        : "bg-white/95 text-[#041F49] border border-[#041F49]/25 shadow-md hover:bg-[#041F49] hover:text-white"
                    }`}
                  >
                    <span>{feature.id}</span>

                    {/* Subtle pulse ring for active pin */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full animate-ping bg-[#F2B329]/40 pointer-events-none"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}

              {/* Active Tooltip Pill overlay at bottom of photo */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-[#041F49]/90 backdrop-blur-md text-white text-[11.5px] sm:text-[13px] px-3 py-2 sm:py-2.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-2 select-none z-10 transition-all duration-200">
                <span className="w-5 h-5 rounded-full bg-[#F2B329] text-[#041F49] font-bold text-[11px] flex items-center justify-center shrink-0">
                  {activePin}
                </span>
                <span className="truncate">
                  {features.find((f) => f.id === activePin)?.tooltip}
                </span>
              </div>
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────
              RIGHT COLUMN: Eyebrow, Heading, Subtitle, Numbered List, Specs
             ──────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 select-none mb-2.5 sm:mb-3">
              <div
                className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[#082E63]/70"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  lineHeight: "19px",
                }}
              >
                CUSTOMISATION
              </span>
            </div>

            {/* H2 Heading */}
            <h2
              id="customisation-heading"
              className="text-[#041F49] font-light leading-[1.08] tracking-[-0.035em]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(28px, 3.4vw, 54px)",
                fontWeight: 300,
              }}
            >
              Make Your Paperboard
              <br />
              Boxes{" "}
              <span
                className="italic text-[#986400]"
                style={{ fontWeight: 300 }}
              >
                uniquely Yours.
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p
              className="mt-3.5 sm:mt-5 text-[#4A5568] text-[14.5px] sm:text-[16px] leading-[1.6] max-w-[620px]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontWeight: 350,
              }}
            >
              Tap the numbers to explore a finished presentation box. Then build
              your own custom printed packaging boxes from the same options, in
              any size, with your logo inside, outside or both.
            </p>

            {/* Horizontal Divider */}
            <div className="w-full border-t border-[#041F49]/15 mt-5 sm:mt-6 mb-2" />

            {/* Numbered Feature List (1 to 5) */}
            <div className="space-y-0.5">
              {features.map((feature) => {
                const isActive = activePin === feature.id;

                return (
                  <div
                    key={feature.id}
                    onClick={() => setActivePin(feature.id)}
                    onMouseEnter={() => setActivePin(feature.id)}
                    className={`group flex items-center gap-3 sm:gap-3.5 py-2.5 sm:py-3.5 border-b border-[#041F49]/10 cursor-pointer transition-all duration-200 px-2 rounded-lg touch-manipulation ${
                      isActive
                        ? "bg-white/90 shadow-xs text-[#041F49]"
                        : "hover:bg-white/50 text-[#041F49]/85 hover:text-[#041F49]"
                    }`}
                  >
                    {/* Circle Number */}
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 transition-all duration-200 ${
                        isActive
                          ? "bg-[#041F49] text-white"
                          : "border border-[#041F49]/40 text-[#041F49] group-hover:border-[#041F49]"
                      }`}
                      style={{
                        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      }}
                    >
                      {feature.id}
                    </span>

                    {/* Feature Label */}
                    <span
                      className={`text-[13px] sm:text-[14.5px] leading-snug transition-colors ${
                        isActive ? "font-semibold text-[#041F49]" : "font-normal"
                      }`}
                      style={{
                        fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      }}
                    >
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* 2x2 Specifications Table */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 sm:gap-y-4">
              {specifications.map((spec, idx) => (
                <div key={idx} className="flex flex-col">
                  <span
                    className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#082E63]/60 select-none"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    className="text-[12.5px] sm:text-[13.5px] text-[#041F49] font-normal mt-0.5 leading-snug"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            BOTTOM ROW: 4 Special Finishes Cards (2x2 on mobile, 4 on desktop)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {finishCards.map((card) => (
              <article key={card.id} className="group flex flex-col">
                {/* Image Tile */}
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#041F49]/5 shadow-xs group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Title & Caption (Stacked on Separate Lines) */}
                <div className="mt-2.5 sm:mt-3 flex flex-col">
                  <h3
                    className="font-bold text-[#041F49] text-[13.5px] sm:text-[15px] lg:text-[16px] leading-snug"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {card.title}
                  </h3>
                  <span
                    className="text-[9.5px] sm:text-[10.5px] lg:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] font-semibold text-[#082E63]/60 mt-0.5"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {card.caption}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomisationSection;
