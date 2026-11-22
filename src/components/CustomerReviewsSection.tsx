"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Star, Quote } from "lucide-react";

export interface ReviewItem {
  id: number;
  rating: number;
  text: string;
  author: string;
  source: string;
  city?: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    rating: 5,
    text: "Your customer's own words go here: what they ordered, how it arrived and how the boxes looked. Your customer's own words go here: what they ordered, how it arrived and how the boxes looked.",
    author: "[Customer name]",
    source: "Google",
    city: "Melbourne, VIC",
  },
  {
    id: 2,
    rating: 5,
    text: "Your customer's own words go here: what they ordered, how it arrived and how the boxes looked. Your customer's own words go here: what they ordered, how it arrived and how the boxes looked.",
    author: "[Customer name]",
    source: "Google",
    city: "Sydney, NSW",
  },
  {
    id: 3,
    rating: 5,
    text: "Your customer's own words go here: what they ordered, how it arrived and how the boxes looked. Your customer's own words go here: what they ordered, how it arrived and how the boxes looked.",
    author: "[Customer name]",
    source: "Google",
    city: "Brisbane, QLD",
  },
];

export const CustomerReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="w-full bg-[#FFFFFF] py-14 sm:py-18 lg:py-20 select-none"
    >
      {/* Outer Container with comfortable margins */}
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ════════════════════════════════════════════════════════════════
            TOP ROW: Section Heading & Trust Badges (Google + Trustpilot)
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-100">
          {/* Left: Heading & Subtitle */}
          <div>
            <h2
              id="reviews-heading"
              className="text-[#041F49] text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              What customers say
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-5 h-[2px] bg-[#F2B329] rounded-full inline-block shrink-0" aria-hidden="true" />
              <p
                className="text-[#64748B] text-[13px] sm:text-[14px] font-normal leading-relaxed"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                Real reviews from real orders, each linked to its source.
              </p>
            </div>
          </div>

          {/* Right: Google Rating + Trustpilot Rating + View All Button */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3.5 sm:gap-6 w-full lg:w-auto pt-1 lg:pt-0">
            {/* Badges Group */}
            <div className="flex items-center gap-3.5 sm:gap-6">
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2 sm:gap-2.5">
                {/* Google G Logo SVG */}
                <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10.5px] sm:text-[11px] font-semibold text-[#64748B] leading-none mb-1">
                    Google Rating
                  </span>
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="text-[12.5px] sm:text-[13px] font-bold text-[#041F49]">5.0</span>
                    <div className="flex text-[#F2B329] text-[10.5px] sm:text-[11px]" aria-label="5 out of 5 stars">
                      {"★★★★★"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              <div className="w-px h-7 sm:h-8 bg-gray-200" aria-hidden="true" />

              {/* Trustpilot Rating Badge */}
              <div className="flex items-center gap-2">
                {/* Trustpilot Green Star */}
                <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 bg-[#00B67A] flex items-center justify-center shrink-0">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" strokeWidth={0} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-[#041F49] leading-none mb-1">
                    Trustpilot
                  </span>
                  {/* 5 Green Squares with White Stars */}
                  <div className="flex gap-0.5" aria-label="Trustpilot 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#00B67A] flex items-center justify-center text-[8.5px] sm:text-[9px] text-white"
                      >
                        ★
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* "View All" Button */}
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-1.5 sm:gap-2 bg-[#F2B329] hover:bg-[#e2a420] text-[#041F49] font-semibold text-[12.5px] sm:text-[13px] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm transition-all duration-200 active:scale-95 ml-auto sm:ml-2"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              <span>View All</span>
              <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#041F49] text-[#F2B329] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            MIDDLE ROW: Client / Brand Logos Bar
           ════════════════════════════════════════════════════════════════ */}
        <div className="py-6 sm:py-9 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex items-center justify-between gap-6 sm:gap-8 min-w-[760px] opacity-80 hover:opacity-100 transition-opacity px-1">
            {/* CVS Pharmacy */}
            <div className="flex items-center gap-1.5 text-[#CC0000] font-bold text-[14px] tracking-tight">
              <span className="text-[16px]">❤</span>
              <span>cvs pharmacy</span>
            </div>

            {/* Coca-Cola */}
            <div className="text-[#F40009] font-serif font-black italic text-[17px] tracking-tight">
              Coca-Cola
            </div>

            {/* Starbucks */}
            <div className="w-7 h-7 rounded-full bg-[#006241] flex items-center justify-center text-white font-bold text-[11px] shadow-sm">
              ★
            </div>

            {/* VISA */}
            <div className="text-[#1A1F71] font-black italic text-[18px] tracking-wider">
              VISA
            </div>

            {/* DoorDash */}
            <div className="flex items-center gap-1 text-[#FF3008] font-bold text-[14px]">
              <span className="text-[15px]">◗</span>
              <span>DOORDASH</span>
            </div>

            {/* Mastercard */}
            <div className="flex items-center">
              <span className="w-5 h-5 rounded-full bg-[#EB001B] inline-block -mr-2" />
              <span className="w-5 h-5 rounded-full bg-[#F79E1B]/90 inline-block" />
            </div>

            {/* Uber */}
            <div className="text-black font-extrabold text-[16px] tracking-tight">
              Uber
            </div>

            {/* Capital One */}
            <div className="text-[#004977] font-bold text-[13px] tracking-tight">
              Capital<span className="text-[#D03027] italic">One</span>
            </div>

            {/* Microsoft */}
            <div className="flex items-center gap-1.5 text-gray-700 font-semibold text-[13.5px]">
              <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                <span className="bg-[#F25022]" />
                <span className="bg-[#7FBA00]" />
                <span className="bg-[#00A4EF]" />
                <span className="bg-[#FFB900]" />
              </div>
              <span>Microsoft</span>
            </div>

            {/* Netflix */}
            <div className="text-[#E50914] font-black tracking-widest text-[14px]">
              NETFLIX
            </div>

            {/* Amazon */}
            <div className="text-black font-extrabold text-[14.5px] tracking-tight relative">
              amazon
              <div className="w-full h-1 border-b-2 border-[#FF9900] rounded-full absolute -bottom-0.5 left-0" />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            BOTTOM ROW: Customer Review Cards (3-column Grid)
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E9EFF6] shadow-[0_4px_24px_-6px_rgba(4,31,73,0.06)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(4,31,73,0.12)] hover:-translate-y-1"
            >
              {/* Card Top: 5 Gold Stars & Quote Mark Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F2B329] text-[15px] gap-0.5" aria-label="5 stars rating">
                    {"★★★★★"}
                  </div>
                  <Quote className="w-6 h-6 text-[#CBD5E1] fill-[#CBD5E1]/40 stroke-none" />
                </div>

                {/* Review Body */}
                <p
                  className="text-[#334155] text-[14px] sm:text-[14.5px] leading-[1.65] font-light"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {item.text}
                </p>
              </div>

              {/* Card Footer: Customer Name & Google Reviews Badge */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span
                  className="text-[#041F49] text-[13.5px] font-semibold"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {item.author}
                </span>

                {/* Google Reviews Logo */}
                <div className="flex items-center gap-1.5 select-none">
                  <span className="font-bold text-[13.5px] tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-[9px] text-[#64748B] font-medium leading-none">
                      Reviews
                    </span>
                    <span className="text-[8.5px] text-[#F2B329] leading-none">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
