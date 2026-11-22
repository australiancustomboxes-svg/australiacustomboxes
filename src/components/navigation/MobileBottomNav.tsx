"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  FileText,
  Phone,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { megaMenuData } from "@/config/megaMenuData";

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>("shop");
  const [expandedCol, setExpandedCol] = useState<string | null>(null);

  // Close drawer whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Determine active tab
  const isHomeActive = !menuOpen && pathname === "/";
  const isBoxesActive =
    !menuOpen &&
    (pathname === "/custom-packaging" ||
      pathname.startsWith("/custom-") ||
      pathname.startsWith("/box") ||
      pathname.startsWith("/packaging"));
  const isQuoteActive =
    !menuOpen && (pathname === "/get-a-quote" || pathname === "/instant-quote");
  const isMenuTabActive = menuOpen;

  const currentCategory = megaMenuData[activeCategoryKey] || megaMenuData.shop;

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          1. SLIDE-UP FULL MENU DRAWER (Triggers from "Menu" Tab)
         ════════════════════════════════════════════════════════════════ */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 z-[60] lg:hidden flex flex-col justify-end animate-in fade-in duration-200"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#041F49]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="relative w-full max-h-[85vh] bg-white/95 backdrop-blur-2xl rounded-t-3xl shadow-[0_-10px_40px_rgba(4,31,73,0.2)] border-t border-white/60 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Top Drag Handle Indicator */}
            <div className="w-full flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 rounded-full bg-zinc-300/80" />
            </div>

            {/* Drawer Header */}
            <div className="px-5 py-3 border-b border-zinc-100 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <Image
                  src={siteConfig.branding.logo}
                  alt={siteConfig.name}
                  width={130}
                  height={42}
                  className="h-[36px] w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Segmented Controller (Shop Boxes | Industries | Resources) */}
            <div className="p-3 bg-zinc-50/80 border-b border-zinc-100 flex gap-2">
              {[
                { key: "shop", label: "Shop Boxes" },
                { key: "industries", label: "Industries" },
                { key: "resources", label: "Resources" },
              ].map((tab) => {
                const isSelected = activeCategoryKey === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setActiveCategoryKey(tab.key);
                      setExpandedCol(null);
                    }}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all duration-200 text-center ${
                      isSelected
                        ? "bg-[#041F49] text-white shadow-sm"
                        : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Scrollable Category Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-zinc-100 space-y-3">
              {currentCategory.cols.map((col) => {
                const isExpanded = expandedCol === col.title;
                return (
                  <div key={col.title} className="pt-3 first:pt-0">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCol(isExpanded ? null : col.title)
                      }
                      className="w-full flex items-center justify-between text-left py-1 text-sm font-bold text-[#041F49] hover:text-[#0066FF] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span>{col.title}</span>
                        <span className="text-[11px] font-normal text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-full">
                          {col.items.length} items
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-600 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#0066FF]" : ""
                        }`}
                      />
                    </button>

                    {/* Submenu Items Accordion */}
                    {isExpanded && (
                      <div className="mt-2 pl-2 space-y-1 pb-2">
                        <Link
                          href={col.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-semibold text-[#0066FF] bg-blue-50/60 hover:bg-blue-100/60 transition-colors"
                        >
                          <span>View all {col.short}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        {col.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs text-zinc-700 hover:text-[#041F49] hover:bg-zinc-50 transition-colors"
                          >
                            <span>{sub.label}</span>
                            {sub.isNew && (
                              <span className="text-[9px] font-bold text-[#041F49] bg-[#F2B329] px-1.5 py-0.2 rounded-full">
                                NEW
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Quick Pages */}
              <div className="pt-4 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 block mb-2">
                  Quick Navigation
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <Link
                    href="/eco-packaging"
                    onClick={() => setMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-[#041F49] flex items-center justify-between"
                  >
                    <span>Eco Packaging</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  </Link>
                  <Link
                    href="/about-us"
                    onClick={() => setMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-[#041F49] flex items-center justify-between"
                  >
                    <span>About ACB</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-[#041F49] flex items-center justify-between"
                  >
                    <span>Contact Us</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  </Link>
                  <Link
                    href="/blogs"
                    onClick={() => setMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-[#041F49] flex items-center justify-between"
                  >
                    <span>Blogs & Guides</span>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 bg-zinc-50/90 border-t border-zinc-200/70 flex gap-2.5">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="flex-1 h-11 rounded-full border border-zinc-300 bg-white text-[#041F49] font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-zinc-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>

              <Link
                href="/get-a-quote"
                onClick={() => setMenuOpen(false)}
                className="flex-[1.5] h-11 rounded-full bg-[#F2B329] text-[#041F49] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-[#e0a424] transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════
          2. FROSTED WHITE GLASS MOBILE BOTTOM NAVIGATION BAR
         ════════════════════════════════════════════════════════════════ */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-auto"
      >
        {/* Slim safe padding and frosted glass styling */}
        <div
          className="mx-auto w-full max-w-lg bg-white/85 backdrop-blur-2xl border-t border-white/60 shadow-[0_-4px_25px_rgba(4,31,73,0.06)] px-2 pt-1 pb-[max(0.35rem,env(safe-area-inset-bottom))]"
          style={{
            fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
          }}
        >
          <div className="grid grid-cols-5 items-center">
            {/* Tab 1: Home */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`flex flex-col items-center justify-center py-0.5 transition-all duration-200 rounded-xl group ${
                isHomeActive ? "text-[#0066FF]" : "text-zinc-400 hover:text-[#041F49]"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all duration-200 ${
                  isHomeActive
                    ? "bg-blue-500/10 shadow-[0_0_14px_rgba(0,102,255,0.45)] drop-shadow-[0_0_8px_rgba(0,102,255,0.9)]"
                    : "group-hover:scale-105"
                }`}
              >
                <Home className="w-[19px] h-[19px] stroke-[2.2]" />
              </div>
              <span
                className={`text-[9.5px] mt-0.5 tracking-tight ${
                  isHomeActive
                    ? "font-bold text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.6)]"
                    : "font-medium text-zinc-500"
                }`}
              >
                Home
              </span>
            </Link>

            {/* Tab 2: Shop Boxes */}
            <Link
              href="/custom-packaging"
              onClick={() => setMenuOpen(false)}
              className={`flex flex-col items-center justify-center py-0.5 transition-all duration-200 rounded-xl group ${
                isBoxesActive ? "text-[#0066FF]" : "text-zinc-400 hover:text-[#041F49]"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all duration-200 ${
                  isBoxesActive
                    ? "bg-blue-500/10 shadow-[0_0_14px_rgba(0,102,255,0.45)] drop-shadow-[0_0_8px_rgba(0,102,255,0.9)]"
                    : "group-hover:scale-105"
                }`}
              >
                <Package className="w-[19px] h-[19px] stroke-[2.2]" />
              </div>
              <span
                className={`text-[9.5px] mt-0.5 tracking-tight ${
                  isBoxesActive
                    ? "font-bold text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.6)]"
                    : "font-medium text-zinc-500"
                }`}
              >
                Boxes
              </span>
            </Link>

            {/* Tab 3: Instant Quote */}
            <Link
              href="/get-a-quote"
              onClick={() => setMenuOpen(false)}
              className={`flex flex-col items-center justify-center py-0.5 transition-all duration-200 rounded-xl group ${
                isQuoteActive ? "text-[#0066FF]" : "text-zinc-400 hover:text-[#041F49]"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all duration-200 ${
                  isQuoteActive
                    ? "bg-blue-500/10 shadow-[0_0_14px_rgba(0,102,255,0.45)] drop-shadow-[0_0_8px_rgba(0,102,255,0.9)]"
                    : "group-hover:scale-105"
                }`}
              >
                <FileText className="w-[19px] h-[19px] stroke-[2.2]" />
              </div>
              <span
                className={`text-[9.5px] mt-0.5 tracking-tight ${
                  isQuoteActive
                    ? "font-bold text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.6)]"
                    : "font-medium text-zinc-500"
                }`}
              >
                Quote
              </span>
            </Link>

            {/* Tab 4: Direct Call */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex flex-col items-center justify-center py-0.5 text-zinc-400 hover:text-[#041F49] transition-all duration-200 rounded-xl group"
            >
              <div className="p-1 rounded-full transition-transform duration-200 group-hover:scale-105">
                <Phone className="w-[19px] h-[19px] stroke-[2.2]" />
              </div>
              <span className="text-[9.5px] mt-0.5 tracking-tight font-medium text-zinc-500">
                Call
              </span>
            </a>

            {/* Tab 5: Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col items-center justify-center py-0.5 transition-all duration-200 rounded-xl group cursor-pointer ${
                isMenuTabActive
                  ? "text-[#0066FF]"
                  : "text-zinc-400 hover:text-[#041F49]"
              }`}
              aria-label="Toggle navigation menu"
            >
              <div
                className={`p-1 rounded-full transition-all duration-200 ${
                  isMenuTabActive
                    ? "bg-blue-500/10 shadow-[0_0_14px_rgba(0,102,255,0.45)] drop-shadow-[0_0_8px_rgba(0,102,255,0.9)]"
                    : "group-hover:scale-105"
                }`}
              >
                {menuOpen ? (
                  <X className="w-[19px] h-[19px] stroke-[2.2]" />
                ) : (
                  <Menu className="w-[19px] h-[19px] stroke-[2.2]" />
                )}
              </div>
              <span
                className={`text-[9.5px] mt-0.5 tracking-tight ${
                  isMenuTabActive
                    ? "font-bold text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.6)]"
                    : "font-medium text-zinc-500"
                }`}
              >
                Menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileBottomNav;
