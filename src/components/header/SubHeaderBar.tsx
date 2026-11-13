import React from "react";
import Link from "next/link";

interface FeatureItem {
  label: string;
}

const features: FeatureItem[] = [
  { label: "No Minimum Order Quantity" },
  { label: "Fast Turnaround & Free Shipping" },
  { label: "Friendly Customer Support" },
  { label: "Easy Online Payment" },
];

export const SubHeaderBar: React.FC = () => {
  return (
    <div
      className="w-full border-b"
      style={{
        backgroundColor: "#041F49",
        borderColor: "#F5F8FF24",
      }}
    >
      <div className="site-container h-[41px] flex items-center justify-between text-[#F5F8FF] text-[11.5px] font-normal">
        {/* Left Side: Value Propositions with Golden Diamonds */}
        <div className="flex items-center gap-3.5 sm:gap-5 xl:gap-7 overflow-x-auto no-scrollbar py-1">
          {features.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 sm:gap-2 shrink-0 select-none"
            >
              <svg
                className="w-2 h-2 text-gold shrink-0 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="tracking-wide text-white/90 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Quick Action Links */}
        <div className="hidden md:flex items-center gap-4 xl:gap-6 shrink-0 font-medium">
          <Link
            href="/get-a-quote"
            className="text-white/85 hover:text-gold transition-colors tracking-wide whitespace-nowrap"
          >
            Request a quote
          </Link>

          <Link
            href="/contact-us"
            className="text-white/85 hover:text-gold transition-colors tracking-wide whitespace-nowrap"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderBar;
