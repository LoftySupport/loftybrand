import React from "react";

export function DonutStat({ value = 0, max = 100, size = 132, color = "var(--data-1)", label, caption, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const inner = Math.round(size * 0.73);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)", ...style }}>
      <div role="img" aria-label={(label || "") + " " + Math.round(pct) + "%"} style={{ width: size, height: size, borderRadius: "50%", display: "grid", placeItems: "center", background: "conic-gradient(" + color + " 0 " + pct + "%,var(--surface-recessed-color) " + pct + "% 100%)" }}>
        <div style={{ width: inner, height: inner, borderRadius: "50%", background: "var(--primary-background-color)", display: "grid", placeItems: "center", font: "var(--font-h3-bold)" }}>{label || Math.round(pct) + "%"}</div>
      </div>
      {caption ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{caption}</span> : null}
    </div>
  );
}
