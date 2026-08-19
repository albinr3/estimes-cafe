import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderOnlineContent from "./OrderOnlineContent";

export const metadata: Metadata = {
  title: "Order Online — Delivery & Takeout | Estime's Café Colonia NJ",
  description:
    "Order online from Estime's Café in Colonia, NJ. Fast breakfast, brunch & lunch delivery via DoorDash, Uber Eats, and Grubhub. Or call (732) 669-7581 for direct pickup.",
  keywords: [
    "order online estimes cafe",
    "estimes cafe delivery",
    "doordash estimes cafe",
    "uber eats estimes cafe colonia nj",
    "grubhub estimes cafe",
    "breakfast delivery colonia nj",
    "brunch delivery woodbridge nj",
    "lunch takeout clark nj",
    "rasta pasta delivery nj",
    "brioche french toast pickup",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/order-online",
  },
  openGraph: {
    title: "Order Online — Delivery & Takeout | Estime's Café Colonia NJ",
    description:
      "Craving chef-crafted breakfast, brunch or lunch? Order online now from Estime's Café via DoorDash, Uber Eats, and Grubhub, or call for direct pickup in Colonia, NJ.",
    url: "https://www.estimescafe.com/order-online",
    type: "website",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Order Online from Estime's Cafe in Colonia NJ",
      },
    ],
  },
};

export default function OrderOnlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Estime's Café",
    image: "https://www.estimescafe.com/assets/hero.jpg",
    url: "https://www.estimescafe.com/order-online",
    telephone: "+1-732-669-7581",
    priceRange: "$$",
    servesCuisine: ["American", "Caribbean", "Brunch", "Breakfast", "Haitian Fusion"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "238 Inman Avenue",
      addressLocality: "Colonia",
      addressRegion: "NJ",
      postalCode: "07067",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.59868,
      longitude: -74.32115,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    potentialAction: [
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.doordash.com/store/estimes-cafe-woodbridge-township-2835972/",
          inLanguage: "en-US",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.ubereats.com/store/estimes-cafe/fMKdXenYXIOw8mZSI5FPuQ",
          inLanguage: "en-US",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform",
          ],
        },
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "http://menus.fyi/6353128",
          inLanguage: "en-US",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        <OrderOnlineContent />
      </main>
      <Footer />
    </div>
  );
}
