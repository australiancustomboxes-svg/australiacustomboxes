import { brandColors } from "./colors";

export const siteConfig = {
  name: "Australian Custom Boxes",
  shortName: "AusCustomBoxes",
  description:
    "Premium custom printed packaging boxes in Australia. High quality custom mailer boxes, product boxes, retail packaging, and eco-friendly shipping boxes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://australiancustomboxes.com.au",
  ogImage: "/images/logo/Australian-Custom-Boxes-Logo-Profile.png",
  branding: {
    logo: "/images/logo/Australian-Custom-Box-Logo.png",
    logoProfile: "/images/logo/Australian-Custom-Boxes-Logo-Profile.png",
    favicon: "/favicon.png",
    kangarooIcon: "/images/logo/Australian-Flag-Kangaroo-Icon.png",
    colors: brandColors,
  },
  contact: {
    email: "info@australiancustomboxes.com.au",
    phone: "+61 2 8000 0000",
    address: "Sydney, NSW, Australia",
  },
  links: {
    twitter: "https://twitter.com/auscustomboxes",
    facebook: "https://facebook.com/australiancustomboxes",
    instagram: "https://instagram.com/australiancustomboxes",
    linkedin: "https://linkedin.com/company/australiancustomboxes",
  },
  security: {
    // Honeypot field name (bots will fill this, humans won't see it)
    honeypotField: "hp_company_website",
    // Minimum time in milliseconds that a human takes to fill a form
    minSubmissionDurationMs: 2500,
    // Max age of a form session (e.g. 2 hours)
    maxSubmissionDurationMs: 2 * 60 * 60 * 1000,
  },
};

export type SiteConfig = typeof siteConfig;
