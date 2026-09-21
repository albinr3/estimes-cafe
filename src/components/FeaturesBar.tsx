import { Coffee, Egg, UtensilsCrossed, Sparkles } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Coffee,
      title: "Artisan Coffee",
      desc: "Espresso, cold brew, and house-made syrups brewed fresh every morning.",
    },
    {
      icon: Egg,
      title: "Farm Eggs & Brioche",
      desc: "Cage-free eggs, thick-cut brioche, and fresh rolls from local bakeries.",
    },
    {
      icon: UtensilsCrossed,
      title: "Haitian Seasonings",
      desc: "House-made epis, citrus marinades, and Creole spices cooked into everyday morning classics.",
    },
    {
      icon: Sparkles,
      title: "Catering Platters",
      desc: "Hot breakfast trays, sandwich platters, and hot lunch delivered across Central NJ.",
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
