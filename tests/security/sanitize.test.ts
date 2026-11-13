import { describe, it, expect } from "vitest";
import {
  sanitizePlainText,
  sanitizeHtml,
  containsSpamPatterns,
} from "@/lib/security/sanitize";

describe("Security: Input Sanitization", () => {
  it("strips out dangerous <script> tags from plain text", () => {
    const malicious = '<script>alert("XSS Attack!")</script>John Doe';
    const sanitized = sanitizePlainText(malicious);
    expect(sanitized).toBe("John Doe");
    expect(sanitized).not.toContain("<script>");
  });

  it("strips HTML event handlers (e.g., onerror, onload)", () => {
    const malicious = '<img src="x" onerror="stealCookies()" />Custom Box Request';
    const sanitized = sanitizePlainText(malicious);
    expect(sanitized).toBe("Custom Box Request");
    expect(sanitized).not.toContain("onerror");
  });

  it("removes control characters and null bytes", () => {
    const dangerous = "Hello\u0000World\u0008Test";
    const sanitized = sanitizePlainText(dangerous);
    expect(sanitized).toBe("HelloWorldTest");
  });

  it("safely sanitizes HTML keeping only safe tags", () => {
    const mixed =
      '<p><b>Bold Package</b></p><script>evil()</script><iframe src="evil.com"></iframe>';
    const cleanHtml = sanitizeHtml(mixed);
    expect(cleanHtml).toContain("<b>Bold Package</b>");
    expect(cleanHtml).not.toContain("<script>");
    expect(cleanHtml).not.toContain("<iframe>");
  });
});

describe("Security: Spam Pattern Detection", () => {
  it("detects crypto and casino spam phrases", () => {
    expect(containsSpamPatterns("Free crypto airdrop click here")).toBe(true);
    expect(containsSpamPatterns("Online casino bonus 500%")).toBe(true);
    expect(containsSpamPatterns("Buy cheap cialis now")).toBe(true);
  });

  it("detects telegram and whatsapp link spam", () => {
    expect(containsSpamPatterns("Contact us on t.me/free_crypto_group")).toBe(true);
    expect(containsSpamPatterns("Join whatsapp +923001234567 for fast deals")).toBe(true);
  });

  it("detects multi-link flood spam", () => {
    const linkFlood =
      "Check https://spam1.com and https://spam2.com and https://spam3.com now!";
    expect(containsSpamPatterns(linkFlood)).toBe(true);
  });

  it("detects repetitive character flooding (DDoS/Buffer payload)", () => {
    const repetitive = "Need boxes aaaaaaaaaaaaaaaaaaaaaaaaaa please";
    expect(containsSpamPatterns(repetitive)).toBe(true);
  });

  it("allows legitimate packaging inquiries", () => {
    const legitimate =
      "Hi, we need 500 custom corrugated mailer boxes for our Melbourne retail store.";
    expect(containsSpamPatterns(legitimate)).toBe(false);
  });
});

