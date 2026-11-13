"use client";

import React, { useState, useEffect } from "react";
import { HeroNoMinimumBadge } from "./HeroNoMinimumBadge";

export interface MobileProductItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  image: string;
}

const mobileSliderProducts: MobileProductItem[] = [
  {
    id: "mob-1",
    name: "Custom Bakery Box Packaging",
    category: "Bakery Boxes",
    badge: "FROM 10 BOXES",
    image: "/images/slider/bakery-box.webp",
  },
  {
    id: "mob-2",
    name: "Navy & Gold Luxury Watch Box",
    category: "Rigid Boxes",
    badge: "PREMIUM FINISH",
    image: "/images/slider/navy-gold-watch-box.webp",
  },
  {
    id: "mob-3",
    name: "Burger Box with Chicken Burger",
    category: "Food Packaging",
    badge: "FAST PRODUCTION",
    image: "/images/slider/burger-box.webp",
  },
  {
    id: "mob-4",
    name: "Premium Candle Packaging Box",
    category: "Candle Boxes",
    badge: "CUSTOM DIE-CUT",
    image: "/images/slider/candle-packaging.webp",
  },
  {
    id: "mob-5",
    name: "Custom Granola Display Box",
    category: "Display Boxes",
    badge: "POP DISPLAY",
    image: "/images/slider/granola-display-box.webp",
  },
  {
    id: "mob-6",
    name: "Premium Custom Cookie Box",
    category: "Cookie Boxes",
    badge: "FOOD GRADE",
    image: "/images/slider/cookie-box.webp",
  },
  {
    id: "mob-7",
    name: "Custom Donut Box Collection",
    category: "Donut Boxes",
    badge: "SWEET TREATS",
    image: "/images/slider/donut-box.webp",
  },
  {
    id: "mob-8",
    name: "Unlit Scented Candle Box",
    category: "Candle Packaging",
    badge: "GOLD FOIL",
    image: "/images/slider/scented-candle-box.webp",
  },
  {
    id: "mob-9",
    name: "Custom Fries Box Mockup",
    category: "Fast Food Boxes",
    badge: "GREASE RESISTANT",
    image: "/images/slider/fries-box.webp",
  },
  {
    id: "mob-10",
    name: "Australian Popcorn Box",
    category: "Popcorn Packaging",
    badge: "AUSTRALIAN MADE",
    image: "/images/slider/popcorn-box.webp",
  },
  {
    id: "mob-11",
    name: "Premium Custom Gable Box",
    category: "Gable Boxes",
    badge: "HANDLE BOX",
    image: "/images/slider/premium-gable-box.webp",
  },
];

/**
 * HeroMobileSlider
 * Single prominent showcase box for mobile screens (< 1024px):
 * - One slightly larger, centered card (280px x 280px / 320px x 320px)
 * - Automatic smooth crossfade transitions between all 11 real packaging images
 * - Touch & hover hold: auto-play pauses when user touches/holds finger on phone or hovers
 * - Floating gold "1 box MINIMUM" badge anchored at top-right corner
 * - Clean: no extra dots, no counters, no thumbnail strips
 */
export const HeroMobileSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = mobileSliderProducts.length;

  // Auto-change images every 2.8 seconds when not paused/held
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const currentProduct = mobileSliderProducts[currentIndex];

  return (
    <div className="w-full relative my-3 sm:my-4 flex justify-center select-none">
      {/* 
        Outer Positioning Container:
        Houses the single prominent box and the overlapping gold badge
      */}
      <div className="relative w-[280px] sm:w-[320px] aspect-square">
        {/* 
          1. Floating Gold "1 box MINIMUM" Badge 
          Stationary gold badge overlapping the top-right corner
        */}
        <div
          className="absolute -top-3.5 -right-3 sm:-right-4 z-30 pointer-events-none transform scale-[0.66] sm:scale-[0.76] origin-top-right transition-transform duration-300"
          style={{
            filter: "drop-shadow(0 8px 20px rgba(4, 31, 73, 0.65))",
          }}
        >
          <HeroNoMinimumBadge />
        </div>

        {/* 
          2. Single Prominent Box with Auto Image Crossfade & Touch Hold
          onMouseEnter / onMouseLeave + onTouchStart / onTouchEnd for "hover per hold"
        */}
        <div
          className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#02132D] border border-white/15 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.65)] cursor-pointer group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchCancel={() => setIsPaused(false)}
        >
          {/* Stacked Images for Smooth Hardware-Accelerated Crossfade */}
          {mobileSliderProducts.map((product, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={product.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            );
          })}

          {/* Top-Left Category Pill (Updates with Active Box) */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#041F49]/80 backdrop-blur-md border border-white/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2B329] animate-pulse" />
            <span
              className="text-[9.5px] sm:text-[10.5px] font-bold text-white uppercase tracking-wider"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              {currentProduct.category}
            </span>
          </div>

          {/* Bottom Frosted Glass Overlay (Updates with Active Box) */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3 bg-gradient-to-t from-[#041F49]/95 via-[#041F49]/75 to-transparent backdrop-blur-[6px] border-t border-white/10 flex flex-col justify-end">
            <div className="flex items-center justify-between gap-1.5">
              <h3
                className="text-white text-[12.5px] sm:text-[13.5px] font-bold tracking-tight truncate leading-tight flex-1"
                style={{
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                }}
              >
                {currentProduct.name}
              </h3>
              <span className="shrink-0 text-[8.5px] sm:text-[9px] font-bold text-[#F2B329] bg-[#F2B329]/15 px-1.5 py-0.5 rounded-[3px] border border-[#F2B329]/40 tracking-wide">
                From 10 units
              </span>
            </div>
            <p className="text-[10px] text-[#C5D0E8] mt-0.5 font-normal truncate">
              Printed with your artwork · Australia wide delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobileSlider;
