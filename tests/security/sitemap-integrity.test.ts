import { describe, it, expect } from "vitest";
import { getAllRoutes, staticRoutes } from "@/config/routes";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/config/site";

describe("SEO & Sitemap Route Integrity", () => {
  it("verifies all registered routes have proper formatting and valid paths", () => {
    const routes = getAllRoutes();
    expect(routes.length).toBeGreaterThan(0);

    const validFrequencies = [
      "always",
      "hourly",
      "daily",
      "weekly",
      "monthly",
      "yearly",
      "never",
    ];

    routes.forEach((route) => {
      // Path must start with /
      expect(route.path.startsWith("/")).toBe(true);
      // Priority must be between 0.0 and 1.0
      expect(route.priority).toBeGreaterThanOrEqual(0);
      expect(route.priority).toBeLessThanOrEqual(1.0);
      // Valid change frequency
      expect(validFrequencies).toContain(route.changeFrequency);
    });
  });

  it("ensures there are no duplicate route paths", () => {
    const routes = getAllRoutes();
    const paths = routes.map((r) => r.path);
    const uniquePaths = new Set(paths);
    expect(uniquePaths.size).toBe(paths.length);
  });

  it("verifies sitemap output contains correct base URL", () => {
    const generated = sitemap();
    const baseUrl = siteConfig.url.replace(/\/$/, "");

    expect(generated.length).toBe(staticRoutes.length);
    generated.forEach((entry) => {
      expect(entry.url.startsWith(baseUrl)).toBe(true);
      expect(entry.lastModified).toBeDefined();
    });
  });
});

