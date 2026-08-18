"use client";

import { useState } from "react";
import { Sparkles, Utensils, Award, Flame, Heart } from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  badge?: string;
  popular?: boolean;
};

type MenuCategory = {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "spatula",
    title: "Off the Spatula",
    icon: "🥞",
    items: [
      {
        name: "Amaretto Brioche French Toast",
        price: "$16.95",
        desc: "Chunky brioche bread drenched in aromatic vanilla custard, griddled golden and drizzled with Chef Duke's signature Amaretto sauce.",
        badge: "Chef Signature",
        popular: true,
      },
      {
        name: "Lemon Ricotta Pancakes",
        price: "$14.95",
        desc: "Fluffy handcrafted stack topped with warm lemon butter, powdered sugar, and a side of house-made blackberry strawberry jam.",
        badge: "Top Seller",
        popular: true,
      },
      {
        name: "Chocolate Chip Pancakes",
        price: "$12.95",
        desc: "Buttermilk griddle cakes loaded with melted semi-sweet chocolate chips and real whipped cream.",
      },
      {
        name: "Brioche French Toast",
        price: "$14.95",
        desc: "Thick-cut golden brioche dipped in sweet spiced batter, served with 100% pure maple syrup and cinnamon butter.",
      },
      {
        name: "Classic Buttermilk Stack",
        price: "$11.95",
        desc: "Traditional golden-brown fluffy pancakes served with whipped butter and warm syrup.",
      },
    ],
  },
  {
    id: "sandwiches",
    title: "Brunch Sandwiches & Lunch",
    icon: "🥪",
    items: [
      {
        name: "The Mayor Sandwich",
        price: "$11.95",
        desc: "Succulent breakfast sausage, farm-fresh scrambled eggs, and melted cheese on a toasted bakery brioche bun.",
        badge: "Neighborhood Icon",
        popular: true,
      },
      {
        name: "Siracha Chicken Sandwich",
        price: "$24.00",
        desc: "Crispy hand-breaded chicken thigh on a toasted brioche roll with house spicy Sriracha glaze and tangy pickles.",
        badge: "Lunch Favorite",
      },
      {
        name: "The Jimmy",
        price: "$11.95",
        desc: "Crispy bacon, seasoned home fries, and melted American cheese folded omelet-style on brioche.",
      },
      {
        name: "The Fritz Grilled Cheese",
        price: "$16.95",
        desc: "Melted Swiss, goat cheese, and applewood bacon on buttery griddled rye bread.",
      },
      {
        name: "Deluxe Steakhouse Burger",
        price: "$19.95",
        desc: "Lean seasoned beef patty cooked to order, crisp lettuce, vine tomato, and sweet red onions on brioche.",
      },
    ],
  },
  {
    id: "chef-favorites",
    title: "Chef Duke's Fusion & Grits",
    icon: "🍤",
    items: [
      {
        name: "Shrimp and Grits",
        price: "$26.95",
        desc: "8 jumbo sautéed shrimp, sweet bell peppers, and onions over rich stone-ground cheese grits with Chef Duke's Creole sauce.",
        badge: "Must Try",
        popular: true,
      },
      {
        name: "12oz NY Strip Steak & Eggs",
        price: "$29.95",
        desc: "Prime 12oz NY strip steak with two farm eggs styled your way, seasoned home fries, and house Creole chimichurri.",
        badge: "Prime Cut",
      },
      {
        name: "Haitian Spicy Omelet",
        price: "$16.95",
        desc: "Traditional smoked herring, sautéed onions, sweet bell peppers, and Haitian spices served with home fries and toast.",
        badge: "Heritage Classic",
        popular: true,
      },
      {
        name: "Uncle Dunn's Crispy Shrimp",
        price: "$28.00",
        desc: "Tempura fried jumbo shrimp tossed in a vibrant sweet chili Sriracha lime glaze with house slaw.",
      },
      {
        name: "Herring & Cheese Grits",
        price: "$26.95",
        desc: "Authentic Caribbean-seasoned herring over slow-cooked creamy cheese grits with Creole reduction.",
      },
    ],
  },
  {
    id: "keto-healthy",
    title: "Keto & High Protein",
    icon: "🥑",
    items: [
      {
        name: "Power Omelet",
        price: "$20.95",
        desc: "Four egg white omelet infused with Haitian marinade, braised baby kale, and melted cheddar, topped with grilled chicken breast.",
        badge: "High Protein",
        popular: true,
      },
      {
        name: "Alfano Power Omelet",
        price: "$25.95",
        desc: "Six egg white omelet loaded with jalapeños, kale, and sharp cheddar, crowned with a grilled chicken cutlet and a side of savory sausage.",
      },
      {
        name: "Beckler Goat Cheese Omelet",
        price: "$17.95",
        desc: "Egg white omelet stuffed with vine tomato, baby kale, sautéed mushrooms, creamy goat cheese, and fresh sliced avocado.",
      },
      {
        name: "Veggie Lover Omelet",
        price: "$15.95",
        desc: "Farm eggs folded with sweet bell peppers, red onions, and wilted kale, topped with sliced Hass avocado.",
      },
    ],
  },
  {
    id: "tacos-benedicts",
    title: "Brunch Tacos & Benedicts",
    icon: "🌮",
    items: [
      {
        name: "Brunch Tacos Trio",
        price: "$18.95",
        desc: "Three warm flour tortillas with fluffy scrambled eggs, Haitian marinade, peppers, and your choice of Chorizo, Steak, Turkey Bacon, or Shrimp.",
        badge: "Weekend Staple",
        popular: true,
      },
      {
        name: "Estime's Classic Benedict",
        price: "$19.95",
        desc: "Poached eggs on toasted English muffin with your choice of turkey bacon, fried shrimp, or pastrami, drizzled in rich Hollandaise.",
      },
      {
        name: "Farmer's Plate Breakfast",
        price: "$13.95",
        desc: "Three locally farm-raised eggs cooked to your liking, seasoned golden home fries, and artisan toast with bacon or Taylor ham.",
      },
      {
        name: "Potato Bacon Lover Skillet",
        price: "$16.95",
        desc: "Crispy home fries sautéed with bacon and cheddar, topped with two sunny-side-up eggs and Sriracha drizzle.",
      },
    ],
  },
];

