"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProductTypeItem {
  id: string;
  badge: string;
  image: string;
  moq: string;
  leadTime: string;
  title: string;
  description: string;
  tags: string[];
  footerNote: string;
  href: string;
}

export const productTypesData: ProductTypeItem[] = [
  {
    id: "mailer-boxes",
    badge: "BEST FOR ECOMMERCE",
    image: "/images/products/mailer-boxes.webp",
    moq: "From 1 box",
    leadTime: "8–20 business days",
    title: "Mailer Boxes",
    description: "Tuck-front corrugated mailers that post safely and open like a gift.",
    tags: ["Full Colour", "Kraft", "With Inserts"],
    footerNote: "Free 3D mockup",
    href: "/products/mailer-boxes",
  },
  {
    id: "gable-boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/gable-boxes.webp",
    moq: "From 1 box",
    leadTime: "8–20 business days",
    title: "Gable Boxes",
    description: "Custom shipping boxes in tough corrugated board for heavy orders.",
    tags: ["Regular Slotted", "Double Wall", "Printed"],
    footerNote: "Free 3D mockup",
    href: "/products/gable-boxes",
  },
  {
    id: "donut-box",
    badge: "BEST FOR LUXURY",
    image: "/images/products/donut-box.webp",
    moq: "From 1 box",
    leadTime: "8–20 business days",
    title: "Custom Donut Box",
    description: "Solid wrapped board for products that deserve a premium feel.",
    tags: ["Lid and Base", "Collapsible", "Presentation"],
    footerNote: "Free 3D mockup",
    href: "/products/donut-boxes",
  },
  {
    id: "display-boxes-granola",
    badge: "BEST FOR BEAUTY BRANDS",
    image: "/images/products/granola-display-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Display Boxes",
    description: "Counter-ready retail display packaging engineered for maximum shelf impact.",
    tags: ["Counter Display", "Pop Display", "Gloss Finish"],
    footerNote: "Free 3D mockup",
    href: "/products/display-boxes",
  },
  {
    id: "cookie-box",
    badge: "BEST FOR TAKEAWAY",
    image: "/images/products/cookie-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Custom Cookie Box",
    description: "Food-grade paperboard packaging crafted for baked treats and takeaway.",
    tags: ["Food Grade", "Greaseproof", "Custom Window"],
    footerNote: "Free 3D mockup",
    href: "/products/cookie-boxes",
  },
  {
    id: "bakery-packaging",
    badge: "BEST FOR CAFES",
    image: "/images/products/bakery-boxes.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Bakery Packaging",
    description: "Artisan cupcake, cake and pastry boxes with crystal-clear view windows.",
    tags: ["Clear Window", "Easy Fold", "Eco Kraft"],
    footerNote: "Free 3D mockup",
    href: "/products/bakery-boxes",
  },
  {
    id: "candle-boxes",
    badge: "BEST FOR GIFTING",
    image: "/images/products/candle-boxes.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Candle Boxes",
    description: "Snug-fit boxes that protect glass jars and pillar candles.",
    tags: ["Jar", "Pillar", "Shipping"],
    footerNote: "Free 3D mockup",
    href: "/products/candle-boxes",
  },
  {
    id: "fries-box",
    badge: "BEST FOR OCCASIONS",
    image: "/images/products/fries-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Custom Fries Box",
    description: "Boxes made to be kept, for seasonal and corporate gifts.",
    tags: ["Christmas", "Corporate", "Hampers"],
    footerNote: "Free 3D mockup",
    href: "/products/fries-boxes",
  },
  {
    id: "lipstick-box",
    badge: "BEST FOR PREMIUM UNBOXING",
    image: "/images/products/lipstick-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Custom Lipstick Box",
    description: "A hidden magnet snaps the lid shut with a satisfying close.",
    tags: ["Hinged Lid", "Foldable", "With Insert"],
    footerNote: "Free 3D mockup",
    href: "/products/lipstick-boxes",
  },
  {
    id: "display-boxes-lipbalm",
    badge: "BEST FOR POINT OF SALE",
    image: "/images/products/lipbalm-display-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Display Boxes",
    description: "Counter-ready boxes that show your product at checkout.",
    tags: ["Counter Display", "Gable", "Hang Tab"],
    footerNote: "Free 3D mockup",
    href: "/products/point-of-sale",
  },
  {
    id: "paper-bags",
    badge: "BEST FOR RETAIL SHELVES",
    image: "/images/products/paper-bags.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Custom Paper Bags",
    description: "Lightweight paperboard boxes for products that sit on a shelf.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck"],
    footerNote: "Free 3D mockup",
    href: "/products/paper-bags",
  },
  {
    id: "popcorn-boxes",
    badge: "BEST FOR SMALL LUXURIES",
    image: "/images/products/popcorn-box.webp",
    moq: "From 50 box",
    leadTime: "8–20 business days",
    title: "Custom Popcorn Boxes",
    description: "A tray slides out of a sleeve for a slow, memorable reveal.",
    tags: ["Ribbon Pull", "Thumb Notch", "Australian Made"],
    footerNote: "Free 3D mockup",
    href: "/products/popcorn-boxes",
  },
];

