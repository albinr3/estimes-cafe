import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2a3319] text-brand-cream border-t border-[#3e4925] pt-16 pb-24 sm:pb-16 font-sans">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif italic text-3xl sm:text-4xl text-white font-bold tracking-tight">
                Estime&apos;s
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-brand-gold-light font-bold">
                Café &bull; Colonia, NJ
              </span>
            </Link>
            <p className="font-serif text-sm text-brand-cream/80 leading-relaxed mb-6">
              Premier breakfast, signature brunch, and lunch crafted by Executive Chef Duke Estime.
              Blending classic American comfort favorites with authentic Caribbean culinary craft
              in Colonia, New Jersey.
            </p>
            <div className="text-xs text-brand-gold-light font-medium">
              &copy; {new Date().getFullYear()} Estime&apos;s Café. All rights reserved.
            </div>
          </div>

          {/* Menu Categories Links (Future URLs with #) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Dining Menu
            </h4>
            <ul className="font-serif text-sm space-y-2.5 text-brand-cream/80">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Breakfast Classics &amp; Omelets
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Lemon Ricotta Pancakes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Amaretto Brioche French Toast
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  The Mayor Breakfast Sandwich
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Shrimp &amp; Stone Ground Grits
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Keto &amp; High Protein Bowls
                </a>
              </li>
            </ul>
          </div>

          {/* Catering & Services (Future URLs with #) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Catering &amp; Events
            </h4>
            <ul className="font-serif text-sm space-y-2.5 text-brand-cream/80">
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Corporate Breakfast Trays
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Office Lunch Catering
                </a>
              </li>
              <li>
                <a href="#catering" className="hover:text-white transition-colors">
                  Rasta Pasta &amp; Entrée Platters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Private Brunch Events
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews (4.8★)
                </a>
              </li>
            </ul>
          </div>

          {/* NAP Information */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Visit &amp; Contact
            </h4>
            <div className="space-y-3 font-serif text-sm text-brand-cream/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold-light flex-shrink-0 mt-1" />
                <span>238 Inman Avenue, Colonia, NJ 07067</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                <a
                  href="tel:7326697581"
                  className="hover:text-white font-semibold transition-colors"
                >
                  (732) 669-7581
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                <a
                  href="mailto:dandley@dukesteakhouse.com"
                  className="hover:text-white transition-colors text-xs"
                >
                  dandley@dukesteakhouse.com
                </a>
              </p>
              <p className="flex items-start gap-2 pt-2 text-xs">
                <Clock className="w-4 h-4 text-brand-gold-light flex-shrink-0 mt-0.5" />
                <span>
                  Tue – Sun: 8:00 AM – 3:00 PM
                  <br />
                  Monday: Closed
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* SEO Local Footer Tags */}
        <div className="pt-8 text-center text-xs text-brand-cream/50 font-serif leading-relaxed">
          <p>
            Estime’s Café proudly serves guests across Central New Jersey: Colonia, Woodbridge,
            Iselin, Clark, Rahway, Edison, Scotch Plains, Westfield, Cranford, Fanwood, and Linden.
          </p>
        </div>
      </div>
    </footer>
  );
}
