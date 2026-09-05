import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPageContent from "./MenuPageContent";

export const metadata: Metadata = {
  title: "Full Breakfast, Brunch & Lunch Menu | Estime's Café Colonia NJ",
  description:
    "Explore the current breakfast, brunch, and lunch menu at Estime's Café in Colonia, NJ, including pancakes, Benedicts, bowls, sandwiches, burgers, salads, sides, and drinks.",
  keywords: [
    "estimes cafe menu",
    "breakfast menu colonia nj",
    "brunch menu woodbridge nj",
    "lemon ricotta pancakes nj",
    "amaretto brioche french toast",
    "lobster benedict nj",
    "surf and turf breakfast",
    "truffle burger colonia nj",
    "shrimp and grits colonia nj",
    "steak and eggs woodbridge nj",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/menu",
  },
  openGraph: {
    title: "Full Breakfast, Brunch & Lunch Menu | Estime's Café Colonia NJ",
    description:
      "Explore the current breakfast, brunch, and lunch menu at Estime's Café in Colonia, NJ.",
    url: "https://www.estimescafe.com/menu",
    type: "website",
    images: [{ url: "/assets/menu-social-preview.jpg", width: 1200, height: 630, alt: "Estime's Café breakfast, brunch, and lunch menu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Breakfast, Brunch & Lunch Menu | Estime's Café Colonia NJ",
    description: "Explore the current breakfast, brunch, and lunch menu at Estime's Café in Colonia, NJ.",
    images: ["/assets/menu-social-preview.jpg"],
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
