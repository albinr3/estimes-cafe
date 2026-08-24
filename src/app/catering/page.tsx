import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_NAP_NAME } from "@/lib/business";
import CateringPageContent from "./CateringPageContent";

export const metadata: Metadata = {
  title: "Catering Menu & Party Trays in Woodbridge, NJ | Estime's Café",
  description:
    "Order catering menu favorites, party trays and corporate lunch catering from Estime's Café in Colonia, Woodbridge Township. Half and full trays for offices, celebrations and events across Central NJ.",
  keywords: [
    "catering menu",
    "party trays",
    "party trays catering",
    "catering party trays",
    "office lunch catering",
    "corporate lunch catering",
    "catering woodbridge nj",
    "catering edison nj",
    "central nj catering",
    "breakfast catering",
    "brunch catering",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/catering",
  },
  openGraph: {
    title: "Catering Menu & Party Trays in Woodbridge, NJ | Estime's Café",
    description:
      "Chef-made party trays and corporate lunch catering for offices, celebrations and gatherings across Central NJ.",
    url: "https://www.estimescafe.com/catering",
    type: "website",
  },
};

export default function CateringPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.estimescafe.com/catering#webpage",
        "url": "https://www.estimescafe.com/catering",
        "name": "Catering Menu & Party Trays in Woodbridge, NJ | Estime's Café",
        "description": "Catering menu, party trays, and corporate lunch catering from Estime's Café in Colonia, Woodbridge Township.",
        "isPartOf": { "@id": "https://www.estimescafe.com/#website" },
        "about": { "@id": "https://www.estimescafe.com/catering#service" },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.estimescafe.com/catering#service",
        "name": "Estime's Café Catering Menu & Party Trays",
        "serviceType": "Party trays, office lunch catering, breakfast catering, and brunch catering",
        "url": "https://www.estimescafe.com/catering",
        "provider": {
          "@id": "https://www.estimescafe.com/#restaurant",
          "name": BUSINESS_NAP_NAME
        },
        "areaServed": [
          { "@type": "City", "name": "Colonia" },
          { "@type": "City", "name": "Woodbridge" },
          { "@type": "City", "name": "Edison" },
          { "@type": "AdministrativeArea", "name": "Central New Jersey" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Estime's Café Catering Menu",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Party Trays",
              "itemListElement": [
                { "@type": "Offer", "name": "Pasta and salad party trays", "url": "https://www.estimescafe.com/catering#pasta-salads" },
                { "@type": "Offer", "name": "Chicken and gourmet meat party trays", "url": "https://www.estimescafe.com/catering#chicken-meats" },
                { "@type": "Offer", "name": "Seafood and rice party trays", "url": "https://www.estimescafe.com/catering#seafood-rice" }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Breakfast and brunch catering",
              "itemListElement": [
                { "@type": "Offer", "name": "Breakfast platters", "url": "https://www.estimescafe.com/catering#breakfast-trays" },
                { "@type": "Offer", "name": "Weekend brunch catering packages", "url": "https://www.estimescafe.com/catering#brunch-packages" }
              ]
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="flex-grow">
        <CateringPageContent />
      </main>
      <Footer />
    </div>
  );
}
