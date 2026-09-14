import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesBar from "@/components/FeaturesBar";
import CulinaryTrilogy from "@/components/CulinaryTrilogy";
import MenuShowcase from "@/components/MenuShowcase";
import CateringSpotlight from "@/components/CateringSpotlight";
import ChefStory from "@/components/ChefStory";
import Testimonials from "@/components/Testimonials";
import HomeFaq from "@/components/HomeFaq";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      {/* Top Header Navigation */}
      <Header />

      <main>
        {/* Hero Section with H1 SEO */}
        <Hero />

        {/* Value Proposition Features Bar */}
        <FeaturesBar />

        {/* Culinary Trilogy & Real-Time Schedule Status */}
        <CulinaryTrilogy />

        {/* Interactive Dining Menu Showcase */}
        <MenuShowcase />

        {/* Corporate & Event Catering Spotlight */}
        <CateringSpotlight />

        {/* Heritage, Founders & Chef Duke Story */}
        <ChefStory />

        {/* Social Proof & Customer Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions (SEO & AI Answer Engine Optimization) */}
        <HomeFaq />

        {/* Location, Hours & Google Maps Embed */}
        <LocationSection />
      </main>

      {/* Semantic Footer with NAP Data & Category Links */}
      <Footer />
    </div>
  );
}
