export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
        "@id": "https://www.estimescafe.com/#restaurant",
        "name": "Estime's Café",
        "alternateName": "Estime Cafe",
        "description": "Premier breakfast, signature brunch, lunch, and specialty artisan coffee featuring American comfort favorites fused with Haitian and Caribbean flavors by Chef Duke Estime in Colonia, NJ.",
        "url": "https://www.estimescafe.com/",
        "telephone": "+1-732-669-7581",
        "priceRange": "$$",
        "servesCuisine": [
          "American",
          "Breakfast",
          "Brunch",
          "Haitian",
          "Caribbean",
          "Coffee"
        ],
        "image": [
          "https://www.estimescafe.com/assets/hero.jpg",
          "https://www.estimescafe.com/assets/signature.jpg",
          "https://www.estimescafe.com/assets/hash.jpg",
          "https://www.estimescafe.com/assets/interior.jpg",
          "https://www.estimescafe.com/assets/exterior.jpg"
        ],
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
          "latitude": 40.5987,
          "longitude": -74.3218
        },
        "hasMap": "https://maps.google.com/?q=238+Inman+Ave,+Colonia,+NJ+07067",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "15:00"
          }
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Duke Estime",
            "jobTitle": "Executive Chef & Co-Founder"
          },
          {
            "@type": "Person",
            "name": "Dumond Estime",
            "jobTitle": "Co-Founder"
          }
        ],
        "hasMenu": "https://www.estimescafe.com/#menu",
        "acceptsReservations": "False",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "180",
          "bestRating": "5"
        },
        "areaServed": [
          { "@type": "City", "name": "Colonia" },
          { "@type": "City", "name": "Woodbridge" },
          { "@type": "City", "name": "Rahway" },
          { "@type": "City", "name": "Clark" },
          { "@type": "City", "name": "Edison" },
          { "@type": "City", "name": "Westfield" },
          { "@type": "City", "name": "Scotch Plains" }
        ],
        "potentialAction": {
          "@type": "OrderAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "tel:7326697581",
            "inLanguage": "en-US",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "FoodEstablishmentReservation"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.estimescafe.com/#website",
        "url": "https://www.estimescafe.com/",
        "name": "Estime's Café",
        "description": "Premier Breakfast, Brunch, Lunch & Artisan Coffee in Colonia, NJ",
        "publisher": {
          "@id": "https://www.estimescafe.com/#restaurant"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
