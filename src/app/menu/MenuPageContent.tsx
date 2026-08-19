"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Phone,
  Flame,
  Clock,
  Heart,
  ChevronRight,
  Coffee,
  Egg,
  Utensils,
  Layers,
  Search,
} from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  tag?: string;
  popular?: boolean;
  diet?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
  {
    id: "off-the-spatula",
    title: "Off the Spatula",
    subtitle: "Pancakes, Brioche French Toast & Sweet Griddle Creations",
    icon: "layers",
    items: [
      {
        name: "Amaretto Brioche French Toast",
        price: "$16.95",
        description:
          "Chunky brioche bread, drenched and griddled in aromatic vanilla batter, drizzled with Chef Duke's signature Amaretto reduction sauce.",
        tag: "Signature Dish",
        popular: true,
      },
      {
        name: "Lemon Ricotta Pancakes",
        price: "$14.95",
        description:
          "Fluffy golden stack folded with fresh creamy ricotta, topped with zesty lemon butter, powdered sugar, and a side of house-made strawberry blackberry jam.",
        tag: "Guest Favorite",
        popular: true,
      },
      {
        name: "Brioche French Toast",
        price: "$14.95",
        description: "Classic thick-sliced brioche dipped in spiced egg custard, served with warm maple syrup and whipped butter.",
      },
      {
        name: "Chocolate Chip Pancakes",
        price: "$12.95",
        description: "Buttermilk pancake stack loaded with melted semi-sweet chocolate chips and dusted with powdered sugar.",
      },
      {
        name: "Buttermilk Pancakes",
        price: "$11.95",
        description: "Traditional golden-brown buttermilk stack served with pure maple syrup and whipped cream butter.",
      },
      {
        name: "Single Pancake Add-on",
        price: "$7.00 – $9.00",
        description: "Add a single pancake to any entrée: Buttermilk ($7.00), Lemon Ricotta ($9.00), or Chocolate Chip ($9.00).",
      },
    ],
  },
  {
    id: "brunchy-bites",
    title: "Brunchy Bites & Sandwiches",
    subtitle: "Handcrafted Sandwiches Served on Toasted Brioche Buns",
    icon: "utensils",
    items: [
      {
        name: "The Mayor",
        price: "$11.95",
        description: "Succulent breakfast pork sausage patty, fried farm eggs, and melted American cheese on toasted brioche.",
        tag: "Best Seller",
        popular: true,
      },
      {
        name: "The Jimmy",
        price: "$11.95",
        description: "Crispy smoked bacon, seasoned home fries, and melted cheddar folded omelet-style on brioche.",
      },
      {
        name: "The Inman",
        price: "$12.95",
        description: "Lean turkey bacon, seasoned golden home fries, and melted cheese folded omelet-style on brioche.",
      },
      {
        name: "Deluxe Smash Burger",
        price: "$19.95",
        description: "Lean ground beef patty smashed to perfection, topped with crisp lettuce, ripe tomato, and sliced red onion. (Add cheese +$2.00).",
      },
      {
        name: "Sriracha Chicken Brioche",
        price: "$24.00",
        description: "Crispy hand-breaded chicken thigh served on a toasted brioche roll with fiery Sriracha glaze and house pickles.",
        tag: "Chef Duke Special",
        popular: true,
      },
      {
        name: "The Fritz Grilled Cheese",
        price: "$16.95",
        description: "Melted Swiss cheese, tangy goat cheese, and thick-cut crispy bacon on buttery, golden grilled rye bread.",
      },
    ],
  },
  {
    id: "farmers-omelets",
    title: "Farmer's Plate & Omelets",
    subtitle: "Locally Sourced Farm Eggs Served with Golden Home Fries & Toast",
    icon: "egg",
    items: [
      {
        name: "Three Farm-Fresh Eggs Any Style",
        price: "$13.95",
        description: "Three locally farm raised eggs styled your way, served with home fries and choice of white or wheat toast. (Add bacon, sausage or Taylor ham +$2.00, turkey bacon/chorizo +$3.00, cheese +$2.00).",
      },
      {
        name: "Haitian Spicy Omelet",
        price: "$16.95",
        description: "Authentic Caribbean-Creole omelet filled with smoked herring, sautéed sweet bell peppers, onions, and island spices.",
        tag: "Island Heritage",
        popular: true,
      },
      {
        name: "Estime’s Signature Omelet",
        price: "$15.95",
        description: "Tender organic kale, ripe diced tomatoes, sautéed mushrooms, and imported crumbled feta cheese.",
      },
      {
        name: "Pastrami & Swiss Omelet",
        price: "$16.95",
        description: "Savory hot pastrami ribbons folded with premium melted Swiss cheese.",
      },
      {
        name: "Western Omelet",
        price: "$15.95",
        description: "Diced smoked ham, green bell peppers, sweet onions, and melted cheddar.",
      },
      {
        name: "Three-Cheese Omelet",
        price: "$14.95",
        description: "Choice of melted American, aged sharp cheddar, or Swiss cheese.",
      },
      {
        name: "Classic Eggs Benedict",
        price: "$19.95",
        description: "Toasted English muffin, poached farm eggs, velvety rich Hollandaise sauce with your choice of turkey bacon, fried shrimp, or pastrami.",
        tag: "Weekend Favorite",
      },
    ],
  },
  {
    id: "keto-healthy",
    title: "Keto Wake Up & Power Bowls",
    subtitle: "High-Protein, Low-Carb & Nutrition-Focused Entrées (No Substitutions)",
    icon: "heart",
    items: [
      {
        name: "Alfano Power Omelet",
        price: "$25.95",
        description: "Six egg white omelet loaded with jalapeños, kale, and cheddar, topped with a grilled chicken cutlet and a side of savory sausage.",
        tag: "Max Protein / Keto",
        popular: true,
        diet: "Keto / High Protein",
      },
      {
        name: "Power Omelet",
        price: "$20.95",
        description: "Four egg white omelet seasoned with Haitian marinade, fresh kale, and cheddar, topped with tender grilled chicken breast.",
        diet: "High Protein",
      },
      {
        name: "Beckler Omelet",
        price: "$17.95",
        description: "Fluffy egg white omelet folded with tomato, kale, and sautéed mushrooms, stuffed with goat cheese and topped with fresh sliced avocado.",
        diet: "Vegetarian / Keto",
      },
      {
        name: "Veggie Lover Omelet",
        price: "$15.95",
        description: "Sautéed sweet onions, bell peppers, and tender kale folded in farm eggs and crowned with fresh Haas avocado.",
        diet: "Vegetarian",
      },
    ],
  },
  {
    id: "chef-favorites",
    title: "Chef Duke's Specialties & Grits",
    subtitle: "Elevated Caribbean-American Fusion & Signature Brunch Plates",
    icon: "flame",
    items: [
      {
        name: "Shrimp & Stone Ground Grits",
        price: "$26.95",
        description: "8 jumbo shrimp, sautéed sweet onions and peppers over creamy stone ground cheddar grits, smothered in Chef Duke's signature Creole sauce.",
        tag: "House Signature",
        popular: true,
      },
      {
        name: "Herring & Grits",
        price: "$26.95",
        description: "Creamy cheese grits topped with traditional sautéed smoked herring, bell peppers, onions, and Chef Duke's savory Creole sauce.",
        tag: "Creole Craft",
      },
      {
        name: "NY Strip Steak & Eggs",
        price: "$29.95",
        description: "12oz hand-cut NY Strip steak grilled to order, served with two eggs any style, seasoned home fries, and house Creole chimichurri.",
        tag: "Prime Cut",
      },
      {
        name: "Uncle Dunn's Tempura Shrimp",
        price: "$28.00",
        description: "Crispy golden tempura battered jumbo shrimp tossed in sweet Sriracha chili lime glaze.",
      },
      {
        name: "Potato Bacon Lover Skillet",
        price: "$16.95",
        description: "Seasoned home fries and crispy bacon sautéed with melted cheddar, topped with two sunny-side-up eggs and Sriracha drizzle.",
      },
      {
        name: "Brunch Tacos Trio",
        price: "$18.95",
        description: "3 warm flour tortillas filled with scrambled eggs, Haitian marinade, onions, and peppers with your choice of Chorizo, Steak, Turkey Bacon, or Shrimp. (Add cheese +$2.00).",
      },
      {
        name: "Gourmet Slab Bacon",
        price: "$17.00",
        description: "Thick hand-cut artisan slab bacon glazed with house-made honey Sriracha reduction.",
      },
      {
        name: "Veggies & Grits",
        price: "$23.95",
        description: "Array of fresh garden vegetables braised in aromatic Creole sauce on a bed of warm cheese grits.",
      },
    ],
  },
  {
    id: "sides-drinks",
    title: "Sides, Coffee & Artisan Drinks",
    subtitle: "Complete Your Meal with Aromatic Espresso, Mocktails & Extras",
    icon: "coffee",
    items: [
      { name: "Truffle Fries", price: "$14.00", description: "Crispy seasoned fries tossed with white truffle oil and Parmesan." },
      { name: "Duke's Loaded Fries", price: "$12.00", description: "Golden fries topped with melted cheddar, bacon, and house seasoning." },
      { name: "Stone Ground Grits with Cheese", price: "$8.00", description: "Slow-cooked Southern style stone ground grits with creamy cheddar." },
      { name: "Gourmet Bacon / Taylor Ham / Pork Sausage / Chorizo", price: "$6.00", description: "Farm-fresh breakfast protein sides." },
      { name: "Turkey Bacon", price: "$7.00", description: "Lean grilled turkey bacon strips." },
      { name: "Grilled Chicken Breast", price: "$8.00", description: "Marinated grilled chicken cutlet." },
      { name: "Seasoned Home Fries", price: "$6.00", description: "Crispy diced potatoes with paprika and sautéed onions." },
      { name: "Raspberry Hibiscus Iced Tea", price: "$7.50", description: "House-brewed tropical floral hibiscus iced tea with fresh raspberry notes.", tag: "House Specialty" },
      { name: "Signature Mocktail Flight", price: "$16.00", description: "Sampler flight of three seasonal chef-crafted tropical brunch mocktails." },
      { name: "Artisan Coffee / Hot Tea", price: "$3.50", description: "Freshly roasted premium drip coffee or organic herbal teas." },
      { name: "Espresso (Single / Double)", price: "$3.50 / $6.00", description: "Rich European-style dark roast espresso shot." },
      { name: "Chilled Iced Coffee", price: "$4.50", description: "Cold-brewed smooth artisan iced coffee." },
    ],
  },
];

