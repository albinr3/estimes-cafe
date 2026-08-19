import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "Meet The Chef & Our Story | Honoree Chef Duke Estime | Estime's Café Colonia NJ",
  description:
    "Discover the story of Estime's Café in Colonia, NJ, founded by brothers Dumond and Duke Estime. Meet James Beard House Awarded Executive Chef Duke Estime and explore our Haitian-American culinary heritage.",
  keywords: [
    "meet the chef",
    "honoree chef duke estime",
    "james beard house awarded executive chef duke estime",
    "chef duke estime",
    "dumond estime",
    "estimes cafe story",
    "haitian chef new jersey",
    "about estimes cafe",
    "breakfast restaurant colonia nj",
    "caribbean brunch nj",
    "haitian restaurant nj",
    "jersey bites estimes cafe",
    "woodbridge patch estimes cafe",
    "culinary education ice chef",
  ],
  alternates: {
    canonical: "https://www.estimescafe.com/about",
  },
  openGraph: {
    title: "Meet The Chef & Our Story | Honoree Chef Duke Estime | Estime's Café Colonia NJ",
    description:
      "The story of brothers Dumond and Duke Estime: Caribbean family recipes, James Beard House Honoree recognition, NYC fine-dining training, and scratch morning comfort in Colonia, NJ.",
    url: "https://www.estimescafe.com/about",
    type: "website",
    images: [
      {
        url: "https://www.estimescafe.com/assets/chef-duke-estime-james-beard-honoree.jpg",
        width: 1024,
        height: 681,
        alt: "Executive Chef Duke Estime - Honoree & Co-Founder of Estime's Café in Colonia, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet The Chef & Our Story | Honoree Chef Duke Estime | Estime's Café",
    description:
      "Meet James Beard House Awarded Executive Chef Duke Estime and discover the Caribbean-American culinary story behind Estime's Café in Colonia, NJ.",
    images: ["https://www.estimescafe.com/assets/chef-duke-estime-james-beard-honoree.jpg"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.estimescafe.com/about#webpage",
        "url": "https://www.estimescafe.com/about",
        "name": "Meet The Chef & Our Story | Honoree Chef Duke Estime | Estime's Café Colonia NJ",
        "description":
          "The story of brothers Dumond and Duke Estime: Caribbean roots, NYC culinary education, James Beard House Awarded recognition, and the founding of Estime's Café in Colonia, NJ.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.estimescafe.com/#website",
          "url": "https://www.estimescafe.com",
          "name": "Estime's Café"
        },
        "about": [
          {
            "@type": "Person",
            "@id": "https://www.estimescafe.com/about#chef-duke-estime",
            "name": "Duke Estime",
            "honorificPrefix": "Chef",
            "jobTitle": "Executive Chef & Co-Founder",
            "award": [
              "James Beard Foundation Honoree",
              "James Beard House Awarded Executive Chef"
            ],
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Institute of Culinary Education (ICE) New York"
            },
            "worksFor": {
              "@type": "Restaurant",
              "@id": "https://www.estimescafe.com/#restaurant",
              "name": "Estime's Café"
            },
            "image": "https://www.estimescafe.com/assets/chef-duke-estime-james-beard-honoree.jpg",
            "sameAs": [
              "https://jerseybites.com/2022/10/haitian-cuisine-at-estimes-cafe-in-colonia/",
              "https://patch.com/new-jersey/woodbridge/woodbridge-restaurant-now-open-dinner-too",
              "https://njmonthly.com/articles/eat-drink/atlantic-city-adds-spot-for-hearty-breakfasts-other-dining-news/",
              "https://www.mycentraljersey.com/story/news/local/how-we-live/2020/06/05/where-support-black-owned-businesses-central-jersey/3151371001/"
            ],
            "knowsAbout": [
              "Haitian Cuisine",
              "Caribbean Culinary Traditions",
              "French Culinary Techniques",
              "American Breakfast and Brunch",
              "Scratch Cooking",
              "Catering & Event Menus"
            ]
          },
          {
            "@type": "Person",
            "@id": "https://www.estimescafe.com/about#dumond-estime",
            "name": "Dumond Estime",
            "jobTitle": "Co-Founder & Business Director",
            "worksFor": {
              "@type": "Restaurant",
              "@id": "https://www.estimescafe.com/#restaurant",
              "name": "Estime's Café"
            }
          }
        ]
      },
      {
        "@type": "Restaurant",
        "@id": "https://www.estimescafe.com/#restaurant",
        "name": "Estime's Café",
        "url": "https://www.estimescafe.com",
        "telephone": "+1-732-669-7581",
        "servesCuisine": ["American", "Caribbean", "Haitian", "Breakfast", "Brunch"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "238 Inman Avenue",
          "addressLocality": "Colonia",
          "addressRegion": "NJ",
          "postalCode": "07067",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.6003432,
          "longitude": -74.3126004
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper text-brand-text">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  );
}