/**
 * ProductTypesSection
 * "Custom box types for every product"
 * Positioned directly below the Benefits Section in page.tsx
 * - Fully responsive: 3-column desktop (lg), 2-column tablet (md), 1-column mobile
 * - High-resolution photographic cards with gold highlight badges
 * - Interactive "Customise Now ->" pill buttons and product attribute chips
 * - Bottom conversion footer with link to /products
 */
export const ProductTypesSection: React.FC = () => {
  return (
    <section
      id="product-types"
      aria-labelledby="product-types-heading"
      className="w-full bg-[#F8FAFD] py-14 sm:py-18 lg:py-24 border-b border-[#E2E8F0]"
    >
      <div className="site-container">
        {/* 
          1. Section Header:
          Main Title + Subtitle Description
        */}
        <div className="max-w-[880px] mb-8 sm:mb-12">
          <h2
            id="product-types-heading"
            className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#082E63] tracking-[-1px] leading-[1.14] mb-3 sm:mb-4"
            style={{
              fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
              fontWeight: 800,
            }}
          >
            Custom box types for every product
          </h2>
          <p
            className="text-[14px] sm:text-[15px] lg:text-[15.5px] text-[#082E63]/75 leading-[1.58] font-normal"
            style={{
              fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
            }}
          >
            The right box depends on three things: what you&apos;re packing, how it travels, and the first impression you want it to make. Every style below is one of our custom made boxes, sized to your product and printed with your logo, from a single sample to a full wholesale run.
          </p>
        </div>

        {/* 
          2. Product Cards Grid:
          Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {productTypesData.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-[18px] overflow-hidden bg-white border border-[#DCE4EF] shadow-[0_12px_36px_-6px_rgba(4,31,73,0.14),0_4px_16px_-2px_rgba(4,31,73,0.06)] hover:shadow-[0_24px_54px_-8px_rgba(4,31,73,0.24),0_8px_24px_-4px_rgba(4,31,73,0.12)] transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Card Image Area with Top-Left Highlight Badge - Edge to Edge 100% Matching Image Size */}
              <div className="relative w-full aspect-square overflow-hidden bg-[#F6F4F0]">
                {/* Gold Highlight Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-[9.5px] sm:text-[10px] font-extrabold tracking-wider text-[#041F49] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.18)] select-none"
                    style={{
                      backgroundColor: "#F2B329",
                      fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Packaging Box Image - Perfectly Fills Container Edge-to-Edge */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105 pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card Body Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  {/* Metadata Row: MOQ + Lead Time */}
                  <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] text-[#082E63]/65 font-medium mb-1.5">
                    <span className="font-semibold text-[#082E63]/90">{item.moq}</span>
                    <span className="font-medium text-[#082E63]/70">{item.leadTime}</span>
                  </div>

                  {/* Product Title */}
                  <h3
                    className="text-[19px] sm:text-[21px] font-bold text-[#082E63] tracking-tight leading-tight mb-2 group-hover:text-[#F2B329] transition-colors"
                    style={{
                      fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Product Description */}
                  <p
                    className="text-[13px] sm:text-[13.5px] text-[#082E63]/75 leading-[1.5] mb-3.5"
                    style={{
                      fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Feature Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5 select-none">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#F0F4FA] border border-[#DCE4EF] text-[#082E63]/85 text-[10.5px] sm:text-[11px] font-medium shadow-2xs"
                        style={{
                          fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer: 3D Mockup Note + Customise Button */}
                <div className="pt-3.5 border-t border-[#F0F4FA] flex items-center justify-between gap-2">
                  <span
                    className="text-[11.5px] sm:text-[12px] text-[#082E63]/60 font-medium select-none"
                    style={{
                      fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                    }}
                  >
                    {item.footerNote}
                  </span>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 h-[36px] sm:h-[38px] px-4 rounded-full bg-[#041F49] text-white hover:bg-[#F2B329] hover:text-[#041F49] text-[12px] font-bold tracking-wide transition-all duration-200 active:scale-95 shadow-[0_4px_14px_rgba(4,31,73,0.25)] hover:shadow-[0_6px_20px_rgba(242,179,41,0.45)]"
                    style={{
                      fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                    }}
                  >
                    <span>Customise Now</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 
          3. Section Bottom Navigation Bar:
          "Find the right structure..." + "Explore all custom boxes ->"
        */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-[#E5EBF5] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p
            className="text-[13.5px] sm:text-[14.5px] text-[#082E63]/80 font-normal"
            style={{
              fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
            }}
          >
            Find the right structure, material and finish for your brand.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-bold text-[#082E63] hover:text-[#F2B329] transition-colors underline underline-offset-4 decoration-2 decoration-[#082E63]/30 hover:decoration-[#F2B329]"
            style={{
              fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            }}
          >
            <span>Explore all custom boxes</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductTypesSection;

