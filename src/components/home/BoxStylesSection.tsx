"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

const boxStylesData: BoxStyleItem[] = [
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
 * - Desktop: 2-column layout matching Figma screenshots exactly
 *   - Left: Dark Navy (#041F49) block with rounded top-right corner (rounded-tr-[100px])
 *           Containing Eyebrow, 3-line Headline, Description, and Interactive 7-item Selector
 *   - Right: Showcase card with photographic image + Specs table (BOARD, BEST FOR, ADD)
 * - Mobile: Fully responsive stacked layout with touch-friendly selectors
 */
export const BoxStylesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("two-piece");

  const activeItem =
    boxStylesData.find((item) => item.id === activeId) || boxStylesData[0];

  return (
    <section
      id="box-styles"
      aria-labelledby="box-styles-heading"
      className="w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E5EBF5] shadow-[0_8px_30px_-6px_rgba(4,31,73,0.06)] relative z-10"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* =========================================================
              LEFT COLUMN: Dark Navy Container with Iconic Top-Right Curve
             ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 bg-[#041F49] rounded-2xl lg:rounded-tl-none rounded-tr-[70px] sm:rounded-tr-[90px] xl:rounded-tr-[110px] lg:rounded-bl-[36px] lg:rounded-br-none p-7 sm:p-10 lg:p-12 xl:p-14 text-white shadow-xl relative overflow-hidden">
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2 mb-3.5 select-none">
              <div
                className="w-[6px] h-[6px] bg-[#F2B329] rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11px] font-bold uppercase tracking-[2.6px] text-white/70"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                }}
              >
                BOX STYLES
              </span>
            </div>

            {/* 2. Headline: 3-line Typographic Lockup matching Figma */}
            <h2
              id="box-styles-heading"
              className="text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[50px] font-normal text-white tracking-[-0.02em] leading-[1.08] mb-4 sm:mb-5"
              style={{
                fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
              }}
            >
              Packaging
              <br />
              designed around
              <br />
              <span
                className="italic text-[#F2B329]"
                style={{
                  fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                }}
              >
                your brand.
              </span>
            </h2>

            {/* 3. Description Paragraph */}
            <p
              className="text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#C5D0E8] leading-[1.62] font-normal mb-8 sm:mb-10 max-w-[430px]"
              style={{
                fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
              }}
            >
              From luxury rigid boxes to everyday shipping mailers, we build
              custom designed boxes that protect your product and make the first
              impression count. Pick a structure below, then we&apos;ll size it,
              print it and finish it to suit.
            </p>

            {/* 4. Interactive 7-Item Box Styles List */}
            <nav aria-label="Box styles selector" className="border-t border-white/10">
              {boxStylesData.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setActiveId(item.id)}
                    className={`w-full py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between text-left transition-all duration-200 cursor-pointer group ${
                      isActive ? "text-white" : "text-white/65 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`text-[11.5px] sm:text-[12.5px] font-mono tracking-wider mr-4 sm:mr-6 transition-colors ${
                          isActive
                            ? "text-[#F2B329] font-bold"
                            : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span
                        className={`text-[13.5px] sm:text-[15px] tracking-tight transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-white/70 group-hover:text-white"
                        }`}
                        style={{
                          fontFamily:
                            "var(--font-figtree), 'Figtree', sans-serif",
                        }}
                      >
                        {item.title}
                      </span>
                    </div>

                    <ArrowRight
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2B329] stroke-[2.5] transition-all duration-200 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Showcase Photo Card + Specifications Table
             ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between w-full">
            {/* Top Photographic Card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#F2F0EB] shadow-[0_20px_50px_-10px_rgba(4,31,73,0.18),0_8px_24px_-4px_rgba(4,31,73,0.08)] border border-[#E5EBF5]">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-opacity duration-300"
                priority
              />
            </div>

            {/* Bottom Specifications Block matching Figma */}
            <div className="mt-6 sm:mt-8 pt-2 flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8">
              {/* Left Description Paragraph */}
              <div className="max-w-[340px]">
                <p
                  className="text-[13.5px] sm:text-[14px] text-[#082E63] font-normal leading-[1.58]"
                  style={{
                    fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                  }}
                >
                  {activeItem.description}
                </p>
              </div>

              {/* Right Specifications List (BOARD, BEST FOR, ADD) */}
              <div className="space-y-2.5 sm:space-y-3 shrink-0 min-w-[260px] sm:min-w-[280px]">
                {/* Row 1: BOARD */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span
                    className="w-16 sm:w-18 text-[11px] font-bold text-[#F2B329] tracking-[1.5px] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    BOARD
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] text-[#082E63]/90 font-medium">
                    {activeItem.board}
                  </span>
                </div>

                {/* Row 2: BEST FOR */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span
                    className="w-16 sm:w-18 text-[11px] font-bold text-[#F2B329] tracking-[1.5px] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    BEST FOR
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] text-[#082E63]/90 font-medium">
                    {activeItem.bestFor}
                  </span>
                </div>

                {/* Row 3: ADD */}
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span
                    className="w-16 sm:w-18 text-[11px] font-bold text-[#F2B329] tracking-[1.5px] uppercase shrink-0"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    ADD
                  </span>
                  <span className="text-[12.5px] sm:text-[13px] text-[#082E63]/90 font-medium">
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
