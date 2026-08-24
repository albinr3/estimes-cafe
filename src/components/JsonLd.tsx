import { BUSINESS_BRAND_NAME, BUSINESS_NAP_NAME } from "@/lib/business";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "CafeOrCoffeeShop", "LocalBusiness"],
        "@id": "https://www.estimescafe.com/#restaurant",
        "name": BUSINESS_NAP_NAME,
        "alternateName": [BUSINESS_BRAND_NAME, "Estime Cafe"],
        "description": "Premier breakfast, signature brunch, lunch, and specialty artisan coffee featuring American comfort favorites fused with Haitian and Caribbean flavors by Chef Duke Estime in Colonia, NJ.",
        "url": "https://www.estimescafe.com/",
        "telephone": "+1-732-669-7581",
        "email": "Estimecafe1@gmail.com",
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
          "https://www.estimescafe.com/assets/estimes-cafe-breakfast-brunch-colonia-nj.jpg",
          "https://www.estimescafe.com/assets/signature-weekend-brunch-specialty-pancakes-colonia-nj.jpg",
          "https://www.estimescafe.com/assets/fresh-lunch-specials-handcrafted-sandwiches-colonia-nj.jpg",
          "https://www.estimescafe.com/assets/estimes-cafe-dining-room-interior-colonia-nj.jpg",
          "https://www.estimescafe.com/assets/estimes-cafe-storefront-colonia-nj.jpg"
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
          "latitude": 40.6003432,
          "longitude": -74.3126004
        },
        "hasMap": "https://www.google.com/maps/place/Estime's+Cafe/@40.6003432,-74.3151753,17z/data=!3m1!4b1!4m6!3m5!1s0x89c3b78d2780b6fd:0xfa97f1d15128900a!8m2!3d40.6003432!4d-74.3126004!16s%2Fg%2F11fb18d03y",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "15:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "08:00",
            "closes": "16:00"
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
        "name": BUSINESS_NAP_NAME,
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
