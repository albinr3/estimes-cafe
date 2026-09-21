import Image from "next/image";
import Link from "next/link";
import { Award, Utensils, HeartHandshake, ArrowRight } from "lucide-react";

export default function ChefStory() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-cream border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Visual Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 border border-brand-line overflow-hidden group">
              <Image
                src="/assets/estimes-cafe-dining-room-interior-colonia-nj.jpg"
                alt="Estime's Cafe Beautiful Dining Room Interior with Botanical Wall and Rustic Lighting in Colonia NJ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 sm:h-80 border border-brand-line mt-6 overflow-hidden group">
              <Image
                src="/assets/estimes-cafe-storefront-colonia-nj.jpg"
                alt="Estime's Cafe Storefront and Outdoor Patio at 238 Inman Ave, Colonia NJ"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Right: Story & Culinary Identity */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
              Our Heritage &bull; Est. 2018
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal leading-tight mb-5">
              Executive Chef Duke Estime &amp; Authentic Haitian-American Fusion in NJ
            </h2>

            <div className="space-y-4 font-serif text-base text-[#48423c] leading-relaxed mb-8">
              <p>
                Founded in Colonia, New Jersey by brothers <strong>Duke and Dumond Estime</strong>,
                Estime’s Café brings Haitian home cooking into dialogue with the American breakfast table.
              </p>
              <p>
                Led by <strong>Executive Chef Duke Estime</strong>, our scratch kitchen pairs
                classic American morning comfort food, like golden buttermilk pancakes and farm egg omelets,
                with bold Creole spices, citrus marinades, and stone-ground grits.
              </p>
              <p>
                Whether you stop in for a spicy Haitian omelet or a stack of lemon ricotta pancakes,
                the food is cooked to order by a local family serving Colonia since 2018.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-line">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    8+ Years
                  </p>
                  <p className="font-serif text-xs text-brand-muted">
                    Proudly serving Colonia &amp; Central NJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    Chef-Driven
                  </p>
                  <p className="font-serif text-xs text-brand-muted">
                    Scratch kitchen &amp; daily fresh prep
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    James Beard
                  </p>
                  <p className="font-serif text-xs text-brand-muted">
                    Honoree &amp; NY ICE Graduate
                  </p>
                </div>
              </div>
            </div>

            {/* Read Full Story Button */}
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Read Full Story &amp; Chef Duke&apos;s Accolades
                <ArrowRight className="w-4 h-4 text-brand-gold-light" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
