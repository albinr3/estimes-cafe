import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Utensils } from "lucide-react";

interface SpecialtyItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  href: string;
  image: string;
  alt: string;
}

const specialties: SpecialtyItem[] = [
  {
    id: "lemon-ricotta",
    name: "Lemon Ricotta Pancakes",
    category: "Off the Spatula",
    desc: "See the full menu for current details.",
    href: "/menu#off-the-spatula",
    image: "/assets/lemon-ricotta-pancakes.jpg",
    alt: "Signature Lemon Ricotta Pancakes with warm lemon butter glaze and berries at Estime's Cafe in Colonia NJ",
  },
  {
    id: "lobster-benedict",
    name: "Lobster",
    category: "Benedicts",
    desc: "See the full menu for current details.",
    href: "/menu#benedicts",
    image: "/assets/lobster-benedict.jpg",
    alt: "Gourmet Lobster Eggs Benedict with butter-poached lobster and creamy Hollandaise at Estime's Cafe in Colonia NJ",
  },
  {
    id: "amaretto-french-toast",
    name: "Amaretto French Toast",
    category: "Off the Spatula",
    desc: "See the full menu for current details.",
    href: "/menu#off-the-spatula",
    image: "/assets/amaretto-brioche-french-toast.webp",
    alt: "Signature Amaretto brioche French toast with sweet amaretto glaze, powdered sugar, and berry compote at Estime's Cafe in Colonia NJ",
  },
  {
    id: "truffle-burger",
    name: "Truffle Burger",
    category: "Burgers",
    desc: "Truffle dusted mushrooms and onions with Swiss.",
    href: "/menu#burgers",
    image: "/assets/truffle-burger.jpg",
    alt: "Gourmet Truffle Burger with sautéed mushrooms, Swiss cheese and french fries at Estime's Cafe",
  },
  {
    id: "steak-and-eggs",
    name: "NY Strip Breakfast",
    category: "Chef Specials",
    desc: "See the full menu for current details.",
    href: "/menu#chef-specials",
    image: "/assets/ny-strip-breakfast-steak.webp",
    alt: "Juicy seared NY strip breakfast steak topped with pickled red onions and crispy shoestring potatoes at Estime's Cafe in Central NJ",
  },
  {
    id: "shrimp-and-grits",
    name: "Shrimp",
    category: "Brunch Bowls",
    desc: "Creamy grits, Creole sauce, and your choice.",
    href: "/menu#brunch-bowls",
    image: "/assets/creole-shrimp-grits.jpg",
    alt: "Haitian Creole Shrimp and Grits in savory reduction gravy at Estime's Cafe in Colonia NJ",
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
            Explore selections from the current breakfast, brunch, and lunch menu.
          </p>
        </div>

        {/* Visual Specialties Grid (6 Cards with HD Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block"
            >
              <article className="flex h-full flex-col justify-between overflow-hidden border border-brand-line bg-[#fbf7ef] shadow-sm transition-all duration-300 hover:border-brand-gold hover:shadow-md">
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
                <div className="flex items-center justify-between border-t border-brand-line/60 bg-[#f6efe3] px-6 py-3.5 font-sans text-xs text-brand-muted">
                  <span className="flex items-center gap-1 font-medium"><Utensils className="h-3.5 w-3.5 text-brand-gold" />View full menu details</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green transition-colors group-hover:text-brand-gold">View in Menu &rarr;</span>
                </div>
              </article>
            </Link>
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
              View the complete current menu with breakfast, brunch, lunch, sides, and drinks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-dark px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <span>View Full Menu &amp; Prices</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
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
