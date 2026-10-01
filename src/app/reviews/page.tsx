import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsPageContent from "./ReviewsPageContent";

const pageUrl = "https://www.estimescafe.com/reviews/";
const previewImage =
  "https://www.estimescafe.com/assets/signature-weekend-brunch-specialty-pancakes-colonia-nj.jpg";

export const metadata: Metadata = {
  title: "Guest Reviews & Local Press | Estime's Café Colonia NJ",
  description:
    "Read current guest reviews on Google and explore independent coverage of Estime's Café, Chef Duke Estime, and the café's Haitian-inspired food in Colonia, NJ.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Guest Reviews & Local Press | Estime's Café Colonia NJ",
    description:
      "Find current guest feedback and independent coverage of Estime's Café in Colonia, NJ.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Estime's Café brunch dishes in Colonia, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guest Reviews & Local Press | Estime's Café Colonia NJ",
    description:
      "Find current guest feedback and independent coverage of Estime's Café in Colonia, NJ.",
    images: [previewImage],
  },
};

export default function ReviewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Guest Reviews & Local Press | Estime's Café Colonia NJ",
    isPartOf: { "@id": "https://www.estimescafe.com/#website" },
    about: { "@id": "https://www.estimescafe.com/#restaurant" },
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
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
