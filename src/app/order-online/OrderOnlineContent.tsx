"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Truck,
  ChevronDown,
  Info,
  ShieldCheck,
  Star,
} from "lucide-react";
import { DoorDashLogo, UberEatsLogo, GrubhubLogo } from "@/components/PlatformLogos";

interface DeliveryPlatform {
  id: "doordash" | "ubereats" | "grubhub";
  name: string;
  tagline: string;
  url: string;
  badge: string;
  brandColor: string;
  accentBg: string;
  borderColor: string;
  buttonBg: string;
  buttonHover: string;
  perks: string[];
}

const DELIVERY_PLATFORMS: DeliveryPlatform[] = [
  {
    id: "doordash",
    name: "DoorDash",
    tagline: "Fast local delivery with real-time GPS tracking",
    url: "https://www.doordash.com/store/estimes-cafe-woodbridge-township-2835972/",
    badge: "DashPass Eligible",
    brandColor: "#EB1700",
    accentBg: "bg-red-50/70",
    borderColor: "border-red-200 hover:border-red-400",
    buttonBg: "bg-[#EB1700] hover:bg-[#c91400]",
    buttonHover: "hover:shadow-red-200",
    perks: [
      "DashPass $0 delivery fee on eligible orders",
      "Live GPS tracking straight to your doorstep",
      "Full breakfast, brunch & signature drinks menu",
      "Customizable meal options & special instructions",
    ],
  },
  {
    id: "ubereats",
    name: "Uber Eats",
    tagline: "Convenient delivery & takeout powered by Uber",
    url: "https://www.ubereats.com/store/estimes-cafe/fMKdXenYXIOw8mZSI5FPuQ",
    badge: "Uber One Perks",
    brandColor: "#06C167",
    accentBg: "bg-emerald-50/70",
    borderColor: "border-emerald-200 hover:border-emerald-400",
    buttonBg: "bg-[#06C167] hover:bg-[#05964f]",
    buttonHover: "hover:shadow-emerald-200",
    perks: [
      "Uber One exclusive discounts and $0 delivery fees",
      "Flexible options: Delivery or Store Pickup",
      "Group ordering for office lunches & family meals",
      "Accurate delivery estimates & driver messaging",
    ],
  },
  {
    id: "grubhub",
    name: "Grubhub",
    tagline: "Direct online ordering & contactless delivery",
    url: "http://menus.fyi/6353128",
    badge: "Grubhub+ & Menus.fyi",
    brandColor: "#FF8000",
    accentBg: "bg-amber-50/70",
    borderColor: "border-amber-200 hover:border-amber-400",
    buttonBg: "bg-[#f36805] hover:bg-[#d65700]",
    buttonHover: "hover:shadow-amber-200",
    perks: [
      "Grubhub+ member rewards & free delivery perks",
      "Powered by our official verified digital menu",
      "Contactless doorstep drop-off guaranteed",
      "Quick reordering of your favorite Estime's staples",
    ],
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What are your online ordering and delivery hours?",
    answer:
      "We accept delivery and takeout orders during our regular operating hours: Monday through Saturday from 8:00 AM to 3:00 PM, and Sunday from 8:00 AM to 4:00 PM. Our kitchen prepares every order fresh right before the driver arrives.",
  },
  {
    question: "Which towns and areas are within your delivery radius?",
    answer:
      "Through DoorDash, Uber Eats, and Grubhub, our delivery radius typically reaches Colonia, Woodbridge Township, Iselin, Clark, Rahway, Edison, Scotch Plains, Westfield, Cranford, Fanwood, and Linden (exact coverage depends on your platform's delivery boundary).",
  },
  {
    question: "How do I place a direct call-in order for takeout pickup?",
    answer:
      "To skip third-party service fees and support our kitchen directly, call us at (732) 669-7581. We'll take your customized order over the phone and have it packed hot and ready when you arrive at 238 Inman Ave, Colonia, NJ.",
  },
  {
    question: "Can I order catering platters for office or family gatherings?",
    answer:
      "Yes! For larger orders (half trays and full trays serving 8 to 20+ guests), please visit our Catering page or call our catering hotline. We offer Rasta Pasta, Brioche French Toast trays, Haitian Salmon, and more with 24-48 hours advance notice.",
  },
  {
    question: "Are special dietary requests or modifications supported?",
    answer:
      "Absolutely. You can add special instructions directly on DoorDash, Uber Eats, or Grubhub, or let our staff know over the phone. We accommodate gluten-friendly, vegetarian, keto, and allergy-sensitive requests whenever possible.",
  },
];

