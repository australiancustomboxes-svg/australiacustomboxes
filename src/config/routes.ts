export interface RouteItem {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified?: Date;
  title?: string;
  category?: string;
}

/**
 * Static & Core Marketing Routes
 * As new pages are added to the website, add them here to automatically
 * include them in sitemap.xml and robots.txt.
 */
export const staticRoutes: RouteItem[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1.0,
    title: "Home",
  },
  {
    path: "/about-us",
    changeFrequency: "monthly",
    priority: 0.8,
    title: "About Us",
  },
  {
    path: "/contact-us",
    changeFrequency: "monthly",
    priority: 0.8,
    title: "Contact Us",
  },
  {
    path: "/get-a-quote",
    changeFrequency: "weekly",
    priority: 0.9,
    title: "Get an Instant Quote",
  },
  {
    path: "/products",
    changeFrequency: "weekly",
    priority: 0.9,
    title: "All Custom Packaging Products",
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
    title: "Privacy Policy",
  },
  {
    path: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.3,
    title: "Terms & Conditions",
  },
];

/**
 * Dynamic Categories / Product Routes helper.
 * When product catalog or dynamic pages are created, this function
 * can pull from JSON/database/CMS and combine with static routes.
 */
export function getAllRoutes(): RouteItem[] {
  // Can be extended with dynamic products list
  return [...staticRoutes];
}

