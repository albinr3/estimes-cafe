export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Menu" | "Ordering" | "Dietary";
}

export const HOME_FAQS: FaqItem[] = [
  {
    id: "location-service-area",
    category: "General",
    question: "Where is Estime's Café located and what New Jersey towns do you serve?",
    answer:
      "Estime's Café is conveniently located at 238 Inman Avenue, Colonia, NJ 07067. We proudly serve guests seeking top-rated breakfast, brunch, and lunch from Colonia, Woodbridge, Rahway, Clark, Edison, Westfield, Scotch Plains, Fanwood, Cranford, and surrounding Central New Jersey communities.",
  },
  {
    id: "cuisine-specialties",
    category: "Menu",
    question: "What kind of food does Estime's Café serve for breakfast, brunch, and lunch?",
    answer:
      "Led by Executive Chef Duke Estime and co-founder Dumond Estime, we specialize in classic American comfort favorites fused with authentic Haitian and Caribbean flavor influences. Guest favorites include our famous Amaretto Brioche French Toast, Haitian Spicy Omelet, Shrimp & Grits, Lemon Ricotta Pancakes, Sriracha Chicken, and specialty artisan coffee drinks.",
  },
  {
    id: "hours-all-day-breakfast",
    category: "General",
    question: "What are your opening hours, and do you serve all-day breakfast & brunch?",
    answer:
      "We are open Monday through Saturday from 8:00 AM to 3:00 PM, and Sunday from 8:00 AM to 4:00 PM. Our full signature breakfast, brunch, and lunch menus are served fresh throughout all operating hours.",
  },
  {
    id: "takeout-delivery",
    category: "Ordering",
    question: "Do you offer takeout and local food delivery options?",
    answer:
      "Yes! You can conveniently place your order online for fast in-store pickup at our Colonia café or order delivery directly to your home or office through our online ordering portal.",
  },
  {
    id: "vegan-gluten-free-options",
    category: "Dietary",
    question: "Are there vegan, vegetarian, or gluten-conscious options on your menu?",
    answer:
      "We cater to a wide variety of dietary preferences. Our menu features customizable egg white power omelets with kale and vegetables, fresh house salads, plant-based oat milk coffee specialties, and customizable items to fit your dietary needs.",
  },
  {
    id: "quick-lunch-family-dining",
    category: "General",
    question: "Is Estime's Café suitable for quick weekday lunches and family dining?",
    answer:
      "Yes! Estime's Café offers a welcoming, family-friendly environment with fast, friendly service. We're a top choice for quick business lunches during the week as well as relaxed weekend family breakfasts and brunches.",
  },
  {
    id: "catering-private-events",
    category: "Ordering",
    question: "Do you offer catering for corporate events or private functions?",
    answer:
      "Yes, we provide full-service breakfast, lunch, and weekend brunch catering platters for corporate meetings, office lunches, birthdays, showers, and family celebrations. Explore our Catering page or call us directly at (732) 669-7581 for custom catering packages.",
  },
];
