"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const QuoteCtaSection: React.FC = () => {
  return (
    <section
      id="quote-cta"
      aria-labelledby="quote-cta-heading"
      className="w-full bg-[#F2B329] py-8 sm:py-10 lg:py-12 flex items-center select-none"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 xl:px-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
        {/* ════════════════════════════════════════════════════════════════
            LEFT BLOCK (max-w-[1082px])
           ════════════════════════════════════════════════════════════════ */}
        <div className="w-full max-w-[1082px]">
          {/* H2 Heading: 2 lines on desktop, natural wrap on mobile */}
          <h2
            id="quote-cta-heading"
            className="text-[#041F49] tracking-[-0.035em] sm:tracking-[-0.04em]"
            style={{
              fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              fontSize: "clamp(26px, 2.8vw, 52px)",
              lineHeight: "clamp(30px, 2.9vw, 54px)",
            }}
          >
            <span className="font-[250] font-extralight">
              Ready to create packaging your
            </span>{" "}
            <br className="hidden lg:block" />
            <span className="font-[250] font-extralight">customers </span>
            <strong
              className="font-semibold"
              style={{ fontWeight: 600 }}
            >
              will remember?
            </strong>
          </h2>

          {/* Paragraph: exactly 2 lines on desktop */}
          <p
            className="mt-2.5 sm:mt-3 max-w-[620px] text-[#041F49]"
            style={{
              fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              fontSize: "clamp(14px, 0.9vw, 17px)",
              lineHeight: "clamp(22px, 1.4vw, 26px)",
              fontWeight: 350,
            }}
          >
            Tell us what you&apos;re packing. We&apos;ll design it free, show you a 3D mockup,
            and send a real sample if you&apos;d like one.
          </p>

          {/* Buttons row */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Primary Button: "Get a Free Quote" */}
            <Link
              href="/get-a-quote"
              className="group h-[42px] sm:h-[50px] w-auto sm:w-[205px] rounded-full bg-[#082E63] text-white font-semibold text-[13px] sm:text-[14.5px] leading-[22px] tracking-[0.01em] pl-4 sm:pl-6 pr-1.5 flex items-center justify-between gap-3 transition-colors hover:bg-[#041F49] shadow-sm select-none"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              <span>Get a Free Quote</span>
              <div
                className="w-[30px] sm:w-[36px] h-[30px] sm:h-[36px] rounded-full bg-[#F2B329] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <ArrowRight
                  className="w-[14px] sm:w-[15px] h-[14px] sm:h-[15px] text-[#041F49] -rotate-45"
                  strokeWidth={1.5}
                />
              </div>
            </Link>

            {/* Secondary Button: "Request a Sample" */}
            <Link
              href="/request-a-sample"
              className="h-[42px] sm:h-[50px] w-auto sm:w-[180px] rounded-full bg-transparent ring-[1.5px] ring-inset ring-[#041F49] text-[#041F49] font-semibold text-[13px] sm:text-[14.5px] leading-[22px] tracking-[0.01em] px-4 sm:px-[24px] flex items-center justify-center transition-colors hover:bg-[#041F49]/5 select-none"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              <span>Request a Sample</span>
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            RIGHT BLOCK: Circular Badge (scaled proportionally to compact banner)
           ════════════════════════════════════════════════════════════════ */}
        <div className="shrink-0 self-center lg:self-center mt-2 lg:mt-0">
          <Link
            href="/get-a-quote"
            aria-label="Get a quote — Since 2019 · Made in Australia"
            className="group relative block w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[155px] lg:h-[155px] xl:w-[170px] xl:h-[170px] transition-transform duration-300 hover:scale-[1.03]"
          >
            <svg
              viewBox="0 0 230 230"
              className="w-full h-full overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="quote-cta-badge-circle"
                  d="M 33.3,162.2 A 94.3,94.3 0 1,1 196.7,162.2"
                  fill="none"
                />
              </defs>

              {/* Outer Circular Rotating Ring Text */}
              <g className="origin-center transition-transform duration-500 ease-out group-hover:rotate-12 motion-safe:group-hover:animate-[spin_16s_linear_infinite]">
                <text
                  fill="#041F49"
                  style={{
                    fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  <textPath
                    href="#quote-cta-badge-circle"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    SINCE 2019 · MADE IN AUSTRALIA ·
                  </textPath>
                </text>
              </g>

              {/* Central Solid Circle (105.8px diameter, r=52.9) */}
              <circle
                cx="115"
                cy="115"
                r="52.9"
                fill="#041F49"
                className="transition-colors duration-200 group-hover:fill-[#082E63]"
              />

              {/* Central Arrow pointing up-right ↗ */}
              <g
                transform="translate(115, 115) rotate(-45) translate(-115, -115)"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M101 115h28M119 105l10 10-10 10"
                  stroke="#F2B329"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuoteCtaSection;
