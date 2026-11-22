export interface MegaMenuItem {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  short: string;
  href: string;
  showAll: boolean;
  items: MegaMenuItem[];
}

export interface MegaMenuPromo {
  kicker: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

export interface MegaMenuCategory {
  key: string;
  label: string;
  href: string;
  cols: MegaMenuColumn[];
  promo: MegaMenuPromo | null;
}

export const megaMenuData: Record<string, MegaMenuCategory> = {
  shop: {
    key: "shop",
    label: "Shop Boxes",
    href: "/custom-packaging",
    cols: [
      {
        title: "Mailer Boxes",
        short: "mailer boxes",
        href: "/custom-mailer-boxes",
        showAll: true,
        items: [
          { label: "Full Colour Mailer Boxes", href: "/custom-full-colour-mailer-boxes" },
          { label: "Kraft Mailer Boxes", href: "/custom-kraft-mailer-boxes", isNew: true },
          { label: "White Mailer Boxes", href: "/custom-white-mailer-boxes" },
          { label: "Black Mailer Boxes", href: "/custom-black-mailer-boxes" },
          { label: "Mailer Shipping Boxes", href: "/custom-mailer-shipping-boxes" },
          { label: "One Piece Mailer Boxes", href: "/custom-one-piece-mailer-boxes" },
          { label: "Mailer Boxes with Inserts", href: "/custom-mailer-boxes-with-inserts" },
          { label: "Mailer Boxes with Sleeves", href: "/custom-mailer-boxes-with-sleeves" },
          { label: "Subscription Boxes", href: "/custom-subscription-boxes" },
        ],
      },
      {
        title: "Rigid Boxes",
        short: "rigid boxes",
        href: "/custom-rigid-boxes",
        showAll: true,
        items: [
          { label: "Magnetic Closure Boxes", href: "/custom-magnetic-closure-boxes" },
          { label: "Luxury Boxes with Lids", href: "/custom-luxury-boxes-with-lids" },
          { label: "Sliding Drawer Boxes", href: "/custom-sliding-drawer-boxes" },
          { label: "Presentation Boxes", href: "/custom-presentation-boxes" },
          { label: "Collapsible Rigid Boxes", href: "/custom-collapsible-rigid-boxes" },
        ],
      },
      {
        title: "Folding Cartons",
        short: "folding cartons",
        href: "/custom-folding-cartons",
        showAll: true,
        items: [
          { label: "Tuck End Boxes", href: "/custom-tuck-end-boxes" },
          { label: "Reverse Tuck End Boxes", href: "/custom-reverse-tuck-end-boxes" },
          { label: "Auto Lock Bottom Boxes", href: "/custom-auto-lock-bottom-boxes" },
          { label: "Tuck Top Auto Lock Boxes", href: "/custom-tuck-top-auto-lock-boxes" },
          { label: "Hang Tab Boxes", href: "/custom-hang-tab-boxes" },
        ],
      },
      {
        title: "Paper Bags",
        short: "paper bags",
        href: "/custom-paper-bags",
        showAll: true,
        items: [
          { label: "Kraft Paper Bags", href: "/custom-kraft-paper-bags" },
          { label: "Paper Bags with Handles", href: "/custom-paper-bags-with-handles" },
          { label: "Luxury Paper Bags", href: "/custom-luxury-paper-bags" },
          { label: "Retail Paper Bags", href: "/custom-retail-paper-bags" },
          { label: "Gift Paper Bags", href: "/custom-gift-paper-bags" },
          { label: "Food Paper Bags", href: "/custom-food-paper-bags" },
          { label: "Paper Bags with Strings", href: "/custom-paper-bags-with-strings" },
        ],
      },
      {
        title: "Packaging Accessories",
        short: "accessories",
        href: "/packaging-accessories",
        showAll: true,
        items: [
          { label: "Custom Tissue Paper", href: "/custom-tissue-paper" },
          { label: "Custom Labels & Stickers", href: "/custom-labels-stickers" },
          { label: "Greaseproof Paper", href: "/custom-greaseproof-paper" },
          { label: "Baking Paper", href: "/custom-baking-paper" },
        ],
      },
    ],
    promo: {
      kicker: "CHRISTMAS 2026",
      title: "Christmas gift & hamper boxes",
      body: "Order early for December delivery Australia-wide.",
      cta: "Shop Christmas boxes",
      href: "/custom-christmas-gift-boxes",
    },
  },
  industries: {
    key: "industries",
    label: "Industries",
    href: "/industries",
    cols: [
      {
        title: "Food Boxes",
        short: "food boxes",
        href: "/custom-food-boxes",
        showAll: true,
        items: [
          { label: "Burger Boxes", href: "/custom-burger-boxes" },
          { label: "Pizza Boxes", href: "/custom-pizza-boxes" },
          { label: "Hot Chip Boxes", href: "/custom-hot-chip-boxes" },
          { label: "Fried Chicken Boxes", href: "/custom-fried-chicken-boxes" },
          { label: "Sandwich Boxes", href: "/custom-sandwich-boxes" },
          { label: "Coffee Boxes", href: "/custom-coffee-boxes" },
          { label: "Tea Boxes", href: "/custom-tea-boxes" },
          { label: "Popcorn Boxes", href: "/custom-popcorn-boxes" },
          { label: "Pet Food & Treat Boxes", href: "/custom-pet-food-boxes" },
        ],
      },
      {
        title: "Bakery Boxes",
        short: "bakery boxes",
        href: "/custom-bakery-boxes",
        showAll: true,
        items: [
          { label: "Cake Boxes", href: "/custom-cake-boxes" },
          { label: "Cupcake Boxes", href: "/custom-cupcake-boxes" },
          { label: "Donut Boxes", href: "/custom-donut-boxes" },
          { label: "Cookie & Biscuit Boxes", href: "/custom-cookie-boxes" },
          { label: "Pastry Boxes", href: "/custom-pastry-boxes" },
          { label: "Dessert Boxes", href: "/custom-dessert-boxes" },
          { label: "Chocolate Boxes", href: "/custom-chocolate-boxes" },
        ],
      },
      {
        title: "Cosmetic Boxes",
        short: "cosmetic boxes",
        href: "/custom-cosmetic-boxes",
        showAll: true,
        items: [
          { label: "Skincare Boxes", href: "/custom-skincare-boxes" },
          { label: "Soap Boxes", href: "/custom-soap-boxes" },
          { label: "Perfume Boxes", href: "/custom-perfume-boxes" },
          { label: "Lipstick Boxes", href: "/custom-lipstick-boxes" },
          { label: "Bath Bomb Boxes", href: "/custom-bath-bomb-boxes" },
          { label: "Foundation Boxes", href: "/custom-foundation-boxes" },
          { label: "Hair Extension Boxes", href: "/custom-hair-extension-boxes" },
        ],
      },
      {
        title: "Candle Boxes",
        short: "candle boxes",
        href: "/custom-candle-boxes",
        showAll: true,
        items: [
          { label: "Candle Jar Boxes", href: "/custom-candle-jar-boxes" },
          { label: "Candle Gift Boxes", href: "/custom-candle-gift-boxes" },
          { label: "Candle Shipping Boxes", href: "/custom-candle-shipping-boxes" },
          { label: "Pillar Candle Boxes", href: "/custom-pillar-candle-boxes" },
          { label: "Votive Candle Boxes", href: "/custom-votive-candle-boxes" },
        ],
      },
      {
        title: "Gift Boxes",
        short: "gift boxes",
        href: "/custom-gift-boxes",
        showAll: true,
        items: [
          { label: "Christmas Gift Boxes", href: "/custom-christmas-gift-boxes" },
          { label: "Corporate Gift Boxes", href: "/custom-corporate-gift-boxes" },
          { label: "Hamper Boxes", href: "/custom-hamper-boxes", isNew: true },
          { label: "Wine Boxes", href: "/custom-wine-boxes", isNew: true },
          { label: "Favour Boxes", href: "/custom-favour-boxes" },
        ],
      },
      {
        title: "Retail Boxes",
        short: "retail boxes",
        href: "/custom-retail-boxes",
        showAll: true,
        items: [
          { label: "Display Boxes", href: "/custom-display-boxes" },
          { label: "Toy Boxes", href: "/custom-toy-boxes" },
          { label: "Game Boxes", href: "/custom-game-boxes" },
          { label: "Gable Boxes", href: "/custom-gable-boxes" },
        ],
      },
    ],
    promo: null,
  },
  resources: {
    key: "resources",
    label: "Resources",
    href: "/resources",
    cols: [
      {
        title: "Ordering Help",
        short: "ordering help",
        href: "/how-to-order",
        showAll: false,
        items: [
          { label: "How to Order", href: "/how-to-order" },
          { label: "Get a Quote", href: "/get-a-quote" },
          { label: "Free Box Samples", href: "/free-samples" },
          { label: "Turnaround & Lead Times", href: "/lead-times" },
          { label: "Shipping Australia-wide", href: "/shipping-delivery" },
          { label: "Reprints & Returns", href: "/returns" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
      {
        title: "Design Help",
        short: "design help",
        href: "/artwork-guidelines",
        showAll: false,
        items: [
          { label: "Artwork Guidelines", href: "/artwork-guidelines" },
          { label: "Free Dieline Templates", href: "/dieline-templates", isNew: true },
          { label: "Box Size Guide", href: "/box-size-guide" },
          { label: "Box Styles Explained", href: "/box-styles" },
          { label: "Printing Methods", href: "/printing-methods" },
          { label: "Finishes: Foil, Emboss, Spot UV", href: "/finishes" },
        ],
      },
      {
        title: "Materials & Eco",
        short: "materials",
        href: "/materials-library",
        showAll: false,
        items: [
          { label: "Materials Library", href: "/materials-library" },
          { label: "Paper Weight (GSM) Chart", href: "/paper-weight-chart" },
          { label: "Corrugated Flute Guide", href: "/flute-guide" },
          { label: "Eco Packaging", href: "/eco-packaging" },
          { label: "Recyclable & Compostable Guide", href: "/recyclable-packaging-guide", isNew: true },
          { label: "Food-Safe Packaging", href: "/food-safe-packaging" },
        ],
      },
      {
        title: "Our Work",
        short: "our work",
        href: "/case-studies",
        showAll: false,
        items: [
          { label: "Case Studies", href: "/case-studies" },
          { label: "Packaging Gallery", href: "/gallery" },
          { label: "Customer Reviews", href: "/reviews" },
          { label: "Packaging Blog", href: "/blog" },
          { label: "Packaging Glossary", href: "/glossary" },
        ],
      },
      {
        title: "Company",
        short: "company",
        href: "/about-us",
        showAll: false,
        items: [
          { label: "About Us", href: "/about-us" },
          { label: "Meet the Team", href: "/team" },
          { label: "How We Make Your Boxes", href: "/our-process" },
          { label: "Quality & Certifications", href: "/certifications" },
          { label: "Contact Us", href: "/contact-us" },
        ],
      },
    ],
    promo: {
      kicker: "FREE DOWNLOAD",
      title: "Dieline templates for every box style",
      body: "Print-ready AI and PDF templates, sized in millimetres.",
      cta: "Get templates",
      href: "/dieline-templates",
    },
  },
};

/**
 * Returns all slugs across the mega menu for static route generation.
 */
export function getAllMegaMenuSlugs(): string[] {
  const slugs = new Set<string>();

  Object.values(megaMenuData).forEach((cat) => {
    // Add category href if not root or external
    const catSlug = cat.href.replace(/^\//, "").replace(/\/$/, "");
    if (catSlug) slugs.add(catSlug);

    // Add column hrefs
    cat.cols.forEach((col) => {
      const colSlug = col.href.replace(/^\//, "").replace(/\/$/, "");
      if (colSlug) slugs.add(colSlug);

      // Add item hrefs
      col.items.forEach((item) => {
        const itemSlug = item.href.replace(/^\//, "").replace(/\/$/, "");
        if (itemSlug) slugs.add(itemSlug);
      });
    });

    // Add promo href
    if (cat.promo?.href) {
      const promoSlug = cat.promo.href.replace(/^\//, "").replace(/\/$/, "");
      if (promoSlug) slugs.add(promoSlug);
    }
  });

  // Additional essential website pages
  [
    "terms-and-conditions",
    "privacy-policy",
    "track-order",
    "contact-us",
    "free-samples",
    "get-a-quote",
    "pricing",
    "eco-packaging",
    "about-us",
  ].forEach((s) => slugs.add(s));

  // Add alias routes without "custom-" prefix (e.g. /burger-boxes, /mailer-boxes, /food-boxes)
  const currentSlugs = Array.from(slugs);
  currentSlugs.forEach((s) => {
    if (s.startsWith("custom-")) {
      const alias = s.replace(/^custom-/, "");
      if (alias) slugs.add(alias);
    }
  });

  return Array.from(slugs);
}
