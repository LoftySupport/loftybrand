import React from "react";

export function MeterRow({ label, value = 0, max = 100, color = "var(--data-1)", labelWidth = 96, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: "grid", gridTemplateColumns: labelWidth + "px 1fr 44px", gap: "var(--space-12)", alignItems: "center", font: "var(--font-text3-normal)", ...style }}>
      <span>{label}</span>
      <div style={{ height: 8, borderRadius: "var(--border-radius-pill)", background: "var(--surface-recessed-color)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: pct + "%", background: color, borderRadius: "var(--border-radius-pill)" }} />
      </div>
      <span style={{ textAlign: "right" }}>{Math.round(pct) + "%"}</span>
    </div>
  );
}
