"use client";

import React from "react";
import { siteConfig } from "@/config/site";

interface HoneypotFieldProps {
  fieldName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Honeypot anti-bot trap input.
 * Inaccessible to sighted users and screen readers, but automated
 * bots scraping DOM inputs will encounter and fill it.
 */
export const HoneypotField: React.FC<HoneypotFieldProps> = ({
  fieldName = siteConfig.security.honeypotField,
  value,
  onChange,
}) => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        width: "1px",
        height: "1px",
        opacity: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      tabIndex={-1}
    >
      <label htmlFor={fieldName}>Leave this field blank to verify you are human</label>
      <input
        type="text"
        id={fieldName}
        name={fieldName}
        value={value}
        onChange={onChange}
        autoComplete="off"
        tabIndex={-1}
      />
    </div>
  );
};

export default HoneypotField;

