import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.nirmataai.example";

const TOP_LEVEL_ROUTES = [
  "/",
  "/about",
  "/services",
  "/ai-solutions",
  "/portfolio",
  "/blog",
  "/careers",
  "/contact",
  "/appointment",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return TOP_LEVEL_ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
