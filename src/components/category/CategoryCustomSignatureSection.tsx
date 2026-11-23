import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeatureStep {
  number: string;
  title: string;
  description: string;
}

const steps: FeatureStep[] = [
  {
    number: "01",
    title: "A size that fits",
    description: "Build around your product, with room for an insert when you need one.",
  },
  {
    number: "02",
    title: "Your colours. Your artwork.",
    description: "Explore printing on the outside, inside or both.",
  },
  {
    number: "03",
    title: "A finishing touch",
    description: "Add foil, embossing, spot UV or a soft-touch finish.",
  },
];

export default function CategoryCustomSignatureSection() {
  return (
    <section
      className="w-full bg-[#041F49] text-white py-10 sm:py-14 lg:py-16 relative overflow-hidden select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      {/* Subtle ambient glow behind content */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F2B329]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#082E63]/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN: Sleek Gold Embossed Image Showcase
             ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.2] max-h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#082E63]/30 group">
              <Image
                src="/images/customisation/pack-legacy-embossed.webp"
                alt="Custom gold embossed packaging finish"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority={false}
              />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Heading, Subtitle, 3-Step Features, Action CTA
             ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 bg-[#F2B329] rotate-45 shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.8px] text-white/70">
                YOUR BOX, YOUR SIGNATURE
              </span>
            </div>

            {/* Heading H2 */}
            <h2 className="text-white tracking-tight text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.12] mb-3">
              <span>Make it </span>
              <br />
              <span
                className="text-[#F2B329] italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                unmistakably yours.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-white/75 text-[14px] sm:text-[14.5px] font-light leading-relaxed max-w-[500px] mb-5 sm:mb-6">
              A box style is only the beginning. Bring your brand into every surface, every edge and every opening.
            </p>

            {/* 3 Step Features with Thin Dividers */}
            <div className="divide-y divide-white/10 border-y border-white/10 mb-6 sm:mb-7">
              {steps.map((step) => (
                <div key={step.number} className="py-2.5 sm:py-3 flex items-start gap-4 sm:gap-5">
                  <span className="text-white/45 text-[12px] font-mono tracking-wider w-7 shrink-0 pt-0.5">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[15px] sm:text-[15.5px] font-bold text-white mb-0.5 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] text-white/65 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button: Create My Packaging */}
            <div>
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-3 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-[13px] sm:text-[13.5px] pl-5 pr-1.5 py-1.5 rounded-full shadow-[0_12px_28px_-6px_rgba(242,179,41,0.45)] transition-all duration-200 active:scale-95"
              >
                <span>Create My Packaging</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#041F49] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
