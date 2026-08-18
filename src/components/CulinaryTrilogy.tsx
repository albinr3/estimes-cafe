import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LiveStatusCard from "./LiveStatusCard";

export default function CulinaryTrilogy() {
  return (
    <section className="border-b border-brand-line bg-[#fbf7ef] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-brand-line">
        {/* Left Block: Signature Brunch & Pancakes */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 group">
          <div className="p-8 sm:p-7 flex flex-col justify-between bg-[#fbf7ef]">
            <div>
              <span className="text-[11px] tracking-[0.15em] uppercase font-bold text-brand-gold block mb-2">
                Morning &bull; Weekend Brunch
              </span>
              <h2 className="font-serif text-2xl sm:text-[25px] text-brand-green font-normal leading-tight mb-3">
                Signature Weekend Brunch &amp; Specialty Pancakes in Colonia, NJ
              </h2>
              <p className="font-serif text-sm text-[#48423c] leading-relaxed mb-6">
                Central Jersey’s favorite Saturday &amp; Sunday brunch destination. Enjoy our famous
                lemon ricotta pancakes, golden buttermilk stacks, and signature Amaretto Brioche
                French Toast dipped in sweet vanilla custard.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-brand-gold transition-colors"
            >
              <span>Explore Brunch &amp; Pancakes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative min-h-[280px] sm:min-h-full bg-brand-cream border-t sm:border-t-0 sm:border-l border-brand-line overflow-hidden">
            <Image
              src="/assets/signature.jpg"
              alt="Signature Lemon Ricotta Pancakes and Amaretto French Toast at Estime's Cafe in Colonia NJ"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Center Block: Live Hours Card */}
        <div className="lg:col-span-3">
          <LiveStatusCard />
        </div>

        {/* Right Block: Lunch, Sandwiches & Haitian Flavors */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 group">
          <div className="p-8 sm:p-7 flex flex-col justify-between bg-[#fbf7ef]">
            <div>
              <span className="text-[11px] tracking-[0.15em] uppercase font-bold text-brand-gold block mb-2">
                Midday &bull; Sandwiches &amp; Lunch
              </span>
              <h2 className="font-serif text-2xl sm:text-[25px] text-brand-green font-normal leading-tight mb-3">
                Fresh Lunch Specials &amp; Handcrafted Sandwiches in Colonia, NJ
              </h2>
              <p className="font-serif text-sm text-[#48423c] leading-relaxed mb-6">
                Your premier midday lunch restaurant in Woodbridge Township. Savor handcrafted
                breakfast sandwiches like &ldquo;The Mayor,&rdquo; Crispy Sriracha Chicken, savory
                burgers, and flavorful Haitian omelets.
              </p>
            </div>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-brand-gold transition-colors"
            >
              <span>Explore Lunch &amp; Sandwiches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative min-h-[280px] sm:min-h-full bg-brand-cream border-t sm:border-t-0 sm:border-l border-brand-line overflow-hidden">
            <Image
              src="/assets/hash.jpg"
              alt="Handcrafted Breakfast Sandwiches and Savory Breakfast at Estime's Cafe"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
