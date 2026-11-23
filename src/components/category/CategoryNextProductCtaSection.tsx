import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CategoryNextProductCtaSectionProps {
  secondaryLinkText?: string;
  secondaryLinkHref?: string;
}

export default function CategoryNextProductCtaSection({
  secondaryLinkText = "Explore Magnetic Boxes",
  secondaryLinkHref = "/custom-magnetic-closure-boxes",
}: CategoryNextProductCtaSectionProps) {
  return (
    <section
      className="w-full bg-[#EAA928] py-12 sm:py-16 lg:py-20 relative overflow-hidden select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Eyebrow, Heading H2, Subtitle, CTA Buttons
             ════════════════════════════════════════════════════════════════ */}
          <div className="max-w-[680px]">
            {/* Eyebrow */}
            <div className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[2.8px] text-[#041F49]/80 mb-3">
              READY WHEN YOU ARE
            </div>

            {/* Heading H2 */}
            <h2 className="text-[#041F49] tracking-tight text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] mb-3.5 font-normal">
              <span>Your next great product </span>
              <br className="hidden sm:inline" />
              <span>deserves a </span>
              <strong className="font-extrabold text-[#041F49]">great box.</strong>
            </h2>

            {/* Subtitle */}
            <p className="text-[#041F49]/80 text-[14px] sm:text-[15px] font-light leading-relaxed mb-6 sm:mb-8 max-w-[480px]">
              Share your idea. Let&apos;s find the packaging to bring it to life.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Navy Pill Button with Gold Arrow Circle */}
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-3 bg-[#041F49] hover:bg-[#072559] text-white font-bold text-[13px] sm:text-[13.5px] pl-6 pr-1.5 py-1.5 rounded-full shadow-md transition-all active:scale-95"
              >
                <span>Get a Custom Quote</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAA928] text-[#041F49] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
                </span>
              </Link>

              {/* Secondary Outline Pill Button */}
              <Link
                href={secondaryLinkHref}
                className="inline-flex items-center justify-center border border-[#041F49] hover:bg-[#041F49]/10 text-[#041F49] font-bold text-[13px] sm:text-[13.5px] px-6 py-2.5 rounded-full transition-all active:scale-95"
              >
                <span>{secondaryLinkText}</span>
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: 3D Isometric Box Line Drawing & Brand Micro-tag
             ════════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col items-center justify-center self-center lg:self-auto shrink-0 pr-4 lg:pr-12">
            <div className="w-28 h-28 sm:w-32 sm:h-32 relative flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                stroke="#041F49"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full drop-shadow-sm"
              >
                {/* Top rhombus face */}
                <path d="M48 14 L84 28 L48 44 L16 28 Z" fill="#EAA928" />
                {/* Center fold slit on top */}
                <path d="M48 14 L48 44" strokeWidth="1.8" />
                {/* Left vertical face */}
                <path d="M16 28 L16 68 L48 86 L48 44 Z" fill="#EAA928" />
                {/* Right vertical face */}
                <path d="M84 28 L84 68 L48 86 L48 44 Z" fill="#EAA928" />
                {/* Front vertical closure slit line */}
                <path d="M48 44 L48 56" strokeWidth="2.4" />
              </svg>
            </div>

            {/* Tagline */}
            <div className="mt-3 text-center text-[10px] sm:text-[10.5px] font-bold text-[#041F49]/85 uppercase tracking-[2px] leading-tight">
              <span>YOUR BRAND.</span>
              <br />
              <span>BEAUTIFULLY BOXED.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
