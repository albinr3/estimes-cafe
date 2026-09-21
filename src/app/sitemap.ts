import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.estimescafe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/menu",
    "/catering",
    "/private-events",
    "/order-online",
    "/about",
    "/reviews",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}

