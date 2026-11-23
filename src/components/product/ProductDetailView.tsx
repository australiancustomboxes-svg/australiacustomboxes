"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Clock,
  CheckCircle2,
  Star,
  FileCheck,
  Layers,
  Sparkles,
  ChevronRight,
  Box,
} from "lucide-react";
import { ProductItem } from "@/config/productsData";

interface ProductDetailViewProps {
  product: ProductItem;
  relatedProducts: ProductItem[];
}

export default function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.image
  );
  const [selectedTab, setSelectedTab] = useState<"overview" | "specs" | "artwork">("overview");

  return (
    <div
      className="w-full bg-[#FAFBFD] pb-20 select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      {/* ════════════════════════════════════════════════════════════════
          1. TOP BREADCRUMB BAR
         ════════════════════════════════════════════════════════════════ */}
      <div className="w-full bg-white border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 font-light flex-wrap">
            <Link href="/" className="hover:text-[#041F49] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href={`/${product.categorySlug}`} className="hover:text-[#041F49] transition-colors">
              {product.categoryTitle}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#041F49] font-semibold">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          2. MAIN PRODUCT HERO SHOWCASE (Two Columns)
         ════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Interactive Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Active Image Display */}
            <div className="relative w-full aspect-square rounded-2xl bg-[#F8FAFC] border border-gray-200/90 overflow-hidden group">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#F2B329] text-[#041F49] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-sm">
                  {product.badge}
                </div>
              )}
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail Gallery Row */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, idx) => {
                  const isActive = selectedImage === img;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative aspect-square rounded-xl overflow-hidden bg-[#F8FAFC] border-2 transition-all cursor-pointer ${
                        isActive
                          ? "border-[#041F49] ring-2 ring-[#041F49]/20"
                          : "border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.title} view ${idx + 1}`}
                        fill
                        sizes="100px"
                        className="object-contain p-1.5"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* RIGHT: Product Information, Specs & Order Action */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#F2B329] tracking-widest uppercase">
                <span>✦</span>
                <span className="text-[#041F49]/70">{product.categoryTitle.toUpperCase()}</span>
              </div>

              {/* Title */}
              <h1 className="text-[28px] sm:text-[34px] font-bold text-[#041F49] tracking-tight leading-tight mb-3">
                {product.title}
              </h1>

              {/* Star Rating & Reviews */}
              <div className="flex items-center gap-3 mb-5 text-sm">
                <div className="flex items-center text-[#F2B329]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F2B329]" />
                  ))}
                </div>
                <span className="font-bold text-[#041F49]">{product.rating}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500 font-light">
                  {product.reviewsCount} Australian brand reviews
                </span>
              </div>

              {/* Price Banner */}
              <div className="bg-[#F8FAFC] border border-gray-200/90 rounded-2xl p-4 sm:p-5 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 block uppercase font-medium">Wholesale Starting From</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-[26px] sm:text-[30px] font-black text-[#041F49]">
                      {product.startingPrice}
                    </span>
                    <span className="text-xs text-gray-500">/ unit</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-gray-500 block uppercase font-medium">Minimum Order</span>
                  <span className="text-sm font-bold text-[#041F49] block mt-1">{product.minQty}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[14.5px] text-[#475569] font-light leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key Features Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-[#EDF4FF] text-[#0254D8] px-3 py-1 rounded-full border border-[#D0E2FF]"
                  >
                    {tag}
                  </span>
                ))}
                <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Material: {product.material}
                </span>
              </div>

              {/* Guarantees Box */}
              <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-gray-100 text-xs text-[#041F49] font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F2B329] shrink-0" />
                  <span>{product.leadTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#F2B329] shrink-0" />
                  <span>Free Australia-Wide Courier</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#F2B329] shrink-0" />
                  <span>Free 2D/3D Digital Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F2B329] shrink-0" />
                  <span>100% Recyclable FSC® Board</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-a-quote"
                className="flex-1 bg-[#F2B329] hover:bg-[#e2a522] text-[#041F49] font-bold text-[14.5px] py-3.5 px-6 rounded-full shadow-md text-center transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white hover:bg-gray-50 border border-gray-300 text-[#041F49] font-bold text-[14.5px] py-3.5 px-6 rounded-full text-center transition-all"
              >
                Order Free Sample Kit
              </Link>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            3. PRODUCT DETAILS TABS (Overview, Specs, Artwork)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-200/80 p-6 sm:p-10 shadow-sm">
          <div className="flex border-b border-gray-200 gap-8 mb-6">
            <button
              onClick={() => setSelectedTab("overview")}
              className={`pb-3 text-[14.5px] font-bold transition-colors cursor-pointer border-b-2 ${
                selectedTab === "overview"
                  ? "border-[#041F49] text-[#041F49]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Product Overview
            </button>
            <button
              onClick={() => setSelectedTab("specs")}
              className={`pb-3 text-[14.5px] font-bold transition-colors cursor-pointer border-b-2 ${
                selectedTab === "specs"
                  ? "border-[#041F49] text-[#041F49]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Specifications & Stock
            </button>
            <button
              onClick={() => setSelectedTab("artwork")}
              className={`pb-3 text-[14.5px] font-bold transition-colors cursor-pointer border-b-2 ${
                selectedTab === "artwork"
                  ? "border-[#041F49] text-[#041F49]"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Artwork Guidelines & Dielines
            </button>
          </div>

          {selectedTab === "overview" && (
            <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed font-light">
              <p>
                The <strong>{product.title}</strong> is designed and produced specifically for Australian businesses requiring premium presentation combined with robust transit durability. Manufactured with high-strength corrugated cardboard, each box features crisp folding creases, self-locking dust flaps, and precise fitment.
              </p>
              <p>
                Suitable for retail packaging, e-commerce direct dispatch, client gifting, influencer PR kits, and subscription mailers. Print inside and out with high-definition CMYK technology, soy-based eco-inks, and optional premium embellishments including gold foil stamping, debossing, or spot gloss varnish.
              </p>
            </div>
          )}

          {selectedTab === "specs" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Material Type</span>
                <span className="font-bold text-[#041F49] mt-1 block">{product.material}</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Flute Options</span>
                <span className="font-bold text-[#041F49] mt-1 block">E-Flute (1.5mm), B-Flute (3mm), EB-Flute (4.5mm)</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Printing Technology</span>
                <span className="font-bold text-[#041F49] mt-1 block">Full Color CMYK, Pantone PMS, Digital & Offset</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Finishing</span>
                <span className="font-bold text-[#041F49] mt-1 block">Matte Lamination, Gloss, Soft-Touch, Foil, Spot UV</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Certifications</span>
                <span className="font-bold text-[#041F49] mt-1 block">FSC® Certified, ISO 9001, 100% Recyclable</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-xs text-gray-400 block font-semibold uppercase">Dispatch Origin</span>
                <span className="font-bold text-[#041F49] mt-1 block">Melbourne & Sydney Facilities</span>
              </div>
            </div>
          )}

          {selectedTab === "artwork" && (
            <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed font-light">
              <p>
                We supply free custom dielines tailored to your exact box dimensions (Length × Width × Depth). Submit your vector logo or complete artwork in <strong>PDF, AI, or EPS</strong> format with 3mm bleed and fonts converted to outlines.
              </p>
              <p>
                Our prepress team reviews every file free of charge and provides a high-resolution 2D proof and interactive 3D virtual turnaround model for your final sign-off before manufacturing starts.
              </p>
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════════
            4. RELATED PRODUCTS IN THIS CATEGORY
           ════════════════════════════════════════════════════════════════ */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#041F49]/70 uppercase tracking-widest block mb-1">
                  MORE STYLES
                </span>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-[#041F49]">
                  Related {product.categoryTitle}
                </h2>
              </div>
              <Link
                href={`/${product.categorySlug}`}
                className="text-xs font-semibold text-[#041F49] hover:underline flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] bg-[#F8FAFC]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="33vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[15px] text-[#041F49] line-clamp-1">{item.title}</h3>
                      <span className="text-xs text-gray-500">{item.minQty}</span>
                    </div>
                    <Link
                      href={`/${item.slug}`}
                      className="text-xs font-semibold bg-[#041F49] text-white px-3.5 py-1.5 rounded-full hover:bg-[#072c63]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
