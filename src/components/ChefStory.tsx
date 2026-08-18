import Image from "next/image";
import { Award, Utensils, HeartHandshake } from "lucide-react";

export default function ChefStory() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-brand-cream border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Visual Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 border border-brand-line">
              <Image
                src="/assets/interior.jpg"
                alt="Estime's Cafe Warm and Welcoming Dining Room Interior in Colonia NJ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-64 sm:h-80 border border-brand-line mt-6">
              <Image
                src="/assets/exterior.jpg"
                alt="Estime's Cafe Storefront on Inman Avenue Colonia New Jersey"
                fill
                className="object-cover"
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
              Rooted in Family, Driven by Culinary Craft
            </h2>

            <div className="space-y-4 font-serif text-base text-[#48423c] leading-relaxed mb-8">
              <p>
                Founded in Colonia, New Jersey by brothers <strong>Duke and Dumond Estime</strong>,
                Estime’s Café was born from a shared belief: that breakfast and brunch should be an
                unforgettable gathering experience filled with warmth, character, and bold flavors.
              </p>
              <p>
                Led by <strong>Executive Chef Duke Estime</strong>, the kitchen masterfully merges
                classic American morning comfort food—golden buttermilk pancakes, farm egg omelets,
                and crisp breakfast sandwiches—with his rich Haitian and Caribbean heritage.
              </p>
              <p>
                From house-marinated meats and Creole-infused cheese grits to velvety Amaretto
                sauce on thick brioche, every recipe is made from scratch with genuine hospitality.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-line">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-paper border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    8+ Years
                  </h4>
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
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    Chef-Driven
                  </h4>
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
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text">
                    Community First
                  </h4>
                  <p className="font-serif text-xs text-brand-muted">
                    Warm, personal neighborhood care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
