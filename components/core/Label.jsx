import React from "react";

const FILL = { primary: "var(--primary-color)", dark: "var(--inverted-color-background)", positive: "var(--positive-color)", negative: "var(--negative-color)", secondary: "var(--secondary-color)" };

export function Label({ text, kind = "fill", color = "primary", size = "medium", style, ...rest }) {
  const c = FILL[color] || FILL.primary;
  const small = size === "small";
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    borderRadius: small ? "var(--border-radius-2)" : "var(--border-radius-small)",
    padding: small ? "0 var(--space-4)" : "2px var(--space-8)",
    font: small ? "var(--font-text3-medium)" : "var(--font-text2-medium)"
  };
  const look = kind === "line"
    ? { border: "1px solid " + c, color: c, background: "transparent", padding: small ? "0 var(--space-4)" : "1px var(--space-8)" }
    : { background: c, color: color === "primary" ? "var(--text-color-on-primary)" : color === "positive" || color === "negative" ? "var(--text-color-on-status)" : color === "dark" || color === "secondary" ? "var(--text-color-on-inverted)" : "var(--primary-text-color)" };
  return <span style={{ ...base, ...look, ...style }} {...rest}>{text}</span>;
}
