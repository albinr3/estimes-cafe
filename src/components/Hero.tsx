import Image from "next/image";
import { ArrowRight, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-brand-cream border-b border-brand-line overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
        {/* Left Copy Section */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:py-16 xl:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] xl:pr-10 z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold">
              Brunch &bull; Local &bull; Community &bull; Colonia, NJ
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.08] text-brand-green tracking-tight mb-5">
            Estime&apos;s Café — Premier Breakfast, Brunch, Lunch &amp; Artisan Coffee in Colonia, NJ
          </h1>

          <p className="font-serif text-base sm:text-lg text-[#48423c] leading-relaxed max-w-xl mb-8">
            A vibrant neighborhood table where American comfort classics meet authentic Haitian and
            Caribbean flavor. Crafted daily with fresh ingredients by Chef Duke Estime.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-brand-green text-white hover:bg-brand-green-dark border border-brand-green px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] shadow-sm transition-all duration-200"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#location"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-brand-green hover:bg-brand-green hover:text-white border border-brand-green px-6 py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Get Directions</span>
            </a>

            <a
              href="tel:7326697581"
              className="inline-flex items-center justify-center gap-2 bg-[#f4ede1] text-brand-text hover:bg-brand-gold hover:text-white border border-brand-line px-5 py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>(732) 669-7581</span>
            </a>
          </div>

          {/* Quick highlight tags */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-brand-muted pt-2 border-t border-brand-line/60">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Lemon Ricotta Pancakes
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Amaretto French Toast
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Full Corporate Catering
            </span>
          </div>
        </div>

        {/* Right Visual Section */}
        <div className="lg:col-span-6 xl:col-span-7 relative min-h-[340px] sm:min-h-[400px] lg:min-h-[520px] bg-brand-cream border-t lg:border-t-0 lg:border-l border-brand-line">
          <Image
            src="/assets/hero.jpg"
            alt="Estime's Cafe Signature Breakfast and Brunch Spread in Colonia NJ"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Badge Overlay */}
          <div className="absolute bottom-6 right-6 bg-[#fbf8f2]/95 backdrop-blur-md border border-brand-line p-4 shadow-lg hidden sm:block max-w-xs">
            <span className="text-[10px] tracking-[0.15em] uppercase font-bold text-brand-gold block mb-1">
              Colonia Favorite
            </span>
            <p className="font-serif text-sm text-brand-green font-medium leading-snug">
              &ldquo;The best breakfast sandwiches and brunch fusion in Central NJ.&rdquo;
            </p>
            <div className="flex items-center gap-1 mt-2 text-brand-gold text-xs">
              ★★★★★ <span className="text-brand-muted text-[11px] ml-1 font-sans">4.8 (180+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