export default function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = MENU_DATA.map((cat) => {
    if (activeCategory !== "all" && cat.id !== activeCategory) {
      return null;
    }
    if (!searchQuery.trim()) {
      return cat;
    }
    const filteredItems = cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (filteredItems.length === 0) return null;
    return { ...cat, items: filteredItems };
  }).filter(Boolean) as MenuCategory[];

  return (
    <>
      {/* Schema.org Menu JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Estime's Café Restaurant Menu",
            "url": "https://www.estimescafe.com/menu",
            "mainEntityOfPage": "https://www.estimescafe.com/menu",
            "inLanguage": "en-US",
            "hasMenuSection": MENU_DATA.map((cat) => ({
              "@type": "MenuSection",
              "name": cat.title,
              "description": cat.subtitle,
              "hasMenuItem": cat.items.map((item) => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description || item.name,
                "offers": {
                  "@type": "Offer",
                  "price": item.price.replace(/[^0-9.]/g, "").split(".")[0] || "15",
                  "priceCurrency": "USD",
                },
              })),
            })),
          }),
        }}
      />

      {/* Hero Header */}
      <section className="relative text-brand-cream py-16 sm:py-24 border-b border-[#3e4925] overflow-hidden">
        {/* Background Image with Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/menu-hero.jpg"
            alt="Estime's Café Gourmet Breakfast, Brunch & Lunch Feast in Colonia, NJ"
            fill
            priority
            quality={90}
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141b0d]/95 via-[#232d14]/85 to-[#1c2410]/80" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#3e4925]/90 border border-brand-gold/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-gold-light mb-5 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Colonia, NJ &bull; Dine-In &bull; Takeout &bull; Catering</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 drop-shadow-sm">
            Breakfast, Brunch &amp; Lunch Menu
          </h1>

          <p className="font-serif text-base sm:text-lg text-brand-cream/90 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-sm">
            Handcrafted daily by Executive Chef Duke Estime. Made-from-scratch pancakes,
            Amaretto brioche French toast, artisan omelets, keto power bowls, and authentic Caribbean fusion.
          </p>

          {/* Quick CTA Pill Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-sans uppercase font-bold tracking-wider">
            <a
              href="tel:7326697581"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark hover:bg-brand-gold-light px-5 py-3 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Ahead: (732) 669-7581</span>
            </a>
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white border border-brand-cream/40 text-white hover:text-brand-green px-5 py-3 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>View Catering Trays</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter / Search Controls */}
      <section className="sticky top-20 z-30 bg-[#fbf8f2]/95 backdrop-blur-md border-b border-brand-line py-3 shadow-sm">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Category Switcher Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === "all"
                    ? "bg-brand-green text-white shadow-sm"
                    : "bg-brand-cream text-brand-muted hover:text-brand-green hover:bg-[#ede5d8]"
                }`}
              >
                All Dishes
              </button>
              {MENU_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-brand-green text-white shadow-sm"
                      : "bg-brand-cream text-brand-muted hover:text-brand-green hover:bg-[#ede5d8]"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dish or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-brand-line pl-8 pr-3 py-1.5 text-xs font-sans rounded-sm focus:outline-none focus:border-brand-green text-brand-text"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Listing Sections */}
      <section className="py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-brand-muted">
                No menu items found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-green underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-36">
                {/* Category Header */}
                <div className="border-b-2 border-brand-green/20 pb-3 mb-8">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block">
                    {cat.subtitle}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-brand-green font-normal">
                    {cat.title}
                  </h2>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-6 bg-white border transition-all duration-300 flex flex-col justify-between rounded-sm ${
                        item.popular
                          ? "border-brand-gold/60 shadow-sm hover:shadow-md bg-gradient-to-br from-white to-[#fcfaf4]"
                          : "border-brand-line hover:border-brand-green/40 hover:shadow-sm"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-text leading-snug">
                            {item.name}
                          </h3>
                          <span className="font-serif text-lg font-bold text-brand-green whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>

                        {item.description && (
                          <p className="font-serif text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Tags & Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-brand-line/50 text-[10px] font-sans font-semibold uppercase tracking-wider">
                        {item.tag && (
                          <span className="inline-flex items-center gap-1 bg-[#f4ede1] text-brand-green px-2.5 py-0.5 rounded-full">
                            <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
                            {item.tag}
                          </span>
                        )}
                        {item.diet && (
                          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                            {item.diet}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Policies & Catering Cross-sell Callout */}
      <section className="bg-brand-cream border-t border-brand-line py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-gold block mb-1">
                Ordering for a Crowd or Office?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-green mb-3">
                Corporate Breakfast &amp; Weekend Brunch Party Trays
              </h3>
              <p className="font-serif text-sm text-brand-muted leading-relaxed">
                Hosting a meeting, family gathering, or celebration? We offer half &amp; full catering platters
                of our famous Brioche French Toast, Lemon Ricotta Pancakes, Rasta Pasta, Haitian Salmon, and more with delivery across Middlesex &amp; Union County.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/catering"
                className="text-center bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Explore Catering Menu &rarr;
              </Link>
              <a
                href="tel:7326697581"
                className="text-center border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Call (732) 669-7581
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-brand-line text-center text-xs font-serif text-brand-muted">
            <p>
              * 20% gratuity added to parties of 6 or more. 3% credit card fee on all non-cash transactions. No substitutions to specialty combinations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
