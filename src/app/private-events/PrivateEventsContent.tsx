"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_EMAIL, BUSINESS_NAP_NAME, createMailtoUrl } from "@/lib/business";
import {
  Sparkles,
  Users,
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Camera,
  Heart,
  ChevronRight,
  ShieldCheck,
  Utensils,
  Music,
} from "lucide-react";

interface DinnerPackage {
  tier: string;
  price: string;
  name: string;
  description: string;
  popular?: boolean;
  starters: string[];
  pasta?: string[];
  mains: string[];
  sides: string[];
  dessert: string[];
  beverages: string[];
}

const DINNER_PACKAGES: DinnerPackage[] = [
  {
    tier: "$80 / Person",
    price: "$80",
    name: "Classic Private Dinner Feast",
    description: "Multi-course dining with family-style appetizers, choice of gourmet entrées, sides, dessert, and beverages.",
    popular: false,
    starters: [
      "Shrimp & Chorizo with Garlic Herb Sauce (Family Style)",
      "Chef Duke's Signature Crispy Wings",
      "Penne Vodka Pasta Platter",
    ],
    mains: [
      "Crispy Boneless Fried Chicken Thighs",
      "Pan-Seared Fresh Atlantic Grilled Salmon",
    ],
    sides: [
      "Traditional Caribbean Rice & Peas",
      "Char-Grilled Seasonal Vegetables",
    ],
    dessert: [
      "New York Style Cheesecake OR Gourmet Almond Cake",
    ],
    beverages: [
      "Assorted Sodas, Fresh Brewed Coffee & Gourmet Teas",
    ],
  },
  {
    tier: "$90 / Person",
    price: "$90",
    name: "Signature Steak & Salmon Celebration",
    description: "Our most popular private dinner menu with prime NY Strip, handcrafted pasta, and Caribbean starters.",
    popular: true,
    starters: [
      "Chorizo Sausage & Jumbo Shrimp with Garlic Sauce",
      "Savory Caribbean Glazed Meatballs",
    ],
    pasta: [
      "Choice of Rigatoni OR Penne Alla Vodka",
    ],
    mains: [
      "Hand-Cut NY Strip Steak with Creole Chimichurri",
      "Pan-Seared Grilled Salmon with Island Seasoning",
    ],
    sides: [
      "Traditional Rice & Peas",
      "Char-Grilled Seasonal Market Veggies",
    ],
    dessert: [
      "Creamy Cheesecake OR Artisan Almond Cake",
    ],
    beverages: [
      "Assorted Sodas, Artisan Coffee & Herbal Teas",
    ],
  },
  {
    tier: "$105 / Person",
    price: "$105",
    name: "Executive Grand Tasting & Whole Snapper",
    description: "Three-course dinner with lollipop lamb chops, whole red snapper, and traditional Haitian desserts.",
    popular: false,
    starters: [
      "Crispy Tempura Battered Jumbo Shrimp",
      "Herb-Crusted Lollipop Lamb Chops",
      "Sweet Chili Glazed Chicken Lollipops",
    ],
    mains: [
      "Prime NY Strip Steak",
      "Chef Duke's Signature Whole Red Snapper",
    ],
    sides: [
      "Traditional Rice & Peas",
      "Char-Grilled Seasonal Veggies",
    ],
    dessert: [
      "Authentic Haitian Spiced Bread Pudding",
      "Traditional Crémas (Sweet Haitian Cream Dessert Drink)",
    ],
    beverages: [
      "Assorted Sodas, Espresso & Coffee, Herbal Teas",
    ],
  },
];

const VENUE_HIGHLIGHTS = [
  {
    icon: Camera,
    title: "Botanical Floral Photo Wall",
    desc: "Botanical greenery photo wall with dedicated lighting for photos and guest memories.",
  },
  {
    icon: Users,
    title: "Intimate Private Buyout",
    desc: "Host private parties for up to 35 guests with dedicated waitstaff and private dining room access.",
  },
  {
    icon: Utensils,
    title: "Chef Duke Custom Menus",
    desc: "Custom printed menus with your event title or honoree name, tailored to dietary requests and menu preferences.",
  },
  {
    icon: Music,
    title: "Sound & Ambient Lighting",
    desc: "Bluetooth audio for your own playlists and dimmable rustic ambient lighting.",
  },
  {
    icon: ShieldCheck,
    title: "Free On-Site Parking",
    desc: "Dedicated parking lot on Inman Avenue right outside the restaurant.",
  },
];

