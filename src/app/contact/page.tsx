import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageContent from "./ContactPageContent";
import { BUSINESS_NAP_NAME } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us, Hours & Directions | Estime's Café Colonia NJ",
  description:
    "Get in touch with Estime's Café in Colonia, NJ. Contact our team for general inquiries, large party table accommodations, catering quotes, hours & directions to 238 Inman Ave.",
  keywords: [
    "contact estimes cafe",
    "estimes cafe phone number",
    "estimes cafe colonia nj address",
    "brunch reservations colonia nj",
    "breakfast catering inquiries woodbridge nj",
    "238 inman ave colonia nj",
    "hours estimes cafe",
    "directions to estimes cafe",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/contact",
  },
  openGraph: {
    title: "Contact Us, Hours & Directions | Estime's Café Colonia NJ",
    description:
      "Connect with Estime's Café at 238 Inman Ave, Colonia NJ. Call (732) 669-7581 or send us a message for table inquiries, catering quotes & events.",
    url: "https://www.estimescafe.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.estimescafe.com/assets/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Estime's Café Storefront - 238 Inman Ave, Colonia NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Directions | Estime's Café Colonia NJ",
    description:
      "Visit us at 238 Inman Ave, Colonia NJ or call (732) 669-7581 for orders, catering, and event inquiries.",
    images: ["https://www.estimescafe.com/assets/exterior.jpg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.estimescafe.com/contact#webpage",
        "url": "https://www.estimescafe.com/contact",
        "name": "Contact Us, Hours & Directions | Estime's Café Colonia NJ",
        "description":
          "Contact information, operating hours, directions, and inquiry form for Estime's Café in Colonia, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.estimescafe.com/#website",
          "url": "https://www.estimescafe.com",
          "name": BUSINESS_NAP_NAME
        }
      },
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
        "@id": "https://www.estimescafe.com/#restaurant",
        "name": BUSINESS_NAP_NAME,
        "telephone": "+1-732-669-7581",
        "email": "Estimecafe1@gmail.com",
        "url": "https://www.estimescafe.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "238 Inman Avenue",
          "addressLocality": "Colonia",
          "addressRegion": "NJ",
          "postalCode": "07067",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.6003432,
          "longitude": -74.3126004
        },
        "hasMap": "https://www.google.com/maps/place/Estime's+Cafe/@40.6003432,-74.3151753,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3b78d2780b6fd:0xfa97f1d15128900a!8m2!3d40.6003432!4d-74.3126004!16s%2Fg%2F11fb18d03y",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "15:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "08:00",
            "closes": "16:00"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.estimescafe.com/contact#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you accept reservations for weekend brunch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For regular daily dining and weekend brunch, seating is walk-in only (first-come, first-served) to keep wait times as short as possible. For large groups of 6 or more, please contact us ahead of time so we can prepare to accommodate your party comfortably."
            }
          },
          {
            "@type": "Question",
            "name": "Is there parking available at Estime's Café?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer complimentary on-site parking for our guests in front of and alongside the cafe on Inman Avenue in Colonia, NJ."
            }
          },
          {
            "@type": "Question",
            "name": "How do I order catering or inquire about private dining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can fill out our contact or catering inquiry form online, or call us directly at (732) 669-7581. We offer breakfast platters, hot lunch trays, and exclusive private dinner packages."
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
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  );
}
