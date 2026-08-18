import Image from "next/image";
import { Sparkles, ArrowRight, Phone, Utensils, Award } from "lucide-react";

interface SpecialtyItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  desc: string;
  image: string;
  alt: string;
}

const specialties: SpecialtyItem[] = [
  {
    id: "lemon-ricotta",
    name: "Lemon Ricotta Pancakes",
    category: "Morning Breakfast",
    badge: "Top Seller",
    desc: "Fluffy artisanal stack topped with warm lemon butter glaze, powdered sugar, and fresh blackberries & strawberries.",
    image: "/assets/lemon-ricotta-pancakes.jpg",
    alt: "Signature Lemon Ricotta Pancakes with warm lemon butter glaze and berries at Estime's Cafe in Colonia NJ",
  },
  {
    id: "amaretto-french-toast",
    name: "Amaretto Brioche French Toast",
    category: "Signature Brunch",
    badge: "Chef Signature",
    desc: "Thick-cut golden brioche soaked in rich vanilla custard with caramelized edges and Chef Duke's warm Amaretto sauce.",
    image: "/assets/amaretto-french-toast.jpg",
    alt: "Amaretto Brioche French Toast with sweet vanilla custard at Estime's Cafe in Colonia NJ",
  },
  {
    id: "the-mayor",
    name: "The Mayor Breakfast Sandwich",
    category: "Brunch Sandwiches",
    badge: "Neighborhood Icon",
    desc: "Savory breakfast sausage, fluffy scrambled eggs, and melted cheese on a toasted golden bakery brioche bun.",
    image: "/assets/the-mayor-sandwich.jpg",
    alt: "The Mayor Breakfast Sandwich with sausage, egg and cheese on artisan brioche at Estime's Cafe",
  },
  {
    id: "shrimp-and-grits",
    name: "Haitian Creole Shrimp & Grits",
    category: "Caribbean Fusion",
    badge: "Must Try",
    desc: "Jumbo blackened shrimp and sautéed bell peppers over slow-cooked creamy stone-ground cheese grits with Creole reduction.",
    image: "/assets/creole-shrimp-grits.jpg",
    alt: "Haitian Creole Shrimp and Grits in savory reduction gravy at Estime's Cafe in Colonia NJ",
  },
  {
    id: "steak-and-eggs",
    name: "12oz NY Strip Steak & Eggs",
    category: "Weekend Brunch",
    badge: "Prime Cut",
    desc: "Prime 12oz NY strip steak with two farm-fresh sunny eggs, seasoned golden home fries, and house chimichurri.",
    image: "/assets/steak-and-eggs.jpg",
    alt: "12oz NY Strip Steak and Eggs with seasoned home fries at Estime's Cafe in Central NJ",
  },
  {
    id: "sriracha-chicken",
    name: "Crispy Sriracha Chicken Sandwich",
    category: "Midday Lunch",
    badge: "Lunch Favorite",
    desc: "Hand-breaded crispy chicken thigh coated in glossy honey Sriracha glaze with tangy cabbage slaw and pickles on brioche.",
    image: "/assets/sriracha-chicken-sandwich.jpg",
    alt: "Crispy Sriracha Chicken Sandwich with slaw on toasted brioche at Estime's Cafe in Colonia NJ",
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-brand-paper border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
            Culinary Craft &bull; Colonia, NJ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-brand-green font-normal tracking-tight mb-4">
            Handcrafted Breakfast, Weekend Brunch &amp; Fresh Lunch Menu
          </h2>
          <p className="font-serif text-base sm:text-lg text-brand-muted leading-relaxed">
            A glimpse into our chef-driven scratch kitchen. Every dish is cooked to order using
            cage-free farm eggs, artisan bakery brioche, and Chef Duke’s signature Caribbean marinades.
          </p>
        </div>

        {/* Visual Specialties Grid (6 Cards with HD Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((item) => (
            <article
              key={item.id}
              className="bg-[#fbf7ef] border border-brand-line overflow-hidden group hover:border-brand-gold transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-cream">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badge Overlay */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#fbf8f2]/95 backdrop-blur-sm border border-brand-gold text-brand-text shadow-sm">
                      <Sparkles className="w-3 h-3 text-brand-gold" />
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold block mb-1">
                    {item.category}
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-green transition-colors mb-2.5 leading-snug">
                    {item.name}
                  </p>
                  <p className="font-serif text-sm text-[#5d564e] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-[#f6efe3] border-t border-brand-line/60 flex items-center justify-between text-xs text-brand-muted font-sans">
                <span className="flex items-center gap-1 font-medium">
                  <Utensils className="w-3.5 h-3.5 text-brand-gold" />
                  Made Fresh to Order
                </span>
                <span className="text-brand-green font-bold text-[11px] uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                  View in Menu &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Big CTA Banner - Direct Funnel to /menu/ */}
        <div className="mt-14 p-8 sm:p-10 bg-[#f4ede1] border border-brand-line text-center flex flex-col items-center justify-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold block mb-2">
              Ready to Order or Dine In?
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-normal text-brand-green mb-3">
              Explore Our Full Breakfast, Brunch &amp; Lunch Menu
            </p>
            <p className="font-serif text-sm sm:text-base text-[#5d564e] mb-6 leading-relaxed">
              View our complete dining menu featuring dozens of specialty omelets, breakfast tacos,
              Benedicts, keto-friendly plates, and handcrafted beverages with complete pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-dark px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <span>View Full Menu &amp; Prices</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:7326697581"
                className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call to Order: (732) 669-7581</span>
              </a>
            </div>
            <p className="font-serif text-xs text-brand-muted mt-5">
              Dine-in, takeout, curbside pickup, and party trays available &bull; 238 Inman Ave, Colonia, NJ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
