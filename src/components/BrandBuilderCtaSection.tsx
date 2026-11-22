"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const BrandBuilderCtaSection: React.FC = () => {
  return (
    <section
      id="start-project"
      aria-labelledby="start-project-heading"
      className="w-full bg-[#041F49] text-white py-16 sm:py-20 lg:py-24 select-none relative overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div
        className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 rounded-full bg-[#F2B329]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Outer Container with comfortable margins */}
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-14 xl:gap-16">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Copy, Heading & CTA Actions
             ════════════════════════════════════════════════════════════════ */}
          <div className="max-w-[580px]">
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2.5 select-none mb-4 sm:mb-5">
              <div
                className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.765px] text-white/80"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  lineHeight: "19px",
                }}
              >
                START YOUR PROJECT
              </span>
            </div>

            {/* 2. Main H2 Heading (3 lines) */}
            <h2
              id="start-project-heading"
              className="text-white tracking-[-0.035em] leading-[1.08]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(36px, 4vw, 62px)",
                letterSpacing: "-0.035em",
              }}
            >
              <span className="block font-light" style={{ fontWeight: 300 }}>
                Let&apos;s build
              </span>
              <span className="block font-light" style={{ fontWeight: 300 }}>
                packaging that
              </span>
              <span className="block font-bold text-white" style={{ fontWeight: 700 }}>
                builds your brand.
              </span>
            </h2>

            {/* 3. Subtitle / Description */}
            <p
              className="mt-5 sm:mt-6 text-white/70 text-[15px] sm:text-[16px] leading-[1.6] font-light max-w-[490px]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              From your first sample to your next bulk order, we&apos;re here to help. No minimums,
              free design and a 3D mockup on every order.
            </p>

            {/* 4. Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Button 1: "Get a Quote" */}
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-3 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-[13.5px] sm:text-[14px] pl-5 pr-2 py-2 rounded-full shadow-[0_12px_28px_-8px_rgba(242,179,41,0.45)] transition-all duration-200 active:scale-95"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                <span>Get a Quote</span>
                <span className="w-7 h-7 rounded-full bg-[#041F49] text-[#F2B329] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>

              {/* Button 2: "Talk to an Expert" */}
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-medium text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                <span>Talk to an Expert</span>
              </Link>
            </div>

            {/* 5. Sub-caption */}
            <div
              className="mt-6 sm:mt-7 text-white/50 text-[12px] sm:text-[12.5px] font-normal"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              <span>Start your packaging enquiry</span>
              <span className="mx-1.5 opacity-60">·</span>
              <span>Australian Custom Boxes</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Interactive 7-Tile Showcase Mosaic Grid
              (4x4 CSS Grid: 3 Large 2x2 Tiles + 4 Mini 1x1 Tiles in 2x2)
             ════════════════════════════════════════════════════════════════ */}
          <div className="w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[520px] shrink-0 mx-auto lg:mx-0">
            <div className="w-full aspect-square rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-[#041F49] border border-white/15 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)]">
              <div className="grid grid-cols-4 grid-rows-4 gap-1.5 sm:gap-2 w-full h-full">
                {/* Tile 1: Top-Left (2x2 Large) with Instagram Badge */}
                <div className="col-span-2 row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#2D3748] group shadow-inner">
                  <Image
                    src="/images/cta/two-piece-box-style.webp"
                    alt="Custom luxury presentation two-piece box"
                    fill
                    sizes="(max-width: 640px) 50vw, 260px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Instagram Glyph Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/35 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tile 2: Top-Right (2x2 Large) */}
                <div className="col-span-2 row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/mailer-box-style.webp"
                    alt="Custom printed mailer box packaging"
                    fill
                    sizes="(max-width: 640px) 50vw, 260px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Tile 3: Bottom-Left (2x2 Large) */}
                <div className="col-span-2 row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/premium-green-packaging-box-mockup.webp"
                    alt="Premium green luxury custom box mockup"
                    fill
                    sizes="(max-width: 640px) 50vw, 260px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Tile 4: Bottom-Right 1 (1x1 Mini) */}
                <div className="col-span-1 row-span-1 relative rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/gable-box-style.webp"
                    alt="Custom gable box style"
                    fill
                    sizes="130px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Tile 5: Bottom-Right 2 (1x1 Mini) */}
                <div className="col-span-1 row-span-1 relative rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/tuck-top-box-style.webp"
                    alt="Custom tuck top box style"
                    fill
                    sizes="130px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Tile 6: Bottom-Right 3 (1x1 Mini) */}
                <div className="col-span-1 row-span-1 relative rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/auto-lock-box-style.webp"
                    alt="Custom auto lock box style"
                    fill
                    sizes="130px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Tile 7: Bottom-Right 4 (1x1 Mini) */}
                <div className="col-span-1 row-span-1 relative rounded-lg sm:rounded-xl overflow-hidden bg-[#E2D4C0] group shadow-inner">
                  <Image
                    src="/images/cta/6-corners-box-style.webp"
                    alt="Custom 6 corners box style"
                    fill
                    sizes="130px"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
