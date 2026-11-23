import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MaterialItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  href: string;
}

const materials: MaterialItem[] = [
  {
    id: "rigid-board",
    tag: "01 / PRESENTATION",
    title: "Rigid board",
    description:
      "A firm structure with a premium feel. A natural fit for jewellery, gift sets and boxes worth keeping.",
    image: "/images/materials/9a127720e51d092c4c744f4c2295c4dd4f5ef04b.webp",
    linkText: "Explore rigid boxes",
    href: "/custom-rigid-boxes",
  },
  {
    id: "corrugated-board",
    tag: "02 / PROTECTION",
    title: "Corrugated board",
    description:
      "A fluted construction for products on the move. Explore mailers, shipping and subscription boxes.",
    image: "/images/materials/6265bfef075139297f8e5c3a9c08d71a31547a19.webp",
    linkText: "Explore shipping boxes",
    href: "/custom-mailer-shipping-boxes",
  },
  {
    id: "paperboard",
    tag: "03 / RETAIL",
    title: "Paperboard",
    description:
      "Light, versatile and ready for your artwork. Discover cartons for retail displays and everyday products.",
    image: "/images/materials/7a780cdf57e7f804615b4d0ce76ffa82eba56081.webp",
    linkText: "Explore folding boxes",
    href: "/custom-folding-cartons",
  },
];

export default function CategoryMaterialsSection() {
  return (
    <section
      className="w-full bg-[#FAFBFD] py-16 sm:py-24 border-b border-gray-100 select-none"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="site-container">
        {/* ════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Start with the right foundation)
           ════════════════════════════════════════════════════════════════ */}
        <div className="mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#F2B329] rotate-45 shrink-0" aria-hidden="true" />
            <span className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-[2.8px] text-[#041F49]/70">
              START WITH THE RIGHT FOUNDATION
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[#041F49] tracking-tight text-[34px] sm:text-[44px] lg:text-[48px] font-semibold leading-[1.15]">
              <span>The material makes </span>
              <br className="hidden sm:inline" />
              <span
                className="text-[#B18D46] italic font-normal"
                style={{ fontFamily: "Georgia, serif" }}
              >
                the difference.
              </span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-[#556987] font-light md:text-right max-w-[340px] leading-relaxed">
              Think about how your box will travel, how it will open and how it should feel.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            2. THREE COLUMNS MATERIAL CARDS GRID
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {materials.map((item) => (
            <article key={item.id} className="group flex flex-col">
              {/* Image Container with Tag Badge */}
              <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-[#F2F4F7] mb-6 shadow-sm">
                <Link href={item.href} className="block relative w-full h-full cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Bottom-Left Tag Pill */}
                <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-tr-xl border-t border-r border-gray-100 shadow-sm z-10">
                  <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[1.8px] text-[#041F49]">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#041F49] tracking-tight mb-2.5 group-hover:text-[#082E63] transition-colors">
                <Link href={item.href}>{item.title}</Link>
              </h3>

              {/* Description */}
              <p className="text-[13.5px] sm:text-[14px] text-[#556987] font-light leading-relaxed mb-5 flex-1">
                {item.description}
              </p>

              {/* Underlined Action Link */}
              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-bold text-[#041F49] underline decoration-2 underline-offset-4 hover:text-[#B18D46] hover:decoration-[#B18D46] transition-all group/link"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
