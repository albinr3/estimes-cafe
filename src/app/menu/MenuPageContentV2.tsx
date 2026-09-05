"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Search, X, ZoomIn } from "lucide-react";
import { NORMAL_MENU_DATA, NormalMenuItem } from "@/lib/normalMenu";

export default function MenuPageContentV2() {
  const [query, setQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState<NormalMenuItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDish(null);
    };
    if (selectedDish) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDish]);

  const categories = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return NORMAL_MENU_DATA;
    return NORMAL_MENU_DATA.map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        `${item.name} ${item.description ?? ""}`.toLowerCase().includes(term)
      ),
    })).filter((category) => category.items.length > 0);
  }, [query]);

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://www.estimescafe.com/menu#menu",
    name: "Estime's Café Menu",
    url: "https://www.estimescafe.com/menu",
    inLanguage: "en-US",
    hasMenuSection: NORMAL_MENU_DATA.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      ...(category.subtitle ? { description: category.subtitle } : {}),
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        ...(item.diet ? { suitableForDiet: "https://schema.org/LowCarbDiet" } : {}),
        ...(item.image ? { image: `https://www.estimescafe.com${item.image}` } : {}),
        offers: { "@type": "Offer", price: item.price.replace("$", ""), priceCurrency: "USD" },
      })),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
      <section className="relative overflow-hidden border-b border-[#3e4925] py-16 text-brand-cream sm:py-24">
        <Image src="/assets/menu-hero.jpg" alt="Estime's Café breakfast, brunch, and lunch menu" fill priority quality={90} sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#141b0d]/80" />
        <div className="relative z-10 mx-auto max-w-container px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-light">Colonia, NJ · Dine-In · Takeout · Catering</p>
          <h1 className="mb-4 font-serif text-3xl tracking-tight text-white sm:text-5xl lg:text-6xl">Breakfast, Brunch &amp; Lunch Menu</h1>
          <p className="mx-auto max-w-2xl font-serif text-base leading-relaxed text-brand-cream/90 sm:text-lg">Explore the current dining menu at Estime&apos;s Café.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wider">
            <a href="tel:7326697581" className="inline-flex items-center gap-2 bg-brand-gold px-5 py-3 text-brand-green-dark"><Phone className="h-4 w-4" />Call Ahead: (732) 669-7581</a>
            <Link href="/catering" className="inline-flex items-center gap-2 border border-white/50 bg-white/10 px-5 py-3 text-white"><span>View Catering</span><ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-brand-line bg-[#fbf8f2]/95 py-3 backdrop-blur-md">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"><label className="relative block max-w-md"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dish or ingredient..." className="w-full border border-brand-line bg-white py-2 pl-9 pr-3 text-sm text-brand-text focus:border-brand-green focus:outline-none" /></label></div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-container space-y-14 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-36">
              <div className="mb-6 border-b-2 border-brand-green/20 pb-3">
                {category.subtitle && <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">{category.subtitle}</p>}
                <h2 className="font-serif text-2xl text-brand-green sm:text-3xl">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={`${item.name}-${item.price}`}
                    className="flex items-center justify-between gap-4 border border-brand-line bg-white p-4 sm:p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-serif text-lg font-medium text-brand-text sm:text-xl">{item.name}</h3>
                        <span className="font-serif text-lg font-bold text-brand-green shrink-0">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="mt-1.5 font-serif text-sm leading-relaxed text-brand-muted">{item.description}</p>
                      )}
                      {item.diet && (
                        <span className="mt-2.5 inline-block border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                          {item.diet}
                        </span>
                      )}
                    </div>

                    {item.image && (
                      <button
                        type="button"
                        onClick={() => setSelectedDish(item)}
                        title={`Ver foto de ${item.name}`}
                        aria-label={`Ver foto en tamaño completo de ${item.name}`}
                        className="group relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border border-brand-line bg-brand-paper shadow-sm transition-all hover:scale-105 hover:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold"
                      >
                        <Image
                          src={item.image}
                          alt={item.imageAlt || `${item.name} at Estime's Cafe`}
                          fill
                          sizes="80px"
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow" />
                        </div>
                      </button>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
          {categories.length === 0 && (
            <p className="py-12 text-center font-serif text-xl text-brand-muted">
              No menu items found matching &quot;{query}&quot;.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-dish-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-lg border border-brand-line/40 bg-white shadow-2xl transition-all sm:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              aria-label="Cerrar vista previa"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {selectedDish.image && (
              <div className="relative flex h-80 w-full items-center justify-center overflow-hidden bg-brand-paper/60 p-3 sm:h-96 sm:p-4">
                <div className="relative h-[88%] w-[88%]">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.imageAlt || selectedDish.name}
                    fill
                    sizes="(max-width: 768px) 85vw, 520px"
                    priority
                    className="object-contain object-center drop-shadow-md rounded-md"
                  />
                </div>
              </div>
            )}

            <div className="p-5 sm:p-6 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 id="modal-dish-title" className="font-serif text-xl sm:text-2xl font-bold text-brand-green">
                    {selectedDish.name}
                  </h3>
                  {selectedDish.diet && (
                    <span className="mt-1.5 inline-block border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                      {selectedDish.diet}
                    </span>
                  )}
                </div>
                <span className="font-serif text-xl sm:text-2xl font-bold text-brand-green whitespace-nowrap">
                  {selectedDish.price}
                </span>
              </div>

              {selectedDish.description && (
                <p className="mt-3 font-serif text-sm sm:text-base leading-relaxed text-brand-muted">
                  {selectedDish.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="border-t border-brand-line bg-brand-cream py-12">
        <div className="mx-auto flex max-w-container flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl text-brand-green">Ordering for a crowd?</h2>
            <p className="mt-1 font-serif text-sm text-brand-muted">Explore catering options for your gathering.</p>
          </div>
          <Link href="/catering" className="bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">
            Explore Catering
          </Link>
        </div>
      </section>
    </>
  );
}
