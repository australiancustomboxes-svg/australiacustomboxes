"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

const stepsData: StepItem[] = [
  {
    step: 1,
    title: "Brief",
    description: "Tell us your product, size and quantity. One box is fine.",
  },
  {
    step: 2,
    title: "Design",
    // TODO: Replace copy if needed
    description: "Upload your artwork or work with our packaging engineers on a custom 3D dieline.",
  },
  {
    step: 3,
    title: "Sample",
    // TODO: Replace copy if needed
    description: "Receive a real printed prototype sample to verify board strength, fit, and exact colours.",
  },
  {
    step: 4,
    title: "Production",
    // TODO: Replace copy if needed
    description: "Precision manufactured in Australia using recyclable corrugated cardboard and soy-based inks.",
  },
  {
    step: 5,
    title: "Delivery",
    // TODO: Replace copy if needed
    description: "Fast, reliable door-to-door delivery right across Australia straight from our production floor.",
  },
];

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const currentStep = stepsData.find((s) => s.step === activeStep) || stepsData[0];

  const handleStepChange = (newStep: number) => {
    if (newStep === activeStep || newStep < 1 || newStep > 5) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveStep(newStep);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    if (activeStep > 1) handleStepChange(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < 5) handleStepChange(activeStep + 1);
  };

  // Stopwatch geometry:
  // Step 1: 90 deg (quarter circle)
  // Step 2: 162 deg
  // Step 3: 234 deg
  // Step 4: 306 deg
  // Step 5: 360 deg (full circle)
  const angles = [90, 162, 234, 306, 360];
  const activeAngle = angles[activeStep - 1];
  const r = 35;
  const circumference = 2 * Math.PI * r; // ~219.91
  const dashLength = (activeAngle / 360) * circumference;
  const needleRotation = activeAngle - 90;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full bg-[#041F49] text-white py-10 sm:py-12 lg:py-14 select-none relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">
        {/* Mobile / Tablet Top Header (<1024px): "Start with step one" link & mini stopwatch */}
        <div className="lg:hidden flex items-center justify-between pb-6 mb-6 border-b border-white/15">
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center gap-2 text-white font-semibold text-[13.5px] leading-snug border-b-2 border-white pb-1 transition-colors hover:text-[#F2B329] hover:border-[#F2B329]"
            style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
          >
            <span>Start with step one</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>

          {/* Mini Stopwatch for Mobile */}
          <div className="w-[95px] sm:w-[115px] shrink-0">
            <StopwatchSvg
              activeAngle={activeAngle}
              dashLength={dashLength}
              circumference={circumference}
              needleRotation={needleRotation}
            />
          </div>
        </div>

        {/* Desktop Layout (≥1024px) / Main Content Stack */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12 xl:gap-16">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN (max-w-[680px])
             ════════════════════════════════════════════════════════════════ */}
          <div className="w-full max-w-[680px]">
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2.5 select-none">
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
                HOW IT WORKS
              </span>
            </div>

            {/* 2. H2 Heading */}
            <h2
              id="how-it-works-heading"
              className="mt-3 sm:mt-3.5 text-white font-light tracking-[-0.035em]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(28px, 2.8vw, 52px)",
                lineHeight: "clamp(32px, 2.9vw, 54px)",
                letterSpacing: "-0.035em",
                fontWeight: 300,
              }}
            >
              From idea to doorstep
              <br className="hidden lg:block" />{" "}
              in{" "}
              <span
                className="italic text-[#F2B329]"
                style={{ fontWeight: 200 }}
              >
                five simple steps.
              </span>
            </h2>

            {/* 3. Progress Dots (5 small dots, clickable) */}
            <div
              className="mt-5 sm:mt-6 flex items-center gap-3"
              role="tablist"
              aria-label="How it works steps"
            >
              {stepsData.map((s) => {
                const isActive = s.step === activeStep;

                return (
                  <button
                    key={s.step}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to step ${s.step}: ${s.title}`}
                    onClick={() => handleStepChange(s.step)}
                    className="p-1 -m-1 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? "w-2.5 h-2.5 sm:w-2 sm:h-2 bg-[#F2B329] scale-125"
                          : "w-2 h-2 sm:w-1.5 sm:h-1.5 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Step Content Region with Smooth Transition & Live Announcer */}
            <div
              aria-live="polite"
              className={`transition-all duration-300 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* 4. Step Number: "01" */}
              <div
                className="mt-3.5 sm:mt-4 text-[#F2B329] select-none"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontSize: "clamp(46px, 3.2vw, 64px)",
                  lineHeight: "1",
                  fontWeight: 200,
                  letterSpacing: "-0.04em",
                }}
              >
                {String(currentStep.step).padStart(2, "0")}
              </div>

              {/* 5. Step Description */}
              <p
                className="mt-2 sm:mt-2.5 text-white font-light max-w-[800px]"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontSize: "clamp(17px, 1.25vw, 22px)",
                  lineHeight: "clamp(24px, 1.65vw, 32px)",
                  fontWeight: 300,
                }}
              >
                {currentStep.description}
              </p>

              {/* 6. Step Meta */}
              <div className="mt-4 sm:mt-5 flex flex-col">
                <span
                  className="text-[13.5px] font-semibold text-white leading-tight"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {currentStep.title}
                </span>
                <span
                  className="text-[11.5px] text-white/50 leading-tight mt-0.5"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  Step {currentStep.step} of 5
                </span>
              </div>
            </div>

            {/* 7. Full Column Divider */}
            <div className="mt-4 sm:mt-5 w-full border-t border-white/15" />

            {/* 8. Controls Row */}
            <div className="mt-3.5 sm:mt-4 flex items-center justify-between">
              {/* Counter: "01 / 05" */}
              <div
                className="text-[12.5px] tracking-[0.05em] select-none"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                <span className="font-semibold text-white">
                  {String(activeStep).padStart(2, "0")}
                </span>
                <span className="text-white/50"> / 05</span>
              </div>

              {/* Prev & Next Navigation Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeStep === 1}
                  aria-label="Previous step"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-current" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeStep === 5}
                  aria-label="Next step"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/10 hover:border-white/60 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-current" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN (Desktop only: Link top, Stopwatch below)
             ════════════════════════════════════════════════════════════════ */}
          <div className="hidden lg:flex flex-col items-end shrink-0 pt-0.5">
            {/* Link: "Start with step one" */}
            <Link
              href="/get-a-quote"
              className="group inline-flex items-center gap-2 text-white font-semibold text-[13.5px] leading-snug border-b-2 border-white pb-1 transition-colors hover:text-[#F2B329] hover:border-[#F2B329]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              <span>Start with step one</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>

            {/* Stopwatch Illustration */}
            <div className="mt-8 xl:mt-10 w-[clamp(150px,11vw,200px)]">
              <StopwatchSvg
                activeAngle={activeAngle}
                dashLength={dashLength}
                circumference={circumference}
                needleRotation={needleRotation}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══ Inline Stopwatch SVG Component ════════════════════════════════════════ */