export default function OrderOnlineContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    // Check if open in Eastern Time
    const checkOpenStatus = () => {
      const now = new Date();
      // Format to Eastern Time
      const estString = now.toLocaleString("en-US", { timeZone: "America/New_York" });
      const estDate = new Date(estString);
      const day = estDate.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
      const hour = estDate.getHours();
      const minutes = estDate.getMinutes();
      const timeInDec = hour + minutes / 60;

      if (day === 0) {
        // Sunday: 8am - 4pm
        setIsOpenNow(timeInDec >= 8 && timeInDec < 16);
      } else {
        // Mon-Sat: 8am - 3pm
        setIsOpenNow(timeInDec >= 8 && timeInDec < 15);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-brand-cream border-b border-brand-line overflow-hidden pt-12 pb-16 lg:py-20">
        {/* Subtle background ambient accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf8f2] border border-brand-line text-xs font-sans font-semibold mb-6 shadow-sm">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              ></span>
              <span className="text-brand-text">
                {isOpenNow
                  ? "Kitchen is Open — Taking Orders Now"
                  : "Currently Closed — Check Regular Hours Below"}
              </span>
              <span className="text-brand-muted">•</span>
              <span className="text-brand-gold font-bold uppercase tracking-wider text-[11px]">
                Colonia, NJ
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-green font-normal tracking-tight leading-[1.1] mb-6">
              Order Online for Delivery &amp; Takeout
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#48423c] leading-relaxed mb-6">
              Craving Chef Duke Estime&apos;s famous breakfast sandwiches, brioche French toast, or
              flavorful Caribbean brunch? Choose your favorite delivery app below or call us for direct
              curbside pickup.
            </p>

            {/* Quick Delivery Partners Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <a
                href="#delivery-options"
                className="inline-flex items-center bg-white/90 hover:bg-white hover:border-[#EB1700]/40 border border-brand-line px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all"
                title="Order on DoorDash"
              >
                <DoorDashLogo size="sm" />
              </a>
              <a
                href="#delivery-options"
                className="inline-flex items-center bg-white/90 hover:bg-white hover:border-[#06C167]/40 border border-brand-line px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all"
                title="Order on Uber Eats"
              >
                <UberEatsLogo size="sm" />
              </a>
              <a
                href="#delivery-options"
                className="inline-flex items-center bg-white/90 hover:bg-white hover:border-[#F63440]/40 border border-brand-line px-3.5 py-2 rounded-lg shadow-xs hover:shadow transition-all"
                title="Order on Grubhub"
              >
                <GrubhubLogo size="sm" />
              </a>
            </div>

            {/* Quick Benefits bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left bg-[#fbf8f2] p-4 rounded-md border border-brand-line shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                <Truck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Fast Local Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Cooked Fresh to Order</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                <ShoppingBag className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Secure Hot Packaging</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-text">
                <Star className="w-4 h-4 text-brand-gold flex-shrink-0 fill-brand-gold" />
                <span>4.8★ Rated (180+ Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Primary 3 Delivery Platforms Grid */}
      <section id="delivery-options" className="py-16 sm:py-20 bg-brand-paper scroll-mt-8">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Official Partners
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight">
              Select Your Preferred Delivery Platform
            </h2>
            <p className="font-serif text-base text-brand-muted mt-3">
              Click below to order directly from Estime&apos;s Café on your favorite app:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DELIVERY_PLATFORMS.map((platform) => (
              <div
                key={platform.id}
                className={`relative flex flex-col justify-between bg-white rounded-xl border-2 ${platform.borderColor} p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div>
                  {/* Top Row: Official Platform Logo & Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-brand-line/60 min-h-[56px]">
                    <div className="flex items-center">
                      {platform.id === "doordash" && <DoorDashLogo size="md" />}
                      {platform.id === "ubereats" && <UberEatsLogo size="md" />}
                      {platform.id === "grubhub" && <GrubhubLogo size="md" />}
                    </div>
                    <span
                      className={`inline-flex items-center self-start sm:self-center text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${platform.accentBg} text-brand-text border border-brand-line/50 whitespace-nowrap shadow-xs`}
                    >
                      {platform.badge}
                    </span>
                  </div>

                  {/* Platform Tagline */}
                  <p className="font-sans text-xs text-brand-muted leading-relaxed mb-6 font-medium">
                    {platform.tagline}
                  </p>

                  {/* Perks list */}
                  <ul className="space-y-3 mb-8 text-sm font-sans text-brand-text/90">
                    {platform.perks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm leading-snug">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct External CTA Button */}
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-md text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md ${platform.buttonBg} transition-all duration-200 hover:shadow-lg`}
                >
                  <span>Order on {platform.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Direct Phone Pickup Card */}
          <div className="mt-12 bg-gradient-to-r from-[#2a3319] to-[#3e4925] text-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg border border-brand-gold/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold-light border border-brand-gold/40 text-[11px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3 h-3" />
                  <span>Direct Kitchen Pickup &bull; 0% 3rd Party Fees</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
                  Prefer Call-Ahead Pickup at the Café?
                </h3>
                <p className="font-serif text-sm sm:text-base text-brand-cream/80 leading-relaxed max-w-2xl">
                  Order directly with our kitchen staff. 100% of your payment directly supports our local
                  team, and we&apos;ll have your order piping hot and ready when you pull up to 238 Inman Ave in Colonia.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  href="tel:7326697581"
                  className="flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-brand-gold-light text-[#2a3319] py-3.5 px-6 rounded-md font-sans text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (732) 669-7581</span>
                </a>
                <a
                  href="https://maps.google.com/?q=238+Inman+Avenue,+Colonia,+NJ+07067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 py-3.5 px-6 rounded-md font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <MapPin className="w-4 h-4 text-brand-gold-light" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catering & Large Events Banner */}
      <section className="py-14 bg-brand-paper">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2ecde] border border-brand-line rounded-lg p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                Feeding a Team or Celebration?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal mb-2">
                Office Lunches, Corporate Breakfasts &amp; Party Platters
              </h3>
              <p className="font-serif text-sm sm:text-base text-brand-muted leading-relaxed">
                Ordering for 10, 20, or 50+ people? Check our dedicated catering menu featuring half &amp;
                full trays of Brioche French Toast, Rasta Pasta, and Haitian Creole specialty dishes.
              </p>
            </div>
            <Link
              href="/catering"
              className="flex-shrink-0 bg-brand-green hover:bg-brand-green-dark text-white py-3.5 px-6 rounded-md font-sans text-xs font-bold uppercase tracking-wider shadow-sm transition-colors text-center"
            >
              View Catering Trays &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FAQs Accordion */}
      <section className="py-16 sm:py-20 bg-brand-cream border-t border-brand-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Helpful Information
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight">
              Frequently Asked Delivery Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-brand-paper border border-brand-line rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-brand-text font-medium hover:text-brand-green focus:outline-none transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 font-serif text-sm text-brand-muted leading-relaxed border-t border-brand-line/50 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Location & Hours Bar */}
      <section className="py-12 bg-[#2a3319] text-brand-cream border-t border-[#3e4925]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Address */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-gold-light flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-1">
                  Restaurant Location
                </h4>
                <p className="font-serif text-sm text-brand-cream/90">
                  238 Inman Avenue
                  <br />
                  Colonia, NJ 07067
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Clock className="w-5 h-5 text-brand-gold-light flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-1">
                  Operating Hours
                </h4>
                <p className="font-serif text-sm text-brand-cream/90">
                  Mon – Sat: 8:00 AM – 3:00 PM
                  <br />
                  Sunday: 8:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="flex flex-col items-center md:items-end">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-1">
                Direct Orders &amp; Inquiries
              </span>
              <a
                href="tel:7326697581"
                className="font-serif text-xl font-bold text-white hover:text-brand-gold-light transition-colors"
              >
                (732) 669-7581
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
