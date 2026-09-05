import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_NAP_NAME, BUSINESS_RATING } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-[#2a3319] text-brand-cream border-t border-[#3e4925] pt-16 pb-24 sm:pb-16 font-sans">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & About */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/assets/estimes-cafe-logo.webp"
                alt="Estimé by chef Duke — Estime's Café"
                width={180}
                height={70}
                className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-serif text-sm text-brand-cream/80 leading-relaxed mb-4">
              Premier breakfast, signature brunch, and lunch crafted by Executive Chef Duke Estime.
              Blending classic American comfort favorites with authentic Caribbean culinary craft
              in Colonia, New Jersey.
            </p>
            <div className="mb-6">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-gold-light hover:text-white transition-colors"
              >
                About Our Story &amp; Chef Duke &rarr;
              </Link>
            </div>
            <div className="text-xs text-brand-gold-light font-medium">
              &copy; {new Date().getFullYear()} Estime&apos;s Café. All rights reserved.
            </div>
          </div>

          {/* Menu Categories Links */}
          <div className="lg:col-span-3">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Café &amp; Catering Menu
            </p>
            <ul className="font-serif text-sm space-y-2.5 text-brand-cream/80">
              <li>
                <Link href="/order-online" className="text-brand-gold-light font-bold hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Order Online (Delivery &amp; Pickup)</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Breakfast, Brunch &amp; Lunch Menu
                </Link>
              </li>
              <li>
                <Link href="/catering#platter-catalog" className="hover:text-white transition-colors">
                  Catering Party Trays &amp; Platters
                </Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-white transition-colors">
                  Party Trays &amp; Corporate Lunch Catering
                </Link>
              </li>
              <li>
                <Link href="/private-events" className="hover:text-white transition-colors">
                  Private Events &amp; Dinner Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: About, Reviews, Location, Contact */}
          <div className="lg:col-span-2">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Explore &amp; About
            </p>
            <ul className="font-serif text-sm space-y-2.5 text-brand-cream/80">
              <li>
                <Link href="/order-online" className="hover:text-white transition-colors font-medium">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors font-medium">
                  About Us &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors font-medium">
                  Customer Reviews ({BUSINESS_RATING.ratingValue}★)
                </Link>
              </li>
              <li>
                <Link href="/contact#location-map" className="hover:text-white transition-colors font-medium">
                  Our Location &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/catering#inquiry-form" className="hover:text-white transition-colors">
                  Catering Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* NAP Information & Contact */}
          <div className="lg:col-span-3">
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold-light mb-4">
              Location &amp; Contact
            </p>
            <div className="space-y-3 font-serif text-sm text-brand-cream/80">
              <p className="font-bold text-white">{BUSINESS_NAP_NAME}</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold-light flex-shrink-0 mt-1" />
                <span>
                  <a
                    href="/contact#location-map"
                    className="hover:text-white transition-colors"
                  >
                    238 Inman Avenue, Colonia, NJ 07067
                  </a>
                </span>
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
                  href="mailto:Estimecafe1@gmail.com"
                  className="hover:text-white transition-colors text-xs"
                >
                  Estimecafe1@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2 pt-2 text-xs">
                <Clock className="w-4 h-4 text-brand-gold-light flex-shrink-0 mt-0.5" />
                <span>
                  Mon – Sat: 8:00 AM – 3:00 PM
                  <br />
                  Sunday: 8:00 AM – 4:00 PM
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
