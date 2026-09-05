/**
 * Canonical public business identity used for local SEO and structured data.
 * Keep this in sync with the name shown on the storefront and major listings.
 */
export const BUSINESS_NAP_NAME = "Estime's Café - Breakfast, Brunch & Lunch";

export const BUSINESS_BRAND_NAME = "Estime's Café";

export const BUSINESS_ADDRESS = {
  streetAddress: "238 Inman Avenue",
  addressLocality: "Colonia",
  addressRegion: "NJ",
  postalCode: "07067",
  addressCountry: "US",
} as const;

export const BUSINESS_PHONE = "+1-732-669-7581";
export const BUSINESS_PHONE_LINK = "tel:7326697581";
export const BUSINESS_EMAIL = "Estimecafe1@gmail.com";

export const BUSINESS_GEO = {
  latitude: 40.60034991904395,
  longitude: -74.31259870657125,
} as const;

export const BUSINESS_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=40.60034991904395,-74.31259870657125";

export const BUSINESS_RATING = {
  ratingValue: "4.8",
  reviewCount: "180",
  bestRating: "5",
  worstRating: "1",
} as const;

export function createMailtoUrl(subject: string, lines: string[]) {
  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
