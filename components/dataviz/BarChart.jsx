import React from "react";

export function BarChart({ data = [], series = [], height = 180, style }) {
  const colors = series.map((s, i) => s.color || "var(--data-" + (i + 1) + ")");
  const max = Math.max(1, ...data.map(d => d.values.reduce((a, b) => a + b, 0)));
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", ...style }}>
      <div style={{ height, display: "grid", gridTemplateColumns: "repeat(" + data.length + ",1fr)", gap: "var(--space-16)", alignItems: "end", borderBottom: "1px solid var(--layout-border-color)" }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 2, height: "100%" }}>
            {d.values.map((v, j) => (
              <i key={j} title={series[j] ? series[j].name + ": " + v : String(v)} style={{ display: "block", height: (v / max) * 100 + "%", background: d.muted ? "var(--data-5)" : colors[j], borderRadius: j === d.values.length - 1 ? "var(--border-radius-2) var(--border-radius-2) 0 0" : 0 }} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(" + data.length + ",1fr)", gap: "var(--space-16)", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", textAlign: "center" }}>
        {data.map((d, i) => <span key={i}>{d.label}</span>)}
      </div>
    </div>
  );
}
