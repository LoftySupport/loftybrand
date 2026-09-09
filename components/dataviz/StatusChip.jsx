import React from "react";

const TONE = { positive: "var(--positive-color)", negative: "var(--negative-color)", warning: "var(--warning-color)", neutral: "var(--secondary-text-color)" };

export function StatusChip({ label, tone = "neutral", style }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-8)", height: 24, padding: "0 var(--space-8)", borderRadius: "var(--border-radius-pill)", font: "var(--font-text3-medium)", background: "transparent", border: "1px solid var(--lofty-flint-400)", color: "var(--primary-text-color)", ...style }}>
      <i style={{ width: 8, height: 8, borderRadius: "50%", background: TONE[tone] || TONE.neutral, flex: "0 0 auto" }} />
      {label}
    </span>
  );
}
