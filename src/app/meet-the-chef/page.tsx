import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPageContent from "../about/AboutPageContent";

export const metadata: Metadata = {
  title: "Meet The Chef | Honoree Chef Duke Estime | Estime's Café Colonia NJ",
  description:
    "Meet James Beard House Awarded Executive Chef Duke Estime at Estime's Café in Colonia, NJ. Experience chef-driven breakfast, weekend brunch, and authentic Haitian-American fusion.",
  keywords: [
    "meet the chef",
    "honoree chef duke estime",
    "james beard house awarded executive chef duke estime",
    "chef duke estime",
    "dumond estime",
    "estimes cafe story",
    "haitian chef new jersey",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/about",
  },
  openGraph: {
    title: "Meet The Chef | Honoree Chef Duke Estime | Estime's Café",
    description:
      "James Beard House Awarded Executive Chef Duke Estime crafting breakfast and weekend brunch in Colonia, NJ.",
    url: "https://www.estimescafe.com/meet-the-chef",
    type: "website",
    images: [
      {
        url: "https://www.estimescafe.com/assets/chef-duke-estime-james-beard-honoree.jpg",
        width: 1024,
        height: 681,
        alt: "Executive Chef Duke Estime - Honoree & Co-Founder of Estime's Café in Colonia, NJ",
      },
    ],
  },
};

export default function MeetTheChefPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      <Header />
      <main className="flex-grow">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
