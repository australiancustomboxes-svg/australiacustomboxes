"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { HoneypotField } from "@/components/security/HoneypotField";

type DimensionUnit = "in" | "cm" | "mm";
type PrintedSides = "Outside" | "Inside" | "Inside & Outside" | "No Print";

const boxStyles = [
  "Custom Mailer Boxes",
  "Heavy Duty Corrugated Mailer",
  "Custom Boutique Mailer Carton",
  "PureBloom Magnetic Packaging",
  "Presentation Drawer Packaging",
  "NatureBond Slide Drawer Box",
  "Retail Countertop Display Tray",
  "Custom Gable Boxes",
  "Custom Donut Box Collection",
  "Custom Candle Packaging Box",
  "Custom Fries & Food Packaging",
  "Custom Paper Bags",
  "Custom Popcorn Boxes",
  "Other / Custom Style",
];

const finishOptions = [
  "Lamination",
  "Emboss",
  "Deboss",
  "Spot UV",
  "Foil Stamping",
];

/**
 * QuoteFormSection
 * "Get your custom packaging quote."
 * Positioned directly below the Product Types Section in page.tsx
 * - Desktop: 2-column layout (Left value proposition & steps, Right 3-step quote builder)
 * - Mobile (< 1024px): Fully responsive stack with touch-friendly segmented controls
 * - Built-in security honeypot and validation
 */
