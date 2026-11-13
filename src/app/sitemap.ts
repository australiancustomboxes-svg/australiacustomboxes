import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllRoutes } from "@/config/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllRoutes();
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return routes.map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: route.lastModified || new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

