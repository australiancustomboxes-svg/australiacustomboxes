import { describe, it, expect } from "vitest";
import {
  verifySubmission,
  generateFormToken,
} from "@/lib/security/anti-bot";

describe("Security: Anti-Bot & Spam Verification", () => {
  it("traps automated bot that populates honeypot field", () => {
    const result = verifySubmission({
      honeypot: "https://bot-website.com",
      loadedAt: Date.now() - 5000,
      message: "Normal looking message",
    });

    expect(result.isSpam).toBe(true);
    expect(result.reason).toContain("Honeypot");
  });

  it("blocks rapid sub-second submissions by automated bot scripts", () => {
    // Loaded only 300ms ago
    const result = verifySubmission({
      honeypot: "",
      loadedAt: Date.now() - 300,
      message: "Inquiring about boxes",
    });

    expect(result.isSpam).toBe(true);
    expect(result.reason).toContain("too fast");
  });

  it("blocks submissions from expired sessions (> 2 hours old)", () => {
    // Loaded 3 hours ago
    const threeHoursAgo = Date.now() - 3 * 60 * 60 * 1000;
    const result = verifySubmission({
      honeypot: "",
      loadedAt: threeHoursAgo,
      message: "Need 200 boxes",
    });

    expect(result.isSpam).toBe(true);
    expect(result.reason).toContain("expired");
  });

  it("approves genuine human submission with legitimate timing and empty honeypot", () => {
    // Loaded 6 seconds ago (normal human filling form)
    const legitimateTime = Date.now() - 6000;
    const result = verifySubmission({
      honeypot: "",
      loadedAt: legitimateTime,
      message: "We need custom gift packaging for our Sydney brand launch.",
    });

    expect(result.isSpam).toBe(false);
  });

  it("generates valid base64 token with recent timestamp", () => {
    const { token, timestamp } = generateFormToken();
    expect(token).toBeTruthy();
    expect(timestamp).toBeGreaterThan(0);
    expect(Date.now() - timestamp).toBeLessThan(100);
  });
});
