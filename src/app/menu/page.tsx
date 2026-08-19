import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPageContent from "./MenuPageContent";

export const metadata: Metadata = {
  title: "Full Breakfast, Brunch & Lunch Menu | Estime's Café Colonia NJ",
  description:
    "Explore the complete dining menu at Estime's Café in Colonia, NJ. Chef Duke's famous Lemon Ricotta Pancakes, Amaretto French Toast, artisan omelets, keto bowls, smash burgers & Haitian Creole specialties.",
  keywords: [
    "estimes cafe menu",
    "breakfast menu colonia nj",
    "brunch menu woodbridge nj",
    "lemon ricotta pancakes nj",
    "amaretto brioche french toast",
    "keto breakfast near me",
    "shrimp and grits colonia nj",
    "lunch specials inman ave",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/menu",
  },
  openGraph: {
    title: "Full Breakfast, Brunch & Lunch Menu | Estime's Café Colonia NJ",
    description:
      "Crafted by Executive Chef Duke Estime. Farm-fresh eggs, fluffy pancakes, artisan brioche french toast, smash burgers and creole specialties.",
    url: "https://www.estimescafe.com/menu",
    type: "website",
  },
};

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <Header />
      <main className="flex-grow">
        <MenuPageContent />
      </main>
      <Footer />
    </div>
  );
}
