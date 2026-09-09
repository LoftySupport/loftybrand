import React from "react";

export function ChartLegend({ items = [], style }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-16)", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", ...style }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-8)" }}>
          <i style={{ width: 10, height: 10, borderRadius: "var(--border-radius-2)", background: it.color || "var(--data-" + (i + 1) + ")", flex: "0 0 auto" }} />
          {it.name}
        </span>
      ))}
    </div>
  );
}
