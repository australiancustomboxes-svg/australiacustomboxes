"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ArticleItem {
  id: number;
  tag: string;
  title: string;
  author?: string;
  date: string;
  image: string;
  slug: string;
  isFeatured?: boolean;
}

const articlesData: ArticleItem[] = [
  {
    id: 1,
    tag: "BOX TYPES",
    title: "Different types of boxes in the packaging industry",
    author: "Sarah Ashley",
    date: "August 4, 2026",
    image: "/images/blog/types-of-boxes.webp",
    slug: "/blog/different-types-of-boxes-in-packaging-industry",
    isFeatured: true,
  },
  {
    id: 2,
    tag: "PACKAGING GUIDE",
    title: "What is packaging? A complete guide for beginners and businesses",
    date: "March 5, 2026",
    image: "/images/blog/what-is-packaging.webp",
    slug: "/blog/what-is-packaging-complete-guide",
    isFeatured: false,
  },
  {
    id: 3,
    tag: "PRICING GUIDE",
    title: "How much does packaging cost?",
    date: "June 13, 2025",
    image: "/images/blog/packaging-cost.webp",
    slug: "/blog/how-much-does-packaging-cost",
    isFeatured: false,
  },
];

const categoryTags: string[] = [
  "Packaging guides",
  "Box types",
  "Packaging design",
  "Pricing guides",
  "Material guides",
  "Branding tips",
  "Industry trends",
];

export const BlogResourcesSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
  };

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="w-full bg-white text-[#041F49] py-14 sm:py-18 lg:py-24 select-none"
    >
      {/* Outer Container with comfortable responsive margins */}
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ════════════════════════════════════════════════════════════════
            TOP ROW: Eyebrow + Heading + Subtitle + "Browse all articles"
           ════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14">
          {/* Left Column: Eyebrow, Heading, Subtitle */}
          <div>
            {/* Eyebrow */}
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
                PACKAGING RESOURCES
              </span>
            </div>

            {/* H2 Title */}
            <h2
              id="resources-heading"
              className="text-[#041F49] tracking-[-0.035em]"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(30px, 3.2vw, 52px)",
                lineHeight: "clamp(34px, 3.4vw, 56px)",
                letterSpacing: "-0.035em",
              }}
            >
              <span className="font-light" style={{ fontWeight: 300 }}>
                Guides to help you{" "}
              </span>
              <span
                className="text-[#F2B329] italic font-extralight"
                style={{ fontWeight: 200 }}
              >
                package smarter.
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className="mt-3 text-[#4A5568] text-[14px] sm:text-[15px] font-light leading-[1.6] max-w-[560px]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              Plain-English advice on box styles, materials, pricing and design, written by the
              team that makes them.
            </p>
          </div>

          {/* Right Column: "Browse all articles ->" */}
          <div className="shrink-0 pt-2 md:pt-0">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-[#041F49] font-semibold text-[13px] sm:text-[14px] leading-snug border-b-2 border-[#041F49] pb-1 transition-colors hover:text-[#F2B329] hover:border-[#F2B329]"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              <span>Browse all articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            MIDDLE ROW: 3 Blog Cards (Proportional Layout matching Figma)
            Desktop: [1.3fr, 1fr, 1fr] | Tablet: 2-col | Mobile: 1-col
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] gap-7 sm:gap-8 lg:gap-9 items-start">
          {articlesData.map((article, idx) => {
            const isFeatured = article.isFeatured;

            return (
              <article
                key={article.id}
                className={`group flex flex-col cursor-pointer ${
                  isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <Link href={article.slug} className="block overflow-hidden rounded-xl">
                  {/* Thumbnail Image with Aspect Ratio and Zoom on Hover */}
                  <div className="relative w-full aspect-[3/2] bg-[#F1F5F9] overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes={
                        isFeatured
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 480px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      }
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </div>
                </Link>

                {/* Article Info */}
                <div className="pt-3.5 sm:pt-4 flex flex-col flex-1">
                  {/* Category Tag */}
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D99A1A] mb-1.5"
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {article.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-[#041F49] font-normal leading-[1.35] transition-colors duration-200 group-hover:text-[#F2B329] ${
                      isFeatured
                        ? "text-[19px] sm:text-[22px] lg:text-[24px]"
                        : "text-[16px] sm:text-[17.5px]"
                    }`}
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    <Link href={article.slug}>{article.title}</Link>
                  </h3>

                  {/* Meta: Author & Date */}
                  <div
                    className="mt-2.5 sm:mt-3 text-[12px] sm:text-[12.5px] text-[#94A3B8] font-normal"
                    style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                  >
                    {article.author ? (
                      <span>
                        {article.author} · {article.date}
                      </span>
                    ) : (
                      <span>{article.date}</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            BOTTOM ROW: Category Filter Pills
           ════════════════════════════════════════════════════════════════ */}
        <div className="mt-10 sm:mt-14 pt-2">
          <div
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            role="toolbar"
            aria-label="Filter blog topics"
          >
            {categoryTags.map((tag) => {
              const isSelected = selectedTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className={`rounded-full px-3.5 sm:px-4 py-1.5 text-[12px] sm:text-[13px] font-normal transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? "bg-[#041F49] text-white border border-[#041F49] shadow-sm"
                      : "bg-white text-[#4A5568] border border-gray-200 hover:border-[#041F49]/40 hover:text-[#041F49] hover:bg-gray-50/50"
                  }`}
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
