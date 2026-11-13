"use client";

import React from "react";
import Link from "next/link";
import {
  Package,
  ShieldCheck,
  Zap,
  MapPin,
  ArrowUpRight,
  Check,
  Star,
} from "lucide-react";
import { HeroMobileSlider } from "./HeroMobileSlider";

const mobileFeatures = [
  { icon: Package, text: "From 10 boxes" },
  { icon: ShieldCheck, text: "No plates or setup fees" },
  { icon: Zap, text: "10 to 20 day production" },
  { icon: MapPin, text: "Made in Northern Australia" },
];

const mobileTrustChecks = [
  "No minimum order",
  "Fast turnaround",
  "Free design support",
  "Free shipping",
  "Premium printing",
  "Custom sizes & styles",
];

const clientLogos = [
  { name: "ID8L5", style: "font-black tracking-widest text-[11px]" },
  { name: "NBALAB", style: "font-extrabold tracking-wider text-[10.5px]" },
  {
    name: "FOUR SEASONS",
    sub: "Hotels and Resorts",
    style: "font-serif tracking-widest text-[9.5px] leading-tight",
  },
  { name: "REVLON", style: "font-semibold tracking-[0.2em] text-[10.5px]" },
];

/**
 * HeroMobileView
 * A fully mobile-responsive, ergonomically proportioned Hero section (< 1024px):
 * - Balanced typography (headings & subtitles fit within phone viewports)
 * - Compact auto-scrolling packaging conveyor
 * - Sleek, compact side-by-side CTA buttons (ergonomic touch targets, not bulky full-width blocks)
 * - Subtle trust bullets (inline feature badges instead of heavy button-like tiles)
 * - Compact trust checkpoints, Google 5.0 star review badge, and monochrome client logos
 */
export const HeroMobileView: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-2.5 pb-5 z-20 overflow-hidden">
      {/* 
        1. Top Brand Header:
        Golden diamond eyebrow + responsive headline + subtitle
      */}
      <div className="w-full px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Golden Diamond Eyebrow */}
        <div className="flex items-center gap-1.5 mb-1.5 select-none">
          <div
            className="w-[5px] h-[5px] bg-[#F2B329] rotate-45 shrink-0"
            aria-hidden="true"
          />
          <span
            className="text-[9.5px] sm:text-[10.5px] font-semibold uppercase leading-tight tracking-[2px]"
            style={{
              fontFamily:
                "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              color: "rgba(245, 248, 255, 0.72)",
            }}
          >
            CUSTOM PACKAGING MANUFACTURER
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-white text-[25px] sm:text-[30px] font-extrabold tracking-[-0.8px] leading-[1.14] mb-1.5 max-w-[340px] sm:max-w-[420px]"
          style={{
            fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
            fontWeight: 800,
          }}
        >
          Custom boxes, <br className="sm:hidden" />
          made for Australian brands.
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#C5D0E8] text-[11.5px] sm:text-[12.5px] leading-[1.42] max-w-[330px] sm:max-w-[400px] font-normal"
          style={{
            fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
            fontWeight: 400,
          }}
        >
          Mailer boxes, shipping cartons, folding cartons and rigid gift boxes
          printed with your artwork.
        </p>
      </div>

      {/* 
        2. Continuous Horizontal Auto-Scrolling Packaging Showcase 
        Smooth 60fps conveyor of custom packaging boxes
      */}
      <HeroMobileSlider />

      {/* 
        3. Compact Action & Trust Stack:
        Side-by-side compact buttons + subtle feature bullets + reviews
      */}
      <div className="w-full px-4 sm:px-6 flex flex-col items-center">
        {/* Mobile Call-to-Action Buttons (Side-by-Side Compact Pills) */}
        <div className="flex items-center justify-center gap-2.5 w-full max-w-[340px] mx-auto my-2">
          {/* Primary CTA: Get a Quote */}
          <Link
            href="/get-a-quote"
            className="flex-1 h-[38px] px-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-sm"
            style={{
              backgroundColor: "#F2B329",
            }}
          >
            <span
              className="text-[12.5px] font-bold text-[#041F49] tracking-wide whitespace-nowrap"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              Get a Quote
            </span>
            <div className="w-[20px] h-[20px] rounded-full bg-[#041F49] text-[#F2B329] flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </Link>

          {/* Secondary CTA: Explore Packaging */}
          <Link
            href="/products"
            className="flex-1 h-[38px] px-3 rounded-full flex items-center justify-center transition-all duration-200 text-white text-[12px] font-semibold tracking-wide border border-white/25 hover:border-white/50 active:scale-95 bg-white/5 whitespace-nowrap"
            style={{
              fontFamily:
                "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            }}
          >
            Explore Packaging
          </Link>
        </div>

        {/* 2x2 Feature Highlights (Compact Trust Pills, Not Heavy Button Tiles) */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 w-full max-w-[340px] mx-auto my-2 select-none">
          {mobileFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.text}
                className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] bg-white/[0.04]"
              >
                <div className="w-[20px] h-[20px] rounded-[5px] bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-2.5 h-2.5 text-[#B5882D] stroke-[2.4]" />
                </div>
                <span
                  className="text-white/90 font-medium text-[10.5px] leading-tight truncate"
                  style={{
                    fontFamily:
                      "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Trust Checkpoints (6 Badges in Compact 2-Col Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1 w-full max-w-[340px] mx-auto pt-2 my-1.5 border-t border-white/10 select-none">
          {mobileTrustChecks.map((text) => (
            <div key={text} className="flex items-center gap-1">
              <Check className="w-3 h-3 text-[#F6CA65] stroke-[2.8] shrink-0" />
              <span
                className="text-white/75 text-[10px] sm:text-[10.5px] font-normal leading-tight truncate"
                style={{
                  fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Google 5.0 Star Rating */}
        <div className="flex items-center justify-center gap-1.5 py-1 w-full max-w-[340px] mx-auto">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center p-0.5 shadow-xs shrink-0">
            <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-[#F2BE44] text-[#F2BE44]"
              />
            ))}
          </div>
          <span className="text-white font-bold text-[11px] ml-0.5">5.0</span>
          <span className="text-[#C5D0E8] text-[10px] font-normal">
            (115 Google reviews)
          </span>
        </div>

        {/* Client Brand Logos */}
        <div className="w-full max-w-[340px] pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-white/45 overflow-x-auto no-scrollbar">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex flex-col items-center shrink-0">
              <span className={client.style}>{client.name}</span>
              {client.sub && (
                <span className="text-[7.5px] font-normal tracking-normal -mt-0.5 text-white/35">
                  {client.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroMobileView;
