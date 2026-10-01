import { ExternalLink, Star } from "lucide-react";
import { BUSINESS_MAP_URL, BUSINESS_RATING } from "@/lib/business";

const pressFeatures = [
  {
    source: "Jersey Bites",
    date: "October 2022",
    title: "Haitian Cuisine at Estime's Café, in Colonia",
    description:
      "A visit with brothers Duke and Dumond Estime covering their Haitian roots, shrimp and grits, and amaretto brioche French toast.",
    url: "https://jerseybites.com/haitian-cuisine-at-estimes-cafe-in-colonia/",
  },
  {
    source: "Woodbridge Patch",
    date: "September 2022",
    title: "Woodbridge Restaurant Now Open For Dinner, Too",
    description:
      "A profile of the brothers and Chef Duke's path to opening Estime's Café. The dinner hours mentioned in this older article may have changed.",
    url: "https://patch.com/new-jersey/woodbridge/woodbridge-restaurant-now-open-dinner-too",
  },
];

export default function ReviewsPageContent() {
  return (
    <div className="bg-brand-paper">
      <section className="bg-[#2a3319] text-brand-cream py-16 sm:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light mb-4">
            Colonia, New Jersey
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-5">
            Guest Reviews &amp; Local Press
          </h1>
          <p className="font-serif text-base text-brand-cream/80 max-w-2xl mx-auto">
            See what guests are saying now and read independent stories about
            Chef Duke Estime and the café.
          </p>
          <div className="inline-flex items-center gap-3 mt-8 border border-white/20 px-5 py-3">
            <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
            <span className="font-bold">{BUSINESS_RATING.ratingValue} / 5</span>
            <span className="text-brand-cream/70 text-sm">Google rating</span>
          </div>
          <div className="mt-7">
            <a
              href={BUSINESS_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-colors"
            >
              Read Current Google Reviews
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
            In the Press
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green">
            Stories About Estime&apos;s Café
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressFeatures.map((feature) => (
            <article key={feature.url} className="bg-white border border-brand-line p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
                {feature.source} · {feature.date}
              </p>
              <h3 className="font-serif text-xl text-brand-green mb-3">
                {feature.title}
              </h3>
              <p className="font-serif text-sm text-brand-muted leading-relaxed mb-6">
                {feature.description}
              </p>
              <a
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green hover:text-brand-gold"
              >
                Read Article
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
