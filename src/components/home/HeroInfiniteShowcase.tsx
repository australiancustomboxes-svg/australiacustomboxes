"use client";

import React from "react";
import { HeroProductCard, HeroProductItem } from "./HeroProductCard";
import { HeroNoMinimumBadge } from "./HeroNoMinimumBadge";

/**
 * 6 Packaging Product Mockups for Column 1 (Scrolls Bottom to Top / Upward)
 */
const column1Products: HeroProductItem[] = [
  {
    id: "col1-1",
    name: "Custom Bakery Box Packaging",
    image: "/images/slider/bakery-box.webp",
    category: "Bakery Boxes",
  },
  {
    id: "col1-2",
    name: "Navy and Gold Luxury Watch Box",
    image: "/images/slider/navy-gold-watch-box.webp",
    category: "Rigid Boxes",
  },
  {
    id: "col1-3",
    name: "Burger Box with Crispy Chicken Burger",
    image: "/images/slider/burger-box.webp",
    category: "Food Packaging",
  },
  {
    id: "col1-4",
    name: "Premium Candle Packaging Box",
    image: "/images/slider/candle-packaging.webp",
    category: "Candle Boxes",
  },
  {
    id: "col1-5",
    name: "Custom Granola Display Box",
    image: "/images/slider/granola-display-box.webp",
    category: "Display Boxes",
  },
  {
    id: "col1-6",
    name: "Premium Custom Cookie Box Packaging",
    image: "/images/slider/cookie-box.webp",
    category: "Cookie Boxes",
  },
];

/**
 * 6 Packaging Product Mockups for Column 2 (Scrolls Top to Bottom / Downward)
 */
const column2Products: HeroProductItem[] = [
  {
    id: "col2-1",
    name: "Custom Donut Box Collection",
    image: "/images/slider/donut-box.webp",
    category: "Donut Boxes",
  },
  {
    id: "col2-2",
    name: "Unlit Scented Candle Box",
    image: "/images/slider/scented-candle-box.webp",
    category: "Candle Packaging",
  },
  {
    id: "col2-3",
    name: "Custom Fries Box Mockup",
    image: "/images/slider/fries-box.webp",
    category: "Fast Food Boxes",
  },
  {
    id: "col2-4",
    name: "Australian Popcorn Box",
    image: "/images/slider/popcorn-box.webp",
    category: "Popcorn Packaging",
  },
  {
    id: "col2-5",
    name: "Premium Custom Gable Box",
    image: "/images/slider/premium-gable-box.webp",
    category: "Gable Boxes",
  },
  {
    id: "col2-6",
    name: "Custom Bakery Box Packaging",
    image: "/images/slider/bakery-box.webp",
    category: "Bakery Packaging",
  },
];

/**
 * HeroInfiniteShowcase - Group 372
 * Sourced directly from Figma CSS:
 * - Group 372: width 976.72px, height 1284.19px
 * - Column 1: left 232.68px, transform: rotate(14.13deg) with origin 0 0
 *   Scrolls BOTTOM TO TOP (Upward) via animate-hero-scroll-up-1
 * - Column 2: left 577px (tight 3.14px perpendicular seam), transform: rotate(14.13deg) with origin 0 0
 *   Scrolls TOP TO BOTTOM (Downward) via animate-hero-scroll-down-2
 * - Top offset (-160px) and no inner clipping so boxes bleed cleanly off-screen behind header
 * - White fallback boxes (bg-white) with reduced border radius (rounded-[8px])
 * - Responsive viewport-aware scale so nothing overflows on laptop screens
 */
export const HeroInfiniteShowcase: React.FC = () => {
  const col1Loop = [...column1Products, ...column1Products];
  const col2Loop = [...column2Products, ...column2Products];

  return (
    <div
      className="relative overflow-visible select-none pointer-events-auto"
      style={{
        width: "976.72px",
        height: "1284.19px",
      }}
    >
      {/* 
        Group 372 Inner Wrapper with responsive scaling on narrower viewports
      */}
      <div className="relative w-full h-full origin-top-left transition-transform duration-300 scale-[0.56] sm:scale-[0.62] lg:scale-[0.68] xl:scale-[0.74] 2xl:scale-[0.82] [@media(min-width:1920px)]:scale-100">
        {/* 
          COLUMN 1 (image 6, image 7, image 8, image 13)
          Anchor at x = 232.68px (canvas x = 1039.68px, left: 54.15%)
          transform: rotate(14.13deg), origin: 0 0
          Scrolls BOTTOM TO TOP (Upward)
          Starts at top: -160px so it bleeds seamlessly behind the navbar with zero mid-air clipping
        */}
        <div
          className="absolute w-[330.78px] pointer-events-auto"
          style={{
            top: "-160px",
            left: "232.68px",
            transform: "rotate(14.13deg)",
            transformOrigin: "0 0",
          }}
        >
          <div className="animate-hero-scroll-up-1 flex flex-col gap-[6px]">
            {col1Loop.map((product, index) => (
              <HeroProductCard
                key={`col1-${product.id}-${index}`}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* 
          COLUMN 2 (image 9, image 10, image 11, image 12)
          Anchor at x = 577px (tight 3.14px perpendicular seam between columns)
          transform: rotate(14.13deg), origin: 0 0
          Scrolls TOP TO BOTTOM (Downward)
          Starts at top: -160px so it emerges seamlessly from behind the navbar with zero mid-air clipping
        */}
        <div
          className="absolute w-[330.78px] pointer-events-auto"
          style={{
            top: "-160px",
            left: "577px",
            transform: "rotate(14.13deg)",
            transformOrigin: "0 0",
          }}
        >
          <div className="animate-hero-scroll-down-2 flex flex-col gap-[6px]">
            {col2Loop.map((product, index) => (
              <HeroProductCard
                key={`col2-${product.id}-${index}`}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* 
          3. Floating "1 box MINIMUM" Badge Layer:
          Exact 124px x 124px Figma asset positioned at:
          - Exact location marked by user's pink arrow head: top: 456px, left: -48px
          Zero rotation (100% horizontal), stationary over scrolling boxes, z-30
        */}
        <div
          className="hidden lg:block absolute z-30 pointer-events-auto"
          style={{
            top: "456px",
            left: "-48px",
            width: "124px",
            height: "124px",
          }}
        >
          <HeroNoMinimumBadge />
        </div>
      </div>
    </div>
  );
};

export default HeroInfiniteShowcase;