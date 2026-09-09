import React from "react";

export function Kbd({ children, size = "medium", style, ...rest }) {
  const small = size === "small";
  return <kbd style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    minWidth: small ? 16 : 20, height: small ? 16 : 20, padding: "0 var(--space-4)",
    font: small ? "var(--font-text3-medium)" : "var(--font-text2-medium)",
    color: "var(--secondary-text-color)", background: "var(--lofty-flint-100)",
    border: "1px solid var(--ui-border-color)", borderRadius: "var(--border-radius-small)",
    boxSizing: "border-box", ...style
  }} {...rest}>{children}</kbd>;
}
