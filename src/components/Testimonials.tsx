import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { BUSINESS_MAP_URL, BUSINESS_RATING } from "@/lib/business";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-brand-paper border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold mb-3">
          Loved By Our Community · Colonia, NJ
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-green mb-5">
          Guest Reviews &amp; Local Press
        </h2>
        <p className="font-serif text-sm text-brand-muted max-w-2xl mx-auto mb-7">
          Read current feedback from guests on Google and explore independent
          coverage of Chef Duke Estime and the café.
        </p>
        <div className="inline-flex items-center gap-3 bg-[#f4ede1] border border-brand-line px-5 py-3">
          <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
          <span className="font-bold text-sm text-brand-text">
            {BUSINESS_RATING.ratingValue} / 5
          </span>
          <span className="text-xs text-brand-muted">Google rating</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href={BUSINESS_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-dark px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Read Current Reviews
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Explore Press Coverage
          </Link>
        </div>
      </div>
    </section>
  );
}
