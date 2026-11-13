"use client";

import { useState, useCallback } from "react";
import { generateFormToken, verifySubmission, checkClientRateLimit, AntiBotVerificationResult } from "@/lib/security/anti-bot";
import { siteConfig } from "@/config/site";

interface UseAntiBotOptions {
  formId?: string;
  maxAttempts?: number;
  rateLimitMinutes?: number;
}

export function useAntiBot(options: UseAntiBotOptions = {}) {
  const { formId = "general_form", maxAttempts = 5, rateLimitMinutes = 10 } = options;

  // Initialize timestamp and security token lazily without cascading render
  const [securityData] = useState(() => {
    if (typeof window !== "undefined") {
      return generateFormToken();
    }
    return { token: "", timestamp: Date.now() };
  });

  const [honeypotValue, setHoneypotValue] = useState<string>("");

  const loadedAt = securityData.timestamp;
  const token = securityData.token;

  const handleHoneypotChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHoneypotValue(e.target.value);
  }, []);

  /**
   * Run this check before sending the form data to API/email service.
   */
  const validateFormSubmission = useCallback(
    (messageContent?: string): AntiBotVerificationResult => {
      // 1. Check Rate Limit
      const rateLimit = checkClientRateLimit(formId, maxAttempts, rateLimitMinutes);
      if (!rateLimit.allowed) {
        const minutesLeft = rateLimit.resetTime
          ? Math.ceil((rateLimit.resetTime - Date.now()) / 60000)
          : 5;
        return {
          isSpam: true,
          reason: `Too many submissions. Please wait ${minutesLeft} minute(s) before trying again.`,
        };
      }

      // 2. Anti-Bot checks (Honeypot, time-to-fill, spam keywords)
      const botCheck = verifySubmission({
        honeypot: honeypotValue,
        loadedAt,
        token,
        message: messageContent,
      });

      return botCheck;
    },
    [formId, maxAttempts, rateLimitMinutes, honeypotValue, loadedAt, token]
  );

  return {
    honeypotField: siteConfig.security.honeypotField,
    honeypotValue,
    handleHoneypotChange,
    loadedAt,
    token,
    validateFormSubmission,
  };
}
