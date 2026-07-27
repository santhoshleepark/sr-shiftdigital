import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

const BASE_URL = "https://srshiftdigital.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/services",
  "/services/google-ads",
  "/services/meta-ads",
  "/services/seo",
  "/services/website-development",
  "/services/ai-automation",
  "/case-studies",
  "/portfolio",
  "/industries",
  "/pricing",
  "/blog",
  "/resources",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}