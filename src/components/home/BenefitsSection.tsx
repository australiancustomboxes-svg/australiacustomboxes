import React from "react";

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Benefits Icons
 * Exact 30px x 30px vector SVGs matching Figma specifications:
 * - Stroke: #986400 (Gold / Ochre)
 * - Stroke width: 1.625px
 * - Stroke linecap: round, stroke linejoin: round
 */
const BenefitIcons = {
  // 1. One: Hexagon with numeral 1
  one: (
    <svg
      viewBox="0 0 30 30"
      className="w-[30px] h-[30px] text-[#986400] stroke-current fill-none shrink-0"
      strokeWidth="1.625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer Hexagon */}
      <path d="M 15 3.75 L 25.6 9.4 L 25.6 20.6 L 15 26.25 L 4.4 20.6 L 4.4 9.4 Z" />
      {/* Numeral 1 */}
      <path d="M 13.2 12.5 L 15 10.8 L 15 19.4" />
    </svg>
  ),

  // 2. Fast: Stopwatch / Timer with speed lines
  fast: (
    <svg
      viewBox="0 0 30 30"
      className="w-[30px] h-[30px] text-[#986400] stroke-current fill-none shrink-0"
      strokeWidth="1.625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Top Stopwatch Pusher / Button */}
      <path d="M 14.5 5.5 L 19.5 5.5" />
      <path d="M 17 5.5 L 17 8" />
      {/* Stopwatch Circular Body */}
      <circle cx="17" cy="18" r="8" />
      {/* Clock Hands */}
      <path d="M 17 14 L 17 18 L 20.5 16" />
      {/* Motion / Speed Lines at Left */}
      <path d="M 4 14 L 9 14" />
      <path d="M 2.5 18 L 8 18" />
      <path d="M 4 22 L 9 22" />
    </svg>
  ),

  // 3. Pen: Tilted Stylus / Drawing Pencil at 45 degrees
  pen: (
    <svg
      viewBox="0 0 30 30"
      className="w-[30px] h-[30px] text-[#986400] stroke-current fill-none shrink-0"
      strokeWidth="1.625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Pencil Body angled at 45 degrees */}
      <path d="M 22.5 7.5 L 24.5 9.5 L 10.5 23.5 L 6.5 24.5 L 7.5 20.5 Z" />
      {/* Pencil Tip Detail */}
      <path d="M 19 11 L 21 13" />
      <path d="M 9.5 20.5 L 11.5 22.5" />
    </svg>
  ),

  // 4. Print: Desktop Packaging Printer with paper feed and output
  print: (
    <svg
      viewBox="0 0 30 30"
      className="w-[30px] h-[30px] text-[#986400] stroke-current fill-none shrink-0"
      strokeWidth="1.625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Top Paper Feed */}
      <path d="M 8.75 10 L 8.75 4.5 L 21.25 4.5 L 21.25 10" />
      {/* Main Printer Body */}
      <path d="M 4 10 L 26 10 C 27.1 10 28 10.9 28 12 L 28 20 C 28 21.1 27.1 22 26 22 L 4 22 C 2.9 22 2 21.1 2 20 L 2 12 C 2 10.9 2.9 10 4 10 Z" />
      {/* Status Dot / Slot */}
      <circle cx="23" cy="14" r="0.75" fill="#986400" />
      {/* Output Paper Tray */}
      <path d="M 8.75 18 L 8.75 25.5 L 21.25 25.5 L 21.25 18" />
    </svg>
  ),

  // 5. Leaf: Eco Organic Leaf with stem vein
  leaf: (
    <svg
      viewBox="0 0 30 30"
      className="w-[30px] h-[30px] text-[#986400] stroke-current fill-none shrink-0"
      strokeWidth="1.625"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Leaf Curved Contour */}
      <path d="M 23.75 6.25 C 13.5 6.25 6.25 13.5 6.25 23.75 C 16.5 23.75 23.75 16.5 23.75 6.25 Z" />
      {/* Diagonal Central Vein / Stem */}
      <path d="M 6.25 23.75 L 18 12" />
    </svg>
  ),
};

const benefitsData: BenefitItem[] = [
  {
    id: "no-minimums",
    title: "No Minimums",
    description: "Order exactly what you need.",
    icon: BenefitIcons.one,
  },
  {
    id: "fast-turnaround",
    title: "Fast Turnaround",
    description: "Produced in 8–12 business days.",
    icon: BenefitIcons.fast,
  },
  {
    id: "free-design-support",
    title: "Free Design Support",
    description: "Professional help with your artwork.",
    icon: BenefitIcons.pen,
  },
  {
    id: "premium-print-quality",
    title: "Premium Print Quality",
    description: "Sharp, vibrant, consistent results.",
    icon: BenefitIcons.print,
  },
  {
    id: "eco-friendly-materials",
    title: "Eco-Friendly Materials",
    description: "FSC-certified, recyclable options.",
    icon: BenefitIcons.leaf,
  },
];

/**
 * BenefitsSection
 * Sourced directly from Figma CSS:
 * - Height: 187.64px
 * - Background: #FFFFFF
 * - Contained inside .site-container to align margins with Header & Hero
 * - Vertical dividing lines between items
 * - Title: Libre Franklin 600, 16.3px, color #082E63
 * - Description: Libre Franklin 400, 14.1px, color rgba(8, 46, 99, 0.66)
 */
export const BenefitsSection: React.FC = () => {
  return (
    <section
      aria-label="Australian Custom Boxes Benefits"
      className="w-full bg-white border-t border-b border-[#E5EBF5] shadow-[0_8px_28px_-6px_rgba(4,31,73,0.08)] relative z-20"
    >
      <div className="site-container">
        {/* 
          1. Desktop Layout (xl: >= 1280px):
          Exact Figma 5-column row with vertical dividers and 187.64px height
        */}
        <div className="hidden xl:grid grid-cols-5 min-h-[187.64px]">
          {benefitsData.map((item, index) => {
            const isLast = index === benefitsData.length - 1;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-start pt-[34px] pb-[32px] px-6 lg:px-7 transition-colors duration-200 hover:bg-slate-50/60 group ${
                  !isLast ? "border-r border-[#E5EBF5]" : ""
                }`}
              >
                {/* 30px x 30px Gold Icon */}
                <div className="w-[30px] h-[30px] flex items-center justify-start transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-[#082E63] text-[16.3px] font-semibold leading-[26px] tracking-[-0.163px] mt-[13px]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[14.1px] font-normal leading-[21px] mt-[6px]"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    fontWeight: 400,
                    color: "rgba(8, 46, 99, 0.66)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 
          2. Mobile & Tablet Layout (< xl: < 1280px):
          Fully mobile-responsive grid with compact cards and soft shadows
        */}
        <div className="grid xl:hidden grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 py-5 sm:py-8">
          {benefitsData.map((item, index) => {
            const isFifth = index === 4;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between p-3.5 sm:p-4 rounded-[12px] bg-[#F8FAFD] border border-[#E5EBF5] shadow-xs transition-all duration-200 hover:border-[#F2B329]/50 ${
                  isFifth ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-[26px] h-[26px] flex items-center justify-start">
                    {item.icon}
                  </div>

                  <h3
                    className="text-[#082E63] text-[13.5px] sm:text-[14.5px] font-semibold leading-tight mt-2.5 tracking-tight"
                    style={{
                      fontFamily:
                        "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[11.5px] sm:text-[12.5px] font-normal leading-[1.4] mt-1 text-[#082E63]/70"
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
    </section>
  );
};

export default BenefitsSection;

