import React from "react";

export function StatTile({ label, value, detail, style }) {
  return (
    <div style={{ background: "var(--primary-background-color)", border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", padding: "var(--space-16)", display: "flex", flexDirection: "column", gap: "var(--space-4)", ...style }}>
      <span style={{ font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", textTransform: "uppercase", letterSpacing: ".06em" }}>{label}</span>
      <span style={{ font: "var(--font-h2-bold)", letterSpacing: "var(--letter-spacing-h2-bold)" }}>{value}</span>
      {detail ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{detail}</span> : null}
    </div>
  );
}
