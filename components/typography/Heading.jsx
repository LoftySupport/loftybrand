import React from "react";

const TAG = { h1: "h1", h2: "h2", h3: "h3" };

export function Heading({ children, type = "h2", weight = "bold", element, color = "primary", align, maxLines, brand = false, style, ...rest }) {
  const El = element || TAG[type] || "h2";
  const brandFont = { h1: "var(--font-display-l)", h2: "var(--font-display-m)", h3: "var(--font-display-s)" };
  const look = brand
    ? { font: brandFont[type] || brandFont.h2, letterSpacing: "var(--letter-spacing-brand-heading)" }
    : { font: `var(--font-${type}-${weight})`, letterSpacing: `var(--letter-spacing-${type}-${weight === "bold" ? "bold" : weight === "light" ? "light" : "normal"})` };
  const clamp = maxLines ? { display: "-webkit-box", WebkitLineClamp: maxLines, WebkitBoxOrient: "vertical", overflow: "hidden" } : null;
  return <El style={{ ...look, color: color === "primary" ? "var(--primary-text-color)" : color === "onInverted" ? "var(--text-color-on-inverted)" : color, margin: 0, textAlign: align, textWrap: "pretty", ...clamp, ...style }} {...rest}>{children}</El>;
}
