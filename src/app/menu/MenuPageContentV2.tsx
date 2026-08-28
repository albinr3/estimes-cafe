"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Search } from "lucide-react";
import { NORMAL_MENU_DATA } from "@/lib/normalMenu";

export default function MenuPageContentV2() {
  const [query, setQuery] = useState("");
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

      <section className="py-12 sm:py-16"><div className="mx-auto max-w-container space-y-14 px-4 sm:px-6 lg:px-8">
        {categories.map((category) => <section key={category.id} id={category.id} className="scroll-mt-36">
          <div className="mb-6 border-b-2 border-brand-green/20 pb-3">{category.subtitle && <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">{category.subtitle}</p>}<h2 className="font-serif text-2xl text-brand-green sm:text-3xl">{category.title}</h2></div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{category.items.map((item) => <article key={`${item.name}-${item.price}`} className="border border-brand-line bg-white p-5">
            <div className="flex items-start justify-between gap-4"><h3 className="font-serif text-lg text-brand-text sm:text-xl">{item.name}</h3><span className="font-serif text-lg font-bold text-brand-green">{item.price}</span></div>
            {item.description && <p className="mt-2 font-serif text-sm leading-relaxed text-brand-muted">{item.description}</p>}
            {item.diet && <span className="mt-3 inline-block border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-emerald-800">{item.diet}</span>}
          </article>)}</div>
        </section>)}
        {categories.length === 0 && <p className="py-12 text-center font-serif text-xl text-brand-muted">No menu items found matching &quot;{query}&quot;.</p>}
      </div></section>
      <section className="border-t border-brand-line bg-brand-cream py-12"><div className="mx-auto flex max-w-container flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8"><div><h2 className="font-serif text-2xl text-brand-green">Ordering for a crowd?</h2><p className="mt-1 font-serif text-sm text-brand-muted">Explore catering options for your gathering.</p></div><Link href="/catering" className="bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wider text-white">Explore Catering</Link></div></section>
    </>
  );
}
