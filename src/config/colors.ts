/**
 * Australian Custom Boxes - Official Brand Color Palette
 * Sourced directly from brand design guidelines.
 */

export const brandColors = {
  // Primary Navy Blues
  navy: {
    DEFAULT: "#082E63", // Core Brand Primary Navy
    dark: "#041F49",    // Deep Midnight Navy (Headers / Dark sections)
    light: "#0A3974",   // Medium Royal Navy
    action: "#1976D2",  // Interactive / Link Blue
  },

  // Australian Gold & Amber Accents
  gold: {
    DEFAULT: "#F2B329", // Primary Accent Gold (Buttons, CTA, Highlights)
    warm: "#F2BE44",    // Warm Mustard Gold
    light: "#F6CA65",   // Soft Pastel Gold
    ochre: "#B5882D",   // Medium Antique Ochre
    deep: "#986400",    // Deep Amber / Golden Bronze
    warning: "#FFC107", // Bright Amber Warning
  },

  // Soft Ice, Slate & Neutral Backgrounds
  soft: {
    ice: "#F5F8FF",        // Tinted Icy Blue Background
    slate: "#DCE4EF",      // Muted Light Slate Border / Card
    periwinkle: "#C5D0E8", // Soft Periwinkle Neutral
    white: "#FFFFFF",      // Pure White
  },

  // Functional & Semantic Status
  status: {
    success: "#4CAF50", // Positive / Verified Green
    danger: "#FF3D00",  // Urgent / Danger Red-Orange
    warning: "#FFC107", // Alert / Attention Amber
    info: "#1976D2",    // Informational Blue
  },

  // Pre-calculated Alpha / Opacity Variants (from design tokens)
  alpha: {
    navy66: "rgba(8, 46, 99, 0.66)",       // #082E63 at 66%
    navyDark35: "rgba(4, 31, 73, 0.35)",    // #041F49 at 35%
    ice66: "rgba(245, 248, 255, 0.66)",    // #F5F8FF at 66%
    ice55: "rgba(245, 248, 255, 0.55)",    // #F5F8FF at 55%
    ice40: "rgba(245, 248, 255, 0.40)",    // #F5F8FF at 40%
    ice14: "rgba(245, 248, 255, 0.14)",    // #F5F8FF at 14%
    white80: "rgba(255, 255, 255, 0.80)",  // #FFFFFF at 80%
    white35: "rgba(255, 255, 255, 0.35)",  // #FFFFFF at 35%
    white02: "rgba(255, 255, 255, 0.002)", // #FFFFFF at 0.2%
  },
} as const;

export type BrandColors = typeof brandColors;

/**
 * Flat list of all palette hex codes for quick reference
 */
export const paletteList = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Brand Navy (Primary)", hex: "#082E63" },
  { name: "Ice Blue 66%", hex: "#F5F8FF", opacity: "66%" },
  { name: "Deep Gold / Amber", hex: "#986400" },
  { name: "Midnight Navy Dark", hex: "#041F49" },
  { name: "Light Gold", hex: "#F6CA65" },
  { name: "Vibrant Accent Gold", hex: "#F2B329" },
  { name: "Brand Navy 66%", hex: "#082E63", opacity: "66%" },
  { name: "Antique Ochre Gold", hex: "#B5882D" },
  { name: "Muted Slate Grey", hex: "#DCE4EF" },
  { name: "Warm Mustard Gold", hex: "#F2BE44" },
  { name: "White 35%", hex: "#FFFFFF", opacity: "35%" },
  { name: "Ice Blue 55%", hex: "#F5F8FF", opacity: "55%" },
  { name: "Ice Blue 14%", hex: "#F5F8FF", opacity: "14%" },
  { name: "Midnight Navy 35%", hex: "#041F49", opacity: "35%" },
  { name: "Ice Blue 40%", hex: "#F5F8FF", opacity: "40%" },
  { name: "White 0.2%", hex: "#FFFFFF", opacity: "0.2%" },
  { name: "Royal Navy Light", hex: "#0A3974" },
  { name: "Action / Link Blue", hex: "#1976D2" },
  { name: "Success Green", hex: "#4CAF50" },
  { name: "Periwinkle Grey", hex: "#C5D0E8" },
  { name: "Danger / Alert Red-Orange", hex: "#FF3D00" },
  { name: "Warning Amber", hex: "#FFC107" },
  { name: "White 80%", hex: "#FFFFFF", opacity: "80%" },
] as const;

