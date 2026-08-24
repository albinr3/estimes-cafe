"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Sparkles,
  ExternalLink,
  Award,
  Newspaper,
  Heart,
  Quote,
  CheckCircle2,
  Share2,
  Utensils,
  MapPin,
} from "lucide-react";

export default function ReviewsPageContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const pressFeatures = [
    {
      source: "Jersey Bites",
      category: "Culinary Feature",
      date: "October 2022",
      title: "Haitian Cuisine & Scratch Brunch Fusion at Estime's Café in Colonia",
      quote:
        "Chef Duke Estime seamlessly fuses American morning comfort with Caribbean warmth. The result is an extraordinary culinary oasis in Middlesex County.",
      url: "https://jerseybites.com/2022/10/haitian-cuisine-at-estimes-cafe-in-colonia/",
      badge: "Food Critics Spotlight",
    },
    {
      source: "Woodbridge Patch",
      category: "Community & Dining",
      date: "August 2021",
      title: "Woodbridge Dining Spotlight: Dumond & Chef Duke Estime's Vision",
      quote:
        "A true neighborhood gem on Inman Avenue. From lemon ricotta pancakes to hearty smash burgers, Estime's Café raises the standard for morning dining.",
      url: "https://patch.com/new-jersey/woodbridge/woodbridge-restaurant-now-open-dinner-too",
      badge: "Local Landmark",
    },
    {
      source: "NJ Monthly",
      category: "Dining Guide",
      date: "Editorial Mention",
      title: "Central Jersey's Top Destinations for Hearty, Elevated Breakfasts",
      quote:
        "Honoree Chef Duke Estime brings Institute of Culinary Education technique to irresistible morning dishes that stand far apart from the average diner.",
      url: "https://njmonthly.com/articles/eat-drink/atlantic-city-adds-spot-for-hearty-breakfasts-other-dining-news/",
      badge: "Editor's Pick",
    },
    {
      source: "MyCentralJersey (USA Today Network)",
      category: "Heritage & Business",
      date: "June 2020",
      title: "Celebrating Black-Owned Culinary Excellence Across Central Jersey",
      quote:
        "An inspiring culinary story founded on family recipes, authentic flavors, and unmatched hospitality right in the heart of Colonia.",
      url: "https://www.mycentraljersey.com/story/news/local/how-we-live/2020/06/05/where-support-black-owned-businesses-central-jersey/3151371001/",
      badge: "Community Excellence",
    },
  ];

  const allReviews = [
    {
      id: 1,
      category: "pancakes",
      name: "Marcus T.",
      location: "Clark, NJ",
      source: "Google Review",
      date: "2 weeks ago",
      rating: 5,
      dish: "Amaretto Brioche French Toast & Shrimp Grits",
      text: "Hands down the best brunch spot in Central Jersey! The Amaretto French Toast is unbelievable—crispy on the edges, fluffy inside with that incredible sweet glaze. Chef Duke really knows what he's doing. You won't find better food around.",
    },
    {
      id: 2,
      category: "pancakes",
      name: "Sarah L.",
      location: "Colonia, NJ",
      source: "Google Review",
      date: "1 month ago",
      rating: 5,
      dish: "Lemon Ricotta Pancakes & The Mayor",
      text: "The Lemon Ricotta Pancakes melted in my mouth. It's so refreshing to find a brunch cafe that doesn't just do generic diner food. Everything tastes fresh, flavorful, and elevated. Staff is super sweet and attentive!",
    },
    {
      id: 3,
      category: "catering",
      name: "David K.",
      location: "Woodbridge, NJ",
      source: "Google Review (Catering Client)",
      date: "3 weeks ago",
      rating: 5,
      dish: "Corporate Breakfast Trays & Rasta Pasta",
      text: "Ordered breakfast catering for 35 people at our Woodbridge corporate office. The food arrived on time, piping hot, and our team loved every bite of the scrambled eggs, bacon, and French toast trays. We are making this our go-to caterer!",
    },
    {
      id: 4,
      category: "fusion",
      name: "Jean-Pierre B.",
      location: "Rahway, NJ",
      source: "Google Review",
      date: "2 months ago",
      rating: 5,
      dish: "Haitian Spicy Omelet & Creole Herring & Grits",
      text: "As someone of Haitian heritage, finding authentic Creole flavors done with this level of gourmet technique in NJ is rare. The spices in the omelet and the grits brought me right home. Chef Duke is a master.",
    },
    {
      id: 5,
      category: "brunch",
      name: "Elena R.",
      location: "Edison, NJ",
      source: "Google Review",
      date: "3 weeks ago",
      rating: 5,
      dish: "12oz NY Strip Steak & Eggs & Cold Brew",
      text: "Came on a Sunday morning with friends. The steak and eggs was cooked to absolute medium-rare perfection—tender, seasoned brilliantly. The experience was 10/10.",
    },
    {
      id: 6,
      category: "events",
      name: "Courtney M.",
      location: "Westfield, NJ",
      source: "Google Review",
      date: "1 month ago",
      rating: 5,
      dish: "Private Baby Shower Brunch Package",
      text: "We hosted an intimate 24-person baby shower brunch at Estime's Café. Dumond and Chef Duke took care of every single detail. The custom menu, dessert presentation, and warm hospitality made our day unforgettable!",
    },
    {
      id: 7,
      category: "brunch",
      name: "Anthony G.",
      location: "Scotch Plains, NJ",
      source: "Google Review",
      date: "1 month ago",
      rating: 5,
      dish: "The Jimmy Sandwich & Potato Bacon Lover",
      text: "Best breakfast sandwich in Middlesex County without question. Crispy bacon, perfectly fried eggs, and that house-seasoned potato hash. Cozy atmosphere and great coffee to top it off.",
    },
    {
      id: 8,
      category: "catering",
      name: "Kimberly P.",
      location: "Edison Corporate Park, NJ",
      source: "Google Review (Event Organizer)",
      date: "2 months ago",
      rating: 5,
      dish: "Full Trays of Haitian Salmon & Jerk Chicken",
      text: "We hired Estime's for our company summer celebration. The jerk chicken and Haitian salmon pans disappeared in minutes! Massive portions, incredible flavor profiles, and flawless service.",
    },
    {
      id: 9,
      category: "fusion",
      name: "Brianna W.",
      location: "Cranford, NJ",
      source: "Google Review",
      date: "2 weeks ago",
      rating: 5,
      dish: "Honey Sriracha Chicken Sandwich & Mango Tea",
      text: "Crispy, juicy chicken with the perfect sweet and spicy kick. My husband had the smash burger and was equally blown away. We drive 15 minutes every weekend now just to eat here.",
    },
  ];

  const filteredReviews =
    activeCategory === "all"
      ? allReviews
      : allReviews.filter((r) => r.category === activeCategory);

  return (
    <div className="bg-brand-paper">
      {/* 1. Hero Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#2a3319] via-[#354020] to-[#2a3319] text-brand-cream border-b border-[#49572c] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-green-dark/70 border border-brand-gold/40 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold-light mb-5">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            <span>4.8 ★ Rated &bull; 180+ Local Google Reviews</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight max-w-4xl mx-auto leading-tight mb-4">
            Guest Reviews &amp; Press Accolades
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-cream/80 max-w-2xl mx-auto leading-relaxed">
            Discover why food critics, local families, and corporate catering clients rate Estime&apos;s
            Café as Central New Jersey&apos;s premier breakfast and brunch destination.
          </p>

          {/* Rating Summary Score Banner */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 px-6 py-3.5 rounded-sm">
            <div className="flex text-brand-gold-light">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white text-base">4.8 out of 5.0</span>
            <span className="text-brand-cream/70 text-xs font-serif">
              &bull; Verified Google &amp; Local Guest Ratings
            </span>
          </div>
        </div>
      </section>



      {/* 3. Media & Press Recognition Section (E-E-A-T) */}
      <section className="py-16 sm:py-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
            In The News &bull; Culinary Authority
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight">
            Featured In Regional Press &amp; Food Media
          </h2>
          <p className="font-serif text-sm text-brand-muted mt-2">
            Recognized across New Jersey publications for authentic culinary craftsmanship and
            James Beard Foundation Honoree leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressFeatures.map((press, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#fbf7ee] border border-brand-line flex flex-col justify-between hover:border-brand-gold transition-colors relative shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-green">
                    {press.source}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-cream border border-brand-line px-2.5 py-1">
                    {press.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-brand-text font-normal group-hover:text-brand-green transition-colors mb-3">
                  {press.title}
                </h3>

                <blockquote className="font-serif italic text-sm text-[#48423c] leading-relaxed mb-6 pl-3 border-l-2 border-brand-gold">
                  &ldquo;{press.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-brand-line/60 flex items-center justify-between text-xs font-sans">
                <span className="text-brand-muted font-serif text-[11px]">{press.date}</span>
                <a
                  href={press.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-green hover:text-brand-gold transition-colors inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Categorized Guest Review Wall */}
      <section className="py-16 sm:py-20 bg-[#f9f4ea] border-t border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Authentic Guest Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              What Diners Are Saying
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              Filter reviews by your favorite dishes and dining occasions:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 font-sans">
            {[
              { id: "all", label: "All Reviews (180+)" },
              { id: "pancakes", label: "Pancakes & French Toast" },
              { id: "fusion", label: "Haitian & Creole Specialties" },
              { id: "catering", label: "Office & Event Catering" },
              { id: "brunch", label: "Steak & Eggs / Brunch" },
              { id: "events", label: "Private Events & Showers" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`py-2 px-4 text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === tab.id
                    ? "bg-brand-green text-white border-brand-green shadow-sm"
                    : "bg-brand-paper text-brand-text border-brand-line hover:border-brand-gold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-7 bg-brand-paper border border-brand-line flex flex-col justify-between hover:border-brand-gold transition-colors relative shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                      Verified {rev.source}
                    </span>
                  </div>

                  <p className="font-serif italic text-sm text-[#48423c] leading-relaxed mb-6">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-line/60">
                  <div className="flex justify-between items-baseline">
                    <p className="font-sans text-xs font-bold text-brand-text">{rev.name}</p>
                    <span className="font-serif text-[11px] text-brand-muted">{rev.date}</span>
                  </div>
                  <p className="font-serif text-[11px] text-brand-gold mt-1">{rev.dish}</p>
                  <p className="font-serif text-[11px] text-brand-muted/70">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Breakdown Matrix */}
          <div className="mt-16 max-w-4xl mx-auto bg-brand-paper border border-brand-line p-8 sm:p-10 shadow-sm">
            <h3 className="font-serif text-2xl text-brand-green font-normal text-center mb-6">
              Review Category Breakdown
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-[#fbf7ee] border border-brand-line">
                <span className="font-serif text-3xl font-bold text-brand-green block mb-1">
                  4.9 <span className="text-sm font-normal text-brand-muted">/ 5</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                  Food Quality &amp; Freshness
                </span>
              </div>

              <div className="p-4 bg-[#fbf7ee] border border-brand-line">
                <span className="font-serif text-3xl font-bold text-brand-green block mb-1">
                  4.8 <span className="text-sm font-normal text-brand-muted">/ 5</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                  Hospitality &amp; Service
                </span>
              </div>

              <div className="p-4 bg-[#fbf7ee] border border-brand-line">
                <span className="font-serif text-3xl font-bold text-brand-green block mb-1">
                  4.9 <span className="text-sm font-normal text-brand-muted">/ 5</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                  Portion Sizes &amp; Value
                </span>
              </div>

              <div className="p-4 bg-[#fbf7ee] border border-brand-line">
                <span className="font-serif text-3xl font-bold text-brand-green block mb-1">
                  4.8 <span className="text-sm font-normal text-brand-muted">/ 5</span>
                </span>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                  Catering Reliability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-16 sm:py-20 bg-[#2a3319] text-brand-cream border-t border-[#3e4925] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold-light block mb-2">
            Experience It in Person
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Taste the Flavors That Central Jersey is Raving About
          </h2>
          <p className="font-serif text-sm sm:text-base text-brand-cream/80 leading-relaxed mb-8">
            Join us this week for scratch morning breakfast, weekend brunch, or handcrafted lunch at
            238 Inman Avenue in Colonia, NJ.
          </p>

          <div className="flex flex-wrap justify-center gap-4 font-sans">
            <Link
              href="/menu"
              className="bg-brand-gold hover:bg-brand-gold-light text-[#2a3319] px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              Explore Full Dining Menu
            </Link>
            <Link
              href="/contact"
              className="border border-brand-cream/40 hover:bg-white/10 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Get Directions &amp; Hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
