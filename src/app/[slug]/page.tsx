import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Clock,
  Sparkles,
  Layers,
  Palette,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import { getAllMegaMenuSlugs, megaMenuData, MegaMenuColumn, MegaMenuItem } from "@/config/megaMenuData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllMegaMenuSlugs();
  return slugs.map((slug) => ({ slug }));
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
}

function resolvePageContext(slug: string): PageContext {
  // 1. Check if it's a top-level category column
  for (const cat of Object.values(megaMenuData)) {
    for (const col of cat.cols) {
      const colSlug = col.href.replace(/^\//, "").replace(/\/$/, "");
      if (colSlug === slug) {
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
        };
      }

      // 2. Check if it's a sub-item
      for (const item of col.items) {
        const itemSlug = item.href.replace(/^\//, "").replace(/\/$/, "");
        if (itemSlug === slug) {
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
  const ctx = resolvePageContext(slug);

  return {
    title: `${ctx.title} | Australian Custom Boxes`,
    description: ctx.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const ctx = resolvePageContext(slug);

  return (
    <main className="w-full bg-white select-none">
      {/* 1. Breadcrumbs */}
      <div className="w-full bg-[#F5F8FF] border-b border-[#041F49]/10 py-3.5">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#082E63]/60">
            <Link href="/" className="hover:text-[#041F49] transition-colors">
              Home
            </Link>
            <span>/</span>
            {ctx.categoryTitle && ctx.categoryHref && (
              <>
                <Link href={ctx.categoryHref} className="hover:text-[#041F49] transition-colors">
                  {ctx.categoryTitle}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#041F49] font-medium">{ctx.title}</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Header Section */}
      <section className="w-full bg-[#041F49] text-white py-14 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F2B329]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-[780px]">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2B329]/15 border border-[#F2B329]/30 text-[#F2B329] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Made in Australia · Low {ctx.minOrder} Minimum</span>
            </div>

            {/* H1 Heading */}
            <h1
              className="text-white tracking-tight"
              style={{
                fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                fontSize: "clamp(34px, 4vw, 56px)",
                lineHeight: "1.15",
                fontWeight: 600,
              }}
            >
              {ctx.title}
            </h1>

            {/* Description */}
            <p
              className="mt-5 text-white/80 text-[16px] sm:text-[18px] leading-relaxed font-light"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              {ctx.description}
            </p>

            {/* Pricing Hint Badge if available */}
            {ctx.startingPrice && (
              <div className="mt-4 flex items-center gap-3 text-sm text-white/90">
                <span className="text-[#F2B329] font-bold text-lg">{ctx.startingPrice}</span>
                <span className="text-white/60">starting price per box (1,000+ units) · GST included</span>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-3 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-[14.5px] px-6 py-3.5 rounded-full shadow-[0_12px_28px_-8px_rgba(242,179,41,0.5)] transition-all duration-200 active:scale-95"
              >
                <span>Get an Instant Quote</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/free-samples"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-medium text-[14.5px] px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                <span>Request Free Sample</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Key Specifications Grid */}
      <section className="w-full py-12 sm:py-16 bg-[#F8FAFC] border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col gap-2">
              <Clock className="w-6 h-6 text-[#F2B329]" />
              <span className="text-[11.5px] uppercase font-semibold text-[#64748B] tracking-wider">Turnaround</span>
              <span className="text-[17px] font-bold text-[#041F49]">8–10 Business Days</span>
              <span className="text-xs text-gray-500">Fast production in Melbourne</span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col gap-2">
              <ShieldCheck className="w-6 h-6 text-[#F2B329]" />
              <span className="text-[11.5px] uppercase font-semibold text-[#64748B] tracking-wider">Minimum Order</span>
              <span className="text-[17px] font-bold text-[#041F49]">From {ctx.minOrder}</span>
              <span className="text-xs text-gray-500">Tiered bulk wholesale rates</span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col gap-2">
              <Truck className="w-6 h-6 text-[#F2B329]" />
              <span className="text-[11.5px] uppercase font-semibold text-[#64748B] tracking-wider">Shipping</span>
              <span className="text-[17px] font-bold text-[#041F49]">Free Australia-Wide</span>
              <span className="text-xs text-gray-500">Tracked, insured express freight</span>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#F2B329]" />
              <span className="text-[11.5px] uppercase font-semibold text-[#64748B] tracking-wider">Proofing</span>
              <span className="text-[17px] font-bold text-[#041F49]">100% Free Dielines</span>
              <span className="text-xs text-gray-500">2D & 3D digital preview included</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sub-Products / Styles in this Category (if available) */}
      {ctx.relatedItems && ctx.relatedItems.length > 0 && (
        <section className="w-full py-16 sm:py-20 bg-white border-b border-gray-100">
          <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <span className="text-xs font-semibold text-[#082E63]/70 uppercase tracking-widest block mb-1.5">
                AVAILABLE OPTIONS
              </span>
              <h2
                className="text-[#041F49] text-[26px] sm:text-[32px] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
              >
                {ctx.isCategoryPage
                  ? `Styles & Types of ${ctx.title}`
                  : `Other ${ctx.categoryTitle || "Packaging"} Options`}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ctx.relatedItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group p-5 rounded-2xl border border-gray-200/80 bg-white hover:border-[#F2B329] hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F8FF] group-hover:bg-[#F2B329]/10 text-[#041F49] group-hover:text-[#F2B329] flex items-center justify-center transition-colors">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-[14.5px] text-[#041F49] group-hover:text-[#F2B329] transition-colors block">
                        {item.label}
                      </span>
                      {item.isNew && (
                        <span className="text-[9px] font-bold text-[#041F49] bg-[#F2B329] px-1.5 py-0.2 rounded-full uppercase">
                          New Style
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#F2B329] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Customisation Capabilities */}
      <section className="w-full py-16 sm:py-20 bg-[#FAFCFF]">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-[700px] mb-12">
            <span className="text-xs font-semibold text-[#082E63]/70 uppercase tracking-widest block mb-2">
              PRECISION MANUFACTURING
            </span>
            <h2
              className="text-[#041F49] text-[28px] sm:text-[34px] font-bold tracking-tight"
              style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
            >
              Custom Finishes & Printing Capabilities
            </h2>
            <p className="mt-3 text-[#4A5568] text-[15px] font-light leading-relaxed">
              Tailor every element of your box to create a memorable unboxing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col gap-3">
              <Palette className="w-6 h-6 text-[#F2B329]" />
              <h3 className="text-lg font-bold text-[#041F49]">Inside & Outside Printing</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed font-light">
                High-definition CMYK and Pantone color matching with food-safe soy and vegetable-based inks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col gap-3">
              <Sparkles className="w-6 h-6 text-[#F2B329]" />
              <h3 className="text-lg font-bold text-[#041F49]">Special Finishes</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed font-light">
                Add metallic foil stamping (gold, silver, rose gold), tactile embossing, debossing, or gloss spot UV.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col gap-3">
              <FileCheck className="w-6 h-6 text-[#F2B329]" />
              <h3 className="text-lg font-bold text-[#041F49]">Free Custom Dielines</h3>
              <p className="text-sm text-[#4A5568] leading-relaxed font-light">
                Receive accurate 2D vector dieline templates in millimeters plus interactive 3D digital proofs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Conversion CTA Band */}
      <section className="w-full bg-[#041F49] text-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to order your {ctx.title.toLowerCase()}?</h2>
            <p className="text-white/70 text-sm mt-1.5">
              Send us your dimensions or artwork. We reply with a detailed quote within 2 working hours.
            </p>
          </div>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold px-6 py-3.5 rounded-full shrink-0 transition-transform active:scale-95"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
