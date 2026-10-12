"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Utensils, ShoppingBag, Sparkles, ChevronRight } from "lucide-react";
import { trackAnalyticsEvent } from "@/lib/analytics";

export default function StickyMobileBar() {
  const pathname = usePathname();

  if (pathname === "/school" || pathname === "/school/") return null;

  const isCatering = pathname === "/catering" || pathname === "/catering/";
  const isPrivateEvents = pathname === "/private-events" || pathname === "/private-events/";

  if (isCatering) {
    const handleScrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = document.getElementById("inquiry-form");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#inquiry-form");
      }
    };

    return (
      <aside
        aria-label="Catering mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#202713]/95 border-t border-brand-gold/40 text-white sm:hidden shadow-[0_-6px_24px_rgba(0,0,0,0.35)] backdrop-blur-md px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="tel:7326697581"
            onClick={() => trackAnalyticsEvent("click_call", { location: "sticky_catering_bar" })}
            aria-label="Call Estime's Cafe for Catering"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm border border-brand-gold/30 bg-white/10 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Call</span>
          </a>

          <a
            href="#inquiry-form"
            onClick={handleScrollToQuote}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-sans text-xs font-bold uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
          >
            <span className="truncate">Request Catering Quote</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </aside>
    );
  }

  if (isPrivateEvents) {
    const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = document.getElementById("booking-form");
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#booking-form");
      }
    };

    return (
      <aside
        aria-label="Private events mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#202713]/95 border-t border-brand-gold/40 text-white sm:hidden shadow-[0_-6px_24px_rgba(0,0,0,0.35)] backdrop-blur-md px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <a
            href="tel:7326697581"
            onClick={() => trackAnalyticsEvent("click_call", { location: "sticky_private_events_bar" })}
            aria-label="Call Estime's Cafe for Private Events"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm border border-brand-gold/30 bg-white/10 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold-light" />
            <span>Call</span>
          </a>

          <a
            href="#booking-form"
            onClick={handleScrollToBooking}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-sans text-xs font-bold uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
          >
            <span className="truncate">Reserve Private Date</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#2a3319] border-t border-brand-gold/30 text-white sm:hidden shadow-2xl backdrop-blur-lg"
    >
      <div className="grid grid-cols-4 divide-x divide-white/10 text-center text-[10px] font-sans font-bold uppercase tracking-wider">
        <a
          href="tel:7326697581"
          onClick={() => trackAnalyticsEvent("click_call", { location: "sticky_mobile_bar" })}
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-brand-gold-light"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>

        <Link
          href="/order-online/"
          className="py-3 flex flex-col items-center justify-center gap-1 bg-brand-green text-white"
        >
          <ShoppingBag className="w-4 h-4 text-brand-gold-light" />
          <span>Order</span>
        </Link>

        <Link
          href="/menu/"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-white"
        >
          <Utensils className="w-4 h-4 text-brand-gold-light" />
          <span>Menu</span>
        </Link>

        <Link
          href="/catering/"
          className="py-3 flex flex-col items-center justify-center gap-1 hover:bg-brand-green transition-colors text-white"
        >
          <Sparkles className="w-4 h-4 text-brand-gold-light" />
          <span>Catering</span>
        </Link>
      </div>
    </aside>
  );
}
