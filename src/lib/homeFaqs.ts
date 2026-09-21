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
      "We are located at 238 Inman Avenue, Colonia, NJ 07067. We serve top-rated breakfast, brunch, and lunch to guests from Colonia, Woodbridge, Rahway, Clark, Edison, Westfield, Scotch Plains, and across Central New Jersey.",
  },
  {
    id: "daily-hours-open-now",
    category: "General",
    question: "What time do you open for breakfast, and is Estime's Café open now today?",
    answer:
      "Estime's Café opens daily at 8:00 AM for fresh brewed coffee and hot, made-to-order breakfast. Our hours are Monday through Saturday from 8:00 AM to 3:00 PM, and Sunday from 8:00 AM to 4:00 PM. Our full breakfast, brunch, and lunch menu is available all day during operating hours.",
  },
  {
    id: "sunday-brunch-hours",
    category: "General",
    question: "Where can I eat Sunday brunch near me in Colonia and Central New Jersey, and what are your weekend hours?",
    answer:
      "Estime's Café is located at 238 Inman Avenue in Colonia, NJ, serving weekend brunch every Saturday from 8:00 AM to 3:00 PM and Sunday from 8:00 AM to 4:00 PM. We welcome walk-in guests and families from Colonia, Woodbridge, Clark, Rahway, Edison, and Westfield for fresh, made-to-order breakfast favorites and signature weekend brunch specials.",
  },
  {
    id: "popular-brunch-dishes",
    category: "Menu",
    question: "What are the most popular signature dishes to eat for brunch at Estime's Café?",
    answer:
      "Our top-rated brunch favorites include Chef Duke's famous Amaretto Brioche French Toast and fluffy Lemon Ricotta Pancakes ($16.95), savory Lobster Benedict ($36), Creamy Grits with Creole Shrimp or Catfish ($28–$36), and Honey Sriracha Fried Chicken & French Toast ($25). We also feature hearty breakfast sandwiches like The Mayor and keto-friendly specialty omelets like The Beckler.",
  },
  {
    id: "cuisine-specialties",
    category: "Menu",
    question: "What kind of food does Estime's Café serve for breakfast, brunch, and lunch?",
    answer:
      "Executive Chef Duke Estime and co-founder Dumond Estime pair American comfort classics with Haitian and Caribbean recipes. Guest favorites include our famous Amaretto Brioche French Toast, Haitian Spicy Omelet, Creole Shrimp & Grits, Lemon Ricotta Pancakes, Honey Sriracha Chicken, and specialty coffee drinks.",
  },
  {
    id: "takeout-delivery",
    category: "Ordering",
    question: "How can I order breakfast near me for delivery or pickup from Estime's Café?",
    answer:
      "You can easily order fresh breakfast, brunch, and lunch for fast pickup or delivery directly on our website, or via DoorDash, Uber Eats, and Grubhub. We prepare all orders hot from scratch at 238 Inman Avenue, Colonia, NJ, delivering to homes and offices throughout Colonia, Woodbridge, Clark, Rahway, Edison, and Westfield. Call (732) 669-7581 for direct counter pickup.",
  },
  {
    id: "large-groups-family",
    category: "General",
    question: "Can Estime's Café accommodate large groups, family breakfasts, and kids?",
    answer:
      "Yes! Estime's Café is family-friendly with comfortable indoor dining and menu favorites that kids love, including buttermilk pancakes, chocolate chip stacks, and fresh juices. Seating for regular dining is walk-in friendly. For parties of 6 or more, please call us ahead at (732) 669-7581 so our team can prepare seating, or inquire about private event venue rental for up to 35 guests.",
  },
  {
    id: "dog-friendly-patio",
    category: "General",
    question: "Is Estime's Café dog friendly or pet friendly for outdoor dining?",
    answer:
      "Yes! Well-behaved, leashed dogs are warmly welcomed in our outdoor patio seating area along Inman Avenue. Enjoy your fresh morning coffee, pancakes, and weekend brunch in the fresh air alongside your pet.",
  },
  {
    id: "work-study-wifi",
    category: "General",
    question: "Can I work on my laptop or study with coffee at Estime's Café?",
    answer:
      "Yes! On weekdays, we welcome remote workers, freelancers, and students looking for a cozy, inspiring atmosphere. We provide complimentary Wi-Fi, comfortable seating, and artisan espresso drinks, house-brewed coffees, and fresh breakfast to fuel your workday with active menu purchases.",
  },
  {
    id: "brunch-catering-trays",
    category: "Ordering",
    question: "Where can I order brunch catering or breakfast party trays near me in Central NJ?",
    answer:
      "Estime's Café provides full-service breakfast and brunch catering platters across Colonia, Woodbridge, Clark, Edison, and throughout Middlesex and Union Counties. We deliver gourmet pancake stacks, brioche French toast trays, scrambled eggs, artisan breakfast sandwich platters (The Mayor, The Jimmy), and Creole shrimp & grits for corporate meetings, office breakfasts, bridal showers, baby showers, and family celebrations.",
  },
  {
    id: "vegan-gluten-free-options",
    category: "Dietary",
    question: "Are there vegan, vegetarian, or keto-friendly options on your menu?",
    answer:
      "Yes. Our kitchen prepares dedicated keto-friendly omelets like The Beckler (egg whites, kale, goat cheese, avocado) and The Alfano (grilled chicken, kale, cheddar), alongside fresh garden salads, vegetable Creole grits bowls, and oat milk for coffee and espresso drinks. Most menu items can be adjusted to meet your dietary preferences.",
  },
];
