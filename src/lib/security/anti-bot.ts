import { siteConfig } from "@/config/site";
import { containsSpamPatterns } from "./sanitize";

export interface AntiBotVerificationResult {
  isSpam: boolean;
  reason?: string;
}

export interface AntiBotSubmissionData {
  honeypot?: string;
  loadedAt?: number;
  token?: string;
  message?: string;
}

/**
 * Creates an obfuscated time-lock token when the user opens a form.
 */
export function generateFormToken(): { token: string; timestamp: number } {
  const timestamp = Date.now();
  // Simple obfuscation of timestamp + salt
  const payload = `${timestamp}::${siteConfig.shortName}`;
  const token =
    typeof btoa !== "undefined"
      ? btoa(payload)
      : Buffer.from(payload).toString("base64");
  return { token, timestamp };
}

/**
 * Verifies form token and time threshold.
 */
export function verifyFormTiming(loadedAt?: number): { valid: boolean; reason?: string } {
  if (!loadedAt || typeof loadedAt !== "number") {
    return { valid: false, reason: "Missing submission time token" };
  }

  const duration = Date.now() - loadedAt;

  // If submitted too fast (automated script filling form in < 2.5 seconds)
  if (duration < siteConfig.security.minSubmissionDurationMs) {
    return { valid: false, reason: "Submission was too fast. Possible automated bot." };
  }

  // If form was loaded more than maximum allowed duration (e.g. 2 hours old)
  if (duration > siteConfig.security.maxSubmissionDurationMs) {
    return { valid: false, reason: "Form session expired. Please refresh and try again." };
  }

  return { valid: true };
}

/**
 * Verifies submission against multiple bot and spam layers.
 */
export function verifySubmission(data: AntiBotSubmissionData): AntiBotVerificationResult {
  // 1. Check Honeypot: if bot filled this hidden field, it's 100% spam
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return { isSpam: true, reason: "Honeypot trap triggered" };
  }

  // 2. Check timing
  if (data.loadedAt) {
    const timing = verifyFormTiming(data.loadedAt);
    if (!timing.valid) {
      return { isSpam: true, reason: timing.reason };
    }
  }

  // 3. Check for spam patterns in text
  if (data.message && containsSpamPatterns(data.message)) {
    return { isSpam: true, reason: "Spam patterns detected in message content" };
  }

  return { isSpam: false };
}

/**
 * Client-Side Rate Limiter:
 * Prevents rapid form submissions from the same browser.
 * Allows at most `maxAttempts` within `windowMinutes`.
 */
export function checkClientRateLimit(
  formKey: string = "contact_form",
  maxAttempts: number = 5,
  windowMinutes: number = 10
): { allowed: boolean; remainingAttempts: number; resetTime?: number } {
  if (typeof window === "undefined") {
    return { allowed: true, remainingAttempts: maxAttempts };
  }

  const storageKey = `rate_limit_${formKey}`;
  const now = Date.now();
  const windowMs = windowMinutes * 60 * 1000;

  try {
    const record = localStorage.getItem(storageKey);
    let attempts: number[] = record ? JSON.parse(record) : [];

    // Filter out attempts older than window
    attempts = attempts.filter((time) => now - time < windowMs);

    if (attempts.length >= maxAttempts) {
      const oldest = attempts[0];
      const resetTime = oldest + windowMs;
      return { allowed: false, remainingAttempts: 0, resetTime };
    }

    // Record new attempt
    attempts.push(now);
    localStorage.setItem(storageKey, JSON.stringify(attempts));

    return { allowed: true, remainingAttempts: maxAttempts - attempts.length };
  } catch {
    return { allowed: true, remainingAttempts: maxAttempts };
  }
}
