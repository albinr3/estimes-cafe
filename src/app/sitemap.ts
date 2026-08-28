import type { MetadataRoute } from "next";

const baseUrl = "https://www.estimescafe.com";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return routes.map((route) => ({ url: `${baseUrl}${route}` }));
}
