import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Utensils } from "lucide-react";
import LiveStatusCard from "./LiveStatusCard";

export default function CulinaryTrilogy() {
  return (
    <section className="py-16 sm:py-20 bg-brand-paper border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
            Experience Estime&apos;s &bull; Fresh Daily
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight mb-3">
            Handcrafted Morning Brunch &amp; Midday Lunch
          </h2>
          <p className="font-serif text-sm sm:text-base text-brand-muted leading-relaxed">
            Scratch cooking every day with farm-fresh eggs, thick brioche,
            and Chef Duke&apos;s signature Caribbean seasonings.
          </p>
        </div>

        {/* 3-Column Balanced Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Weekend Brunch & Specialty Pancakes */}
          <article className="bg-[#fbf7ef] border border-brand-line shadow-sm hover:shadow-md hover:border-brand-gold transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              {/* Photo */}
              <div className="relative h-60 sm:h-64 w-full bg-brand-cream overflow-hidden">
                <Image
                  src="/assets/signature-weekend-brunch-specialty-pancakes-colonia-nj.webp"
                  alt="Signature weekend brunch specialty pancakes with berry compote and crispy bacon at Estime's Cafe in Colonia NJ"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#fbf8f2]/95 backdrop-blur-sm border border-brand-gold text-brand-text shadow-sm">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    Weekend Brunch
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <span className="text-[11px] tracking-[0.15em] uppercase font-bold text-brand-gold block mb-2">
                  Morning &bull; Weekend Brunch
                </span>
                <h3 className="font-serif text-2xl text-brand-green font-normal leading-snug mb-3">
                  Signature Weekend Brunch &amp; Specialty Pancakes in Colonia, NJ
                </h3>
                <p className="font-serif text-sm text-[#48423c] leading-relaxed mb-5">
                  Central Jersey’s favorite Saturday &amp; Sunday brunch destination. Enjoy our famous
                  lemon ricotta pancakes, golden buttermilk stacks, and signature Amaretto Brioche
                  French Toast dipped in sweet vanilla custard.
                </p>

                {/* Dish Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-line/60">
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    Lemon Ricotta
                  </span>
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    Amaretto Brioche
                  </span>
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    Buttermilk Stacks
                  </span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-6 sm:p-7 pt-0">
              <Link
                href="/menu"
                className="w-full inline-flex items-center justify-center gap-2 border border-brand-green/30 group-hover:border-brand-green bg-transparent group-hover:bg-brand-green text-brand-green group-hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <span>Explore Brunch &amp; Pancakes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 2: Center Live Hours & Schedule Jewel */}
          <div className="flex flex-col">
            <LiveStatusCard />
          </div>

          {/* Card 3: Fresh Lunch Specials & Sandwiches */}
          <article className="bg-[#fbf7ef] border border-brand-line shadow-sm hover:shadow-md hover:border-brand-gold transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              {/* Photo */}
              <div className="relative h-60 sm:h-64 w-full bg-brand-cream overflow-hidden">
                <Image
                  src="/assets/fresh-lunch-specials-handcrafted-sandwiches-colonia-nj.webp"
                  alt="Fresh lunch specials handcrafted burger on a brioche bun with crispy fries at Estime's Cafe in Colonia NJ"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-[#fbf8f2]/95 backdrop-blur-sm border border-brand-gold text-brand-text shadow-sm">
                    <Utensils className="w-3 h-3 text-brand-gold" />
                    Midday Specials
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <span className="text-[11px] tracking-[0.15em] uppercase font-bold text-brand-gold block mb-2">
                  Midday &bull; Sandwiches &amp; Lunch
                </span>
                <h3 className="font-serif text-2xl text-brand-green font-normal leading-snug mb-3">
                  Fresh Lunch Specials &amp; Handcrafted Sandwiches in Colonia, NJ
                </h3>
                <p className="font-serif text-sm text-[#48423c] leading-relaxed mb-5">
                  Midday lunch in Woodbridge Township. Savor breakfast sandwiches like
                  &ldquo;The Mayor,&rdquo; Crispy Sriracha Chicken, savory burgers, and
                  flavorful Haitian omelets.
                </p>

                {/* Dish Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-line/60">
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    The Mayor Sandwich
                  </span>
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    Sriracha Chicken
                  </span>
                  <span className="text-[11px] font-medium bg-[#f3ece0] text-brand-text px-2.5 py-1 rounded-sm">
                    Haitian Fusion
                  </span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-6 sm:p-7 pt-0">
              <Link
                href="/menu"
                className="w-full inline-flex items-center justify-center gap-2 border border-brand-green/30 group-hover:border-brand-green bg-transparent group-hover:bg-brand-green text-brand-green group-hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <span>Explore Lunch &amp; Sandwiches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