export default function PrivateEventsContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "Evening Dinner (5:00 PM - 9:00 PM)",
    guests: "25-35",
    eventType: "Birthday Celebration",
    packageChoice: "$90 Signature Dinner Package",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = createMailtoUrl("Private event inquiry", [
      "New private event inquiry",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Event date: ${formData.date}`,
      `Event time: ${formData.time}`,
      `Guest count: ${formData.guests}`,
      `Event type: ${formData.eventType}`,
      `Package: ${formData.packageChoice}`,
      "",
      "Special requests / notes:",
      formData.notes || "Not provided",
    ]);
  };

  return (
    <>
      {/* Schema.org EventVenue & Service JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["EventVenue", "Restaurant"],
            "@id": "https://www.estimescafe.com/private-events#venue",
            "name": BUSINESS_NAP_NAME,
            "alternateName": "Estime's Café Private Events Venue",
            "url": "https://www.estimescafe.com/private-events",
            "telephone": "(732) 669-7581",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "238 Inman Avenue",
              "addressLocality": "Colonia",
              "addressRegion": "NJ",
              "postalCode": "07067",
              "addressCountry": "US",
            },
            "maximumAttendeeCapacity": 35,
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": "True" },
              { "@type": "LocationFeatureSpecification", "name": "Private Dining Room", "value": "True" },
            ],
            "priceRange": "$$$",
          }),
        }}
      />

      {/* Hero Header */}
      <section className="relative text-brand-cream py-18 sm:py-28 border-b border-[#3e4925] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/private-events-hero.jpg"
            alt="Estime's Café Private Event Dining Room Table Setup with Botanical Floral Wall in Colonia NJ"
            fill
            priority
            quality={95}
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141b0d]/95 via-[#232d14]/85 to-[#1c2410]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#3e4925]/90 border border-brand-gold/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-gold-light mb-5 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Colonia, NJ &bull; Intimate Private Venue Buyouts</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
            Host Your Private Event &amp; Dinner at Estime&apos;s Café
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-cream/90 max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
            Host your private dinner party, birthday, baby shower, or bridal brunch in our Colonia dining room.
            Executive Chef Duke Estime prepares custom multi-course dinners and daytime menus for up to 35 guests.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans uppercase font-bold tracking-wider">
            <a
              href="#booking-form"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light px-6 py-3.5 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Reserve Private Date</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="tel:7326697581"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white border border-brand-cream/40 text-white hover:text-brand-green px-6 py-3.5 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-brand-gold-light" />
              <span>Call Event Manager: (732) 669-7581</span>
            </a>
          </div>
        </div>
      </section>

      {/* Venue Features / Amenities */}
      <section className="py-16 sm:py-20 bg-brand-cream border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Why Host With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              An Intimate Event Space in Central NJ
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              We handle the cooking, setup, and service so you can enjoy your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VENUE_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-brand-line rounded-sm hover:border-brand-green/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#f4ede1] border border-brand-gold flex items-center justify-center text-brand-green mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-text mb-2">
                    {item.title}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Venue Visual Experience Showcase */}
      <section className="py-16 sm:py-20 bg-brand-paper border-b border-brand-line overflow-hidden">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Atmosphere &amp; Memories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              Daytime Celebrations &amp; Evening Dinners
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              From morning baby showers with natural sunlight to candlelit evening dinner parties, the dining room is reserved exclusively for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Daytime Table Setting Card */}
            <div className="bg-white border border-brand-line rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative h-80 sm:h-96 w-full bg-brand-cream overflow-hidden">
                <Image
                  src="/assets/private-events-table-setup.jpg"
                  alt="Estime's Café Daytime Private Event Table Setting and Glassware"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-[#2a3319]/90 text-brand-gold-light border border-brand-gold/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                    Daytime Brunches &amp; Showers
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    Elegant Daytime Table Settings
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-7 bg-white">
                <p className="font-serif text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  Table linens, glassware, and natural sunlight. Set up for baby showers, bridal showers, communions, and family brunches.
                </p>
                <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-brand-green">
                  <span>Private Room Access &bull; Full Table &amp; Glassware Setup</span>
                </div>
              </div>
            </div>

            {/* Evening Dinner Celebration Card */}
            <div className="bg-white border border-brand-line rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative h-80 sm:h-96 w-full bg-brand-cream overflow-hidden">
                <Image
                  src="/assets/private-events-party-guests.jpg"
                  alt="Private Dinner Celebration with Guests at Estime's Café in Colonia NJ"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-brand-green/90 text-brand-gold-light border border-brand-gold/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                    Evening Celebrations &amp; Dinners
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    Intimate Candlelit Dinner Parties
                  </h3>
                </div>
              </div>
              <div className="p-6 sm:p-7 bg-white">
                <p className="font-serif text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  Warm lighting, communal banquet seating, and Chef Duke cooking Caribbean-American dishes for your table. Built for birthday parties, anniversaries, and private dinners.
                </p>
                <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-brand-green">
                  <span>Dedicated Staff &bull; Custom Playlist Audio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Course Dinner Packages */}
      <section id="dinner-packages" className="py-16 sm:py-24 bg-brand-cream border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Multi-Course Evening Menus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green font-normal mb-4">
              Private Event Dinner Packages
            </h2>
            <p className="font-serif text-sm sm:text-base text-brand-muted leading-relaxed">
              Prepared by Executive Chef Duke Estime. All packages include family-style starters,
              choice of entrées, sides, dessert, and beverages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {DINNER_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 group hover:shadow-xl ${
                  pkg.popular
                    ? "border-brand-green shadow-xl ring-2 ring-brand-green/20"
                    : "border-brand-line shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-4 right-4 z-10 bg-brand-green text-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md border border-brand-gold/40">
                    Most Popular Choice
                  </span>
                )}

                <div className="p-7 sm:p-8">
                  <div className="border-b border-brand-line pb-5 mb-6">
                    <span className="text-xs font-bold uppercase text-brand-gold tracking-wider block">
                      {pkg.tier}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-text mt-1 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-serif text-xs text-brand-muted leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-5 text-xs font-serif">
                    {/* Starters */}
                    <div>
                      <span className="font-sans font-bold uppercase tracking-wider text-[11px] text-brand-green block mb-1.5">
                        Starters (Family Style)
                      </span>
                      <ul className="space-y-1.5 text-brand-text">
                        {pkg.starters.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pasta if applicable */}
                    {pkg.pasta && (
                      <div>
                        <span className="font-sans font-bold uppercase tracking-wider text-[11px] text-brand-green block mb-1.5">
                          Pasta Course
                        </span>
                        <ul className="space-y-1.5 text-brand-text">
                          {pkg.pasta.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Main Courses */}
                    <div>
                      <span className="font-sans font-bold uppercase tracking-wider text-[11px] text-brand-green block mb-1.5">
                        Main Course Selections
                      </span>
                      <ul className="space-y-1.5 text-brand-text">
                        {pkg.mains.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sides */}
                    <div>
                      <span className="font-sans font-bold uppercase tracking-wider text-[11px] text-brand-green block mb-1.5">
                        Accompaniments &amp; Sides
                      </span>
                      <ul className="space-y-1.5 text-brand-text">
                        {pkg.sides.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dessert & Drinks */}
                    <div className="pt-2 border-t border-brand-line/60">
                      <span className="font-sans font-bold uppercase tracking-wider text-[11px] text-brand-green block mb-1.5">
                        Dessert &amp; Beverages
                      </span>
                      <ul className="space-y-1 text-brand-muted text-[11px]">
                        {pkg.dessert.map((item, i) => (
                          <li key={i}>&bull; {item}</li>
                        ))}
                        {pkg.beverages.map((item, i) => (
                          <li key={i}>&bull; {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0">
                  <a
                    href="#booking-form"
                    className={`w-full block text-center py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? "bg-brand-green text-white hover:bg-brand-green-dark shadow-md"
                        : "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    }`}
                  >
                    Select {pkg.price} Dinner Package
                  </a>
                  <p className="text-[10px] text-center text-brand-muted font-serif mt-2">
                    * Gratuity &amp; state tax added to final invoice.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Daytime Brunch Cross-link Banner */}
      <section className="bg-brand-cream border-b border-brand-line py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a3319] text-brand-cream p-8 sm:p-12 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gold-light block mb-2">
                Morning &amp; Afternoon Celebrations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
                Looking for a Private Brunch Buyout? ($40–$50 / Person)
              </h3>
              <p className="font-serif text-sm text-brand-cream/80 leading-relaxed">
                Hosting a daytime Baby Shower, Bridal Shower, or Christening Brunch?
                We offer private brunch packages featuring our signature Lemon Ricotta Pancakes, Amaretto French Toast, Shrimp &amp; Grits, and NY Strip.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/catering#brunch-packages"
                className="text-center bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark px-6 py-3.5 text-xs font-bold uppercase tracking-wider font-sans shadow-md transition-all whitespace-nowrap"
              >
                View Brunch Packages &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Booking Form & Space Details */}
      <section id="booking-form" className="py-16 sm:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Venue FAQ & Policy */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
                  Plan Your Celebration
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal leading-tight mb-4">
                  Request Private Venue Availability
                </h2>
                <p className="font-serif text-sm text-brand-muted leading-relaxed">
                  Complete the inquiry form with your preferred date to open a pre-addressed email for the Estime&apos;s Café events team. You can also call or email us directly.
                </p>
              </div>

              <div className="bg-[#f7f2e8] border border-brand-line p-6 rounded-sm space-y-4 font-serif text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <a href="tel:7326697581" className="font-bold text-brand-green hover:underline">
                    (732) 669-7581
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="text-xs text-brand-muted hover:underline">
                    {BUSINESS_EMAIL}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-brand-text">
                    238 Inman Ave, Colonia, NJ 07067 (Woodbridge Township)
                  </span>
                </div>
              </div>

              <div className="bg-white border border-brand-line p-6 rounded-sm space-y-3 text-xs font-serif text-brand-muted">
                <h4 className="font-sans font-bold uppercase tracking-wider text-brand-text text-[11px]">
                  Private Event Policies:
                </h4>
                <p>&bull; <strong>Capacity:</strong> Comfortably seats up to 35 guests.</p>
                <p>&bull; <strong>Deposit:</strong> A 40% deposit secures your exclusive event date.</p>
                <p>&bull; <strong>Decorations:</strong> Decorating time may be allotted based on your event start time. Brunches scheduled immediately after regular service may have limited early access.</p>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white border border-brand-line p-8 sm:p-10 rounded-sm shadow-md">
              <p className="mb-5 text-xs font-serif text-brand-muted">Submitting opens a pre-addressed email in your mail app. You can also call or email us directly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(732) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Target Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Event Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      >
                        <option value="Morning Brunch (9:00 AM - 1:00 PM)">Morning Brunch (9am-1pm)</option>
                        <option value="Afternoon Brunch (1:00 PM - 5:00 PM)">Afternoon (1pm-5pm)</option>
                        <option value="Evening Dinner (5:00 PM - 9:00 PM)">Evening Dinner (5pm-9pm)</option>
                        <option value="Late Evening (6:00 PM - 10:00 PM)">Late Evening (6pm-10pm)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      >
                        <option value="15-25">15 – 25 Guests</option>
                        <option value="25-35">25 – 35 Guests</option>
                        <option value="35">Up to 35 Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Event Type
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      >
                        <option value="Baby Shower">Baby Shower</option>
                        <option value="Bridal Shower">Bridal Shower</option>
                        <option value="Birthday Celebration">Birthday Celebration</option>
                        <option value="Anniversary / Wedding">Anniversary / Intimate Wedding</option>
                        <option value="Corporate Dinner">Corporate Dinner</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Repast Gathering">Repast Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Preferred Package Selection
                    </label>
                    <select
                      value={formData.packageChoice}
                      onChange={(e) => setFormData({ ...formData, packageChoice: e.target.value })}
                      className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                    >
                      <option value="$80 Classic Dinner Package">$80 / Person - Classic Private Dinner Package</option>
                      <option value="$90 Signature Dinner Package">$90 / Person - Signature Steak & Salmon Package (Popular)</option>
                      <option value="$105 Executive Dinner Package">$105 / Person - Executive Tasting & Whole Snapper</option>
                      <option value="$40-$50 Daytime Brunch Package">$40 - $50 / Person - Private Daytime Brunch Package</option>
                      <option value="Custom Tailored Menu">Custom Tailored Menu (Discuss with Chef Duke)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Special Requests / Notes / Dietary Needs
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the celebration, honoree name for menu cards, dietary restrictions, setup needs..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-brand-paper border border-brand-line p-3 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-3.5 text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                  >
                    Open Private Event Email Draft &rarr;
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
