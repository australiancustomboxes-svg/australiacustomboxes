import React from "react";
import Link from "next/link";
import { Phone, Mail, Truck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface TopNotificationBarProps {
  message?: string;
  phone?: string;
  email?: string;
}

export const TopNotificationBar: React.FC<TopNotificationBarProps> = ({
  message = "Free Shipping Across Australia & Fast Turnaround Times",
  phone = siteConfig.contact.phone,
  email = siteConfig.contact.email,
}) => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: "#0A3974" }}
    >
      <div className="site-container h-[36.72px] flex items-center justify-between text-white text-xs font-medium">
        {/* Left Side: Highlight / Announcement */}
        <div className="flex items-center gap-2 min-w-0 pr-4">
          <Truck className="w-3.5 h-3.5 text-gold shrink-0" />
          <span className="tracking-wide truncate">{message}</span>
        </div>

        {/* Right Side: Quick Contact Links */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-5 shrink-0">
          <Link
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="whitespace-nowrap">{phone}</span>
          </Link>

          <span className="text-white/40">|</span>

          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="whitespace-nowrap">{email}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNotificationBar;
