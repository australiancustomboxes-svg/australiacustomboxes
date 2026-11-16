"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface IndustryCardItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const industriesData: IndustryCardItem[] = [
  {
    id: "food-beverage-1",
    tag: "GOURMET SNACKS · DRINKS",
    title: "Food & Beverage",
    description:
      "Food-safe custom product boxes that stay strong on the shelf and in the delivery bag.",
    image: "/images/industries/ecopack-natural-gift-box-set.webp",
    alt: "Custom Food and Beverage Product Packaging Boxes",
  },
  {
    id: "food-beverage-2",
    tag: "GOURMET SNACKS · DRINKS",
    title: "Food & Beverage",
    description:
      "Food-safe custom product boxes that stay strong on the shelf and in the delivery bag.",
    image: "/images/industries/ecowrap-sustainable-gift-box.webp",
    alt: "Custom Macaron and Bakery Product Packaging Boxes",
  },
  {
    id: "food-beverage-3",
    tag: "GOURMET SNACKS · DRINKS",
    title: "Food & Beverage",
    description:
      "Food-safe custom product boxes that stay strong on the shelf and in the delivery bag.",
    image: "/images/industries/lumora-cedar-vanilla-candle-box.webp",
    alt: "Custom Skincare and Luxury Candle Packaging Boxes",
  },
  {
    id: "candles-fragrance",
    tag: "CANDLES · AROMATHERAPY",
    title: "Candles & Fragrance",
    description:
      "Luxury rigid and folding cartons engineered for heat, weight, and premium retail presentation.",
    image: "/images/products/Premium ACB Candle Packaging Mockup.webp",
    alt: "Custom Scented Candle Packaging Boxes",
  },
  {
    id: "ecommerce-mailers",
    tag: "SHIPPING · SUBSCRIPTION",
    title: "E-Commerce & Retail",
    description:
      "Unboxing-ready shipping mailers that protect fragile contents across Australia-wide transit.",
    image: "/images/products/mailer-boxes.webp",
    alt: "Custom E-Commerce Shipping Mailer Boxes",
  },
  {
    id: "luxury-jewellery",
    tag: "JEWELLERY · WATCHES",
    title: "Jewellery & Luxury",
    description:
      "High-density rigid gift boxes with custom velvet inserts, ribbon pulls, and gold foil stamping.",
    image: "/images/box-styles/Two-Piece Box Style.webp",
    alt: "Custom Two-Piece Rigid Jewellery Box",
  },
];

/**
 * IndustriesSection — "Packaging for the way your industry sells."
 * Master design based on Figma layout:
 *  • Section Eyebrow: Diamond icon + "INDUSTRIES"
 *  • Heading: "Packaging for the way / your industry sells."
 *  • Subtitle copy
 *  • Top-right navigation buttons (< and >)
 *  • 3-card grid (desktop) / responsive slider with rounded cards & gradient navy text overlay
 *  • Bottom progress track with gold indicator
 */
