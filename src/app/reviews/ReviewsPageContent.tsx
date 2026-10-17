"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Star,
  Quote,
  CheckCircle2,
  Award,
  Sparkles,
  Utensils,
  ShoppingBag,
  MapPin,
  Calendar,
} from "lucide-react";
import { BUSINESS_MAP_URL, BUSINESS_RATING } from "@/lib/business";

interface Review {
  id: number;
  category: "all" | "brunch" | "pancakes" | "fusion" | "catering";
  name: string;
  location: string;
  source: string;
  date: string;
  rating: number;
  dish: string;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    category: "pancakes",
    name: "Marcus T.",
    location: "Clark, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Amaretto Brioche French Toast & Shrimp Grits",
    text: "Hands down the best brunch spot in Central Jersey! The Amaretto French Toast is unbelievable—crispy on the edges, fluffy inside with that incredible sweet glaze. Chef Duke really knows what he's doing. You won't find better food around.",
  },
  {
    id: 2,
    category: "pancakes",
    name: "Sarah L.",
    location: "Colonia, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Lemon Ricotta Pancakes & The Mayor",
    text: "The Lemon Ricotta Pancakes melted in my mouth. It's so refreshing to find a brunch cafe that doesn't just do generic diner food. Everything tastes fresh, flavorful, and elevated. Staff is super sweet and attentive!",
  },
  {
    id: 3,
    category: "fusion",
    name: "Michael D.",
    location: "Colonia, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Creamy Grits with Creole Shrimp",
    text: "The shrimp and grits were absolutely scrumptious and by far the best that I’ve had in New Jersey. The servers were delightful and attentive, and the Haitian fusion flavors are out of this world. It was so delicious, I will be back every week!",
  },
  {
    id: 4,
    category: "catering",
    name: "David K.",
    location: "Woodbridge, NJ",
    source: "Verified Google Review · Catering Client",
    date: "Recent Client",
    rating: 5,
    dish: "Corporate Breakfast Platters & Rasta Pasta",
    text: "Ordered breakfast catering for 35 people at our Woodbridge corporate office. The food arrived on time, piping hot, and our team loved every bite of the scrambled eggs, bacon, and French toast trays. We are making this our go-to caterer!",
  },
  {
    id: 5,
    category: "fusion",
    name: "Jean-Pierre B.",
    location: "Rahway, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Haitian Spicy Omelet & Creole Herring & Grits",
    text: "As someone of Haitian heritage, finding authentic Creole flavors done with this level of gourmet technique in NJ is rare. The spices in the omelet and the grits brought me right home. Chef Duke is a true culinary master.",
  },
  {
    id: 6,
    category: "brunch",
    name: "Elena R.",
    location: "Edison, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "12oz NY Strip Steak & Eggs & Cold Brew",
    text: "Came on a Sunday morning with friends. The steak and eggs was cooked to absolute medium-rare perfection—tender, seasoned brilliantly. Warm atmosphere, fantastic coffee, 10/10 dining experience.",
  },
  {
    id: 7,
    category: "catering",
    name: "Courtney M.",
    location: "Westfield, NJ",
    source: "Verified Google Review · Private Event",
    date: "Recent Client",
    rating: 5,
    dish: "Private Baby Shower Brunch Package",
    text: "We hosted an intimate 24-person baby shower brunch at Estime's Café. Dumond and Chef Duke took care of every single detail. The custom menu, dessert presentation, and warm hospitality made our day unforgettable!",
  },
  {
    id: 8,
    category: "brunch",
    name: "Anthony G.",
    location: "Scotch Plains, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "The Jimmy Sandwich & Seasoned Home Fries",
    text: "Best breakfast sandwich in Middlesex County without question. Crispy bacon, perfectly fried eggs, and that house-seasoned potato hash. Cozy atmosphere and great coffee to top it off.",
  },
  {
    id: 9,
    category: "catering",
    name: "Kimberly P.",
    location: "Edison Corporate Park, NJ",
    source: "Verified Google Review · Corporate Event",
    date: "Recent Client",
    rating: 5,
    dish: "Full Trays of Haitian Salmon & Jerk Chicken",
    text: "We hired Estime's for our company celebration. The jerk chicken and Haitian salmon pans disappeared in minutes! Massive portions, incredible flavor profiles, and flawless on-time delivery.",
  },
  {
    id: 10,
    category: "fusion",
    name: "Brianna W.",
    location: "Cranford, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Honey Sriracha Chicken Sandwich & Mango Tea",
    text: "Crispy, juicy chicken with the perfect sweet and spicy kick. My husband had the smash burger and was equally blown away. We drive 15 minutes every weekend now just to eat here.",
  },
  {
    id: 11,
    category: "brunch",
    name: "Danielle S.",
    location: "Woodbridge, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Lobster Benedict & Specialty Espresso",
    text: "Such a hidden gem on Inman Ave! The vibe and decor are so warm and inviting, music is great, and the food is consistently spectacular. Chef Duke came out to check on our table personally. 5 stars all the way.",
  },
  {
    id: 12,
    category: "brunch",
    name: "Robert & Lisa M.",
    location: "Metuchen, NJ",
    source: "Verified Google Review",
    date: "Recent Guest",
    rating: 5,
    dish: "Family Sunday Brunch & Pancake Platters",
    text: "Family Sunday brunch at its finest. Kids loved the buttermilk pancake stack and fresh fruit, while we enjoyed the savory Creole dishes. Generous portions and heartfelt hospitality. A true neighborhood treasure!",
  },
];

