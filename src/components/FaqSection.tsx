"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  id: number;
  number: string;
  question: string;
  answer: string;
}

const leftFaqItems: FaqItem[] = [
  {
    id: 1,
    number: "01",
    question: "Is there a minimum order quantity?",
    answer:
      "No. You can order a single custom box, which makes it easy to test a new product or size before a bigger run. Unit prices drop as your quantity grows.",
  },
  {
    id: 2,
    number: "02",
    question: "How do I choose the right box size?",
    answer:
      "Measure your product's length, width, and depth, then add 3-5mm to each dimension for a snug fit. If you're using protective void fill or custom foam inserts, factor in an extra 10-15mm. Our team can also help you determine the exact internal dieline dimensions.",
  },
  {
    id: 3,
    number: "03",
    question: "Can I get custom boxes with my logo?",
    answer:
      "Yes, absolutely. We offer full-colour CMYK printing inside and outside the box with your logo, branding, and custom patterns. You can also add specialty finishes including foil stamping, embossing, debossing, and spot UV coating.",
  },
  {
    id: 4,
    number: "04",
    question: "Do you offer wholesale custom boxes?",
    answer:
      "Yes. We cater to bulk commercial orders from hundreds to tens of thousands of units with generous tiered volume discounts, dedicated account management, and flexible scheduled deliveries across Australia.",
  },
  {
    id: 5,
    number: "05",
    question: "Can I order a sample?",
    answer:
      "Yes. You can order a single custom-printed prototype box with your actual artwork or request a plain structural sample to test fit and board strength before committing to bulk manufacturing.",
  },
];

const rightFaqItems: FaqItem[] = [
  {
    id: 6,
    number: "06",
    question: "What if I don't have artwork?",
    answer:
      "No problem at all! Our in-house packaging design team can help you design your box from scratch, place your logo, generate clean dielines, and provide realistic 3D digital mockups for your approval.",
  },
  {
    id: 7,
    number: "07",
    question: "Will I see a proof before printing?",
    answer:
      "Yes. Before any printing or die-cutting begins, we provide a detailed 2D digital dieline proof and a 3D interactive preview. Production only commences once you have formally reviewed and approved the proof.",
  },
  {
    id: 8,
    number: "08",
    question: "How long does delivery take?",
    answer:
      "Standard production typically takes 8 to 12 business days following artwork approval. Express delivery across Australia (Sydney, Melbourne, Brisbane, Perth, Adelaide, etc.) usually takes 2 to 5 business days via tracked couriers.",
  },
  {
    id: 9,
    number: "09",
    question: "What affects the price of custom packaging boxes?",
    answer:
      "Key pricing factors include box style, dimensions, order quantity (larger volumes reduce per-unit costs), cardboard flute grade, print coverage (outside only vs. inside & outside), and specialty finishes like foil or spot UV.",
  },
  {
    id: 10,
    number: "10",
    question: "Do you offer eco-friendly materials?",
    answer:
      "Yes. All our corrugated boxes are manufactured in Australia from sustainably sourced, FSC®-certified recycled cardboard. We print using non-toxic soy-based inks, and our entire packaging range is 100% recyclable and biodegradable.",
  },
];

export const FaqSection: React.FC = () => {
  // Item 1 is open by default as shown in the Figma design
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderFaqColumn = (items: FaqItem[]) => {
    return (
      <div className="flex flex-col divide-y divide-[#041F49]/10 border-t border-b border-[#041F49]/10">
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div key={item.id} className="py-5 sm:py-6 transition-colors">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full flex items-start justify-between gap-4 text-left cursor-pointer group focus:outline-none"
              >
                {/* Number & Question */}
                <div className="flex items-start gap-4 sm:gap-6 flex-1 pr-2">
                  <span
                    className="text-[12.5px] sm:text-[13px] font-medium text-[#082E63]/40 tracking-wider pt-0.5 shrink-0 select-none"
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-[16px] sm:text-[17.5px] leading-snug transition-colors duration-200 ${
                      isOpen
                        ? "text-[#041F49] font-medium"
                        : "text-[#041F49] font-normal group-hover:text-[#F2B329]"
                    }`}
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {item.question}
                  </span>
                </div>

                {/* Circular Toggle Button (+ / -) */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#F2B329] text-white shadow-[0_3px_10px_rgba(242,179,41,0.35)] rotate-0"
                      : "border border-[#041F49]/15 text-[#041F49] bg-transparent group-hover:border-[#041F49]/40 group-hover:bg-[#041F49]/5"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-white stroke-[2.2]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#041F49] stroke-[1.8]" />
                  )}
                </div>
              </button>

              {/* Collapsible Answer Content */}
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pl-8 sm:pl-10 pr-12">
                    <p
                      className="text-[#4A5568] text-[14px] sm:text-[14.5px] leading-[1.65] font-light max-w-[490px]"
                      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white text-[#041F49] py-16 sm:py-20 lg:py-24"
    >
      {/* Outer Container with comfortable margins */}
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 sm:pb-16">
          {/* Left Column: Eyebrow + Heading */}
          <div>
            <div className="flex items-center gap-2.5 select-none mb-3 sm:mb-4">
              <div
                className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[#082E63]/70"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  lineHeight: "19px",
                }}
              >
                FAQ
              </span>
            </div>

            <h2
              id="faq-heading"
              className="text-[#041F49] tracking-[-0.035em]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(34px, 3.4vw, 54px)",
                lineHeight: "clamp(38px, 3.6vw, 58px)",
                letterSpacing: "-0.035em",
              }}
            >
              <span className="font-light" style={{ fontWeight: 300 }}>
                Questions,{" "}
              </span>
              <span
                className="text-[#F2B329] italic font-extralight"
                style={{ fontWeight: 200 }}
              >
                answered.
              </span>
            </h2>
          </div>

          {/* Right Column: Subtitle Description */}
          <div className="md:max-w-[400px] lg:max-w-[440px] pb-1">
            <p
              className="text-[#4A5568] text-[15px] sm:text-[15.5px] leading-[1.6] font-light"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              Everything you might want to know before ordering custom boxes from Australian Custom Boxes.
            </p>
          </div>
        </div>

        {/* Two-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-0">
          {/* Column 1: Items 01 - 05 */}
          <div>{renderFaqColumn(leftFaqItems)}</div>

          {/* Column 2: Items 06 - 10 */}
          <div className="mt-0 max-lg:-mt-[1px]">{renderFaqColumn(rightFaqItems)}</div>
        </div>
      </div>
    </section>
  );
};
