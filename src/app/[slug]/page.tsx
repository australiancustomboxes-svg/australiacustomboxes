import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  FileCheck,
  Box,
  Printer,
  Pencil,
} from "lucide-react";
import { getAllMegaMenuSlugs, megaMenuData, MegaMenuColumn, MegaMenuItem } from "@/config/megaMenuData";
import {
  mailerBoxesProducts,
  foodBoxesProducts,
  allProducts,
  getProductBySlug,
  getProductsByCategory,
  ProductItem,
} from "@/config/productsData";
import CategoryProductGrid from "@/components/category/CategoryProductGrid";
import CategoryMaterialsSection from "@/components/category/CategoryMaterialsSection";
import CategoryCustomSignatureSection from "@/components/category/CategoryCustomSignatureSection";
import CategoryFaqSection from "@/components/category/CategoryFaqSection";
import CategoryNextProductCtaSection from "@/components/category/CategoryNextProductCtaSection";
import ProductDetailView from "@/components/product/ProductDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const menuSlugs = getAllMegaMenuSlugs();
  const productSlugs = allProducts.map((p) => p.slug);
  const productNormSlugs = allProducts.map((p) => p.slug.replace(/^custom-/, ""));
  const all = Array.from(new Set([...menuSlugs, ...productSlugs, ...productNormSlugs]));
  return all.map((slug) => ({ slug }));
}

interface PageContext {
  title: string;
  categoryTitle?: string;
  categoryHref?: string;
  relatedItems?: MegaMenuItem[];
  isCategoryPage: boolean;
  isResourcePage: boolean;
  description: string;
  startingPrice?: string;
  minOrder: string;
  heroImage?: string;
}

