import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CateringPageContent from "./CateringPageContent";

export const metadata: Metadata = {
  title: "Corporate & Event Catering in Central NJ | Estime's Café Colonia",
  description:
    "Order corporate breakfast platters, office lunch catering & weekend brunch party trays in Middlesex & Union County, NJ. Half & full trays of Brioche French Toast, Rasta Pasta, Haitian Salmon & Jerk Chicken.",
  keywords: [
    "corporate catering nj",
    "breakfast catering near me",
    "lunch catering woodbridge nj",
    "party trays catering colonia nj",
    "brunch catering packages nj",
    "rasta pasta catering platters",
    "office breakfast trays central jersey",
    "haitian salmon catering",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/catering",
  },
  openGraph: {
    title: "Corporate & Event Catering in Central NJ | Estime's Café Colonia",
    description:
      "Premier breakfast, brunch & lunch catering for corporate offices, celebrations & family gatherings in Central Jersey.",
    url: "https://www.estimescafe.com/catering",
    type: "website",
  },
};

export default function CateringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <Header />
      <main className="flex-grow">
        <CateringPageContent />
      </main>
      <Footer />
    </div>
  );
}
