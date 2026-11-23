export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  badge?: string;
  image: string;
  gallery: string[];
  minQty: string;
  leadTime: string;
  description: string;
  tags: string[];
  rating: number;
  reviewsCount: number;
  startingPrice: string;
  material: string;
  industry: string[];
}

export const mailerBoxesProducts: ProductItem[] = [
  {
    id: "mailer-full-colour",
    slug: "custom-full-colour-mailer-boxes",
    title: "Custom Full Colour Mailer Boxes",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom Full Color Mailer Boxes/Full Color Mailer Boxes.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom Full Color Mailer Boxes/Full Color Mailer Boxes.webp",
      "/images/products/mailer-boxes/Custom Full Color Mailer Boxes/Custom Full Color Mailer Box.webp",
      "/images/products/mailer-boxes/Custom Full Color Mailer Boxes/Custom Full Color Mailer Boxes.webp",
      "/images/products/mailer-boxes/Custom Full Color Mailer Boxes/Full Color Mailer Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "The workhorse for heavier and larger orders with vibrant edge-to-edge printing.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$1.85",
    material: "Corrugated Cardboard",
    industry: ["Retail & e-commerce", "Beauty & skincare", "Gifts & occasions"],
  },
  {
    id: "mailer-black",
    slug: "custom-black-mailer-boxes",
    title: "Custom Black Mailer Boxes",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom Black Mailer Boxes/Custom-Black-Mailer-Boxes.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom Black Mailer Boxes/Custom-Black-Mailer-Boxes.webp",
      "/images/products/mailer-boxes/Custom Black Mailer Boxes/Black Mailer Boxes.webp",
      "/images/products/mailer-boxes/Custom Black Mailer Boxes/Black Mailer Boxes With Divider.webp",
      "/images/products/mailer-boxes/Custom Black Mailer Boxes/Printed Black Mailer Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Solid dyed black kraft mailers designed for premium unboxing and luxury retail orders.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$2.10",
    material: "Black Kraft Board",
    industry: ["Jewellery & accessories", "Beauty & skincare", "Retail & e-commerce"],
  },
  {
    id: "mailer-white",
    slug: "custom-white-mailer-boxes",
    title: "Custom White Mailer Boxes",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom White Mailer Boxes/White-Mailer-Box.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom White Mailer Boxes/White-Mailer-Box.webp",
      "/images/products/mailer-boxes/Custom White Mailer Boxes/Luxury-White-Mailer-Boxes.webp",
      "/images/products/mailer-boxes/Custom White Mailer Boxes/Printed-White-Mailer-Box.webp",
      "/images/products/mailer-boxes/Custom White Mailer Boxes/White-Mailer-Box-With-Window.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Clean bleached white corrugated board suitable for cosmetics, gifting, and retail goods.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$1.75",
    material: "Bleached White Corrugated",
    industry: ["Beauty & skincare", "Food & beverage", "Retail & e-commerce"],
  },
  {
    id: "mailer-inserts",
    slug: "custom-mailer-boxes-with-inserts",
    title: "Custom Mailer Boxes with Inserts",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom Mailer Boxes with Inserts/Custom-Mailer-Boxes-with-Inserts.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom Mailer Boxes with Inserts/Custom-Mailer-Boxes-with-Inserts.webp",
      "/images/products/mailer-boxes/Custom Mailer Boxes with Inserts/mailer-box-with-inserts.webp",
      "/images/products/mailer-boxes/Custom Mailer Boxes with Inserts/Printed Mailer Boxes with Insert.webp",
      "/images/products/mailer-boxes/Custom Mailer Boxes with Inserts/mailer-box-without-dust-flaps.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Precision custom die-cut inserts molded to hold and protect fragile items securely.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$2.45",
    material: "Corrugated Cardboard + Foam",
    industry: ["Jewellery & accessories", "Beauty & skincare", "Home & lifestyle"],
  },
  {
    id: "mailer-shipping",
    slug: "custom-mailer-shipping-boxes",
    title: "Custom Mailer Shipping Boxes",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom Mailer Shipping Boxes/Mailer Shipping Box.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom Mailer Shipping Boxes/Mailer Shipping Box.webp",
      "/images/products/mailer-boxes/Custom Mailer Shipping Boxes/Long Mailer Shipping Box.webp",
      "/images/products/mailer-boxes/Custom Mailer Shipping Boxes/Mailer Shipping Boxes With Window.webp",
      "/images/products/mailer-boxes/Custom Mailer Shipping Boxes/Printed Mailer Shipping Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "The workhorse for heavier and larger orders built for domestic parcel shipping.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$1.95",
    material: "Heavy Duty E/B Flute",
    industry: ["Retail & e-commerce", "Home & lifestyle", "Food & beverage"],
  },
  {
    id: "mailer-one-piece",
    slug: "custom-one-piece-mailer-boxes",
    title: "Custom One Piece Mailer Boxes",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Custom One Piece Mailer Boxes/One-Piece-Mailer-Box.webp",
    gallery: [
      "/images/products/mailer-boxes/Custom One Piece Mailer Boxes/One-Piece-Mailer-Box.webp",
      "/images/products/mailer-boxes/Custom One Piece Mailer Boxes/Kraft-One-Piece-Mailer-Box.webp",
      "/images/products/mailer-boxes/Custom One Piece Mailer Boxes/One-Piece-Mailer-Boxes-With-Inserts.webp",
      "/images/products/mailer-boxes/Custom One Piece Mailer Boxes/Printed-Full-Color-Mailer-Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Self-assembling single-sheet die-cut mailer requiring zero glue or tape for ultra fast packing.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$1.65",
    material: "FSC Certified Kraft Flute",
    industry: ["Retail & e-commerce", "Gifts & occasions", "Food & beverage"],
  },
  {
    id: "mailer-sleeves",
    slug: "custom-mailer-boxes-with-sleeves",
    title: "Mailer Boxes with Sleeves",
    categorySlug: "custom-mailer-boxes",
    categoryTitle: "Mailer Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/mailer-boxes/Mailer Boxes with Sleeves/Custom-Mailer-Box-With-Sleeve.webp",
    gallery: [
      "/images/products/mailer-boxes/Mailer Boxes with Sleeves/Custom-Mailer-Box-With-Sleeve.webp",
      "/images/products/mailer-boxes/Mailer Boxes with Sleeves/Custom-Mailer-Boxes-with-Sleeve.webp",
      "/images/products/mailer-boxes/Mailer Boxes with Sleeves/Custom-Mailer-Boxes-with-Sleeves.webp",
      "/images/products/mailer-boxes/Mailer Boxes with Sleeves/Custom-Full-Color-Mailer-Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Slide-over printed belly bands and paper sleeves providing an extra reveal layer.",
    tags: ["Tuck End", "Auto Lock", "Reverse Tuck End"],
    rating: 4.7,
    reviewsCount: 24,
    startingPrice: "$2.25",
    material: "Corrugated + 350gsm Sleeve",
    industry: ["Gifts & occasions", "Beauty & skincare", "Jewellery & accessories"],
  },
];

export const foodBoxesProducts: ProductItem[] = [
  {
    id: "food-burger",
    slug: "custom-burger-boxes",
    title: "Custom Burger Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Burger Box/Burger-Box.webp",
    gallery: [
      "/images/products/food-boxes/Custom Burger Box/Burger-Box.webp",
      "/images/products/food-boxes/Custom Burger Box/Custom-Burger-Box.webp",
      "/images/products/food-boxes/Custom Burger Box/Luxury-Burger-Boxes.webp",
      "/images/products/food-boxes/Custom Burger Box/Printed-Burger-Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Greaseproof and heat-retaining food-grade clamshell burger boxes tailored for takeaway.",
    tags: ["Tuck End", "Auto Lock", "Grease Resistant"],
    rating: 4.8,
    reviewsCount: 36,
    startingPrice: "$0.45",
    material: "Greaseproof Kraft Cardboard",
    industry: ["Food & beverage", "Retail & e-commerce", "Hospitality & events"],
  },
  {
    id: "food-coffee",
    slug: "custom-coffee-boxes",
    title: "Custom Coffee Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Coffee Boxes/Printed-Coffee-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Coffee Boxes/Printed-Coffee-Boxes.webp",
      "/images/products/food-boxes/Custom Coffee Boxes/Display-Coffee-Boxes.webp",
      "/images/products/food-boxes/Custom Coffee Boxes/Dispenser-Coffee-Boxes.webp",
      "/images/products/food-boxes/Custom Coffee Boxes/Kraft-Coffee-Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Aroma-sealing coffee bean and pod dispenser boxes with custom cutout windows.",
    tags: ["Dispenser Cutout", "Auto Lock", "Aroma Barrier"],
    rating: 4.9,
    reviewsCount: 42,
    startingPrice: "$0.65",
    material: "Virgin Kraft Paperboard",
    industry: ["Food & beverage", "Retail & e-commerce"],
  },
  {
    id: "food-dog-food",
    slug: "custom-dog-food-boxes",
    title: "Custom Dog Food Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Dog Food Boxes/Custom-Dog-Food-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Dog Food Boxes/Custom-Dog-Food-Boxes.webp",
      "/images/products/food-boxes/Custom Dog Food Boxes/Cereal-Dog-Food-Box.webp",
      "/images/products/food-boxes/Custom Dog Food Boxes/Dog-Food-Boxes.webp",
      "/images/products/food-boxes/Custom Dog Food Boxes/Mailer-Dog-Food-Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Heavy-duty reinforced pet food cartons with barrier coatings to preserve crunch.",
    tags: ["Pour Spout", "Moisture Barrier", "Heavy Duty"],
    rating: 4.7,
    reviewsCount: 28,
    startingPrice: "$0.55",
    material: "Recycled Food Board",
    industry: ["Food & beverage", "Retail & e-commerce"],
  },
  {
    id: "food-favour",
    slug: "custom-favour-boxes",
    title: "Custom Favour Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Favour Boxes/Favour-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Favour Boxes/Favour-Boxes.webp",
      "/images/products/food-boxes/Custom Favour Boxes/Gable-Favour-Box.webp",
      "/images/products/food-boxes/Custom Favour Boxes/Luxury-Favour-Boxes.webp",
      "/images/products/food-boxes/Custom Favour Boxes/Printed-Favour-Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Charming gable and mini favour gift boxes for confectionery, events, and wedding treats.",
    tags: ["Gable Handle", "Easy Assembly", "Ribbon Cutout"],
    rating: 4.9,
    reviewsCount: 31,
    startingPrice: "$0.48",
    material: "Premium 350gsm Cardstock",
    industry: ["Gifts & occasions", "Food & beverage"],
  },
  {
    id: "food-paper",
    slug: "custom-food-paper",
    title: "Custom Food Paper",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Food Paper/Food-Paper.webp",
    gallery: [
      "/images/products/food-boxes/Custom Food Paper/Food-Paper.webp",
      "/images/products/food-boxes/Custom Food Paper/Kraft-Food-Paper.webp",
      "/images/products/food-boxes/Custom Food Paper/Luxury-Food-Paper.webp",
      "/images/products/food-boxes/Custom Food Paper/Printed-Food-Paper.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Custom printed greaseproof wrapping sheets and basket liners made from food-grade parchment.",
    tags: ["Greaseproof", "Soy Inks", "Basket Liners"],
    rating: 4.8,
    reviewsCount: 39,
    startingPrice: "$0.18",
    material: "Food Safe Greaseproof Paper",
    industry: ["Food & beverage", "Hospitality & events"],
  },
  {
    id: "food-french-fry",
    slug: "custom-french-fry-boxes",
    title: "Custom French Fry Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom French Fry Boxes/French-Fries-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom French Fry Boxes/French-Fries-Boxes.webp",
      "/images/products/food-boxes/Custom French Fry Boxes/French-Fries-Box.webp",
      "/images/products/food-boxes/Custom French Fry Boxes/Kraft-French-Fries-Boxes.webp",
      "/images/products/food-boxes/Custom French Fry Boxes/Printed-French-Fries-Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Scoop-style open top fry and hot chip cartons engineered with grease-barrier paperboard.",
    tags: ["Scoop Front", "Auto Bottom", "Grease Resistant"],
    rating: 4.8,
    reviewsCount: 33,
    startingPrice: "$0.32",
    material: "PE Lined Kraft Board",
    industry: ["Food & beverage", "Hospitality & events"],
  },
  {
    id: "food-fried-chicken",
    slug: "custom-fried-chicken-boxes",
    title: "Custom Fried Chicken Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Fried Chicken Boxes/Fried Chicken Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Fried Chicken Boxes/Fried Chicken Boxes.webp",
      "/images/products/food-boxes/Custom Fried Chicken Boxes/Gable Fried Chicken Boxes.webp",
      "/images/products/food-boxes/Custom Fried Chicken Boxes/Mailer-Fried-Chicken-Box.webp",
      "/images/products/food-boxes/Custom Fried Chicken Boxes/Tuck-Crispy-Chicken.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Steam-vented hot chicken cartons preventing condensation to maintain crispy coatings.",
    tags: ["Steam Vents", "Fold-Flat", "Oil Barrier"],
    rating: 4.9,
    reviewsCount: 45,
    startingPrice: "$0.52",
    material: "Heavy Duty Corrugated E-Flute",
    industry: ["Food & beverage", "Hospitality & events"],
  },
  {
    id: "food-sandwich",
    slug: "custom-sandwich-boxes",
    title: "Custom Sandwich Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Sandwich Box/Custom-Sandwich-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Sandwich Box/Custom-Sandwich-Boxes.webp",
      "/images/products/food-boxes/Custom Sandwich Box/Kraft-Sandwich-Boxes.webp",
      "/images/products/food-boxes/Custom Sandwich Box/Sandwich-Box.webp",
      "/images/products/food-boxes/Custom Sandwich Box/Sandwich-Boxes-With-Window.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Wedge sandwich and sub wrap packs with crystal-clear biodegradable PLA viewing windows.",
    tags: ["Clear Window", "Tuck End", "Bio Film"],
    rating: 4.7,
    reviewsCount: 29,
    startingPrice: "$0.38",
    material: "FSC Kraft + Plant-Based Window",
    industry: ["Food & beverage", "Retail & e-commerce"],
  },
  {
    id: "food-tea",
    slug: "custom-tea-boxes",
    title: "Custom Tea Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Custom Tea Boxes/Printed-Tea-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Custom Tea Boxes/Printed-Tea-Boxes.webp",
      "/images/products/food-boxes/Custom Tea Boxes/Display-Tea-Boxes.webp",
      "/images/products/food-boxes/Custom Tea Boxes/Drawer-Tea-Boxes.webp",
      "/images/products/food-boxes/Custom Tea Boxes/Luxury-Tea-Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Elegant sliding drawer and flip-top tea bag cartons finished with soft-touch matte lamination.",
    tags: ["Sliding Drawer", "Foil Stamping", "Aroma Seal"],
    rating: 4.9,
    reviewsCount: 37,
    startingPrice: "$0.72",
    material: "Rigid Cardboard + Paper Wrap",
    industry: ["Food & beverage", "Gifts & occasions"],
  },
  {
    id: "food-pizza",
    slug: "custom-pizza-boxes",
    title: "Custom Pizza Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Pizza Boxes/Custom pizza.webp",
    gallery: [
      "/images/products/food-boxes/Pizza Boxes/Custom pizza.webp",
      "/images/products/food-boxes/Pizza Boxes/Kraft-Pizza-Box.webp",
      "/images/products/food-boxes/Pizza Boxes/Luxury=Pizza-Boxes.webp",
      "/images/products/food-boxes/Pizza Boxes/Printed-PIzza-Box.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Heavy-duty thermal corrugated pizza boxes with steam release vents to keep crusts crisp.",
    tags: ["Thermal Flute", "Steam Venting", "Stack Safe"],
    rating: 4.9,
    reviewsCount: 52,
    startingPrice: "$0.68",
    material: "Fluted Thermal Corrugated",
    industry: ["Food & beverage", "Hospitality & events"],
  },
  {
    id: "food-popcorn",
    slug: "custom-popcorn-boxes",
    title: "Custom Popcorn Boxes",
    categorySlug: "custom-food-boxes",
    categoryTitle: "Food Boxes",
    badge: "BEST FOR BULKY ITEMS",
    image: "/images/products/food-boxes/Popcorn Boxes/Popcorn-Boxes.webp",
    gallery: [
      "/images/products/food-boxes/Popcorn Boxes/Popcorn-Boxes.webp",
      "/images/products/food-boxes/Popcorn Boxes/Custom-Popcorn-Boxes.webp",
      "/images/products/food-boxes/Popcorn Boxes/Kraft-Popcorn-Boxes.webp",
      "/images/products/food-boxes/Popcorn Boxes/Printed-Popcorn-Boxes.webp",
    ],
    minQty: "From 1 units",
    leadTime: "Delivery 7–10 business days",
    description: "Classic scalloped-rim cinema and snack popcorn cartons with crash-lock automatic pop-up bottoms.",
    tags: ["Scalloped Top", "Auto Bottom", "Leak Proof"],
    rating: 4.8,
    reviewsCount: 34,
    startingPrice: "$0.36",
    material: "Food Safe White Cardboard",
    industry: ["Food & beverage", "Hospitality & events", "Retail & e-commerce"],
  },
];

export const allProducts: ProductItem[] = [
  ...mailerBoxesProducts,
  ...foodBoxesProducts,
];

export function getProductsByCategory(categorySlug: string): ProductItem[] {
  const norm = categorySlug.toLowerCase().replace(/^custom-/, "").replace(/-/g, "");
  if (
    norm.includes("food") ||
    norm.includes("burger") ||
    norm.includes("pizza") ||
    norm.includes("coffee") ||
    norm.includes("tea") ||
    norm.includes("popcorn") ||
    norm.includes("sandwich") ||
    norm.includes("favour")
  ) {
    return foodBoxesProducts;
  }
  return mailerBoxesProducts;
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/^custom-/, "")
      .replace(/colour/g, "color")
      .replace(/boxes$/, "box")
      .replace(/-/g, "");

  const target = normalize(slug);

  return allProducts.find((p) => {
    if (p.slug === slug) return true;
    return normalize(p.slug) === target;
  });
}
