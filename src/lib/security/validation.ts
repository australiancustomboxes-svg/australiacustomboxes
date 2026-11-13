import { z } from "zod";
import { sanitizePlainText } from "./sanitize";

// Base string with auto-sanitization and length bounds
const sanitizedString = (min: number = 1, max: number = 255) =>
  z
    .string()
    .min(min, `Must be at least ${min} characters`)
    .max(max, `Cannot exceed ${max} characters`)
    .transform((val) => sanitizePlainText(val));

/**
 * Contact Form Schema with anti-bot honeypot
 */
export const contactFormSchema = z.object({
  fullName: sanitizedString(2, 80),
  email: z
    .string()
    .email("Invalid email address")
    .max(120)
    .transform((val) => sanitizePlainText(val).toLowerCase()),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\s()\-]+$/, "Invalid phone number format")
    .transform((val) => sanitizePlainText(val)),
  subject: sanitizedString(3, 120).optional(),
  message: sanitizedString(10, 3000),
  // Anti-bot honeypot field (must remain empty!)
  hp_company_website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
  // Timestamp token
  token: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Custom Boxes Quote Request Schema
 */
export const quoteRequestSchema = z.object({
  fullName: sanitizedString(2, 80),
  companyName: sanitizedString(2, 100).optional(),
  email: z
    .string()
    .email("Invalid email address")
    .max(120)
    .transform((val) => sanitizePlainText(val).toLowerCase()),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\s()\-]+$/, "Invalid phone number format")
    .transform((val) => sanitizePlainText(val)),
  boxType: sanitizedString(2, 100),
  quantity: z
    .number()
    .int("Quantity must be a whole number")
    .min(50, "Minimum order quantity is 50")
    .max(1000000, "For orders over 1,000,000 please contact support directly"),
  dimensions: z
    .object({
      length: z.number().positive(),
      width: z.number().positive(),
      depth: z.number().positive(),
      unit: z.enum(["mm", "cm", "inch"]),
    })
    .optional(),
  notes: sanitizedString(0, 3000).optional(),
  // Anti-bot honeypot
  hp_company_website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
  token: z.string().optional(),
});

export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;