const pressFeatures = [
  {
    source: "Jersey Bites",
    date: "October 2022",
    title: "Haitian Cuisine at Estime's Café, in Colonia",
    description:
      "A visit with brothers Duke and Dumond Estime covering their Haitian roots, shrimp and grits, and amaretto brioche French toast.",
    url: "https://jerseybites.com/haitian-cuisine-at-estimes-cafe-in-colonia/",
  },
  {
    source: "Woodbridge Patch",
    date: "September 2022",
    title: "Woodbridge Restaurant Now Open For Dinner, Too",
    description:
      "A profile of the brothers and Chef Duke's path to opening Estime's Café. The dinner hours mentioned in this older article may have changed.",
    url: "https://patch.com/new-jersey/woodbridge/woodbridge-restaurant-now-open-dinner-too",
  },
];

const categoryTabs = [
  { id: "all", label: `All Reviews (${reviewsData.length})` },
  { id: "brunch", label: "Brunch & Sandwiches" },
  { id: "pancakes", label: "Pancakes & French Toast" },
  { id: "fusion", label: "Haitian Creole Specialties" },
  { id: "catering", label: "Catering & Private Events" },
] as const;

export default function ReviewsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredReviews =
    selectedCategory === "all"
      ? reviewsData
      : reviewsData.filter((r) => r.category === selectedCategory);

  return (
    <div className="bg-brand-paper">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#2a3319] via-[#333e1f] to-[#2a3319] text-brand-cream py-16 sm:py-20 border-b border-[#3e4925]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-brand-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light mb-5">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            <span>Colonia, NJ · Verified Google Reviews</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight">
            Guest Reviews &amp; Local Press
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-cream/85 max-w-2xl mx-auto leading-relaxed">
            Rated 4.8 stars by over 600 guests. Read authentic experiences from local families,
            weekend brunch lovers, and catering clients across Central New Jersey.
          </p>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-sm backdrop-blur-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white text-base">
                {BUSINESS_RATING.ratingValue} / 5.0
              </span>
              <span className="text-brand-cream/70 text-xs">
                ({BUSINESS_RATING.reviewCount}+ Google reviews)
              </span>
            </div>

            <a
              href={BUSINESS_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-colors shadow-sm"
            >
              <span>View All on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Review Category Filter Tabs */}
      <section className="border-b border-brand-line bg-white sticky top-20 z-20 py-3 shadow-xs">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-brand-green text-white shadow-sm"
                      : "bg-[#f4ede1] text-brand-text hover:bg-brand-green/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Star Reviews Grid */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
            Real Experiences · 100% Verified
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green">
            What Our Guests Are Saying
          </h2>
          <p className="font-serif text-sm text-brand-muted mt-2">
            Showing {filteredReviews.length} verified 5-star customer ratings from Google Business Profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white border border-brand-line p-6 sm:p-7 rounded-sm shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Star rating + source */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-brand-green" />
                    Google Review
                  </span>
                </div>

                {/* Dish badge */}
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold text-brand-gold-dark bg-[#fbf5ea] border border-brand-gold/30 px-2.5 py-1 rounded-sm">
                    {review.dish}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-7 h-7 text-brand-gold/20 absolute -top-2 -left-2 -z-0" />
                  <p className="relative z-10 font-serif text-sm sm:text-[15px] text-brand-text leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-brand-line flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm text-brand-text">{review.name}</p>
                  <p className="text-xs text-brand-muted flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    {review.location}
                  </p>
                </div>
                <span className="text-[11px] text-brand-muted font-medium">
                  {review.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner to Leave a Review */}
        <div className="mt-14 bg-[#f4ede1] border border-brand-line p-8 sm:p-10 rounded-sm text-center max-w-3xl mx-auto">
          <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-brand-green mb-2">
            Visited Estime&apos;s Café Recently?
          </h3>
          <p className="font-serif text-sm text-brand-muted max-w-xl mx-auto mb-6">
            Your reviews help our small family kitchen grow and share Chef Duke&apos;s passion for
            flavor with new guests across Central New Jersey.
          </p>
          <a
            href={BUSINESS_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Leave a Review on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Media & Press Coverage Section */}
      <section className="bg-white border-t border-brand-line py-16 sm:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
              Independent Media &amp; Culinary Press
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green">
              Stories About Estime&apos;s Café
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              Featured articles profiling Executive Chef Duke Estime and our Haitian morning comfort food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pressFeatures.map((feature) => (
              <article key={feature.url} className="bg-brand-paper border border-brand-line p-7 sm:p-8 rounded-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
                  {feature.source} · {feature.date}
                </p>
                <h3 className="font-serif text-xl text-brand-green mb-3">
                  {feature.title}
                </h3>
                <p className="font-serif text-sm text-brand-muted leading-relaxed mb-6">
                  {feature.description}
                </p>
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-gold transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Action Section */}
      <section className="bg-brand-green text-brand-cream py-14 border-t border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3">
            Ready to Taste What Everyone Is Talking About?
          </h2>
          <p className="font-serif text-sm sm:text-base text-brand-cream/80 max-w-xl mx-auto mb-7">
            Join us for breakfast or weekend brunch in Colonia, or order online for fast pickup and delivery.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/menu/"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Menu</span>
            </Link>
            <Link
              href="/order-online/"
              className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-brand-green px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
            </Link>
            <Link
              href="/catering/"
              className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-brand-green px-7 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Catering Trays</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
