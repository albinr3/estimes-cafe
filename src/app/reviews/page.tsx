import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsPageContent from "./ReviewsPageContent";

export const metadata: Metadata = {
  title: "Guest Reviews & Press Features | Rated 4.8★ in Colonia NJ | Estime's Café",
  description:
    "Read 180+ verified 4.8★ Google reviews, guest testimonials & media press features for Estime's Café in Colonia, NJ. Discover why diners love Chef Duke's Lemon Ricotta Pancakes, Amaretto French Toast & Haitian fusion.",
  keywords: [
    "estimes cafe reviews",
    "best brunch reviews colonia nj",
    "rated breakfast restaurant woodbridge nj",
    "lemon ricotta pancakes reviews nj",
    "chef duke estime reviews",
    "estimes cafe google reviews",
    "jersey bites estimes cafe",
    "woodbridge patch estimes cafe",
    "central jersey brunch ratings",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/reviews",
  },
  openGraph: {
    title: "Guest Reviews & Press Features | Rated 4.8★ | Estime's Café Colonia NJ",
    description:
      "Explore 180+ 5-star Google ratings and press features in Jersey Bites & NJ Monthly celebrating Chef Duke Estime's handcrafted breakfast and brunch in Colonia, NJ.",
    url: "https://www.estimescafe.com/reviews",
    type: "website",
    images: [
      {
        url: "https://www.estimescafe.com/assets/signature.jpg",
        width: 1200,
        height: 630,
        alt: "Estime's Café Signature Dishes & Guest Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Reviews & Press Accolades | Estime's Café Colonia NJ",
    description:
      "Read real customer reviews and press accolades for Estime's Café in Colonia, NJ. Rated 4.8/5.0 with 180+ reviews.",
    images: ["https://www.estimescafe.com/assets/signature.jpg"],
  },
};

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.estimescafe.com/reviews#webpage",
        "url": "https://www.estimescafe.com/reviews",
        "name": "Guest Reviews & Press Features | Estime's Café Colonia NJ",
        "description":
          "Curated guest reviews, Google ratings, and media mentions for Estime's Café in Colonia, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.estimescafe.com/#website",
          "url": "https://www.estimescafe.com",
          "name": "Estime's Café"
        }
      },
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
        "@id": "https://www.estimescafe.com/#restaurant",
        "name": "Estime's Café",
        "url": "https://www.estimescafe.com",
        "telephone": "+1-732-669-7581",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "238 Inman Avenue",
          "addressLocality": "Colonia",
          "addressRegion": "NJ",
          "postalCode": "07067",
          "addressCountry": "US"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "180",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Marcus T."
            },
            "datePublished": "2026-06-12",
            "reviewBody":
              "Hands down the best brunch spot in Central Jersey! The Amaretto French Toast is unbelievable—crispy on the edges, fluffy inside with that incredible sweet sauce. Chef Duke really knows what he's doing.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah L."
            },
            "datePublished": "2026-05-28",
            "reviewBody":
              "The Lemon Ricotta Pancakes melted in my mouth. It's so refreshing to find a brunch cafe that doesn't just do generic diner food. Everything tastes fresh, flavorful, and elevated.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "David K."
            },
            "datePublished": "2026-07-04",
            "reviewBody":
              "Ordered breakfast catering for 35 people at our Woodbridge office. The food arrived on time, piping hot, and our team loved every bite of the eggs, bacon, and French toast trays.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        <ReviewsPageContent />
      </main>
      <Footer />
    </div>
  );
}
