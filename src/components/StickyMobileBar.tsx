"use client";

import { Phone, Utensils, MapPin, Sparkles } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#2a3319] border-t border-brand-gold/30 text-white sm:hidden shadow-2xl backdrop-blur-lg"
    >
      <div className="grid grid-cols-4 divide-x divide-white/10 text-center text-[10px] font-sans font-bold uppercase tracking-wider">
        <a
          href="tel:7326697581"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-brand-gold-light"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>

        <a
          href="#menu"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-white"
        >
          <Utensils className="w-4 h-4 text-brand-gold-light" />
          <span>Menu</span>
        </a>

        <a
          href="#location"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-white"
        >
          <MapPin className="w-4 h-4 text-brand-gold-light" />
          <span>Map</span>
        </a>

        <a
          href="#catering"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-white"
        >
          <Sparkles className="w-4 h-4 text-brand-gold-light" />
          <span>Catering</span>
        </a>
      </div>
    </aside>
  );
}