interface StopwatchSvgProps {
  activeAngle: number;
  dashLength: number;
  circumference: number;
  needleRotation: number;
}

function StopwatchSvg({
  activeAngle,
  dashLength,
  circumference,
  needleRotation,
}: StopwatchSvgProps) {
  const cx = 120;
  const cy = 150;
  const r = 35;
  const strokeW = 70;

  return (
    <svg
      viewBox="0 0 240 280"
      className="w-full h-auto overflow-visible select-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top Crown: Stem + Cap at 12 o'clock */}
      <rect x="110" y="42" width="20" height="20" rx="3" fill="#FFFFFF" />
      <rect x="99" y="32" width="42" height="13" rx="4" fill="#FFFFFF" />

      {/* Top-Right Angled Pusher Button at ~40deg */}
      <g transform="rotate(40 120 150)">
        <rect x="108" y="38" width="24" height="20" rx="4" fill="#FFFFFF" />
      </g>

      {/* Thick Outer White Ring (stroke ≈ 20px) */}
      <circle
        cx={cx}
        cy={cy}
        r="82"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="20"
      />

      {/* Gold Pie Wedge / Fill Arc with 500ms Smooth Transition */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#F2B329"
        strokeWidth={strokeW}
        strokeDasharray={`${dashLength} ${circumference}`}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{
          transition: "stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Center Needle / Arm Pointing to Leading Edge */}
      <g
        style={{
          transform: `rotate(${needleRotation}deg)`,
          transformOrigin: `${cx}px ${cy}px`,
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <rect
          x={cx}
          y={cy - 6}
          width="62"
          height="12"
          rx="6"
          fill="#F2B329"
        />
      </g>

      {/* Solid Center Hub Circle */}
      <circle cx={cx} cy={cy} r="16" fill="#F2B329" />
    </svg>
  );
}

export default HowItWorksSection;
