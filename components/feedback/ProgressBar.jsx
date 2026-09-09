import React from "react";

export function ProgressBar({ value = 0, max = 100, color = "var(--primary-color)", size = "medium", label, style }) {
  const h = size === "small" ? 4 : size === "large" ? 12 : 8;
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ width: "100%", ...style }}>
      {label ? (
        <div style={{ display: "flex", justifyContent: "space-between", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", marginBottom: "var(--space-4)" }}>
          <span>{label}</span><span>{Math.round(pct)}%</span>
        </div>
      ) : null}
      <div role="progressbar" aria-valuenow={value} aria-valuemax={max} style={{ height: h, borderRadius: "var(--border-radius-pill)", background: "var(--ui-background-color)", overflow: "hidden" }}>
        <div style={{ width: pct + "%", height: "100%", background: color, borderRadius: "var(--border-radius-pill)", transition: "width var(--motion-expressive-short) var(--motion-timing-transition)" }} />
      </div>
    </div>
  );
}
