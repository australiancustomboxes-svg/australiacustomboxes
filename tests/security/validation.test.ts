import { describe, it, expect } from "vitest";
import { contactFormSchema, quoteRequestSchema } from "@/lib/security/validation";

describe("Security: Form Validation & Data Integrity", () => {
  describe("contactFormSchema", () => {
    it("validates and sanitizes valid contact inquiry", () => {
      const validPayload = {
        fullName: "Sarah Jenkins",
        email: "SARAH@Example.com.au",
        phone: "+61 412 345 678",
        subject: "Quote for 1000 Mailer Boxes",
        message: "We would like to request a quote with custom matte black finish.",
        hp_company_website: "",
      };

      const result = contactFormSchema.safeParse(validPayload);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe("sarah@example.com.au"); // Lowercase sanitization
        expect(result.data.fullName).toBe("Sarah Jenkins");
      }
    });

    it("sanitizes injected HTML from name and message automatically", () => {
      const injectedPayload = {
        fullName: "<b>John</b> Doe",
        email: "john@example.com",
        phone: "+61 2 9876 5432",
        message: '<script>alert("hack")</script>Looking for cardboard product packaging.',
        hp_company_website: "",
      };

      const result = contactFormSchema.safeParse(injectedPayload);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.fullName).toBe("John Doe");
        expect(result.data.message).not.toContain("<script>");
      }
    });

    it("rejects malicious payload when bot fills honeypot field", () => {
      const botPayload = {
        fullName: "Spam Bot",
        email: "bot@spammer.com",
        phone: "+1234567890",
        message: "Check out our cheap marketing services",
        hp_company_website: "https://spammer-site.xyz",
      };

      const result = contactFormSchema.safeParse(botPayload);
      expect(result.success).toBe(false);
    });

    it("rejects invalid email formats", () => {
      const invalidEmail = {
        fullName: "Test User",
        email: "invalid-email-string",
        phone: "+61 400 000 000",
        message: "Need sample packaging boxes for retail display.",
        hp_company_website: "",
      };

      const result = contactFormSchema.safeParse(invalidEmail);
      expect(result.success).toBe(false);
    });
  });

  describe("quoteRequestSchema", () => {
    it("enforces minimum order quantity constraint (MOQ 50)", () => {
      const lowQuantityPayload = {
        fullName: "Alex Rivera",
        email: "alex@brand.com.au",
        phone: "+61 499 888 777",
        boxType: "Custom Rigid Boxes",
        quantity: 5, // Below MOQ
        hp_company_website: "",
      };

      const result = quoteRequestSchema.safeParse(lowQuantityPayload);
      expect(result.success).toBe(false);
    });

    it("accepts valid quote request with dimensions", () => {
      const validQuote = {
        fullName: "Alex Rivera",
        companyName: "Rivera Botanicals",
        email: "alex@brand.com.au",
        phone: "+61 499 888 777",
        boxType: "Custom Corrugated Mailer Box",
        quantity: 500,
        dimensions: {
          length: 250,
          width: 180,
          depth: 80,
          unit: "mm" as const,
        },
        notes: "Matte lamination with foil logo on top lid.",
        hp_company_website: "",
      };

      const result = quoteRequestSchema.safeParse(validQuote);
      expect(result.success).toBe(true);
    });
  });
});