function resolvePageContext(slug: string): PageContext {
  const norm = slug.replace(/^custom-/, "");

  // 1. Check if it's a top-level category column
  for (const cat of Object.values(megaMenuData)) {
    for (const col of cat.cols) {
      const colSlug = col.href.replace(/^\//, "").replace(/\/$/, "");
      const colNorm = colSlug.replace(/^custom-/, "");
      if (colSlug === slug || colNorm === norm) {
        return {
          title: col.title,
          categoryTitle: cat.label,
          categoryHref: cat.href,
          relatedItems: col.items,
          isCategoryPage: true,
          isResourcePage: cat.key === "resources",
          description: `Custom printed ${col.title.toLowerCase()} manufactured in Australia. Precision sized for retail, shipping, and food delivery with FSC® certified sustainable paperboard and low 50 unit minimums.`,
          startingPrice: col.title.includes("Mailer")
            ? "$1.65"
            : col.title.includes("Food")
            ? "$0.38"
            : col.title.includes("Bakery")
            ? "$0.50"
            : col.title.includes("Rigid")
            ? "$1.95"
            : "$0.55",
          minOrder: "50 units",
          heroImage: col.title.toLowerCase().includes("food") || slug.includes("food")
            ? "/images/category-hero/food-boxes-hero.webp"
            : col.title.toLowerCase().includes("mailer") || slug.includes("mailer")
            ? "/images/category-hero/mailer-boxes-hero.webp"
            : "/images/category-hero/packaging-collection-hero-retina.webp",
        };
      }

      // 2. Check if it's a sub-item
      for (const item of col.items) {
        const itemSlug = item.href.replace(/^\//, "").replace(/\/$/, "");
        const itemNorm = itemSlug.replace(/^custom-/, "");
        if (itemSlug === slug || itemNorm === norm) {
          // Siblings excluding this item
          const siblings = col.items.filter((it) => it.href !== item.href);
          return {
            title: item.label,
            categoryTitle: col.title,
            categoryHref: col.href,
            relatedItems: siblings,
            isCategoryPage: false,
            isResourcePage: cat.key === "resources",
            description: `Order custom printed ${item.label.toLowerCase()} tailored to your brand. Australian made with full colour CMYK printing, custom inserts, and fast nationwide courier delivery.`,
            startingPrice: "$0.75",
            minOrder: "50 units",
          };
        }
      }
    }
  }

  // Fallback slug to Title Case
  const formatted = slug
    .replace(/^custom-/, "Custom ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: formatted,
    isCategoryPage: false,
    isResourcePage: slug.includes("guide") || slug.includes("how") || slug.includes("template"),
    description: `Australian Custom Boxes — high quality custom printed ${formatted.toLowerCase()} with fast turnaround and free nationwide shipping.`,
    minOrder: "50 units",
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (product) {
    return {
      title: `${product.title} | Australian Custom Boxes`,
      description: product.description,
    };
  }
  const ctx = resolvePageContext(slug);

  return {
    title: `${ctx.title} | Australian Custom Boxes`,
    description: ctx.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  // 1. Check if this is an individual product page
  const product = getProductBySlug(slug);
  if (product) {
    const categoryList = product.categorySlug.includes("food") ? foodBoxesProducts : mailerBoxesProducts;
    const related = categoryList.filter((p) => p.id !== product.id);
    return (
      <main className="w-full bg-white select-none">
        <ProductDetailView product={product} relatedProducts={related} />

        {/* Bottom Conversion CTA Band */}
        <section className="w-full bg-[#041F49] text-white pt-10 sm:pt-12 pb-6 sm:pb-8 border-b border-white/10">
          <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Ready to order your {product.title.toLowerCase()}?
              </h2>
              <p className="text-white/70 text-sm mt-1.5">
                Send us your dimensions or artwork. We reply with a detailed quote within 2 working hours.
              </p>
            </div>
            <Link
              href="/get-a-quote"
              className="w-fit inline-flex items-center gap-2 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-sm h-11 px-6 rounded-full shrink-0 transition-transform active:scale-95 shadow-sm"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // 2. Category Page
  const ctx = resolvePageContext(slug);
  const categoryProducts = getProductsByCategory(slug);

  return (
    <main className="w-full bg-white select-none">
      {/* ════════════════════════════════════════════════════════════════
          2. FIGMA HERO HEADER SECTION ("A better box. For every brand.")
         ════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#041F49] text-white pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 relative overflow-hidden select-none">
        {/* Subtle background ambient glow */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F2B329]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="site-container relative z-10">
          {/* Top-Left Breadcrumbs inside Hero Banner */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px] text-white/60 mb-8 sm:mb-10 font-light">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            {ctx.categoryTitle && ctx.categoryHref && (
              <>
                <Link href={ctx.categoryHref} className="hover:text-white transition-colors">
                  {ctx.categoryTitle}
                </Link>
                <span className="text-white/40">/</span>
              </>
            )}
            <span className="text-white/90 font-medium">{ctx.title}</span>
          </nav>

          {/* Main Two-Column Hero Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-14 xl:gap-16">
            {/* ════════════════════════════════════════════════════════════════
                LEFT COLUMN: Eyebrow, Display H1, Subtitle, Actions, Meta
               ════════════════════════════════════════════════════════════════ */}
            <div className="max-w-[560px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <span className="w-1.5 h-1.5 bg-[#F2B329] rotate-45 shrink-0" aria-hidden="true" />
                <span
                  className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[2.6px] text-white/80"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {ctx.isCategoryPage ? `THE ${ctx.title.toUpperCase()} COLLECTION` : "THE PACKAGING COLLECTION"}
                </span>
              </div>

              {/* Main Heading H1 */}
              <h1
                className="text-white tracking-tight"
                style={{
                  fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  fontSize: "clamp(38px, 4.2vw, 62px)",
                  lineHeight: "1.1",
                  fontWeight: 600,
                }}
              >
                <span>A better box.</span>
                <br />
                <span>For every </span>
                <span
                  className="text-[#F2B329] italic"
                  style={{
                    fontFamily: "var(--font-libre-franklin), 'Libre Franklin', Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  brand.
                </span>
              </h1>

              {/* Subtitle Paragraph */}
              <p
                className="mt-5 text-white/75 text-[15px] sm:text-[16px] lg:text-[16.5px] font-light leading-relaxed max-w-[490px]"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                From the first impression to the final reveal. Explore custom {ctx.title.toLowerCase()} made around your product, your story and the way you sell.
              </p>

              {/* CTA Buttons Row */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Primary Button: Explore the Collection */}
                <a
                  href="#products-collection"
                  className="group inline-flex items-center gap-3 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-[13.5px] sm:text-[14px] pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full shadow-[0_12px_28px_-6px_rgba(242,179,41,0.45)] transition-all duration-200 active:scale-95 cursor-pointer"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  <span>Explore the Collection</span>
                  <span className="w-8 h-8 rounded-full bg-[#041F49] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                  </span>
                </a>

                {/* Secondary Button: Get a custom quote */}
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 text-white hover:text-[#F2B329] text-[13.5px] sm:text-[14px] font-medium transition-colors py-2 group"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  <span>Get a custom quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Bottom-Left Meta / Counter */}
              <div className="mt-12 sm:mt-14 pt-6 sm:pt-7 border-t border-white/10 flex items-center gap-5 text-xs text-white/60 font-light select-none">
                <span className="font-mono text-white text-[13px] sm:text-sm font-semibold tracking-wider">
                  01 — {String(categoryProducts.length).padStart(2, "0")}
                </span>
                <div className="border-l border-white/15 pl-4 leading-[1.4] text-[11.5px] sm:text-xs">
                  <p className="text-white/80">Shipping essentials.</p>
                  <p className="text-white/50">Retail favourites. Luxury keepsakes.</p>
                </div>
              </div>
            </div>

            {/* ════════════════════════════════════════════════════════════════
                RIGHT COLUMN: Studio Staged Box Showcase + Floating Gold Badge
               ════════════════════════════════════════════════════════════════ */}
            <div className="w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[540px] shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                {/* Main Studio Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] border border-white/15 bg-[#1A2E4C] group">
                  <Image
                    src={ctx.heroImage || (slug.includes("food") ? "/images/category-hero/food-boxes-hero.webp" : slug.includes("mailer") ? "/images/category-hero/mailer-boxes-hero.webp" : "/images/category-hero/packaging-collection-hero-retina.webp")}
                    alt={`${ctx.title} - Packaging Collection Showcase`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Gold Feature Badge (Bottom-Left) */}
                <div
                  className="absolute -bottom-4 -left-3 sm:-left-6 z-20 bg-[#F2B329] text-[#041F49] py-2.5 px-3.5 sm:px-4 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.3)] border border-white/40 flex items-center gap-2.5 sm:gap-3 select-none"
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  {/* Hexagon with '1' inside */}
                  <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#041F49" strokeWidth="2.2">
                      <path d="M12 2l7.8 4.5v9L12 20l-7.8-4.5v-9L12 2z" fill="#041F49" fillOpacity="0.08" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-[#041F49]">
                      1
                    </span>
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] leading-tight">
                    <p className="font-light text-[#041F49]/80">Made around</p>
                    <p className="font-black text-[#041F49]">your product.</p>
                  </div>
                </div>
              </div>

              {/* Sub-Captions below Image */}
              <div className="flex items-center justify-between mt-5 px-1 text-[11px] sm:text-xs text-white/50 tracking-wide font-light select-none">
                <span>Every detail, considered.</span>
                <span>Custom sizes · Your artwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. VALUE PROPOSITIONS FEATURE BAR (Figma Category Header Strip)
         ════════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Packaging Specifications and Guarantees"
        className="w-full bg-[#F4F7FB] border-b border-[#041F49]/10 select-none"
        style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
      >
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#041F49]/10">
            {/* 1. Custom sizes & structures */}
            <div className="flex items-center justify-center gap-2.5 px-3 sm:px-4 py-3 sm:py-3.5">
              <Box className="w-4 h-4 text-[#B18D46] stroke-[1.8] shrink-0" />
              <span className="text-[12px] sm:text-[12.8px] font-medium text-[#041F49] tracking-tight whitespace-nowrap">
                Custom sizes & structures
              </span>
            </div>

            {/* 2. Inside & outside printing */}
            <div className="flex items-center justify-center gap-2.5 px-3 sm:px-4 py-3 sm:py-3.5">
              <Printer className="w-4 h-4 text-[#B18D46] stroke-[1.8] shrink-0" />
              <span className="text-[12px] sm:text-[12.8px] font-medium text-[#041F49] tracking-tight whitespace-nowrap">
                Inside & outside printing
              </span>
            </div>

            {/* 3. Artwork & design support */}
            <div className="flex items-center justify-center gap-2.5 px-3 sm:px-4 py-3 sm:py-3.5">
              <Pencil className="w-4 h-4 text-[#B18D46] stroke-[1.8] shrink-0" />
              <span className="text-[12px] sm:text-[12.8px] font-medium text-[#041F49] tracking-tight whitespace-nowrap">
                Artwork & design support
              </span>
            </div>

            {/* 4. Digital proof before production */}
            <div className="flex items-center justify-center gap-2.5 px-3 sm:px-4 py-3 sm:py-3.5">
              <FileCheck className="w-4 h-4 text-[#B18D46] stroke-[1.8] shrink-0" />
              <span className="text-[12px] sm:text-[12.8px] font-medium text-[#041F49] tracking-tight whitespace-nowrap">
                Digital proof before production
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. FIGMA PRODUCT COLLECTION GRID SECTION (Category Products)
         ════════════════════════════════════════════════════════════════ */}
      <CategoryProductGrid
        initialProducts={categoryProducts}
        categoryTitle={ctx.title}
        categorySlug={slug}
      />

      {/* ════════════════════════════════════════════════════════════════
          5. FIGMA MATERIALS SECTION ("The material makes the difference.")
         ════════════════════════════════════════════════════════════════ */}
      <CategoryMaterialsSection />

      {/* ════════════════════════════════════════════════════════════════
          6. FIGMA SIGNATURE SECTION ("Make it unmistakably yours.")
         ════════════════════════════════════════════════════════════════ */}
      <CategoryCustomSignatureSection />

      {/* ════════════════════════════════════════════════════════════════
          7. FIGMA CLARITY FAQ SECTION ("Before you choose your box.")
         ════════════════════════════════════════════════════════════════ */}
      <CategoryFaqSection />

      {/* ════════════════════════════════════════════════════════════════
          8. FIGMA NEXT PRODUCT CTA BANNER ("Your next great product deserves a great box.")
         ════════════════════════════════════════════════════════════════ */}
      <CategoryNextProductCtaSection />
    </main>
  );
}
