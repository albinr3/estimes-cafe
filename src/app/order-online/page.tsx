import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrderOnlineContent from "./OrderOnlineContent";
import { BUSINESS_ADDRESS, BUSINESS_GEO, BUSINESS_NAP_NAME, BUSINESS_PHONE } from "@/lib/business";

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
        url: "/assets/order-online-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Order online from Estime's Café in Colonia, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Online — Delivery & Takeout | Estime's Café Colonia NJ",
    description: "Order online for delivery or takeout from Estime's Café in Colonia, NJ.",
    images: ["/assets/order-online-social-preview.jpg"],
  },
};

export default function OrderOnlinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.estimescafe.com/#restaurant",
    name: BUSINESS_NAP_NAME,
    image: "https://www.estimescafe.com/assets/order-online-social-preview.jpg",
    url: "https://www.estimescafe.com/order-online",
    telephone: BUSINESS_PHONE,
    priceRange: "$$",
    servesCuisine: ["American", "Caribbean", "Brunch", "Breakfast", "Haitian Fusion"],
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...BUSINESS_GEO,
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