export default function MenuShowcase() {
  const [activeTab, setActiveTab] = useState<string>("spatula");

  const currentCategory =
    menuCategories.find((cat) => cat.id === activeTab) || menuCategories[0];

  return (
    <section id="menu" className="py-16 sm:py-20 bg-brand-paper border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
            Handcrafted With Passion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight mb-4">
            Our Dining &amp; Brunch Menu
          </h2>
          <p className="font-serif text-base text-brand-muted leading-relaxed">
            Every dish is cooked to order using farm-fresh eggs, local bakery breads, and Chef
            Duke’s proprietary Caribbean marinades.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 sm:gap-3 pb-4 mb-10 border-b border-brand-line/60 no-scrollbar">
          {menuCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all duration-200 ${
                  isActive
                    ? "bg-brand-green text-white shadow-sm border border-brand-green"
                    : "bg-[#f6f0e6] text-brand-text hover:bg-brand-cream border border-brand-line/80"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {currentCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#fbf7ef] border border-brand-line hover:border-brand-gold transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-text group-hover:text-brand-green transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-brand-cream border border-brand-gold text-brand-gold">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-lg font-bold text-brand-green flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="font-serif text-sm text-[#5d564e] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-line/50 flex items-center justify-between text-xs text-brand-muted font-sans">
                <span className="flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-brand-gold" />
                  Made Fresh to Order
                </span>
                <a
                  href="tel:7326697581"
                  className="font-bold text-brand-green hover:text-brand-gold uppercase tracking-wider text-[11px] transition-colors"
                >
                  Order for Pickup &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Notice & Disclaimer */}
        <div className="mt-12 p-6 bg-[#f4ede1] border border-brand-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-green mb-1">
              Dietary Preferences &amp; Allergen Notice
            </h4>
            <p className="font-serif text-xs text-brand-muted">
              Keto, vegetarian, and dairy-conscious options available. Please inform our team of any
              food sensitivities or allergies.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:7326697581"
              className="bg-brand-green text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-brand-green-dark transition-colors"
            >
              Call (732) 669-7581
            </a>
            <a
              href="#catering"
              className="border border-brand-green text-brand-green px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-brand-green hover:text-white transition-colors"
            >
              Catering Trays
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
