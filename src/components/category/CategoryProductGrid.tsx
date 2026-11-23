"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Star,
  ArrowRight,
  Pencil,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { ProductItem } from "@/config/productsData";

interface CategoryProductGridProps {
  initialProducts: ProductItem[];
  categoryTitle: string;
  categorySlug: string;
}

export default function CategoryProductGrid({
  initialProducts,
  categoryTitle,
  categorySlug,
}: CategoryProductGridProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("All materials");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(6);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // 1. Strictly Mailer Box related real-time filter tabs
  const dynamicTabs = useMemo(() => {
    // Generate tabs directly from the actual products in this category
    const styleTabs = initialProducts.map((p) => {
      // Short friendly label from title, removing "Custom" and "Boxes"
      const cleanLabel = p.title
        .replace(/^Custom\s+/i, "")
        .replace(/\s+Mailer\s+Boxes/i, "")
        .replace(/\s+Boxes/i, "")
        .trim();

      return {
        id: p.id,
        label: cleanLabel,
        count: 1,
        productId: p.id,
      };
    });

    return [
      {
        id: "all",
        label: `All ${categoryTitle || "Mailer Boxes"}`,
        count: initialProducts.length,
        productId: null,
      },
      ...styleTabs,
    ];
  }, [initialProducts, categoryTitle]);

  // 2. Dynamically extract materials that actually exist in these products
  const availableMaterials = useMemo(() => {
    const mats = Array.from(new Set(initialProducts.map((p) => p.material).filter(Boolean)));
    return ["All materials", ...mats];
  }, [initialProducts]);

  // 3. Dynamically extract industries and their real product counts
  const availableIndustries = useMemo(() => {
    const counts: Record<string, number> = {};
    initialProducts.forEach((p) => {
      p.industry.forEach((ind) => {
        counts[ind] = (counts[ind] || 0) + 1;
      });
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [initialProducts]);

  // Toggle industry filter
  const toggleIndustry = (ind: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(ind) ? prev.filter((i) => i !== ind) : [...prev, ind]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveTab("all");
    setSearchQuery("");
    setSelectedMaterial("All materials");
    setSelectedIndustries([]);
    setSortBy("featured");
    setVisibleCount(6);
  };

  // Filter & sort logic (100% Real-Time)
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      // Active tab filter
      if (activeTab !== "all") {
        const currentTabObj = dynamicTabs.find((t) => t.id === activeTab);
        if (currentTabObj && currentTabObj.productId) {
          if (p.id !== currentTabObj.productId) return false;
        }
      }

      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchTags = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTags) return false;
      }

      // Material
      if (selectedMaterial !== "All materials") {
        if (!p.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
          return false;
        }
      }

      // Industry
      if (selectedIndustries.length > 0) {
        const hasMatchingIndustry = selectedIndustries.some((ind) =>
          p.industry.includes(ind)
        );
        if (!hasMatchingIndustry) return false;
      }

      return true;
    });
  }, [initialProducts, activeTab, dynamicTabs, searchQuery, selectedMaterial, selectedIndustries]);

  // Sort
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      list.sort(
        (a, b) =>
          parseFloat(a.startingPrice.replace(/[^0-9.]/g, "")) -
          parseFloat(b.startingPrice.replace(/[^0-9.]/g, ""))
      );
    } else if (sortBy === "price-high") {
      list.sort(
        (a, b) =>
          parseFloat(b.startingPrice.replace(/[^0-9.]/g, "")) -
          parseFloat(a.startingPrice.replace(/[^0-9.]/g, ""))
      );
    }
    return list;
  }, [filteredProducts, sortBy]);

  const displayedProducts = sortedProducts.slice(0, visibleCount);
  const totalCategoryProducts = initialProducts.length;
  const hasMore = visibleCount < sortedProducts.length;

  return (
    <section
      id="products-collection"
      className="w-full bg-[#FAFBFD] py-14 sm:py-20 border-b border-gray-100 scroll-mt-12 select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="site-container">
        {/* ════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Browse The Collection / Find your perfect fit.)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#F2B329] rotate-45 shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[2.8px] text-[#041F49]/70">
              BROWSE THE COLLECTION
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-[#041F49] tracking-tight text-[32px] sm:text-[42px] lg:text-[48px] font-semibold leading-[1.15]"
            >
              <span>Find your </span>
              <span
                className="text-[#B18D46] italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                perfect fit.
              </span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#556987] font-light md:text-right max-w-[340px]">
              Start with a style. Make every detail yours.
            </p>
          </div>

          {/* ════════════════════════════════════════════════════════════════
              Category Filter Tabs Bar (100% Real-Time Dynamic Pills Row)
             ════════════════════════════════════════════════════════════════ */}
          <div className="mt-8 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {dynamicTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setVisibleCount(6);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#041F49] text-white shadow-sm"
                      : "bg-white text-[#334155] border border-gray-200/90 hover:border-gray-400 hover:text-[#041F49]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. TOOLBAR ROW (Search input & Sort by selector & Refine trigger)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Mobile Refine Trigger / Desktop Refine Header */}
          <div className="lg:col-span-3 flex items-center justify-between">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:pointer-events-none flex items-center gap-2 text-[13.5px] font-bold text-[#041F49] tracking-tight uppercase"
            >
              <span>Refine your search</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform lg:hidden ${
                  mobileFilterOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {(selectedMaterial !== "All materials" ||
              selectedIndustries.length > 0 ||
              searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#0254D8] hover:underline flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          {/* Search Box & Sort Area (9 Cols) */}
          <div className="lg:col-span-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search box styles..."
                className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2 text-[13.5px] text-[#041F49] placeholder-gray-400 focus:outline-none focus:border-[#041F49] focus:ring-1 focus:ring-[#041F49] transition-all"
              />
            </div>

            {/* Sub-label & Sort Dropdown */}
            <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
              <span className="text-gray-500 text-xs">
                Showing {sortedProducts.length} of {initialProducts.length} box styles
              </span>

              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium whitespace-nowrap">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 text-[#041F49] font-medium text-[12.5px] pl-3 pr-8 py-1.5 rounded-lg focus:outline-none focus:border-[#041F49] cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="rating">Top Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. MAIN CONTENT: Left Sidebar (Filters + Help Card) + Right Grid
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ════════════════════════════════════════════════════════════════
              LEFT SIDEBAR: Material & Industry Checkboxes & Guidance Card
             ════════════════════════════════════════════════════════════════ */}
          <aside
            className={`lg:col-span-3 space-y-6 ${
              mobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            {/* MATERIAL FILTER */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm">
              <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#64748B] mb-2.5">
                MATERIAL
              </label>
              <div className="relative">
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full appearance-none bg-[#F8FAFC] border border-gray-200 text-[#041F49] font-medium text-[13px] px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-[#041F49] cursor-pointer"
                >
                  {availableMaterials.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* INDUSTRY FILTER (Real-Time Dynamic Industries & Counts) */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm">
              <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#64748B] mb-3">
                INDUSTRY
              </label>
              <div className="space-y-2.5">
                {availableIndustries.map(({ name, count }) => {
                  const isChecked = selectedIndustries.includes(name);
                  return (
                    <label
                      key={name}
                      onClick={() => toggleIndustry(name)}
                      className="flex items-center justify-between text-[13px] text-[#334155] hover:text-[#041F49] cursor-pointer group py-0.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isChecked
                              ? "bg-[#041F49] border-[#041F49] text-white"
                              : "border-gray-300 bg-white group-hover:border-gray-400"
                          }`}
                        >
                          {isChecked && (
                            <svg
                              className="w-2.5 h-2.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={isChecked ? "font-medium text-[#041F49]" : ""}>
                          {name}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 font-medium">({count})</span>
                    </label>
                  );
                })}
              </div>

              {selectedIndustries.length > 0 && (
                <button
                  onClick={() => setSelectedIndustries([])}
                  className="mt-4 text-xs text-[#0254D8] hover:underline block font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* DARK GUIDANCE CARD (Figma "A little guidance goes a long way") */}
            <div className="bg-[#041F49] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[#F2B329]/10 blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Pen / Edit Icon */}
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-[#F2B329]">
                <Pencil className="w-4 h-4 stroke-[2]" />
              </div>

              <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                A little guidance goes a long way.
              </h3>

              <p className="text-[12.5px] text-white/70 leading-relaxed font-light mb-5">
                Tell us what you&apos;re packing. We&apos;ll help you find a suitable style, right stock, and exact dieline.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#F2B329] hover:text-white transition-colors group"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN: 3-Column Product Cards Grid
             ════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-9">
            {displayedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-sm mb-3">
                  No box styles found matching your criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-[#041F49] text-white rounded-full text-xs font-semibold hover:bg-[#062c68]"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Product Image Area (Figma: Aspect-Square Edge-to-Edge) */}
                      <div className="relative w-full aspect-square bg-[#F7F8FA] overflow-hidden rounded-t-2xl">
                        {/* Gold Badge (Figma "↔ BEST FOR BULKY ITEMS") */}
                        <div className="absolute top-3 left-3 z-10 bg-[#EAA928] text-[#041F49] text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 select-none">
                          <span className="font-mono text-xs">↔</span>
                          <span>{product.badge || "BEST FOR BULKY ITEMS"}</span>
                        </div>

                        <Link href={`/${product.slug}`} className="block relative w-full h-full cursor-pointer">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      </div>

                      {/* Card Content (Figma: Clean Typography & Exact Layout) */}
                      <div className="p-4 pt-3.5 pb-2">
                        {/* Meta Spec Bar (From 1 units | Delivery 7-10 business days) */}
                        <div className="flex items-center justify-between text-[11.5px] text-[#64748B] mb-2 font-normal">
                          <span>
                            From <strong className="font-bold text-[#041F49]">1 units</strong>
                          </span>
                          <span>
                            Delivery <strong className="font-bold text-[#041F49]">7–10 business days</strong>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[17px] sm:text-[18px] font-bold text-[#041F49] group-hover:text-[#082E63] transition-colors line-clamp-1 mb-1 tracking-tight">
                          <Link href={`/${product.slug}`}>{product.title}</Link>
                        </h3>

                        {/* Description */}
                        <p className="text-[12px] text-[#64748B] font-light leading-snug line-clamp-2 mb-3">
                          {product.description}
                        </p>

                        {/* Tags (Figma: Soft baby-blue rounded-full pills) */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {product.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium bg-[#EBF3FE] text-[#1D63D3] px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Rating & CTA Button (Figma: Customized Now Pill) */}
                    <div className="p-4 pt-1 pb-4 flex items-center justify-between gap-3">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-[#EAA928]">★</span>
                        <span className="font-bold text-[#041F49] text-[12px]">{product.rating}</span>
                        <span className="text-[#64748B] font-light text-[11px]">
                          ({product.reviewsCount} reviews)
                        </span>
                      </div>

                      {/* Customized Now Button (Figma Deep Navy Pill) */}
                      <Link
                        href={`/${product.slug}`}
                        className="inline-flex items-center gap-1.5 justify-center bg-[#0D2653] hover:bg-[#071d42] active:scale-95 text-white text-[12px] font-bold px-4 py-2 rounded-full shadow-sm transition-all duration-150 whitespace-nowrap group/btn"
                      >
                        <span>Customized Now</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* ════════════════════════════════════════════════════════════════
                4. BOTTOM EXPLORATION COUNTER & SHOW MORE BUTTON
               ════════════════════════════════════════════════════════════════ */}
            {sortedProducts.length > 0 && (
              <div className="mt-12 text-center space-y-3.5">
                <p className="text-[12.5px] text-[#64748B] tracking-wide font-light">
                  {displayedProducts.length} / {sortedProducts.length} styles explored
                </p>

                {hasMore && (
                  <div>
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#041F49] bg-[#ECEEF2] hover:bg-[#E2E6EC] text-[#041F49] text-[13px] sm:text-[13.5px] font-bold shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <span>
                        Show {sortedProducts.length - displayedProducts.length} more style
                        {sortedProducts.length - displayedProducts.length > 1 ? "s" : ""}
                      </span>
                      <span className="text-base font-light leading-none">+</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
