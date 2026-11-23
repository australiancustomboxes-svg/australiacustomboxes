"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: "box-style",
    number: "01",
    question: "Which box style should I choose?",
    answer:
      "Start with how your product will be sold and delivered. Corrugated mailers suit shipping, folding cartons suit retail presentation, and rigid boxes create a more substantial gifting experience. Tell us about your product if you'd like help choosing.",
  },
  {
    id: "customise-size-artwork",
    number: "02",
    question: "Can I customise the size and artwork?",
    answer:
      "Yes, absolutely. Every box is custom-made to your exact millimeter dimensions so your products fit securely. You can print inside and out in full CMYK colour, with custom finishes like foil stamping, embossing, and spot UV.",
  },
  {
    id: "quote-info",
    number: "03",
    question: "What information do I need for a quote?",
    answer:
      "To get a fast quote within 2 working hours, simply let us know your preferred box style, approximate internal dimensions (length, width, depth), order quantity, and whether you require printing inside, outside, or custom inserts.",
  },
  {
    id: "check-design",
    number: "04",
    question: "Can I check the design before production?",
    answer:
      "Yes, 100%. Before anything goes to print or manufacturing, our Melbourne prepress team sends you a detailed 2D vector dieline proof and interactive 3D digital mockup for your formal review and sign-off.",
  },
];

export default function CategoryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 01 is open by default as in Figma

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="w-full bg-[#FAFBFD] py-16 sm:py-24 lg:py-28 border-b border-gray-100 select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Eyebrow, Heading, Subtitle, Contact Link
             ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#F2B329] rotate-45 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[2.8px] text-[#041F49]/70">
                A LITTLE CLARITY
              </span>
            </div>

            {/* Heading H2 */}
            <h2 className="text-[#041F49] tracking-tight text-[36px] sm:text-[44px] lg:text-[48px] font-semibold leading-[1.15] mb-4">
              <span>Before you </span>
              <br />
              <span
                className="text-[#B18D46] italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                choose your
              </span>
              <br />
              <span
                className="text-[#B18D46] italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                box.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15px] text-[#556987] font-light leading-relaxed max-w-[340px] mb-8">
              A few answers to help you find the right starting point.
            </p>

            {/* Link: Ask a packaging specialist */}
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#041F49] underline decoration-2 underline-offset-4 hover:text-[#B18D46] hover:decoration-[#B18D46] transition-all group"
              >
                <span>Ask a packaging specialist</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Interactive Accordion FAQs List
             ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 border-t border-gray-200/90 divide-y divide-gray-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={faq.id} className="py-5 sm:py-6 transition-colors">
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 flex-1 pr-2">
                      <span className="text-[#64748B] text-[12px] font-mono tracking-wider w-6 shrink-0">
                        {faq.number}
                      </span>
                      <h3 className="text-[#041F49] text-[16px] sm:text-[17.5px] font-bold tracking-tight group-hover:text-[#082E63] transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Circular Open / Close Toggle Button */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#F2B329] text-[#041F49] shadow-sm"
                          : "border border-gray-200 text-[#041F49] bg-white group-hover:border-gray-400"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="pt-4 pl-10 sm:pl-12 pr-4 text-[13.5px] sm:text-[14px] text-[#556987] font-light leading-relaxed animate-in fade-in-50 duration-200 max-w-2xl">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
