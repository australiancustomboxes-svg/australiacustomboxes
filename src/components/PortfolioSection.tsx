"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface PortfolioTile {
  id: string;
  title: string;
  alt: string;
  image: string;
  desktopClasses: string;
  tabletClasses: string;
  mobileAspect: string;
}

const portfolioTiles: PortfolioTile[] = [
  {
    id: "hero-mailer",
    title: "Custom ACB Mailer Boxes",
    alt: "Custom printed Australian mailer packaging boxes with shredded crinkle paper filling and studio props",
    image: "/images/portfolio/hero-mailer.jpg",
    desktopClasses: "lg:col-start-1 lg:col-span-3 lg:row-start-1",
    tabletClasses: "sm:col-start-1 sm:col-span-2 sm:row-start-1 sm:row-span-1",
    mobileAspect: "aspect-[4/3]",
  },
  {
    id: "cufflink-box",
    title: "Luxury Cufflink Drawer Box",
    alt: "Luxury navy rigid cufflink drawer gift box with gold foil Australian branding",
    image: "/images/portfolio/cufflink-box.jpg",
    desktopClasses: "lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-2",
    tabletClasses: "sm:col-start-2 sm:col-span-1 sm:row-start-2 sm:row-span-2",
    mobileAspect: "aspect-[4/5]",
  },
  {
    id: "popcorn-box",
    title: "Australian Popcorn Carton",
    alt: "Custom printed Australian takeaway popcorn carton packaging overflowing with popcorn",
    image: "/images/portfolio/popcorn-box.jpg",
    desktopClasses: "lg:col-start-1 lg:col-span-1 lg:row-start-2 lg:row-span-2",
    tabletClasses: "sm:col-start-1 sm:col-span-1 sm:row-start-2 sm:row-span-2",
    mobileAspect: "aspect-[4/5]",
  },
  {
    id: "gable-box",
    title: "Kraft Carry Gable Box",
    alt: "Custom gable carry box with handle and Australian Custom Boxes branding",
    image: "/images/portfolio/custom-gable-box.jpg",
    desktopClasses: "lg:col-start-2 lg:col-span-2 lg:row-start-2",
    tabletClasses: "sm:col-start-1 sm:col-span-1 sm:row-start-4 sm:row-span-1",
    mobileAspect: "aspect-[4/3]",
  },
  {
    id: "display-box",
    title: "Counter Display Box",
    alt: "Custom cardboard retail counter display box packaging with ACB solutions branding",
    image: "/images/portfolio/display-box.jpg",
    desktopClasses: "lg:col-start-2 lg:col-span-1 lg:row-start-3",
    tabletClasses: "sm:col-start-2 sm:col-span-1 sm:row-start-4 sm:row-span-1",
    mobileAspect: "aspect-[4/3]",
  },
  {
    id: "mailer-window-boxes",
    title: "Custom Tuck Top Product Boxes",
    alt: "Custom tuck top retail product boxes with Australian branding alongside plants and candles",
    image: "/images/portfolio/mailer-window-boxes.jpg",
    desktopClasses: "lg:col-start-3 lg:col-span-2 lg:row-start-3",
    tabletClasses: "sm:col-start-1 sm:col-span-2 sm:row-start-5 sm:row-span-1",
    mobileAspect: "aspect-[4/3]",
  },
];

export const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="w-full bg-white py-14 sm:py-18 lg:py-24"
    >
      {/* 
        Responsive container matching Figma 1920 spec with 260px side margins at 1920px
        and proportional scaling on smaller screens
      */}
      <div className="mx-auto w-full max-w-[1920px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-[10vw] 2xl:px-[260px]">
        {/* ════════════════════════════════════════════════════════════════
            1. HEADER ROW: Left copy block + Right "Select your product" link
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 sm:gap-8">
          {/* Left Block */}
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 select-none">
              <div
                className="w-[7px] h-[7px] bg-[#F2B329] rotate-45 flex-shrink-0"
                aria-hidden="true"
              />
              <span
                className="text-[11.5px] font-semibold uppercase tracking-[2.765px] text-[#082E63]/66"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  lineHeight: "19px",
                }}
              >
                PORTFOLIO
              </span>
            </div>

            {/* H2 Heading: exact line break "Packaging made for" / "brands like yours." */}
            <h2
              id="portfolio-heading"
              className="mt-4 sm:mt-5 text-[#082E63] font-light max-w-[560px]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(30px, 3.33vw, 64px)",
                lineHeight: "clamp(35px, 3.38vw, 65px)",
                letterSpacing: "-0.035em",
                fontWeight: 300,
              }}
            >
              Packaging made{" "}
              <span
                className="italic text-[#986400]"
                style={{ fontWeight: 300 }}
              >
                for
              </span>
              <br />
              <span
                className="italic text-[#986400]"
                style={{ fontWeight: 300 }}
              >
                brands like yours.
              </span>
            </h2>

            {/* Paragraph: exactly wraps to 2 lines at desktop */}
            <p
              className="mt-4 sm:mt-[25px] max-w-[747px] text-[#082E63]/66"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(15px, 1.015vw, 19.5px)",
                lineHeight: "clamp(24px, 1.61vw, 31px)",
                fontWeight: 350,
              }}
            >
              Real custom boxes with logo printing, made for Australian businesses big and small.
              Here&apos;s a look at what leaves our production floor.
            </p>
          </div>

          {/* Right Block: "Select your product" link aligned to bottom of paragraph */}
          <div className="self-start md:self-end pb-1 flex-shrink-0">
            <Link
              href="#products"
              className="group inline-flex items-center gap-2.5 text-[#082E63] font-semibold text-[16px] sm:text-[17px] leading-[28px] border-b-2 border-[#082E63] pb-1 transition-colors hover:text-[#986400] hover:border-[#986400]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
              }}
            >
              <span>Select your product</span>
              <ArrowRight
                className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                strokeWidth={1.33}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. GRID: Responsive across Desktop, Tablet, and Mobile
           ════════════════════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-14 lg:mt-[76px]">
          {/* Desktop Grid (≥1024px): 4 cols x 3 rows with exact 1400/932 aspect */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:aspect-[1400/932] w-full">
            {portfolioTiles.map((tile) => (
              <div
                key={tile.id}
                className={`relative overflow-hidden bg-[#F4F7FB] group ${tile.desktopClasses}`}
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 1280px) 25vw, (max-width: 1536px) 30vw, 450px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>

          {/* Medium Tablet Grid (640px - 1023px): 2 cols x auto-rows-[220px] */}
          <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-4 auto-rows-[220px]">
            {portfolioTiles.map((tile) => (
              <div
                key={tile.id}
                className={`relative overflow-hidden bg-[#F4F7FB] group ${tile.tabletClasses}`}
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="50vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>

          {/* Mobile Single Column Grid (<640px): 1 col with natural aspect ratios */}
          <div className="sm:hidden flex flex-col gap-3.5">
            {portfolioTiles.map((tile) => (
              <div
                key={tile.id}
                className={`relative w-full ${tile.mobileAspect} overflow-hidden rounded-lg bg-[#F4F7FB] group`}
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
