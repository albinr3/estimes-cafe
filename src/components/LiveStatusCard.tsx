"use client";

import { useEffect, useState } from "react";
import { Clock, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

export default function LiveStatusCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusText, setStatusText] = useState("Checking hours...");

  useEffect(() => {
    // Determine opening hours based on America/New_York timezone
    // Tuesday to Sunday: 8:00 AM to 3:00 PM (15:00)
    // Monday: Closed
    const checkSchedule = () => {
      try {
        const now = new Date();
        const nyTimeStr = now.toLocaleString("en-US", {
          timeZone: "America/New_York",
          hour12: false,
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
        });

        // Parse weekday and hour
        const [dayPart, timePart] = nyTimeStr.split(", ");
        const [hourStr, minuteStr] = (timePart || "").split(":");
        const hour = parseInt(hourStr, 10);
        const minute = parseInt(minuteStr, 10);
        const timeVal = hour + minute / 60;

        const isMonday = dayPart === "Mon";
        const isWithinHours = !isMonday && timeVal >= 8.0 && timeVal < 15.0;

        if (isWithinHours) {
          setIsOpen(true);
          setStatusText("Open Now • Kitchen serving until 3:00 PM");
        } else if (isMonday) {
          setIsOpen(false);
          setStatusText("Closed Today • Opens Tuesday at 8:00 AM");
        } else if (timeVal < 8.0) {
          setIsOpen(false);
          setStatusText("Closed • Opens today at 8:00 AM");
        } else {
          setIsOpen(false);
          setStatusText("Closed for the day • Opens tomorrow at 8:00 AM");
        }
      } catch {
        // Fallback
        setIsOpen(true);
        setStatusText("Open Tue – Sun: 8:00 AM – 3:00 PM");
      }
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-green text-white p-8 sm:p-10 flex flex-col justify-between text-center relative overflow-hidden h-full">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />

      <div>
        <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-brand-gold-light block mb-2">
          Daily Hours &amp; Schedule
        </span>

        <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
          Tue – Sun: 8am – 3pm
        </h3>

        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#3e4925] border border-brand-gold/40 mb-5">
          {isOpen ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-200">{statusText}</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-amber-200">{statusText}</span>
            </>
          )}
        </div>

        <p className="font-serif text-sm text-brand-cream/90 leading-relaxed mb-6">
          Serving hot breakfast, artisanal brioche French toast, weekend brunch, and midday lunch.
          Dine-in, takeout, and curbside pickup available.
        </p>
      </div>

      <div className="space-y-3 pt-4 border-t border-brand-cream/20">
        <a
          href="tel:7326697581"
          className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white hover:text-brand-green text-white border border-brand-cream/40 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
        >
          <Phone className="w-4 h-4 text-brand-gold-light" />
          <span>Call (732) 669-7581</span>
        </a>

        <a
          href="#location"
          className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-brand-cream/80 hover:text-white transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-brand-gold-light" />
          <span>238 Inman Ave, Colonia, NJ 07067</span>
        </a>
      </div>
    </div>
  );
}
