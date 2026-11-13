import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitizes plain text input by stripping all HTML tags and dangerous characters.
 * Ideal for names, emails, phone numbers, and simple message inputs.
 */
export function sanitizePlainText(input: string): string {
  if (!input || typeof input !== "string") return "";
  // Strip any HTML tags
  const clean = DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  // Trim and remove null bytes / control characters
  return clean.replace(/[\u0000-\u001F\u007F-\u009F]/g, "").trim();
}

/**
 * Sanitizes HTML content while keeping safe markup if needed.
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== "string") return "";
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ["b", "i", "em", "strong", "p", "br", "ul", "ol", "li"],
    ALLOWED_ATTR: [],
  });
}

/**
 * Check if a text contains common spam/bot injection patterns.
 */
export function containsSpamPatterns(text: string): boolean {
  if (!text) return false;

  // 1. Check for 3 or more URLs in message (typical link spam payload)
  const urlMatches = text.match(/https?:\/\/[^\s]+/gi);
  if (urlMatches && urlMatches.length >= 3) {
    return true;
  }

  // 2. Common spam keyword patterns
  const spamIndicators = [
    /\[url=http/i,
    /<a\s+href=/i,
    /casino|crypto\s*airdrop|viagra|cialis|whatsapp\s*\+?\d{8,}|t\.me\//i,
    /(.)\1{12,}/, // 12+ consecutive identical characters (e.g. "aaaaaaaaaaaaa")
  ];

  return spamIndicators.some((pattern) => pattern.test(text));
}
