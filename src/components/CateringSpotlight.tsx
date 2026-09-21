import Link from "next/link";
import { Building2, Users, Calendar, Phone, CheckCircle, Mail, ChevronRight } from "lucide-react";

export default function CateringSpotlight() {
  const cateringHighlights = [
    {
      name: "Amaretto Brioche French Toast Tray",
      price: "Half $65 • Full $125",
      serves: "Half 8–10 • Full 15–20",
      desc: "Chunky brioche bread in sweet vanilla batter with Chef Duke's warm Amaretto sauce.",
    },
    {
      name: "Rasta Pasta Party Tray",
      price: "Half $70 • Full $130",
      serves: "Half 8–10 • Full 15–20",
      desc: "Penne tossed with sweet bell peppers in a creamy, mildly spiced Caribbean jerk reduction.",
    },
    {
      name: "Creole Haitian Salmon Tray",
      price: "Half $100 • Full $170",
      serves: "Half 8–10 • Full 15–20",
      desc: "Fresh Atlantic salmon fillets sautéed in rich Haitian Creole tomato and pepper reduction.",
    },
    {
      name: "Scrambled Eggs & Bacon Breakfast Tray",
      price: "Half $55 • Full $100",
      serves: "Half 8–10 • Full 15–20",
      desc: "Fluffy scrambled farm-raised eggs with home fries, crisp smoked bacon or turkey sausage.",
    },
  ];

  return (
    <section id="catering" className="py-16 sm:py-24 bg-[#2a3319] text-brand-cream relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold-light block mb-3">
              Corporate &bull; Social &bull; Celebrations
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight mb-5">
              Party Trays &amp; Corporate Lunch Catering in Central NJ
            </h2>

            <p className="font-serif text-base text-brand-cream/90 leading-relaxed mb-6">
              Serve your office lunch, meeting, baby shower, or celebration with Chef Duke&apos;s freshly
              prepared party trays. Choose pastas, proteins, seafood, salads, and breakfast favorites
              delivered across Middlesex &amp; Union Counties.
            </p>

            {/* Feature bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-brand-cream font-medium">
                <CheckCircle className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                <span>Custom half &amp; full trays sized perfectly for 10 to 100+ guests</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-cream font-medium">
                <CheckCircle className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                <span>Delivery and setup across Middlesex &amp; Union Counties</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-cream font-medium">
                <CheckCircle className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                <span>Specialty options: Gluten-free, vegetarian &amp; high-protein</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-text px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>View Full Catering Menu</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:7326697581"
                className="inline-flex items-center gap-2 border border-brand-cream/50 hover:bg-white hover:text-brand-green text-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-brand-gold-light" />
                <span>Call (732) 669-7581</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Catering Platters Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cateringHighlights.map((tray, i) => (
              <div
                key={i}
                className="p-5 bg-[#3e4925] border border-brand-gold/30 hover:border-brand-gold transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold-light bg-brand-green px-2 py-0.5 border border-brand-gold/20">
                      {tray.serves}
                    </span>
                    <span className="font-serif text-xs font-bold text-white">
                      {tray.price}
                    </span>
                  </div>
                  <p className="font-serif text-base font-bold text-brand-cream mb-2 leading-snug">
                    {tray.name}
                  </p>
                  <p className="font-serif text-xs text-brand-cream/80 leading-relaxed">
                    {tray.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-cream/15 flex items-center justify-between">
                  <span className="text-[11px] text-brand-gold-light font-sans">
                    Available 7 Days/Week
                  </span>
                  <a
                    href="tel:7326697581"
                    className="text-[11px] font-bold uppercase tracking-wider text-white hover:text-brand-gold-light"
                  >
                    Inquire &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
