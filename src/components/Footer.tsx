"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer
      className="w-full bg-[#041F49] text-white select-none pb-20 lg:pb-0"
      style={{ fontFamily: "var(--font-libre-franklin), 'Libre Franklin', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-10">
        {/* ════════════════════════════════════════════════════════════════
            TOP ROW: Brand Info + 4 Link Columns
           ════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-8 sm:pb-10">
          {/* Brand Info (Span 4) */}
          <div className="lg:col-span-4 max-w-[320px]">
            {/* Logo in White Pill/Card */}
            <Link href="/" className="inline-block bg-white rounded-xl p-2.5 shadow-sm mb-5">
              <Image
                src={siteConfig.branding.logo}
                alt={siteConfig.name}
                width={150}
                height={46}
                className="h-[38px] w-auto object-contain"
              />
            </Link>

            {/* Brand Mission Statement */}
            <p className="text-white/70 text-[13.5px] sm:text-[14px] leading-[1.65] font-light">
              Australian Custom Boxes makes custom printed packaging for brands of every size. Made in
              Australia since 2019, with no minimum order, free design support and delivery
              Australia-wide.
            </p>
          </div>

          {/* 4 Link Columns (Span 8: 2 cols each on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: COMPANY */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90 mb-4">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-[13.5px] text-white/70 font-light">
                <li>
                  <Link href="/about-us" className="hover:text-[#F2B329] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#F2B329] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-[#F2B329] transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/materials-library" className="hover:text-[#F2B329] transition-colors">
                    Materials
                  </Link>
                </li>
                <li>
                  <Link href="/free-samples" className="hover:text-[#F2B329] transition-colors">
                    Sample Kits
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: PACKAGING */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90 mb-4">
                PACKAGING
              </h3>
              <ul className="space-y-2.5 text-[13.5px] text-white/70 font-light">
                <li>
                  <Link href="/custom-packaging" className="hover:text-[#F2B329] transition-colors">
                    Custom Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/custom-mailer-boxes" className="hover:text-[#F2B329] transition-colors">
                    Mailer Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/custom-rigid-boxes" className="hover:text-[#F2B329] transition-colors">
                    Rigid Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/custom-food-boxes" className="hover:text-[#F2B329] transition-colors">
                    Food Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/custom-retail-boxes" className="hover:text-[#F2B329] transition-colors">
                    Retail Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/custom-gift-boxes" className="hover:text-[#F2B329] transition-colors">
                    Gift Boxes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: RESOURCES */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90 mb-4">
                RESOURCES
              </h3>
              <ul className="space-y-2.5 text-[13.5px] text-white/70 font-light">
                <li>
                  <Link href="/blog" className="hover:text-[#F2B329] transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-order" className="hover:text-[#F2B329] transition-colors">
                    How to Order
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-[#F2B329] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="hover:text-[#F2B329] transition-colors">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/dieline-templates" className="hover:text-[#F2B329] transition-colors">
                    Dieline Templates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: POLICIES */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/90 mb-4">
                POLICIES
              </h3>
              <ul className="space-y-2.5 text-[13.5px] text-white/70 font-light">
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-[#F2B329] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#F2B329] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-[#F2B329] transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-delivery" className="hover:text-[#F2B329] transition-colors">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            MIDDLE ROW: Contact Links + Newsletter Subscription Bar
           ════════════════════════════════════════════════════════════════ */}
        <div className="border-t border-white/10 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          {/* Left: 3 Feature Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[13px] sm:text-[13.5px] text-white/80">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 hover:text-[#F2B329] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#F2B329]" />
              <span>Contact our team</span>
            </Link>

            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 hover:text-[#F2B329] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#F2B329]" />
              <span>Request a quote</span>
            </Link>

            <div className="inline-flex items-center gap-2 text-white/70 font-light select-none">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2B329]" />
              <span>Packaging for Australian brands</span>
            </div>
          </div>

          {/* Right: Newsletter Signup Form */}
          <div className="lg:max-w-[400px] w-full">
            <p className="text-white/75 text-[12px] sm:text-[12.5px] font-light mb-1.5">
              Get packaging tips and exclusive discounts in your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="relative flex items-center rounded-full bg-[#082E63] border border-white/20 p-0.5 pl-3.5 focus-within:border-[#F2B329] transition-colors shadow-inner"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent text-white text-[12.5px] placeholder:text-white/40 outline-none pr-2 min-w-0 font-light"
              />
              <button
                type="submit"
                className="shrink-0 bg-[#F2B329] hover:bg-[#e0a424] text-[#041F49] font-bold text-[12px] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </form>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            BOTTOM ROW: Copyright + Payment Logos + Social Icons
           ════════════════════════════════════════════════════════════════ */}
        <div className="border-t border-white/10 py-3.5 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Notice */}
          <div className="text-white/50 text-[12px] sm:text-[12.5px] font-light text-center md:text-left">
            © 2026 Australian Custom Boxes. All rights reserved.
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-5 select-none text-white/90">
            {/* VISA */}
            <span className="font-black italic text-[16px] tracking-wider text-white">VISA</span>

            {/* Skrill */}
            <span className="font-extrabold text-[15px] tracking-tight text-white">Skrill</span>

            {/* PayPal */}
            <span className="font-bold text-[14.5px] italic text-white">PayPal</span>

            {/* Klarna */}
            <div className="flex items-center gap-1 text-[14.5px] font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-white inline-block -mr-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/70 inline-block mr-1" />
              <span>Klarna</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F2B329] hover:text-[#041F49] flex items-center justify-center text-white transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F2B329] hover:text-[#041F49] flex items-center justify-center text-white transition-all duration-200"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F2B329] hover:text-[#041F49] flex items-center justify-center text-white transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Pinterest"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F2B329] hover:text-[#041F49] flex items-center justify-center text-white transition-all duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.155-1.499-.696-2.435-2.885-2.435-4.647 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