export const IndustriesSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  // Cards visible per view: 3 on desktop (lg+), 2 on tablet (md), 1 on mobile
  const maxDesktopIndex = Math.max(0, industriesData.length - 3);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxDesktopIndex, prev + 1));
  };

  const progressPercent =
    maxDesktopIndex > 0 ? (startIndex / maxDesktopIndex) * 100 : 0;

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E5EBF5] relative z-10 overflow-hidden"
    >
      <div className="site-container">
        {/* ════════════════════════════════════════════════════════════════
            1. Section Header: Left (Copy) + Right (Nav Buttons)
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 lg:mb-14">
          <div className="max-w-[760px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3.5 select-none">
              <div
                className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 flex-shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[#082E63]/70"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                }}
              >
                INDUSTRIES
              </span>
            </div>

            {/* Heading */}
            <h2
              id="industries-heading"
              className="font-light text-[#041F49] leading-[1.08] mb-4"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(32px, 3.6vw, 56px)",
                letterSpacing: "-1.5px",
                fontWeight: 300,
              }}
            >
              Packaging for the way
              <br />
              <span
                className="italic text-[#F2B329]"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontWeight: 300,
                }}
              >
                your industry
              </span>{" "}
              sells.
            </h2>

            {/* Subtitle */}
            <p
              className="text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.6] max-w-xl"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              A cake box and a skincare carton solve very different problems. We
              match board, size and finish to how your product is stored, shipped
              and sold.
            </p>
          </div>

          {/* Nav Controls (< and >) */}
          <div className="flex items-center gap-3 self-start lg:self-end select-none">
            <button
              type="button"
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous industries"
              className="w-11 h-11 rounded-full border border-[#D5DFEE] flex items-center justify-center text-[#041F49] hover:bg-[#041F49] hover:text-white hover:border-[#041F49] disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#041F49] disabled:hover:border-[#D5DFEE] disabled:cursor-not-allowed transition-all duration-200 cursor-pointer shadow-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={startIndex >= maxDesktopIndex}
              aria-label="Next industries"
              className="w-11 h-11 rounded-full border border-[#D5DFEE] flex items-center justify-center text-[#041F49] hover:bg-[#041F49] hover:text-white hover:border-[#041F49] disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#041F49] disabled:hover:border-[#D5DFEE] disabled:cursor-not-allowed transition-all duration-200 cursor-pointer shadow-sm"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. Cards Track / Carousel
           ════════════════════════════════════════════════════════════════ */}
        {/* DESKTOP View (lg+) — 3 cards sliding window */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8">
          {industriesData
            .slice(startIndex, startIndex + 3)
            .map((item) => (
              <IndustryCard key={item.id} item={item} />
            ))}
        </div>

        {/* TABLET / MOBILE View (<lg) — Horizontal swipeable row */}
        <div className="lg:hidden flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] max-w-[340px] sm:max-w-[380px] flex-shrink-0 snap-start"
            >
              <IndustryCard item={item} />
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. Bottom Slider / Progress Indicator Track (No grey part, yellow line)
           ════════════════════════════════════════════════════════════════ */}
        <div
          className="mt-10 sm:mt-12 lg:mt-14 w-full relative"
          aria-hidden="true"
        >
          <div
            className="h-[3px] bg-[#F2B329] rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${100 / (maxDesktopIndex + 1)}%`,
              transform: `translateX(${progressPercent * (maxDesktopIndex > 0 ? maxDesktopIndex : 1)}%)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

/* ══ Reusable Card Component ══════════════════════════════════════════════ */

function IndustryCard({ item }: { item: IndustryCardItem }) {
  return (
    <article
      className="relative w-full aspect-[3/3.8] rounded-[28px] lg:rounded-[32px] overflow-hidden bg-[#F2F0EB] shadow-[0_12px_36px_-6px_rgba(4,31,73,0.12)] hover:shadow-[0_24px_54px_-8px_rgba(4,31,73,0.22)] transition-all duration-300 group flex flex-col justify-end"
    >
      {/* Background photographic product mockup */}
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 85vw, (max-width: 1280px) 33vw, 420px"
        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Deep Navy Gradient Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-t from-[#041F49] via-[#041F49]/95 via-45% to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom Text Content */}
      <div className="relative z-10 p-6 sm:p-7 xl:p-8 text-white flex flex-col">
        {/* Industry Tag */}
        <span
          className="text-[#F2B329] text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[2.2px] mb-2 select-none"
          style={{
            fontFamily:
              "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            lineHeight: "16px",
          }}
        >
          {item.tag}
        </span>

        {/* Title */}
        <h3
          className="text-white text-xl sm:text-[22px] font-normal leading-tight mb-2.5"
          style={{
            fontFamily:
              "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-[rgba(245,248,255,0.78)] text-[13px] sm:text-[13.5px] leading-[1.6]"
          style={{
            fontFamily:
              "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          }}
        >
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default IndustriesSection;
