"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface NavDropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    hasDropdown: true,
    children: [
      { name: "Custom Mailer Boxes", href: "/products/mailer-boxes", description: "Durable & stylish corrugated mailers" },
      { name: "Product & Retail Boxes", href: "/products/product-boxes", description: "Eye-catching packaging for store shelves" },
      { name: "Shipping & Mailing Boxes", href: "/products/shipping-boxes", description: "Heavy-duty transit boxes" },
      { name: "Rigid Luxury Gift Boxes", href: "/products/rigid-boxes", description: "Premium magnetic & lid boxes" },
      { name: "Eco-Friendly Packaging", href: "/products/eco-friendly", description: "100% recyclable kraft solutions" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    hasDropdown: true,
    children: [
      { name: "E-commerce & Subscription", href: "/industries/ecommerce" },
      { name: "Cosmetics & Skincare", href: "/industries/cosmetics" },
      { name: "Food & Beverage", href: "/industries/food-beverage" },
      { name: "Retail & Apparel", href: "/industries/retail" },
      { name: "Pharmaceutical & Healthcare", href: "/industries/pharmaceutical" },
    ],
  },
  {
    label: "Custom Packaging",
    href: "/custom-packaging",
    hasDropdown: false,
  },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    children: [
      { name: "Box Die-line Templates", href: "/resources/dielines" },
      { name: "Artwork & Printing Guide", href: "/resources/artwork-guide" },
      { name: "Material & Cardboard Guide", href: "/resources/material-guide" },
      { name: "Packaging Blog", href: "/resources/blog" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    hasDropdown: false,
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white border-b border-zinc-100 relative">
      <div className="site-container h-[84px] flex items-center justify-between">
        {/* 1. Left: Brand Logo */}
        <Link href="/" className="flex items-center shrink-0 py-2">
          <Image
            src={siteConfig.branding.logo}
            alt={siteConfig.name}
            width={160}
            height={52}
            className="h-[44px] sm:h-[48px] w-auto object-contain"
            priority
          />
        </Link>

        {/* 2. Middle: Navigation Menu Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 text-[14px] xl:text-[14.5px] font-medium text-[#041F49] hover:text-gold transition-colors py-7 tracking-[-0.01em] whitespace-nowrap"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-[#041F49]/70 group-hover:text-gold group-hover:rotate-180 transition-transform duration-200" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.label && item.children && (
                <div className="absolute left-0 top-[76px] w-64 bg-white rounded-xl shadow-xl border border-zinc-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-[#041F49] hover:bg-ice hover:text-navy transition-colors font-medium"
                    >
                      <div>{sub.name}</div>
                      {sub.description && (
                        <div className="text-xs text-zinc-500 font-normal mt-0.5">{sub.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. Right: Contact Team Link & Get a Quote Button */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6 shrink-0">
          {/* Contact our team link with exact 12.4px phone vector */}
          <Link
            href="/contact-us"
            className="flex items-center gap-2 text-[13.5px] xl:text-[14px] font-medium text-[#041F49] hover:text-gold transition-colors py-2 whitespace-nowrap"
          >
            {/* Phone receiver vector icon (12.4px x 12.4px, stroke #986400) */}
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

          {/* "Get a Quote" Button with exact Figma specifications */}
          <Link
            href="/get-a-quote"
            className="w-[150px] xl:w-[158.75px] h-[46px] xl:h-[48px] rounded-[999px] flex items-center justify-between pl-4 xl:pl-5 pr-1.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
            style={{
              backgroundColor: "#F2B329",
              boxShadow: "0px 18px 34px -18px rgba(242, 179, 41, 0.48)",
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
            className="p-2 text-[#041F49] hover:text-gold transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-zinc-100 pb-3">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#041F49] hover:text-gold transition-colors py-1"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pt-2 space-y-2">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-zinc-600 hover:text-navy py-0.5"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

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
