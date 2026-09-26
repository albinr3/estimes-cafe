"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_EMAIL, createMailtoUrl } from "@/lib/business";
import {
  Users,
  Truck,
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Utensils,
  Coffee,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface CateringPlatter {
  name: string;
  halfPrice: string;
  fullPrice: string;
  description?: string;
  popular?: boolean;
}

interface CateringCategory {
  id: string;
  title: string;
  description: string;
  items: CateringPlatter[];
}

const CATERING_PLATTERS: CateringCategory[] = [
  {
    id: "breakfast-trays",
    title: "Morning & Breakfast Platters",
    description: "Fluffy pancakes, French toast, farm eggs & golden home fries for office breakfasts & morning gatherings.",
    items: [
      {
        name: "Amaretto Brioche French Toast",
        halfPrice: "$65",
        fullPrice: "$125",
        description: "Thick brioche griddled golden brown, drizzled with Chef Duke's warm signature Amaretto sauce.",
        popular: true,
      },
      {
        name: "Lemon Ricotta Pancakes",
        halfPrice: "$65",
        fullPrice: "$125",
        description: "Fluffy pancakes folded with sweet ricotta, served with lemon butter and strawberry blackberry compote.",
        popular: true,
      },
      {
        name: "Brioche French Toast",
        halfPrice: "$60",
        fullPrice: "$115",
        description: "Classic golden-crusted brioche french toast served with maple syrup and whipped butter.",
      },
      {
        name: "Buttermilk Pancakes",
        halfPrice: "$60",
        fullPrice: "$120",
        description: "Traditional golden fluffy pancake tray served with butter and maple syrup.",
      },
      {
        name: "Farm-Fresh Scrambled Eggs",
        halfPrice: "$55",
        fullPrice: "$100",
        description: "Fluffy, light scrambled farm eggs seasoned to perfection.",
      },
      {
        name: "Smoked Crispy Bacon",
        halfPrice: "$75",
        fullPrice: "$140",
        description: "Thick-cut, hardwood smoked crispy breakfast bacon.",
      },
      {
        name: "Lean Turkey Bacon",
        halfPrice: "$80",
        fullPrice: "$150",
        description: "Savory grilled lean turkey bacon strips.",
      },
      {
        name: "Seasoned Home Fries",
        halfPrice: "$55",
        fullPrice: "$100",
        description: "Diced golden potatoes sautéed with sweet onions, peppers, and savory herbs.",
      },
    ],
  },
  {
    id: "pasta-salads",
    title: "Pasta & Fresh Salads",
    description: "Rich baked pastas, Haitian fusion specialties and crisp farm salads.",
    items: [
      {
        name: "Chef Duke's Rasta Pasta",
        halfPrice: "$70",
        fullPrice: "$130",
        description: "Penne pasta tossed in a rich, creamy Caribbean jerk sauce with sautéed tri-color bell peppers.",
        popular: true,
      },
      {
        name: "Haitian Herring Pasta",
        halfPrice: "$60",
        fullPrice: "$115",
        description: "Traditional island specialty pasta tossed with savory smoked herring, garlic, and Creole spices.",
      },
      {
        name: "Penne Alla Vodka",
        halfPrice: "$60",
        fullPrice: "$120",
        description: "Al dente penne in a velvety pink tomato vodka cream sauce with fresh grated Parmesan.",
      },
      {
        name: "Classic Baked Ziti",
        halfPrice: "$65",
        fullPrice: "$105",
        description: "Layered with ricotta, rich marinara, and melted golden mozzarella.",
      },
      {
        name: "Crisp Caesar Salad",
        halfPrice: "$45",
        fullPrice: "$85",
        description: "Crisp romaine hearts, toasted garlic herb croutons, and shredded Parmesan with creamy Caesar dressing.",
      },
      {
        name: "Estime's Garden House Salad",
        halfPrice: "$40",
        fullPrice: "$75",
        description: "Mixed greens, cherry tomatoes, cucumbers, and shaved red onion with house vinaigrette.",
      },
      {
        name: "Seasonal Fresh Fruit Salad",
        halfPrice: "$75",
        fullPrice: "$120",
        description: "Fresh sliced seasonal melons, ripe berries, seedless grapes, and sweet pineapple.",
      },
    ],
  },
  {
    id: "chicken-meats",
    title: "Chicken & Gourmet Meats",
    description: "Hearty poultry, Italian classics, tender beef & island marinated meats.",
    items: [
      {
        name: "Authentic Jerk Chicken",
        halfPrice: "$80",
        fullPrice: "$150",
        description: "Bone-in chicken marinated for 48 hours in spicy island jerk aromatics and slow roasted.",
        popular: true,
      },
      {
        name: "Crispy Chicken Lollipops",
        halfPrice: "$110",
        fullPrice: "$200",
        description: "French-trimmed chicken wing lollipops glazed in sweet and spicy chili sauce.",
        popular: true,
      },
      {
        name: "Chicken Parmigiana",
        halfPrice: "$75",
        fullPrice: "$130",
        description: "Breaded chicken cutlets smothered in house marinara and bubbly melted mozzarella.",
      },
      {
        name: "Chicken Marsala",
        halfPrice: "$75",
        fullPrice: "$130",
        description: "Tender chicken cutlets sautéed with mushrooms in a rich Marsala wine reduction.",
      },
      {
        name: "Chicken Scampi",
        halfPrice: "$75",
        fullPrice: "$130",
        description: "Sautéed chicken breast cutlets in a garlic, white wine, fresh lemon, and herb butter reduction.",
      },
      {
        name: "Asian Glazed Chicken",
        halfPrice: "$80",
        fullPrice: "$150",
        description: "Chicken medallions tossed with a sweet ginger soy reduction and toasted sesame seeds.",
      },
      {
        name: "Traditional Italian Meatballs",
        halfPrice: "$65",
        fullPrice: "$120",
        description: "Handcrafted ground beef and pork meatballs slow-simmered in classic Sunday sauce.",
      },
      {
        name: "Sausage, Peppers & Onions",
        halfPrice: "$75",
        fullPrice: "$120",
        description: "Sweet Italian sausage sautéed with bell peppers, garlic, and caramelized onions.",
      },
      {
        name: "Filet Mignon Tips",
        halfPrice: "Market Price",
        fullPrice: "Market Price",
        description: "Prime tenderloin tips sautéed with wild mushrooms and red wine demi-glace.",
      },
      {
        name: "Herb-Crusted Lamb Chops",
        halfPrice: "Market Price",
        fullPrice: "Market Price",
        description: "Grilled lollipop lamb chops finished with rosemary garlic oil.",
      },
    ],
  },
  {
    id: "seafood-rice",
    title: "Seafood & Island Gourmet Rice",
    description: "Fresh coastal seafood platters and Chef Duke's celebrated Black Djon Djon rice.",
    items: [
      {
        name: "Creole Haitian Salmon",
        halfPrice: "$100",
        fullPrice: "$170",
        description: "Fresh Atlantic salmon fillets pan-seared and finished with spicy Creole tomato-herb sauce.",
        popular: true,
      },
      {
        name: "Cilantro Lime Jumbo Shrimp",
        halfPrice: "$130",
        fullPrice: "$250",
        description: "Jumbo shrimp sautéed with fresh garlic, chopped cilantro, and fresh lime reduction.",
        popular: true,
      },
      {
        name: "Catering Shrimp & Cheese Grits",
        halfPrice: "$130",
        fullPrice: "$240",
        description: "Creamy stone ground cheddar grits topped with Creole-seasoned sautéed jumbo shrimp.",
      },
      {
        name: "Haitian Black Rice (Djon Djon)",
        halfPrice: "$125",
        fullPrice: "$230",
        description: "Traditional Haitian specialty rice simmered with dried black mushroom broth (djon djon), tender green peas, and island seasonings.",
        popular: true,
      },
      {
        name: "Mussels with Shaved Fennel",
        halfPrice: "$90",
        fullPrice: "$170",
        description: "Steamed Prince Edward Island mussels in a fragrant white wine garlic broth.",
      },
      {
        name: "Risotto Croquettes",
        halfPrice: "$90",
        fullPrice: "$160",
        description: "Crispy breaded golden arancini filled with seasoned rice and creamy cheese.",
      },
      {
        name: "Seasoned Rice Pilaf",
        halfPrice: "$85",
        fullPrice: "$120",
        description: "Fluffy basmati rice simmered with aromatic herbs and diced vegetables.",
      },
      {
        name: "Grilled Seasonal Vegetables",
        halfPrice: "$70",
        fullPrice: "$130",
        description: "Char-grilled zucchini, yellow squash, bell peppers, asparagus, and portobello mushrooms.",
      },
    ],
  },
];

const BRUNCH_PACKAGES = [
  {
    tier: "$40 / Person",
    name: "Classic Brunch Gathering",
    price: "$40",
    image: "/assets/catering-pkg-classic.jpg",
    imageAlt: "Classic Brunch Catering Package with Buttermilk Pancakes, Fried Chicken & Scrambled Eggs",
    description: "Great for office milestones, birthdays & casual morning gatherings.",
    popular: false,
    inclusions: [
      "Buttermilk Pancakes & Brioche French Toast",
      "Honey Sriracha Fried Chicken Thighs",
      "Fluffy Scrambled Farm Eggs",
      "Hardwood Smoked Bacon & Savory Sausage",
      "Seasoned Golden Home Fries",
    ],
  },
  {
    tier: "$45 / Person",
    name: "Signature Seafood & Ricotta Brunch",
    price: "$45",
    image: "/assets/catering-pkg-seafood.jpg",
    imageAlt: "Signature Seafood & Ricotta Brunch Catering Package with Shrimp & Grits and Ricotta Pancakes",
    description: "Our most popular package for Bridal Showers, Baby Showers & VIP corporate lunches.",
    popular: true,
    inclusions: [
      "Lemon Ricotta Pancakes & Amaretto French Toast",
      "Chef Duke's Jumbo Shrimp & Grits",
      "Fluffy Scrambled Farm Eggs",
      "Crispy Bacon & Savory Breakfast Sausage",
      "Seasoned Golden Home Fries",
    ],
  },
  {
    tier: "$50 / Person",
    name: "Executive Steak & Sweet Griddle Feast",
    price: "$50",
    image: "/assets/catering-pkg-steak.jpg",
    imageAlt: "Executive Steak & Sweet Griddle Catering Feast with NY Strip Steak and Brioche French Toast",
    description: "The ultimate steak and griddle brunch featuring hand-cut NY strip, lemon ricotta pancakes, and Amaretto brioche French toast.",
    popular: false,
    inclusions: [
      "Hand-Cut NY Strip Steak with Creole Chimichurri",
      "Lemon Ricotta Pancakes & Amaretto Brioche Toast",
      "Fluffy Scrambled Farm Eggs",
      "Crispy Bacon & Savory Pork Sausage",
      "Seasoned Golden Home Fries",
    ],
  },
];

export default function CateringPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "20-30",
    serviceType: "Office Lunch & Platters",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = createMailtoUrl("Catering quote request", [
      "New catering quote request",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Event date: ${formData.date}`,
      `Guest count: ${formData.guests}`,
      `Service type: ${formData.serviceType}`,
      "",
      "Menu preferences / notes:",
      formData.notes || "Not provided",
    ]);
  };

  return (
    <>
      {/* Hero Header with Background Image & Ambient Overlay */}
      <section className="relative text-brand-cream py-18 sm:py-28 border-b border-[#3e4925] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/catering-hero-party-trays.webp"
            alt="Estime's Café party trays and corporate lunch catering spread in Central NJ"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141b0d]/95 via-[#232d14]/85 to-[#1c2410]/80" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3e4925]/90 border border-brand-gold/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-gold-light mb-5 backdrop-blur-sm shadow-sm">
            <Truck className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Delivery Across Middlesex &amp; Union County, NJ</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
            Party Trays &amp; Corporate Lunch Catering in Central NJ
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-cream/90 max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-sm">
            Chef-made half and full party trays for office lunches, meetings, celebrations, and family gatherings.
            Order fresh pastas, chicken, seafood, salads, and Caribbean favorites from Colonia in Woodbridge Township.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col items-center gap-3.5">
            {/* Primary CTAs: Request Quote & Phone */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs font-sans uppercase font-bold tracking-wider">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light px-7 py-3.5 shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Catering Quote</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="tel:7326697581"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white border border-brand-cream/50 text-white hover:text-brand-green px-6 py-3.5 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-brand-gold-light" />
                <span>Call (732) 669-7581</span>
              </a>
            </div>

            {/* Secondary breakfast and brunch option */}
            <div className="pt-1">
              <a
                href="#brunch-packages"
                className="inline-flex items-center gap-2 bg-[#1c2410]/70 hover:bg-brand-gold hover:text-brand-green-dark border border-brand-gold/40 text-brand-gold-light px-5 py-2.5 backdrop-blur-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 rounded-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>Breakfast &amp; Brunch Catering Packages ($40–$50/pp) &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Bar */}
      <section className="bg-brand-cream border-b border-brand-line py-8">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-7">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Built for groups
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal">
              Party Trays for Office Lunches &amp; Events
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-brand-text">Office Lunch Delivery</h3>
                <p className="text-xs font-serif text-brand-muted mt-0.5">Reliable scheduled delivery for meetings, offices, and venues.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-brand-text">Party Trays for Groups</h3>
                <p className="text-xs font-serif text-brand-muted mt-0.5">Half trays feed 8–10; full trays feed 15–20 guests.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-brand-text">Chef-Made Favorites</h3>
                <p className="text-xs font-serif text-brand-muted mt-0.5">Rasta Pasta, Jerk Chicken, Haitian Salmon, and more.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-brand-text">Dietary Customization</h3>
                <p className="text-xs font-serif text-brand-muted mt-0.5">Keto, vegetarian, pescatarian &amp; protein-packed menus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tray Size Explanation Banner */}
      <section className="bg-brand-paper border-b border-brand-line py-8">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-brand-line p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#f4ede1] text-brand-green rounded-full">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-brand-green">
                  Tray Portioning &amp; Serving Guide
                </h2>
                <p className="font-serif text-xs sm:text-sm text-brand-muted">
                  All catering platters are packaged in heavy-duty food-grade foil trays with lids to maintain heat and freshness.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center font-sans">
              <div className="bg-brand-cream border border-brand-line px-5 py-3 rounded-sm">
                <span className="block text-xs font-bold uppercase text-brand-gold tracking-wider">Half Tray</span>
                <span className="font-serif text-lg font-bold text-brand-green">8 – 10 Guests</span>
              </div>
              <div className="bg-brand-cream border border-brand-line px-5 py-3 rounded-sm">
                <span className="block text-xs font-bold uppercase text-brand-gold tracking-wider">Full Tray</span>
                <span className="font-serif text-lg font-bold text-brand-green">15 – 20 Guests</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platter Menu Section */}
      <section id="platter-catalog" className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              A La Carte Party Trays
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              Full Catering Party Trays Menu
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              Select half or full platters to build your group order for pickup or delivery.
            </p>
          </div>

          <div className="space-y-16">
            {[...CATERING_PLATTERS.slice(1), ...CATERING_PLATTERS.slice(0, 1)].map((cat) => (
              <article key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="text-center max-w-2xl mx-auto mb-7">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
                    {cat.id === "breakfast-trays" ? "Breakfast Catering" : "Party Trays Menu"}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal">{cat.title}</h3>
                  <p className="font-serif text-sm text-brand-muted mt-2">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className={`p-6 bg-white border rounded-sm flex flex-col justify-between transition-all ${
                        item.popular
                          ? "border-brand-gold/60 shadow-sm bg-gradient-to-br from-white to-[#fdfbf6]"
                          : "border-brand-line hover:border-brand-green/30"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h4 className="font-serif text-lg font-bold text-brand-text">{item.name}</h4>
                          {item.popular && (
                            <span className="inline-flex items-center gap-1 bg-[#f4ede1] text-brand-green text-[10px] font-sans font-bold uppercase px-2.5 py-0.5 rounded-full flex-shrink-0">
                              <Sparkles className="w-3 h-3 text-brand-gold" />
                              Popular
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="font-serif text-xs text-brand-muted leading-relaxed mb-6">{item.description}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-line/60">
                        <div className="bg-brand-paper p-2.5 rounded text-center">
                          <span className="block text-[10px] font-bold uppercase text-brand-muted tracking-wider">Half Tray (8-10)</span>
                          <span className="font-serif text-base font-bold text-brand-green">{item.halfPrice}</span>
                        </div>
                        <div className="bg-brand-paper p-2.5 rounded text-center">
                          <span className="block text-[10px] font-bold uppercase text-brand-muted tracking-wider">Full Tray (15-20)</span>
                          <span className="font-serif text-base font-bold text-brand-green">{item.fullPrice}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-green text-brand-cream">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold-light block mb-3">For offices and teams</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">Office Lunch &amp; Corporate Catering</h2>
            <p className="font-serif text-base text-brand-cream/85 leading-relaxed mt-4 max-w-xl">
              Keep meetings moving with chef-made lunch trays delivered to your Central NJ office. Build a spread of pastas, proteins, salads, and Caribbean favorites for teams of 10 to 100+ guests.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ["Easy group ordering", "Choose half or full trays based on your guest count."],
              ["Scheduled delivery", "Coordinate a delivery window for your office or venue."],
              ["Flexible menus", "Mix crowd-pleasing classics with signature Chef Duke dishes."],
            ].map(([title, description]) => (
              <div key={title} className="border border-brand-gold/30 bg-white/5 p-5">
                <h3 className="font-serif text-lg text-white font-bold">{title}</h3>
                <p className="font-serif text-xs text-brand-cream/80 mt-2 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per Person Brunch Packages Section */}
      <section id="brunch-packages" className="py-16 bg-brand-cream border-y border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Full-Service Package Menus
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">
              Weekend Brunch Catering Packages
            </h2>
            <p className="font-serif text-sm text-brand-muted mt-2">
              Priced per guest with generous portions and table setups for showers &amp; celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRUNCH_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 group hover:shadow-lg ${
                  pkg.popular
                    ? "border-brand-green shadow-xl ring-2 ring-brand-green/20"
                    : "border-brand-line shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute top-3 right-3 z-10 bg-brand-green text-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-md border border-brand-gold/30">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  {/* Package Representative Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-brand-cream border-b border-brand-line">
                    <Image
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="inline-block bg-[#1c2410]/85 backdrop-blur-sm text-brand-gold-light border border-brand-gold/40 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                        {pkg.tier}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="border-b border-brand-line pb-4 mb-5">
                      <h3 className="font-serif text-2xl font-bold text-brand-text mb-2">
                        {pkg.name}
                      </h3>
                      <p className="font-serif text-xs text-brand-muted leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-2.5 font-serif text-xs sm:text-sm text-brand-text mb-6">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0">
                  <a
                    href="#inquiry-form"
                    className={`w-full block text-center py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? "bg-brand-green text-white hover:bg-brand-green-dark shadow-sm"
                        : "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    }`}
                  >
                    Select {pkg.price} Package
                  </a>
                  <p className="text-[10px] text-center text-brand-muted font-serif mt-2">
                    * Gratuity &amp; tax added to final invoice.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form & Service Areas */}
      <section id="inquiry-form" className="py-16 sm:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Coverage */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
                  Fast Catering Quote
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal leading-tight mb-4">
                  Request a Catering Proposal
                </h2>
                <p className="font-serif text-sm text-brand-muted leading-relaxed">
                  Tell us about your event, then open the email draft with your details for the Estime&apos;s Café team.
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

              <div>
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-3">
                  Delivery Coverage Areas in NJ:
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-serif text-brand-muted">
                  {[
                    "Colonia",
                    "Woodbridge",
                    "Iselin",
                    "Clark",
                    "Rahway",
                    "Edison",
                    "Scotch Plains",
                    "Westfield",
                    "Cranford",
                    "Fanwood",
                    "Linden",
                  ].map((city) => (
                    <span key={city} className="bg-white border border-brand-line px-2.5 py-1 rounded-sm">
                      {city}, NJ
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 bg-white border border-brand-line p-8 sm:p-10 rounded-sm shadow-sm">
              <p className="mb-5 text-xs font-serif text-brand-muted">Submitting opens a pre-addressed email in your mail app. You can also call or email us directly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
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
                        placeholder="(732) 000-0000"
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
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Event Date *
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      >
                        <option value="10-20">10 – 20 Guests</option>
                        <option value="20-30">20 – 30 Guests</option>
                        <option value="30-50">30 – 50 Guests</option>
                        <option value="50-100">50 – 100 Guests</option>
                        <option value="100+">100+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                        Service Type
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-brand-paper border border-brand-line px-3 py-2 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                      >
                        <option value="Office Lunch & Platters">Office Lunch &amp; Party Trays</option>
                        <option value="Corporate Office Breakfast">Corporate Office Breakfast</option>
                        <option value="Weekend Brunch Package">Weekend Brunch Package</option>
                        <option value="Bridal / Baby Shower">Bridal / Baby Shower</option>
                        <option value="Private Celebration / Party">Private Celebration / Party</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                      Event Details / Menu Preferences
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify trays, dishes, delivery details, or dietary restrictions (e.g. Rasta Pasta, Jerk Chicken, Haitian Salmon)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-brand-paper border border-brand-line p-3 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-3.5 text-xs font-bold uppercase tracking-wider shadow-md transition-all"
                  >
                    Open Catering Email Draft →
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="catering-faq" className="py-16 bg-brand-cream border-t border-brand-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">Catering questions</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal">Party Trays &amp; Catering FAQs</h2>
          </div>
          <div className="space-y-3">
            {[
              ["How many people do your party trays serve?", "Half trays typically serve 8–10 guests, and full trays typically serve 15–20 guests. Tell us your guest count and we will help you build the right order."],
              ["Do you offer office lunch catering in Woodbridge and Central NJ?", "Yes. Estime's Café prepares office lunch catering and party trays for delivery across Woodbridge Township, Colonia, Edison, and surrounding Central NJ communities."],
              ["Can I mix different trays for a corporate lunch or celebration?", "Yes. Combine pastas, proteins, seafood, salads, breakfast favorites, and brunch selections to create a menu that fits your guests and budget."],
              ["How do I request a catering quote?", "Complete the catering form to open a pre-addressed email with your date, guest count, and menu preferences, or call (732) 669-7581 to speak with our team."],
            ].map(([question, answer]) => (
              <details key={question} className="bg-white border border-brand-line p-5 group">
                <summary className="font-serif text-lg font-bold text-brand-green cursor-pointer pr-8">{question}</summary>
                <p className="font-serif text-sm text-brand-muted leading-relaxed mt-3">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
