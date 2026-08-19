import Link from "next/link";
import { Star, Quote, ThumbsUp } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus T.",
      source: "Google Review",
      dish: "Amaretto Brioche French Toast & Shrimp Grits",
      text: "Hands down the best brunch spot in Central Jersey! The Amaretto French Toast is unbelievable—crispy on the edges, fluffy inside with that incredible sweet sauce. Chef Duke really knows what he's doing.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      source: "Google Review",
      dish: "Lemon Ricotta Pancakes & The Mayor",
      text: "The Lemon Ricotta Pancakes melted in my mouth. It's so refreshing to find a brunch cafe that doesn't just do generic diner food. Everything tastes fresh, flavorful, and elevated.",
      rating: 5,
    },
    {
      name: "David K.",
      source: "Google Review (Catering Customer)",
      dish: "Corporate Breakfast Trays & Rasta Pasta",
      text: "Ordered breakfast catering for 35 people at our Woodbridge office. The food arrived on time, piping hot, and our team loved every bite of the eggs, bacon, and French toast trays. Will definitely use them again!",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-brand-paper border-b border-brand-line">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-gold block mb-2">
            Loved By Our Community &bull; Colonia, NJ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal tracking-tight mb-4">
            Guest Reviews: Rated Best Breakfast &amp; Weekend Brunch in Colonia, NJ
          </h2>
          <div className="inline-flex items-center gap-2 bg-[#f4ede1] border border-brand-line px-4 py-2 rounded-full">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-xs text-brand-text">4.8 / 5.0 Rating</span>
            <span className="text-brand-muted text-xs">&bull; Based on 180+ Local Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 bg-[#fbf7ef] border border-brand-line flex flex-col justify-between relative hover:border-brand-gold transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold bg-brand-cream px-2 py-0.5 border border-brand-line">
                    Verified Guest
                  </span>
                </div>

                <p className="font-serif italic text-sm text-[#48423c] leading-relaxed mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-brand-line/60">
                <p className="font-sans text-xs font-bold text-brand-text">{rev.name}</p>
                <p className="font-serif text-[11px] text-brand-gold mt-0.5">{rev.dish}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout to leave a review and view all reviews */}
        <div className="mt-10 text-center">
          <p className="font-serif text-xs text-brand-muted mb-4">
            Have you dined with us recently? We would love to hear about your experience!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-brand-green text-white hover:bg-brand-green-dark px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View All 180+ Reviews &amp; Press</span>
              <Quote className="w-3.5 h-3.5 text-brand-gold-light" />
            </Link>
            <a
              href="https://share.google/trFqLkpJ3ky2H2EE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Write a Google Review</span>
              <ThumbsUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
