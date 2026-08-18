import { Coffee, Egg, UtensilsCrossed, Sparkles } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Coffee,
      title: "Artisan Coffee",
      desc: "Specialty brews, espresso, and seasonal house syrups brewed fresh all morning.",
    },
    {
      icon: Egg,
      title: "Farm-Fresh Eggs & Bread",
      desc: "Cage-free eggs, artisanal brioche, and local bakery-crafted breakfast rolls.",
    },
    {
      icon: UtensilsCrossed,
      title: "Caribbean Fusion",
      desc: "Haitian spices, savory house marinades, and Caribbean comfort culinary twists.",
    },
    {
      icon: Sparkles,
      title: "Full Catering Trays",
      desc: "Corporate breakfast platters, hot lunch trays, and celebration catering across NJ.",
    },
  ];

  return (
    <section className="border-b border-brand-line bg-[#f9f4eb]">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-line">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-5 lg:p-6 flex items-start gap-4 transition-colors hover:bg-[#f3ece0]"
              >
                <div className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold flex-shrink-0 bg-brand-paper">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-brand-text mb-1">
                    {item.title}
                  </p>
                  <p className="font-serif text-[13px] text-brand-muted leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
