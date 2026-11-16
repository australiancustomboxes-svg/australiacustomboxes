"use client";

import React from "react";
import {
  Tag,
  Layers,
  Box,
  Pencil,
  Leaf,
  Percent,
  RotateCcw,
  Timer,
  FileCheck,
} from "lucide-react";

export interface ValuePropItem {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const valueProps: ValuePropItem[] = [
  {
    num: "01",
    title: "Low Minimum Quantity",
    description: "Order one box or as many as you need.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F2B329"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" />
        <path d="M12 8v8" />
        <path d="M10 10l2-2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Wholesale Pricing",
    description:
      "Custom printed boxes wholesale, with lower unit prices as quantities grow.",
    icon: <Tag className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />,
  },
  {
    num: "03",
    title: "Consistent Print Quality",
    description: "Sharp, colour-matched print on every run.",
    icon: (
      <Layers className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />
    ),
  },
  {
    num: "04",
    title: "Free 3D Mockup",
    description: "See your box from every angle before we print.",
    icon: <Box className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />,
  },
  {
    num: "05",
    title: "Free Design Assistance",
    description: "Our designers prepare your artwork at no cost.",
    icon: (
      <Pencil className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />
    ),
  },
  {
    num: "06",
    title: "Eco-Friendly Materials",
    description: "Recyclable board, kraft stock and soy-based inks.",
    icon: <Leaf className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />,
  },
  {
    num: "07",
    title: "Physical Samples",
    description: "Hold a real sample first. You only cover the postage.",
    icon: (
      <Percent className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />
    ),
  },
  {
    num: "08",
    title: "Easy Reordering",
    description: "Your dieline and artwork stay on file for next time.",
    icon: (
      <RotateCcw
        className="w-[22px] h-[22px] text-[#F2B329]"
        strokeWidth={1.6}
      />
    ),
  },
  {
    num: "09",
    title: "Made in Australia",
    description: "Local production, shipped Australia-wide.",
    icon: (
      <Timer className="w-[22px] h-[22px] text-[#F2B329]" strokeWidth={1.6} />
    ),
  },
  {
    num: "10",
    title: "Proof Before Print",
    description: "Nothing goes to press until you approve it.",
    icon: (
      <FileCheck
        className="w-[22px] h-[22px] text-[#F2B329]"
        strokeWidth={1.6}
      />
    ),
  },
];

const stats = [
  {
    number: "1",
    label: "Box minimum on every style",
  },
  {
    number: "2019",
    label: "Making boxes for Aussie brands since",
  },
  {
    number: "8–20",
    label: "Business days, proof to delivery",
  },
  {
    number: "$0",
    label: "Design and 3D mockup",
  },
];

/**
 * WhyACBSection — "We don't just make boxes. We make brands look better."
 * Blueprint:
 *  • Section Eyebrow: Diamond icon + "WHY AUSTRALIAN CUSTOM BOXES"
 *  • Headline: "We don't just make boxes. We make brands look better." (look better. in italic gold)
 *  • Intro paragraph
 *  • 4 Stats metrics with vertical divider lines
 *  • 10-cell bordered grid (2 rows x 5 cols on desktop, responsive)
 */
export const WhyACBSection: React.FC = () => {
  return (
    <section
      id="why-acb"
      aria-labelledby="why-acb-heading"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 relative z-10"
    >
      <div className="site-container">
        {/* ════════════════════════════════════════════════════════════════
            1. Top Section: Left (Headline) + Right (Intro + Stats)
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20 items-start">
          {/* Left Column: Eyebrow + Headline */}
          <div className="lg:col-span-6 flex flex-col justify-start">
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
                WHY AUSTRALIAN CUSTOM BOXES
              </span>
            </div>

            {/* Headline */}
            <h2
              id="why-acb-heading"
              className="font-light text-[#041F49] leading-[1.08]"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(32px, 3.8vw, 56px)",
                letterSpacing: "-1.5px",
                fontWeight: 300,
              }}
            >
              We don&apos;t just make
              <br />
              boxes. We make
              <br />
              brands{" "}
              <span
                className="italic text-[#B5882D]"
                style={{
                  fontFamily:
                    "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontWeight: 300,
                }}
              >
                look better.
              </span>
            </h2>
          </div>

          {/* Right Column: Paragraph + 4-col Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-1">
            {/* Paragraph */}
            <p
              className="text-[#4A5568] text-[15px] sm:text-[16px] leading-[1.65] mb-8 lg:mb-10"
              style={{
                fontFamily:
                  "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              We&apos;ve been making custom packaging boxes with logo printing
              for Australian businesses since 2019. Startups get the flexibility
              of no minimum order. Growing brands get the same print quality on
              every reorder, with unit prices that drop as volumes grow.
            </p>

            {/* Horizontal Divider Line above Stats */}
            <div className="w-full border-t border-[#D5DFEE] mb-6 sm:mb-8" />

            {/* 4 Stats Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col ${
                    idx !== 0 ? "sm:border-l sm:border-[#D5DFEE] sm:pl-4 xl:sm:pl-6" : ""
                  }`}
                >
                  <span
                    className="font-light text-[#041F49] leading-none mb-2"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      fontSize: "clamp(30px, 2.6vw, 42px)",
                      fontWeight: 300,
                    }}
                  >
                    {stat.number}
                  </span>
                  <span
                    className="text-[#4A5568] text-[12px] sm:text-[12.5px] leading-[1.35]"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. Feature Grid: 10 Cells (2 rows x 5 columns)
           ════════════════════════════════════════════════════════════════ */}
        <div className="w-full border border-[#D5DFEE] rounded-sm bg-white overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-y divide-[#D5DFEE]">
            {valueProps.map((item, index) => {
              // Custom borders for responsive grid
              const isFirstRowDesktop = index < 5;
              const isLastColDesktop = (index + 1) % 5 === 0;

              return (
                <div
                  key={item.num}
                  className={`p-6 sm:p-7 xl:p-8 flex flex-col justify-between min-h-[190px] xl:min-h-[210px] transition-colors duration-200 hover:bg-[#F8FAFD] group ${
                    !isLastColDesktop ? "lg:border-r lg:border-[#D5DFEE]" : ""
                  } ${
                    isFirstRowDesktop ? "lg:border-b lg:border-[#D5DFEE]" : ""
                  } ${
                    index % 2 === 0 ? "sm:border-r sm:border-[#D5DFEE]" : ""
                  } ${
                    index < 8 ? "sm:border-b sm:border-[#D5DFEE]" : ""
                  }`}
                >
                  {/* Top: Number */}
                  <span
                    className="text-[#8B9AAF] text-[11.5px] font-medium tracking-wide mb-4 select-none"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {item.num}
                  </span>

                  {/* Middle: Gold Icon */}
                  <div className="mb-4 text-[#F2B329] group-hover:scale-105 transition-transform duration-200">
                    {item.icon}
                  </div>

                  {/* Bottom: Title & Description */}
                  <div>
                    <h3
                      className="text-[#041F49] text-[15px] sm:text-[15.5px] font-semibold leading-snug mb-1.5"
                      style={{
                        fontFamily:
                          "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#5A677B] text-[12.5px] sm:text-[13px] leading-[1.5]"
                      style={{
                        fontFamily:
                          "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyACBSection;
