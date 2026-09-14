"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_PHONE_LINK } from "@/lib/business";
import { HOME_FAQS, FaqItem } from "@/lib/homeFaqs";

export { HOME_FAQS };
export type { FaqItem };

export default function HomeFaq() {
  const [openId, setOpenId] = useState<string | null>("location-service-area");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-b from-brand-paper via-amber-50/40 to-brand-paper text-brand-text border-t border-brand-line/40"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green-dark text-xs sm:text-sm font-semibold mb-4 border border-brand-green/20">
            <HelpCircle className="w-4 h-4 text-brand-green" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-text tracking-tight mb-4"
          >
            Everything You Need to Know Before Visiting
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Have questions about our signature Haitian-American brunch, hours, takeout, or catering in Colonia, NJ? Find your answers below.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white shadow-lg border-brand-gold/50 ring-1 ring-brand-gold/30"
                    : "bg-white/80 hover:bg-white border-brand-line/60 hover:border-brand-gold/40 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="flex items-center gap-3 text-lg font-serif font-semibold text-brand-text pr-2">
                    <span className="text-sm font-sans font-bold text-brand-gold min-w-[1.5rem]">
                      0{index + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-green-deep text-white rotate-180"
                        : "bg-brand-cream text-brand-text group-hover:bg-brand-green/10"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-2 text-brand-text leading-relaxed border-t border-brand-line/30 animate-fadeIn"
                  >
                    <p className="text-base sm:text-lg pl-9 text-brand-text/90 font-sans">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Card - High Contrast Deep Brand Green */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-green-deep text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-brand-green-dark">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-gold-light">
              Still Have Questions or Ready to Order?
            </h3>
            <p className="text-sm sm:text-base text-brand-cream/90">
              Browse our full dining menu online or call us directly in Colonia, NJ.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              href="/menu"
              className="px-5 py-3 rounded-xl bg-brand-gold text-brand-green-deep font-bold hover:bg-brand-gold-light transition-colors duration-200 inline-flex items-center gap-2 text-sm shadow-md"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={BUSINESS_PHONE_LINK}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors duration-200 inline-flex items-center gap-2 text-sm border border-white/20 shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-gold-light" />
              <span>{BUSINESS_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
