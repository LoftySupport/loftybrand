import React from "react";

const FILL = { primary: ["var(--fixed-light-color)", "var(--primary-color)"], dark: ["var(--text-color-on-inverted)", "var(--inverted-color-background)"], negative: ["var(--fixed-light-color)", "var(--negative-color)"], light: ["var(--primary-text-color)", "var(--ui-background-color)"] };
const LINE = { primary: "var(--primary-color)", dark: "var(--inverted-color-background)", negative: "var(--negative-color)", light: "var(--primary-text-color)" };

export function Counter({ count = 0, maxDigits = 3, kind = "fill", color = "primary", size = "small", prefix = "", style, ...rest }) {
  const cap = Math.pow(10, maxDigits) - 1;
  const label = count > cap ? cap + "+" : String(count);
  const large = size === "large";
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    borderRadius: "var(--border-radius-pill)", overflow: "hidden", boxSizing: "border-box",
    minWidth: large ? 24 : 18, lineHeight: large ? "20px" : "18px",
    padding: large ? "2px var(--space-8)" : "0 var(--space-8)",
    font: size === "xs" ? "var(--font-text3-normal)" : "var(--font-text2-normal)"
  };
  const look = kind === "line"
    ? { color: LINE[color], boxShadow: "0 0 0 1px " + (color === "light" ? "var(--ui-background-color)" : "currentColor") + " inset" }
    : { color: (FILL[color] || FILL.primary)[0], background: (FILL[color] || FILL.primary)[1] };
  return <span aria-label={label + " items"} style={{ ...base, ...look, ...style }} {...rest}>{prefix}{label}</span>;
}
