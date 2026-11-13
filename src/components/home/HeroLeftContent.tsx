import React from "react";
import Link from "next/link";
import {
  Package,
  ShieldCheck,
  Zap,
  MapPin,
  ArrowUpRight,
  Check,
  Star,
} from "lucide-react";

const featureItems = [
  {
    icon: Package,
    text: "From 10 boxes",
  },
  {
    icon: ShieldCheck,
    text: "No plates or setup fees",
  },
  {
    icon: Zap,
    text: "10 to 20 day production",
  },
  {
    icon: MapPin,
    text: "Made in Northern Australia",
  },
];

const trustItemsRow1 = [
  "No minimum order",
  "Fast turnaround",
  "Free design support",
];

const trustItemsRow2 = [
  "Free shipping",
  "Premium printing",
  "Custom sizes & styles",
];

const clientLogos = [
  { name: "ID8L5", style: "font-black tracking-widest text-[14px] sm:text-[15px]" },
  { name: "NBALAB", style: "font-extrabold tracking-wider text-[13px] sm:text-[14px]" },
  {
    name: "FOUR SEASONS",
    sub: "Hotels and Resorts",
    style: "font-serif tracking-widest text-[11px] sm:text-[12px] leading-tight",
  },
  { name: "REVLON", style: "font-semibold tracking-[0.24em] text-[13px] sm:text-[14px]" },
];

/**
 * HeroLeftContent
 * Sourced directly from Figma CSS with responsive viewport-aware scaling
 * so that ALL 8 elements (Eyebrow, Headline, Subtitle, Features, CTAs, Checkpoints, Reviews, Logos)
 * fit cleanly on the screen simultaneously without vertical clipping.
 */
export const HeroLeftContent: React.FC = () => {
  return (
    <div className="flex flex-col items-start w-full max-w-[560px] z-20 py-0">
      {/* 1. Golden Diamond Eyebrow */}
      <div className="flex items-center gap-2 mb-2 sm:mb-2.5 select-none">
        <div
          className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 shrink-0"
          aria-hidden="true"
        />
        <span
          className="text-[11px] sm:text-[11.5px] font-semibold uppercase leading-[19px] tracking-[2.765px]"
          style={{
            fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            color: "rgba(245, 248, 255, 0.66)",
          }}
        >
          CUSTOM PACKAGING MANUFACTURER
        </span>
      </div>

      {/* 2. Headline: Archivo (Weight 800) */}
      <h1
        className="text-white text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] 2xl:text-[50px] font-extrabold tracking-[-1.5px] leading-[1.1] mb-2 sm:mb-2.5 max-w-[555px]"
        style={{
          fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
          fontWeight: 800,
        }}
      >
        Custom boxes, <br />
        made for Australian <br />
        brands.
      </h1>

      {/* 3. Subtitle / Paragraph: Figtree (Weight 400) */}
      <p
        className="text-[#C5D0E8] text-[13px] sm:text-[14px] lg:text-[14.5px] 2xl:text-[15.5px] leading-[1.48] max-w-[480px] font-normal mb-3 sm:mb-3.5"
        style={{
          fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
          fontWeight: 400,
        }}
      >
        Mailer boxes, shipping cartons, folding cartons and rigid gift boxes in
        corrugated, kraft and rigid board, printed with your artwork.
      </p>

      {/* 4. 2x2 Feature Items with White Rounded Squares & Gold Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2 sm:gap-y-2.5 w-full max-w-[500px] mb-3 sm:mb-4 select-none">
        {featureItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-[8px] bg-white flex items-center justify-center shrink-0 p-1.5 shadow-sm">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B5882D] stroke-[2.2]" />
              </div>
              <span
                className="text-white font-bold text-[13px] sm:text-[14.5px] leading-[20px]"
                style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif" }}
              >
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* 5. Action Buttons (Get a Quote & Explore Packaging) */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
        {/* Primary CTA */}
        <Link
          href="/get-a-quote"
          className="w-auto sm:w-[168px] h-[44px] sm:h-[48px] pl-5 sm:pl-6 pr-1.5 rounded-full flex items-center justify-between gap-2.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: "#F2B329",
            boxShadow: "0px 18px 34px -18px rgba(242, 179, 41, 0.48)",
          }}
        >
          <span
            className="text-[14px] sm:text-[14.8px] font-semibold text-[#041F49] tracking-[0.152px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
          >
            Get a Quote
          </span>
          <div className="w-[32px] sm:w-[34px] h-[32px] sm:h-[34px] rounded-full bg-[#041F49] text-[#F2B329] flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
          </div>
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/products"
          className="w-auto sm:w-[180px] h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-full text-white font-semibold text-[14px] sm:text-[14.8px] tracking-[0.152px] flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          style={{
            background: "rgba(255, 255, 255, 0.002)",
            boxShadow: "inset 0px 0px 0px 1.5px rgba(245, 248, 255, 0.55)",
            fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          }}
        >
          Explore Packaging
        </Link>
      </div>

      {/* 6. Trust Checkpoints (3 Columns x 2 Rows) */}
      <div
        className="w-full max-w-[480px] pt-2.5 sm:pt-3 mb-2.5 sm:mb-3 flex flex-col gap-1.5"
        style={{ borderTop: "1px solid rgba(245, 248, 255, 0.14)" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1">
          {trustItemsRow1.map((text) => (
            <div
              key={text}
              className="flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-normal"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                color: "rgba(245, 248, 255, 0.66)",
              }}
            >
              <Check className="w-3.5 h-3.5 text-[#F6CA65] shrink-0 stroke-[2.4]" />
              <span className="whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1">
          {trustItemsRow2.map((text) => (
            <div
              key={text}
              className="flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-normal"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                color: "rgba(245, 248, 255, 0.66)",
              }}
            >
              <Check className="w-3.5 h-3.5 text-[#F6CA65] shrink-0 stroke-[2.4]" />
              <span className="whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Google Reviews Badge */}
      <div className="flex items-center gap-2 sm:gap-2.5 mb-2.5 sm:mb-3 flex-wrap select-none">
        <div className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm p-1">
          <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
        </div>

        <div className="flex items-center gap-0.5 text-[#F2BE44]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <span
            className="font-extrabold text-[14px] sm:text-[15px] text-white"
            style={{ fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif" }}
          >
            5.0
          </span>
          <span
            className="font-medium text-[12.5px] sm:text-[13px]"
            style={{
              fontFamily: "var(--font-plus-jakarta-sans), 'Plus Jakarta Sans', sans-serif",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            115 Google reviews
          </span>
        </div>
      </div>

      {/* 8. Client Brands Strip */}
      <div className="flex items-center gap-5 sm:gap-7 max-w-[480px] flex-wrap opacity-75 hover:opacity-100 transition-opacity">
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="text-white/80 hover:text-white transition-colors select-none text-center"
          >
            <div className={client.style}>{client.name}</div>
            {client.sub && (
              <div className="text-[8px] uppercase tracking-wider text-white/50 -mt-0.5">
                {client.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroLeftContent;