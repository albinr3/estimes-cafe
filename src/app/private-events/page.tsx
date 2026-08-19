import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateEventsContent from "./PrivateEventsContent";

export const metadata: Metadata = {
  title: "Private Events & Dinner Packages | Estime's Café Colonia NJ",
  description:
    "Host private brunch celebrations, baby showers, bridal showers & gourmet private dinner parties at Estime's Café in Colonia, NJ. Multi-course chef packages by Duke Estime, BYOB friendly.",
  keywords: [
    "private events colonia nj",
    "private brunch venue woodbridge nj",
    "baby shower venue central jersey",
    "bridal shower brunch nj",
    "private dinner packages nj",
    "intimate event space colonia",
    "byob private event venue nj",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/private-events",
  },
  openGraph: {
    title: "Private Events & Dinner Packages | Estime's Café Colonia NJ",
    description:
      "Intimate private event dining space & custom multi-course menus crafted by Executive Chef Duke Estime in Colonia, New Jersey.",
    url: "https://www.estimescafe.com/private-events",
    type: "website",
  },
};

export default function PrivateEventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <Header />
      <main className="flex-grow">
        <PrivateEventsContent />
      </main>
      <Footer />
    </div>
  );
}
