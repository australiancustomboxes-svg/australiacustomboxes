"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { megaMenuData, MegaMenuCategory } from "@/config/megaMenuData";
import { MegaMenuPanel } from "./MegaMenuPanel";

interface NavItem {
  label: string;
  href: string;
  megaKey?: "shop" | "industries" | "resources";
}

const navItems: NavItem[] = [
  {
    label: "Shop Boxes",
    href: "/custom-packaging",
    megaKey: "shop",
  },
  {
    label: "Industries",
    href: "/industries",
    megaKey: "industries",
  },
  {
    label: "Resources",
    href: "/resources",
    megaKey: "resources",
  },
  {
    label: "Eco Packaging",
    href: "/eco-packaging",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [activeMegaKey, setActiveMegaKey] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaKey(key);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaKey(null);
    }, 200);
  };

  const handlePanelMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handlePanelMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaKey(null);
    }, 200);
  };

  const closeMegaMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaKey(null);
  };

  const activeCategory: MegaMenuCategory | null = activeMegaKey
    ? megaMenuData[activeMegaKey] || null
    : null;

  return (
    <nav className="w-full bg-white border-b border-zinc-100 relative">
      <div className="site-container h-[84px] flex items-center justify-between">
        {/* 1. Left: Brand Logo */}
        <Link href="/" onClick={closeMegaMenu} className="flex items-center shrink-0 py-2">
          <Image
            src={siteConfig.branding.logo}
            alt={siteConfig.name}
            width={160}
            height={52}
            className="h-[44px] sm:h-[48px] w-auto object-contain"
            priority
          />
        </Link>

        {/* 2. Middle: Navigation Menu Links (Desktop with on-hover Mega Menu) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navItems.map((item) => {
            const hasMega = !!item.megaKey;
            const isOpen = activeMegaKey === item.megaKey;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasMega && handleMouseEnter(item.megaKey!)}
                onMouseLeave={hasMega ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  onClick={closeMegaMenu}
                  className={`flex items-center gap-1.5 text-[14px] xl:text-[14.5px] font-medium transition-colors py-7 tracking-[-0.01em] whitespace-nowrap ${
                    isOpen
                      ? "text-[#F2B329] border-b-2 border-[#F2B329] -mb-[2px]"
                      : "text-[#041F49] hover:text-[#F2B329]"
                  }`}
                  style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
                >
                  <span>{item.label}</span>
                  {hasMega && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#F2B329]" : "text-[#041F49]/70"
                      }`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* 3. Right: Contact Team Link & Get a Quote Button */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
          {/* Contact our team link with phone vector */}
          <Link
            href="/contact-us"
            onClick={closeMegaMenu}
            className="flex items-center gap-2 text-[13.5px] xl:text-[14px] font-medium text-[#041F49] hover:text-gold transition-colors py-2 whitespace-nowrap"
            style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#986400"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Contact our team</span>
          </Link>

          {/* "Get a Quote" Button */}
          <Link
            href="/get-a-quote"
            onClick={closeMegaMenu}
            className="w-[150px] xl:w-[158.75px] h-[46px] xl:h-[48px] rounded-[999px] flex items-center justify-between pl-4 xl:pl-5 pr-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            style={{
              backgroundColor: "#F2B329",
              boxShadow: "0px 18px 34px -18px rgba(242, 179, 41, 0.48)",
              fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
            }}
          >
            <span className="text-[13.5px] xl:text-[14px] font-semibold text-[#041F49] tracking-tight whitespace-nowrap">
              Get a Quote
            </span>
            <div className="w-[34px] xl:w-[36px] h-[34px] xl:h-[36px] rounded-full bg-[#041F49] text-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/get-a-quote"
            className="sm:hidden h-[38px] px-3.5 rounded-full bg-gold text-[#041F49] font-semibold text-xs flex items-center gap-1.5"
            style={{ boxShadow: "0px 8px 20px -8px rgba(242, 179, 41, 0.48)" }}
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#041F49] hover:text-gold transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          DESKTOP MEGA MENU DROPDOWN PANEL (Triggers on Hover)
         ════════════════════════════════════════════════════════════════ */}
      <MegaMenuPanel
        category={activeCategory}
        isOpen={!!activeMegaKey}
        onMouseEnter={handlePanelMouseEnter}
        onMouseLeave={handlePanelMouseLeave}
        onItemClick={closeMegaMenu}
      />

      {/* ════════════════════════════════════════════════════════════════
          MOBILE DRAWER MENU
         ════════════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => {
            const hasMega = !!item.megaKey;
            const category = hasMega ? megaMenuData[item.megaKey!] : null;
            const isExpanded = mobileExpandedCat === item.megaKey;

            return (
              <div key={item.label} className="border-b border-zinc-100 pb-3">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-semibold text-[#041F49] hover:text-[#F2B329] transition-colors py-1"
                  >
                    {item.label}
                  </Link>

                  {hasMega && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpandedCat(isExpanded ? null : item.megaKey!)
                      }
                      className="p-2 text-[#041F49] hover:text-[#F2B329]"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180 text-[#F2B329]" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu for Mobile */}
                {hasMega && isExpanded && category && (
                  <div className="pl-3 pt-3 space-y-4">
                    {category.cols.map((col) => (
                      <div key={col.title} className="space-y-1.5">
                        <Link
                          href={col.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-bold text-[#041F49] hover:text-[#F2B329] py-0.5"
                        >
                          {col.title}
                        </Link>
                        <div className="pl-2 space-y-1">
                          {col.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-[13px] text-zinc-600 hover:text-[#041F49] py-0.5"
                            >
                              {sub.label}
                              {sub.isNew && (
                                <span className="ml-1.5 text-[9px] font-bold text-[#041F49] bg-[#F2B329] px-1.5 py-0.2 rounded-full">
                                  NEW
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-[#041F49]"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#986400"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Contact our team</span>
            </Link>

            <Link
              href="/get-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-[46px] rounded-full bg-gold text-[#041F49] font-semibold text-sm flex items-center justify-between px-5 mt-2"
              style={{ boxShadow: "0px 18px 34px -18px rgba(242, 179, 41, 0.48)" }}
            >
              <span>Get a Quote</span>
              <div className="w-[32px] h-[32px] rounded-full bg-[#041F49] text-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
