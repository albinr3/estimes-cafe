export interface NormalMenuItem {
  name: string;
  price: string;
  description?: string;
  diet?: "Keto";
  image?: string;
  imageAlt?: string;
}

export interface NormalMenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: NormalMenuItem[];
}

// This catalog mirrors seo/menu/estimes_cafe_new_normal_menu.md.
export const NORMAL_MENU_DATA: NormalMenuCategory[] = [
  {
    id: "lets-get-started",
    title: "Let's Get Started",
    items: [
      { name: "Slab Bacon", price: "$17" },
      { name: "Uncle Dunns Shrimp", price: "$28" },
      { name: "Brunch Tacos", price: "$20" },
    ],
  },
  {
    id: "benedicts",
    title: "Benedicts",
    items: [
      {
        name: "Crispy Shrimp / Pastrami",
        price: "$22",
        image: "/assets/crispy-benedict-eggs-hollandaise.webp",
        imageAlt: "Gourmet eggs Benedict with creamy Hollandaise sauce, crispy topping, and seasoned breakfast potatoes at Estime's Cafe",
      },
      { name: "Lobster", price: "$36" },
    ],
  },
  {
    id: "breakfast-sandwiches",
    title: "Breakfast Sandwiches",
    items: [
      { name: "The Jimmy (bacon)", price: "$13", description: "Omelet style on a roll." },
      { name: "The Inman (turkey bacon)", price: "$13", description: "Omelet style on a roll." },
      {
        name: "The Mayor (sausage egg & cheese)",
        price: "$12",
        image: "/assets/the-mayor-sausage-egg-cheese-sandwich.webp",
        imageAlt: "The Mayor breakfast sandwich with savory sausage patty, melted cheddar cheese, and fried egg on a brioche roll at Estime's Cafe",
      },
      {
        name: "Steak, Egg & Cheese",
        price: "$20",
        description: "Tender steak, scrambled egg, and melted cheddar cheese on a toasted brioche roll.",
        image: "/assets/steak-egg-cheese-breakfast-sandwich.webp",
        imageAlt: "Steak, Egg & Cheese breakfast sandwich with folded eggs and melted cheddar on a toasted brioche roll at Estime's Cafe Colonia NJ",
      },
      {
        name: "Monte Estime",
        price: "$25",
        description: "French toast, sausage, egg, and cheddar.",
        image: "/assets/monte-estime-breakfast-sandwich.webp",
        imageAlt: "Chef Duke's signature Monte Estime breakfast sandwich on sweet powdered French toast with sausage, egg, and melted cheddar at Estime's Cafe",
      },
    ],
  },
  {
    id: "farmers-plate",
    title: "Farmer's Plate",
    items: [
      {
        name: "3 Eggs Any Style, Choice of Meat, Home Fries and Toast",
        price: "$15",
        description: "Three eggs cooked your way, choice of meat, crispy seasoned home fries, and toast.",
        image: "/assets/farmers-plate-eggs-sausage-home-fries.webp",
        imageAlt: "Farmer's Plate with scrambled eggs, melted cheddar cheese, breakfast sausage, seasoned home fries, and toast at Estime's Cafe Colonia NJ",
      },
    ],
  },
  {
    id: "brunch-bowls",
    title: "Brunch Bowls",
    subtitle: "Creamy grits, Creole sauce, and your choice",
    items: [
      { name: "Lobster", price: "$42" },
      { name: "Salmon", price: "$36" },
      { name: "Herring", price: "$28" },
      { name: "Shrimp", price: "$28" },
      { name: "Catfish", price: "$36" },
      { name: "Veggie", price: "$26" },
    ],
  },
  {
    id: "off-the-spatula",
    title: "Off the Spatula",
    subtitle: "$16.95 each",
    items: [
      {
        name: "Blueberry Pancakes",
        price: "$16.95",
        image: "/assets/blueberry-pancakes.webp",
        imageAlt: "Stack of fluffy blueberry pancakes topped with fresh blueberry compote and whipped cream at Estime's Cafe in Colonia NJ",
      },
      {
        name: "Lemon Ricotta Pancakes",
        price: "$16.95",
        description: "Fluffy pancakes folded with sweet ricotta, served with lemon butter, powdered sugar, and strawberry compote.",
        image: "/assets/lemon-ricotta-pancakes.webp",
        imageAlt: "Chef Duke's signature Lemon Ricotta Pancakes topped with whipped butter, powdered sugar, and strawberry compote at Estime's Cafe Colonia NJ",
      },
      {
        name: "Buttermilk Pancakes",
        price: "$16.95",
        image: "/assets/buttermilk-pancakes.webp",
        imageAlt: "Fluffy golden buttermilk pancakes topped with whipped butter and powdered sugar at Estime's Cafe in Colonia NJ",
      },
      {
        name: "Amaretto French Toast",
        price: "$16.95",
        image: "/assets/amaretto-brioche-french-toast.webp",
        imageAlt: "Decadent Amaretto brioche French toast with sweet glaze, powdered sugar, and berry compote at Estime's Cafe",
      },
      { name: "Chocolate Chip", price: "$16.95" },
    ],
  },
  {
    id: "omelets",
    title: "Omelets",
    items: [
      { name: "Haitian Spicy", price: "$18", description: "Smoked herring, peppers, onions, and epis." },
      { name: "Beckler", price: "$19", description: "Egg whites, tomato, kale, mushroom, goat cheese, and avocado on top.", diet: "Keto" },
      { name: "NY Deli", price: "$18", description: "Lean pastrami and Swiss." },
      { name: "Alfano", price: "$26", description: "Kale, epis, cheddar with grilled chicken breast and sausage on the side.", diet: "Keto" },
      { name: "Not So Western", price: "$18", description: "Peppers, onions, turkey ham, and American cheese." },
    ],
  },
  {
    id: "chef-specials",
    title: "Chef Specials",
    items: [
      { name: "Surf & Turf Breakfast", price: "$45" },
      { name: "Haitian Herring Pasta", price: "$34" },
      { name: "Lamb Chops Breakfast", price: "$38" },
      {
        name: "NY Strip Breakfast",
        price: "$38",
        image: "/assets/ny-strip-breakfast-steak.webp",
        imageAlt: "Juicy seared NY strip breakfast steak topped with pickled red onions and crispy shoestring potatoes at Estime's Cafe",
      },
      {
        name: "Honey Sriracha Fried Chicken & French Toast",
        price: "$25",
        image: "/assets/honey-sriracha-fried-chicken-french-toast.webp",
        imageAlt: "Crispy honey sriracha fried chicken over golden French toast dusted with powdered sugar at Estime's Cafe Colonia NJ",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Bacon", price: "$6" }, { name: "Sausage", price: "$6" }, { name: "Taylor Ham", price: "$6" },
      {
        name: "Home Fries",
        price: "$6",
        description: "Seasoned, crispy home fries.",
        image: "/assets/seasoned-home-fries-side.webp",
        imageAlt: "Bowl of seasoned crispy breakfast home fries side at Estime's Cafe Colonia NJ",
      },
      { name: "Turkey Bacon", price: "$8" }, { name: "Chorizo", price: "$8" }, { name: "Beef Sausage", price: "$8" }, { name: "Shrimp (5)", price: "$12" },
      {
        name: "Fried Chicken (2)",
        price: "$14",
        description: "Two pieces of crispy golden fried chicken.",
        image: "/assets/crispy-fried-chicken-side.webp",
        imageAlt: "Two pieces of crispy golden fried chicken side at Estime's Cafe Colonia NJ",
      },
      { name: "Duke's Fries", price: "$14" }, { name: "Truffle Fries", price: "$14" }, { name: "French Fries", price: "$10" },
      { name: "Grits", price: "$6" },
      {
        name: "Grits w/ Cheese",
        price: "$8",
        description: "Creamy grits with melted cheese.",
        image: "/assets/creamy-cheesy-grits.webp",
        imageAlt: "Warm creamy Southern-style cheesy grits served in a blue ceramic dish at Estime's Cafe Colonia NJ",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    subtitle: "With fries",
    items: [
      { name: "Deluxe Burger", price: "$20", description: "L.T.O." },
      { name: "All In Burger", price: "$25", description: "Home fries, bacon, and cheese." },
      { name: "Truffle Burger", price: "$30", description: "Truffle dusted mushrooms and onions with Swiss." },
    ],
  },
  {
    id: "razzle-dazzle",
    title: "Razzle Dazzle",
    subtitle: "Upcharges & add-ons",
    items: [
      { name: "Grilled Chicken", price: "$10" }, { name: "Salmon", price: "$20" }, { name: "NY Strip", price: "$25" }, { name: "Shrimp (5)", price: "$12" },
      { name: "Duke's Fries", price: "$2" }, { name: "Truffle Fries", price: "$6" }, { name: "Cheese", price: "$2" }, { name: "Avocado", price: "$3" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    subtitle: "With fries",
    items: [
      { name: "Honey Sriracha Crispy Chicken", price: "$25", description: "Sliced pickles with honey Sriracha sauce." },
      { name: "Grilled Chicken BLT", price: "$25" },
      {
        name: "Catfish",
        price: "$27",
        description: "Crispy catfish sandwich with lettuce, tomato, tartar sauce, and fries.",
        image: "/assets/crispy-catfish-sandwich.webp",
        imageAlt: "Crispy catfish sandwich on a brioche roll with lettuce, tomato, tartar sauce, served with french fries and pickle at Estime's Cafe Colonia NJ",
      },
      { name: "Prime NY Strip Steak", price: "$34", description: "Onions, peppers, and mushrooms on a steak roll." },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Kale Caesar", price: "$16", description: "Kale / romaine mix with parmesan cheese, croutons, and Caesar dressing." },
      { name: "Rob the Garden", price: "$24", description: "Romaine, peppers, onions, tomato, mushrooms, and goat cheese with balsamic dressing." },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Raspberry Hibiscus Iced Tea", price: "$8" }, { name: "Jammin' Lemonade", price: "$12" }, { name: "Fresh Squeezed OJ", price: "$14" },
      { name: "Unsweetened Iced Tea", price: "$6" }, { name: "Iced Coffee", price: "$6" }, { name: "Juice", price: "$6" }, { name: "Coffee", price: "$3.50" },
      { name: "Tea", price: "$3.50" }, { name: "Soda", price: "$3.50" }, { name: "Pellegrino", price: "$6" }, { name: "Poland Spring", price: "$4" },
    ],
  },
];