export const QuoteFormSection: React.FC = () => {
  // Form State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [boxType, setBoxType] = useState(boxStyles[0]);
  const [quantity, setQuantity] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<DimensionUnit>("in");

  const [printedSides, setPrintedSides] = useState<PrintedSides>("Outside");
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([]);
  const [artworkFile, setArtworkFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFinish = (finish: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(finish)
        ? prev.filter((item) => item !== finish)
        : [...prev, finish]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArtworkFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate safe client-side submission with preview feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="get-a-quote"
      aria-labelledby="quote-heading"
      className="w-full bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E5EBF5]"
    >
      <div className="site-container">
        {/* Top Gold Accent Bar on Right Form Column (Parity with design) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 mb-2">
          <div className="col-span-5" />
          <div className="col-span-7">
            <div className="w-full h-[3px] bg-[#F2B329] rounded-full mb-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* =========================================================
              LEFT COLUMN: Brand Value Proposition, Steps & Contacts
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3 select-none">
                <div
                  className="w-[6px] h-[6px] bg-[#F2B329] rotate-45 shrink-0"
                  aria-hidden="true"
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[2.4px] text-[#082E63]/75"
                  style={{
                    fontFamily:
                      "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                  }}
                >
                  FREE QUOTE
                </span>
              </div>

              {/* Headline */}
              <h2
                id="quote-heading"
                className="text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold text-[#082E63] tracking-[-1.5px] leading-[1.08] mb-4"
                style={{
                  fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  fontWeight: 800,
                }}
              >
                Get your custom{" "}
                <span
                  className="italic font-normal text-[#F2B329]"
                  style={{
                    fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                  }}
                >
                  packaging
                </span>{" "}
                <span className="text-[#F2B329]">quote.</span>
              </h2>

              {/* Subtitle */}
              <p
                className="text-[14.5px] sm:text-[15.5px] text-[#082E63]/75 leading-[1.6] font-normal mb-8 max-w-[440px]"
                style={{
                  fontFamily: "var(--font-figtree), 'Figtree', sans-serif",
                }}
              >
                Share a few details. Rough numbers are fine. We&apos;ll come back
                with pricing, a material recommendation and your free 3D mockup.
              </p>

              {/* Numbered Steps: 01, 02, 03 */}
              <div className="space-y-5 mb-10 select-none max-w-[420px]">
                {/* Step 01 */}
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#F2B329] text-[13px] font-extrabold tracking-wide shrink-0 pt-0.5"
                    style={{
                      fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                    }}
                  >
                    01
                  </span>
                  <p className="text-[13.5px] sm:text-[14px] text-[#082E63]/85 leading-[1.48] font-normal">
                    We review your specs and suggest the best board, style and
                    print.
                  </p>
                </div>

                {/* Step 02 */}
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#F2B329] text-[13px] font-extrabold tracking-wide shrink-0 pt-0.5"
                    style={{
                      fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                    }}
                  >
                    02
                  </span>
                  <p className="text-[13.5px] sm:text-[14px] text-[#082E63]/85 leading-[1.48] font-normal">
                    You get a clear quote, with bulk pricing tiers if you need
                    them.
                  </p>
                </div>

                {/* Step 03 */}
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#F2B329] text-[13px] font-extrabold tracking-wide shrink-0 pt-0.5"
                    style={{
                      fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                    }}
                  >
                    03
                  </span>
                  <p className="text-[13.5px] sm:text-[14px] text-[#082E63]/85 leading-[1.48] font-normal">
                    Approve your 3D mockup and proof, and production begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-6 border-t border-[#E5EBF5] space-y-2.5 text-[#082E63] text-[13px] font-semibold">
              <a
                href="tel:0280000000"
                className="flex items-center gap-2.5 hover:text-[#F2B329] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#082E63]/60 stroke-[2.2]" />
                <span>Contact our team</span>
              </a>

              <a
                href="mailto:info@australiancustomboxes.com.au"
                className="flex items-center gap-2.5 hover:text-[#F2B329] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#082E63]/60 stroke-[2.2]" />
                <span>Request a quote</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#082E63]/70 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#082E63]/60 stroke-[2.2]" />
                <span>Packaging for Australian brands</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: 3-Step Interactive Quote Request Form
             ========================================================= */}
          <div className="lg:col-span-7 bg-white">
            {/* Mobile Top Accent */}
            <div className="block lg:hidden w-full h-[3px] bg-[#F2B329] rounded-full mb-6" />

            {isSubmitted ? (
              <div className="p-8 sm:p-10 rounded-[18px] bg-[#F8FAFD] border border-[#DCE4EF] text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#34A853]/15 text-[#34A853] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.4]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#082E63] mb-2"
                  style={{
                    fontFamily: "var(--font-archivo), 'Archivo', sans-serif",
                  }}
                >
                  Quote Request Received!
                </h3>
                <p className="text-[14.5px] text-[#082E63]/75 max-w-[420px] mb-6 leading-relaxed">
                  Thank you, <strong>{name || "Valued Customer"}</strong>. Our
                  Australian packaging engineering team will review your specs
                  and send you pricing with a free 3D digital mockup within 1
                  business day.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="h-[42px] px-6 rounded-full bg-[#041F49] text-white text-[13px] font-bold hover:bg-[#F2B329] hover:text-[#041F49] transition-all"
                >
                  Submit Another Quote
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Anti-Bot Honeypot Security Field */}
                <HoneypotField />

                {/* ----------------------------------------------------
                    STEP 1: Your details
                   ---------------------------------------------------- */}
                <fieldset className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#041F49] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <legend className="text-[14.5px] font-bold text-[#082E63] tracking-tight">
                      Your details:
                    </legend>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Name <span className="text-[#F2B329]">*</span>
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full h-[42px] px-3.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="quote-company"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        id="quote-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Brand or Studio Pty Ltd"
                        className="w-full h-[42px] px-3.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Email <span className="text-[#F2B329]">*</span>
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com.au"
                        className="w-full h-[42px] px-3.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Phone <span className="text-[#F2B329]">*</span>
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+61 400 000 000"
                        className="w-full h-[42px] px-3.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* ----------------------------------------------------
                    STEP 2: Your box
                   ---------------------------------------------------- */}
                <fieldset className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#041F49] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <legend className="text-[14.5px] font-bold text-[#082E63] tracking-tight">
                      Your box:
                    </legend>
                  </div>

                  {/* Box Type & Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label
                        htmlFor="quote-boxtype"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Box Type
                      </label>
                      <select
                        id="quote-boxtype"
                        value={boxType}
                        onChange={(e) => setBoxType(e.target.value)}
                        className="w-full h-[42px] px-3 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all"
                      >
                        {boxStyles.map((style) => (
                          <option key={style} value={style}>
                            {style}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-quantity"
                        className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Quantity
                      </label>
                      <input
                        id="quote-quantity"
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="e.g. 1, 250 or 5,000"
                        className="w-full h-[42px] px-3.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Dimensions (L, W, H) & Unit Segmented Control */}
                  <div className="grid grid-cols-12 gap-2.5 sm:gap-3 items-end">
                    <div className="col-span-3">
                      <label
                        htmlFor="quote-length"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Length
                      </label>
                      <input
                        id="quote-length"
                        type="number"
                        step="any"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="L"
                        className="w-full h-[40px] px-3 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13px] text-center focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all"
                      />
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor="quote-width"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Width
                      </label>
                      <input
                        id="quote-width"
                        type="number"
                        step="any"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="W"
                        className="w-full h-[40px] px-3 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13px] text-center focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all"
                      />
                    </div>

                    <div className="col-span-3">
                      <label
                        htmlFor="quote-height"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                      >
                        Height
                      </label>
                      <input
                        id="quote-height"
                        type="number"
                        step="any"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="H"
                        className="w-full h-[40px] px-3 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13px] text-center focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all"
                      />
                    </div>

                    {/* Unit Segmented Control (in / cm / mm) */}
                    <div className="col-span-3">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5">
                        Unit
                      </span>
                      <div className="flex h-[40px] rounded-[6px] border border-[#CBD5E1] overflow-hidden bg-[#F8FAFD]">
                        {(["in", "cm", "mm"] as DimensionUnit[]).map((u) => {
                          const isActive = unit === u;
                          return (
                            <button
                              key={u}
                              type="button"
                              onClick={() => setUnit(u)}
                              className={`flex-1 text-[11.5px] font-bold transition-all duration-150 ${
                                isActive
                                  ? "bg-[#041F49] text-white"
                                  : "text-[#082E63]/75 hover:bg-white"
                              }`}
                            >
                              {u}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Printed Sides Segmented Pills */}
                  <div className="pt-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-2">
                      Printed Sides
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          "Outside",
                          "Inside",
                          "Inside & Outside",
                          "No Print",
                        ] as PrintedSides[]
                      ).map((side) => {
                        const isSelected = printedSides === side;
                        return (
                          <button
                            key={side}
                            type="button"
                            onClick={() => setPrintedSides(side)}
                            className={`inline-flex items-center gap-1.5 h-[34px] px-3.5 rounded-full text-[12px] font-semibold transition-all duration-150 select-none ${
                              isSelected
                                ? "bg-[#041F49] text-white border border-[#041F49] shadow-xs"
                                : "bg-white text-[#082E63]/85 border border-[#CBD5E1] hover:border-[#082E63]/40"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected ? "bg-[#F2B329]" : "border border-[#082E63]/40"
                              }`}
                            />
                            <span>{side}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Finishes (Optional Multi-Select Pills) */}
                  <div className="pt-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#082E63] mb-2">
                      Finishes (Optional)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {finishOptions.map((finish) => {
                        const isSelected = selectedFinishes.includes(finish);
                        return (
                          <button
                            key={finish}
                            type="button"
                            onClick={() => toggleFinish(finish)}
                            className={`inline-flex items-center gap-1.5 h-[34px] px-3.5 rounded-full text-[12px] font-medium transition-all duration-150 select-none ${
                              isSelected
                                ? "bg-[#041F49] text-white border border-[#041F49] shadow-xs"
                                : "bg-white text-[#082E63]/85 border border-[#CBD5E1] hover:border-[#082E63]/40"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected ? "bg-[#F2B329]" : "border border-[#082E63]/40"
                              }`}
                            />
                            <span>{finish}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                {/* ----------------------------------------------------
                    STEP 3: Artwork & notes
                   ---------------------------------------------------- */}
                <fieldset className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#041F49] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <legend className="text-[14.5px] font-bold text-[#082E63] tracking-tight">
                      Artwork &amp; notes:
                    </legend>
                  </div>

                  {/* File Upload Box */}
                  <div className="relative border border-dashed border-[#94A3B8] rounded-[10px] p-5 sm:p-6 bg-[#FAFCFF] hover:border-[#F2B329] transition-all text-center">
                    <input
                      id="artwork-upload"
                      type="file"
                      accept=".pdf,.ai,.eps,.psd,.png,.jpg,.jpeg"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F2B329]/15 text-[#B5882D] flex items-center justify-center shrink-0">
                        {artworkFile ? (
                          <FileCheck className="w-5 h-5 text-[#34A853]" />
                        ) : (
                          <UploadCloud className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-[13px] font-bold text-[#082E63]">
                          {artworkFile
                            ? artworkFile.name
                            : "Upload artwork"}
                        </p>
                        <p className="text-[11.5px] text-[#082E63]/60 font-normal">
                          PDF, AI, EPS, PSD, PNG or JPG. No artwork yet? Our
                          designers will help for free.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message / Special Requirements */}
                  <div>
                    <label
                      htmlFor="quote-message"
                      className="block text-[10.5px] font-bold uppercase tracking-wider text-[#082E63] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="quote-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you're packing, your deadline and any special requirements."
                      className="w-full p-3 rounded-[6px] border border-[#CBD5E1] bg-white text-[#082E63] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#F2B329] focus:border-[#F2B329] transition-all placeholder:text-gray-400"
                    />
                  </div>
                </fieldset>

                {/* ----------------------------------------------------
                    FORM ACTION FOOTER: Disclaimer & Submit Button
                   ---------------------------------------------------- */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-[#082E63]/65 font-medium leading-tight">
                    <p>We reply within one business day. No obligation, no spam.</p>
                    <p className="text-[#082E63]/50 text-[10px] mt-0.5">
                      Preview only; no details are sent.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-[46px] pl-6 pr-2 rounded-full flex items-center justify-between sm:justify-center gap-3 transition-all duration-200 active:scale-95 shadow-[0_10px_25px_-5px_rgba(242,179,41,0.5)] cursor-pointer disabled:opacity-70"
                    style={{
                      backgroundColor: "#F2B329",
                    }}
                  >
                    <span
                      className="text-[14px] font-bold text-[#041F49] tracking-wide"
                      style={{
                        fontFamily:
                          "var(--font-libre-franklin), 'Libre Franklin', sans-serif",
                      }}
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                    </span>
                    <div className="w-[32px] h-[32px] rounded-full bg-[#041F49] text-[#F2B329] flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
