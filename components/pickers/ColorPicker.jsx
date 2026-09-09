import React from "react";
import { Icon } from "../core/Icon";

export const BRAND_SWATCHES = [
  { value: "var(--lofty-crisp-orange)", name: "Crisp Orange" },
  { value: "var(--lofty-eco-green)", name: "Eco Green" },
  { value: "var(--lofty-foundation-black)", name: "Foundation Black" },
  { value: "var(--lofty-flint-300)", name: "Flint 300" },
  { value: "var(--lofty-flint-100)", name: "Flint 100" }
];

export function ColorPicker({ colors = BRAND_SWATCHES, value, onChange, size = "medium", shape = "square", columns = 6, iconBasePath, style }) {
  const px = size === "small" ? 24 : size === "large" ? 40 : 32;
  return (
    <div role="radiogroup" style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, ${px}px)`, gap: "var(--space-8)", ...style }}>
      {colors.map(c => {
        const v = c.value ?? c, name = c.name ?? v, sel = v === value;
        return (
          <button key={v} type="button" role="radio" aria-checked={sel} aria-label={name} title={name} onClick={() => onChange && onChange(v)}
            style={{ width: px, height: px, padding: 0, background: v, cursor: "pointer", boxSizing: "border-box", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--text-color-on-primary)", borderRadius: shape === "circle" ? "50%" : "var(--border-radius-small)", border: "1px solid " + (sel ? "var(--primary-text-color)" : "var(--layout-border-color)"), outline: sel ? "2px solid var(--primary-background-color)" : "none", outlineOffset: -3, transition: "transform var(--motion-productive-short)" }}
            onMouseDown={e => { e.currentTarget.style.transform = "scale(0.9)"; }}
            onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}>
            {sel ? <Icon name="Check" size={14} basePath={iconBasePath} /> : null}
          </button>
        );
      })}
    </div>
  );
}
