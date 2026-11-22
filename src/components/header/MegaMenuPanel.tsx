"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MegaMenuCategory } from "@/config/megaMenuData";

interface MegaMenuPanelProps {
  category: MegaMenuCategory | null;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onItemClick: () => void;
}

export const MegaMenuPanel: React.FC<MegaMenuPanelProps> = ({
  category,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) => {
  if (!isOpen || !category) return null;

  const hasPromo = !!category.promo;
  const colCount = category.cols.length;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-white border-b border-[#E6E3DD] shadow-[0_24px_48px_-12px_rgba(4,31,73,0.14)] z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-1"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-8 flex flex-col lg:flex-row gap-8 justify-between">
        {/* Columns Grid */}
        <div
          className={`flex-1 grid gap-6 xl:gap-8 ${
            hasPromo
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              : colCount === 6
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          }`}
        >
          {category.cols.map((col) => (
            <div key={col.title} className="flex flex-col">
              {/* Column Category Title */}
              <Link
                href={col.href}
                onClick={onItemClick}
                className="text-[14.5px] font-bold text-[#041F49] pb-2 border-b-2 border-[#041F49] mb-3 block transition-colors hover:text-[#F2B329] hover:border-[#F2B329]"
              >
                {col.title}
              </Link>

              {/* Sub-items List */}
              <ul className="space-y-1.5 flex-1">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className="text-[13px] text-[#4A5568] hover:text-[#041F49] hover:font-medium py-0.5 flex items-center gap-1.5 transition-all group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                        {item.label}
                      </span>
                      {item.isNew && (
                        <span className="text-[9px] font-bold text-[#041F49] bg-[#F2B329] px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                          NEW
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* "View all [category]" Link */}
              {col.showAll && (
                <div className="pt-3 mt-auto">
                  <Link
                    href={col.href}
                    onClick={onItemClick}
                    className="text-[12.5px] font-bold text-[#041F49] underline underline-offset-4 hover:text-[#F2B329] transition-colors inline-block"
                  >
                    View all {col.short}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional Right Promo Card */}
        {hasPromo && category.promo && (
          <div className="lg:w-[280px] xl:w-[310px] shrink-0 bg-[#FBF7EE] rounded-2xl p-6 lg:p-7 flex flex-col justify-between border border-[#E9E4D8] shadow-sm">
            <div>
              {/* Kicker Tag */}
              <span className="inline-block bg-[#041F49] text-white text-[9.5px] font-bold tracking-[0.08em] px-2.5 py-1 rounded-full uppercase mb-3">
                {category.promo.kicker}
              </span>

              {/* Promo Title */}
              <h4 className="text-[20px] font-bold text-[#041F49] leading-tight mb-2">
                {category.promo.title}
              </h4>

              {/* Promo Description */}
              <p className="text-[13px] text-[#4A5568] leading-relaxed mb-6 font-light">
                {category.promo.body}
              </p>
            </div>

            {/* Promo CTA Link */}
            <Link
              href={category.promo.href}
              onClick={onItemClick}
              className="group inline-flex items-center justify-between bg-[#041F49] hover:bg-[#072d68] text-white text-[13px] font-semibold px-4 py-2.5 rounded-full transition-all duration-200 active:scale-95"
            >
              <span>{category.promo.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
