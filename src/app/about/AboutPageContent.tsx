"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  Utensils,
  BookOpen,
  Tv,
  Newspaper,
  CheckCircle2,
  Phone,
  Calendar,
  Coffee,
  Quote,
  ExternalLink,
  ChefHat,
  BookmarkCheck,
  Building2,
} from "lucide-react";

export default function AboutPageContent() {
  const mediaFeatures = [
    {
      publisher: "Jersey Bites",
      headline: "Haitian Cuisine at Estime’s Cafe in Colonia",
      url: "https://jerseybites.com/2022/10/haitian-cuisine-at-estimes-cafe-in-colonia/",
      type: "Culinary Feature",
      date: "October 2022",
      icon: Newspaper,
      highlight: "Spotlight on Chef Duke's Haitian culinary heritage and creative breakfast fusion in Central NJ.",
    },
    {
      publisher: "Patch Woodbridge",
      headline: "Woodbridge Restaurant Now Open For Dinner, Too",
      url: "https://patch.com/new-jersey/woodbridge/woodbridge-restaurant-now-open-dinner-too",
      type: "Local News",
      date: "Community Spotlight",
      icon: Newspaper,
      highlight: "Highlighting expanded dining offerings and Chef Duke's warm neighborhood hospitality.",
    },
    {
      publisher: "New Jersey Monthly",
      headline: "Dining News: Hearty Breakfasts & Chef-Driven Cuisine",
      url: "https://njmonthly.com/articles/eat-drink/atlantic-city-adds-spot-for-hearty-breakfasts-other-dining-news/",
      type: "Statewide Magazine",
      date: "Food & Drink Feature",
      icon: BookOpen,
      highlight: "Recognized among top destinations for hearty, scratch-made breakfast and artisanal morning fare.",
    },
    {
      publisher: "MyCentralJersey.com",
      headline: "Top Central Jersey Dining & Black-Owned Businesses",
      url: "https://www.mycentraljersey.com/story/news/local/how-we-live/2020/06/05/where-support-black-owned-businesses-central-jersey/3151371001/",
      type: "USA TODAY Network",
      date: "Regional Feature",
      icon: Building2,
      highlight: "Celebrated in the Central Jersey community for culinary leadership and scratch hospitality.",
    },
    {
      publisher: "James Beard Foundation",
      headline: "James Beard House Honoree & Presenter",
      url: "https://www.jamesbeard.org",
      type: "Culinary Honor",
      date: "NYC Recognition",
      icon: Award,
      highlight: "Honored at the prestigious James Beard House in Manhattan, after volunteering there as a young cook.",
    },
    {
      publisher: "NBC New York Live",
      headline: "Television Spotlight: Chef Duke’s Signature Flavors",
      url: "https://www.nbcnewyork.com",
      type: "Broadcast Television",
      date: "Broadcast Feature",
      icon: Tv,
      highlight: "Broadcast feature on Chef Duke's scratch recipes and Haitian culinary craft.",
    },
  ];

  return (
    <div className="bg-brand-paper">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#2a3319] text-brand-cream py-16 sm:py-24 border-b border-[#3e4925] overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(180,147,85,0.4),transparent_60%)]" />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Meet The Chef &amp; Our Story</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-white tracking-tight mb-6">
              The Story of <span className="italic text-brand-gold-light">Estime’s Café</span> &amp; Chef Duke
            </h1>

            <p className="font-serif text-lg sm:text-xl text-brand-cream/85 leading-relaxed">
              Founded by brothers Dumond and Duke Estime in Colonia, New Jersey, bringing Haitian family traditions
              and New York culinary training to morning breakfast and weekend brunch.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDERS' SYNERGY (DUMOND & DUKE) */}
      <section className="py-16 sm:py-20 border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 font-serif text-base sm:text-lg text-brand-text leading-relaxed">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-cream border border-brand-line text-xs font-bold uppercase tracking-widest text-brand-gold">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Brotherhood &amp; Shared Vision
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-brand-green font-normal leading-tight">
                Two Brothers, One Kitchen
              </h2>

              <p className="text-[#3c362f]">
                <strong>Estime’s Café</strong> was founded by brothers <strong>Dumond and Duke Estime</strong>.
                Dumond manages business and operations, while Duke leads the kitchen. Together, they bring
                neighborhood warmth and scratch cooking to Colonia.
              </p>

              <p className="text-[#3c362f]">
                Duke learned to cook growing up in Haiti alongside his mother and five siblings. Those family recipes
                and techniques formed the foundation of his career in New York kitchens.
              </p>

              {/* Complementary Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans">
                <div className="p-5 bg-brand-cream/60 border border-brand-line rounded-none">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-serif font-bold text-sm">
                      D
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-green">Dumond Estime</h4>
                      <p className="text-xs text-brand-muted uppercase tracking-wider">Business &amp; Operations</p>
                    </div>
                  </div>
                  <p className="font-serif text-xs sm:text-sm text-[#554e46] leading-relaxed">
                    Manages business operations, guest service, catering logistics, and community partnerships.
                  </p>
                </div>

                <div className="p-5 bg-brand-cream/60 border border-brand-line rounded-none">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif font-bold text-sm">
                      D
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-brand-green">Chef Duke Estime</h4>
                      <p className="text-xs text-brand-muted uppercase tracking-wider">Executive Chef &amp; Co-Founder</p>
                    </div>
                  </div>
                  <p className="font-serif text-xs sm:text-sm text-[#554e46] leading-relaxed">
                    James Beard Foundation Honoree leading scratch cooking across our breakfast, brunch, and catering menus.
                  </p>
                </div>
              </div>
            </div>

            {/* Atmosphere / Interior Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-brand-line overflow-hidden shadow-md">
                <Image
                  src="/assets/estimes-cafe-storefront-colonia-nj.jpg"
                  alt="Estime's Cafe storefront and outdoor patio on Inman Ave in Colonia NJ"
                  width={600}
                  height={500}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-1">
                    Warm Hospitality &bull; Colonia, NJ
                  </span>
                  <p className="font-serif text-base text-white/90">
                    A welcoming neighborhood café serving scratch-made breakfast and brunch on Inman Avenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHEF DUKE ESTIME: JAMES BEARD HONOREE SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-[#232918] text-white border-b border-[#3e4925]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Honoree Photo with High-End Styling */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative max-w-md w-full border-2 border-brand-gold/60 p-2 sm:p-3 bg-brand-green-deep/90 shadow-2xl">
                {/* Gold corner accents */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-brand-gold" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-brand-gold" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-brand-gold" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-brand-gold" />

                <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full overflow-hidden">
                  <Image
                    src="/assets/chef-duke-estime-james-beard-honoree.jpg"
                    alt="Executive Chef Duke Estime - Honoree &amp; Co-Founder of Estime's Café in Colonia, NJ"
                    fill
                    className="object-cover object-center filter grayscale contrast-110"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="pt-4 pb-2 px-2 text-center">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold-light font-bold block">
                    Culinary Excellence &bull; Award Winner
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight mt-1">
                    Honoree Chef Duke Estime
                  </h3>
                  <p className="text-xs text-white/70 font-sans mt-1">
                    James Beard House Awarded Executive Chef &bull; ICE NYC Graduate
                  </p>
                </div>
              </div>
            </div>

            {/* Chef Duke Story & Prestigious Background */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-gold/20 border border-brand-gold/40 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
                <Award className="w-4 h-4 text-brand-gold-light" />
                James Beard House Awarded Executive Chef
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                From Caribbean Roots to the James Beard House in NYC
              </h2>

              <div className="space-y-4 font-serif text-base sm:text-lg text-brand-cream/85 leading-relaxed">
                <p>
                  Chef Duke studied at the <strong className="text-white">Institute of Culinary Education (ICE)</strong> in
                  New York City. At ICE, he trained in classical French technique while refining his own
                  Caribbean-influenced cooking style.
                </p>

                {/* Stylized Quote Card */}
                <div className="relative my-6 p-6 sm:p-7 bg-[#2f391f] border-l-4 border-brand-gold shadow-md">
                  <Quote className="w-8 h-8 text-brand-gold/40 absolute top-4 right-4" />
                  <p className="font-serif italic text-lg sm:text-xl text-white leading-relaxed">
                    “I believe you should respect the food you prepare. That means the freshest ingredients, trained
                    prep chefs, and innovative ideas.”
                  </p>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-gold-light mt-3">
                    Executive Chef Duke Estime
                  </p>
                </div>

                <p>
                  After graduation, Chef Duke continued his rigorous training at{" "}
                  <strong className="text-white">The Mark Hotel in New York</strong>. He began his professional career
                  by working his way up the ranks in restaurants, doing catering, and cooking as a private chef.
                </p>

                <p>
                  He was later honored as a presenter at the historic <strong className="text-white">James Beard House</strong> in
                  Manhattan. Years earlier, he had volunteered in the very same kitchen as a young culinary student,
                  making his return as a featured chef a full-circle milestone.
                </p>

                <p>
                  His cooking has also been featured on NBC New York Live, and in The New York Times, The Star-Ledger,
                  Industry Magazine, and Golf Styles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEDIA & PRESS COVERAGE (WITH REAL OUTBOUND LINKS & CITATIONS) */}
      <section className="py-16 sm:py-20 bg-brand-cream border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
              Press Features &amp; Media Recognition
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-brand-green font-normal">
              Featured Across Leading Culinary Publications &amp; News
            </h3>
            <p className="font-serif text-base text-brand-muted mt-3">
              Explore recent news features, food reviews, and media coverage highlighting Chef Duke Estime and Estime’s
              Café in Colonia, New Jersey:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaFeatures.map((media, idx) => {
              const Icon = media.icon;
              return (
                <a
                  key={idx}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-brand-paper border border-brand-line hover:border-brand-gold hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-green group-hover:text-brand-gold transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-gold">
                          {media.publisher}
                        </span>
                      </div>
                      <span className="text-[11px] font-sans text-brand-muted bg-brand-cream/80 px-2 py-0.5 border border-brand-line/60">
                        {media.date}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-brand-green group-hover:text-brand-green-dark leading-snug mb-3 transition-colors">
                      {media.headline}
                    </h4>

                    <p className="font-serif text-sm text-[#554e46] leading-relaxed mb-4">
                      {media.highlight}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-line/60 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-brand-green group-hover:text-brand-gold transition-colors">
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Publications Mention */}
          <div className="mt-10 p-6 bg-brand-paper border border-brand-line text-center">
            <p className="font-serif text-sm sm:text-base text-brand-text">
              Also featured in: <strong className="text-brand-green">The New York Times</strong>,{" "}
              <strong className="text-brand-green">The Star-Ledger</strong>,{" "}
              <strong className="text-brand-green">Industry Magazine</strong>, and{" "}
              <strong className="text-brand-green">Golf Styles</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE NEXT CHAPTER: ESTIME'S CAFÉ IN COLONIA */}
      <section className="py-16 sm:py-24 border-b border-brand-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Continued */}
            <div className="lg:col-span-6 space-y-6 font-serif text-base sm:text-lg text-brand-text leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block">
                A Place to Call His Own
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-brand-green font-normal leading-tight">
                Bringing the Very Best to Estime’s Café
              </h2>

              <p className="text-[#3c362f]">
                After years in fine-dining kitchens and private catering, Chef Duke partnered with his brother Dumond
                to open Estime’s Café in Colonia, bringing scratch morning comfort food to Central Jersey.
              </p>

              <p className="text-[#3c362f]">
                Today, our kitchen serves everything from our signature Lemon Ricotta Pancakes and Amaretto French
                Toast to authentic Haitian Spicy Omelets, savory shrimp grits bowls with Creole sauce, signature
                burgers, and premium corporate catering party platters.
              </p>

              {/* 4 Pillars of Excellence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-green">
                      Freshest Ingredients
                    </h5>
                    <p className="text-xs text-brand-muted font-serif mt-0.5">
                      Farm-fresh eggs, real brioche, and premium cuts daily.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-green">
                      Trained Prep Chefs
                    </h5>
                    <p className="text-xs text-brand-muted font-serif mt-0.5">
                      Every dish handled with NYC fine-dining precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-green">
                      Innovative Ideas
                    </h5>
                    <p className="text-xs text-brand-muted font-serif mt-0.5">
                      Unique fusion of Creole soul and American comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-green">
                      Teaching &amp; Mentorship
                    </h5>
                    <p className="text-xs text-brand-muted font-serif mt-0.5">
                      Training kitchen staff and mentoring young cooks in classical culinary techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Collage of Food & Location */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-56 sm:h-72 border border-brand-line overflow-hidden group">
                <Image
                  src="/assets/lemon-ricotta-pancakes.webp"
                  alt="Estime's Cafe famous Lemon Ricotta Pancakes topped with fresh berry compote"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-gold-light">
                    Fan Favorite
                  </span>
                  <p className="font-serif text-xs text-white/90">Lemon Ricotta Pancakes</p>
                </div>
              </div>

              <div className="relative h-56 sm:h-72 border border-brand-line overflow-hidden group">
                <Image
                  src="/assets/creole-shrimp-grits.jpg"
                  alt="Creole Shrimp and Grits prepared by Executive Chef Duke Estime"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-gold-light">
                    Creole Specialty
                  </span>
                  <p className="font-serif text-xs text-white/90">Shrimp &amp; Grits</p>
                </div>
              </div>

              <div className="relative h-56 sm:h-72 border border-brand-line overflow-hidden group">
                <Image
                  src="/assets/amaretto-french-toast.jpg"
                  alt="Amaretto Brioche French Toast with toasted almonds and powdered sugar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-gold-light">
                    Signature Brunch
                  </span>
                  <p className="font-serif text-xs text-white/90">Amaretto Brioche Toast</p>
                </div>
              </div>

              <div className="relative h-56 sm:h-72 border border-brand-line overflow-hidden group">
                <Image
                  src="/assets/estimes-cafe-storefront-colonia-nj.jpg"
                  alt="Estime's Cafe Storefront on Inman Avenue in Colonia NJ"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-gold-light">
                    Visit Our Café
                  </span>
                  <p className="font-serif text-xs text-white/90">238 Inman Ave, Colonia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION: VISIT US & EXPERIENCE CHEF DUKE'S CRAFT */}
      <section className="py-16 sm:py-20 bg-brand-cream border-b border-brand-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
            Visit Estime&apos;s Café
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-green font-normal leading-tight mb-4">
            Join Us for Breakfast, Brunch &amp; Lunch
          </h2>

          <p className="font-serif text-base sm:text-lg text-[#48423c] leading-relaxed max-w-2xl mx-auto mb-8">
            Join us for breakfast or weekend brunch, order catering for your next gathering,
            or reserve our dining room for a private dinner. We look forward to cooking for you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="bg-brand-green hover:bg-brand-green-dark text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-sm transition-colors flex items-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              Explore Dining Menu
            </Link>

            <Link
              href="/catering"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-sm transition-colors flex items-center gap-2"
            >
              <Coffee className="w-4 h-4" />
              Corporate Catering Platters
            </Link>

            <Link
              href="/private-events"
              className="border border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Host Private Events
            </Link>

            <a
              href="tel:7326697581"
              className="border border-brand-line bg-brand-paper hover:bg-brand-paperDark text-brand-text px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              Call (732) 669-7581
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
