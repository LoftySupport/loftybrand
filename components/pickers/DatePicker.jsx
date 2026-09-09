import React, { useState } from "react";
import { IconButton } from "../core/IconButton";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const iso = d => d.toISOString().slice(0, 10);

export function DatePicker({ value, onChange, min, max, weekStartsOn = 1, showToday = true, iconBasePath, style }) {
  const selected = value ? new Date(value + "T00:00:00") : null;
  const [view, setView] = useState(() => { const d = selected || new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const today = iso(new Date());
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const lead = (first.getDay() - weekStartsOn + 7) % 7;
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const shift = n => setView(v => new Date(v.getFullYear(), v.getMonth() + n, 1));
  return (
    <div style={{ width: 280, background: "var(--primary-background-color)", border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", boxShadow: "var(--box-shadow-small)", padding: "var(--space-16)", boxSizing: "border-box", ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-8)" }}>
        <IconButton icon="NavigationChevronLeft" ariaLabel="Previous month" size="small" onClick={() => shift(-1)} iconBasePath={iconBasePath} />
        <span style={{ font: "var(--font-text2-medium)" }}>{MONTHS[view.getMonth()]} {view.getFullYear()}</span>
        <IconButton icon="NavigationChevronRight" ariaLabel="Next month" size="small" onClick={() => shift(1)} iconBasePath={iconBasePath} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
        {DAYS.map((d, i) => <span key={i} style={{ font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", textAlign: "center", lineHeight: "24px" }}>{DAYS[(i + weekStartsOn - 1 + 7) % 7]}</span>)}
        {cells.map((d, i) => {
          if (!d) return <span key={"e" + i} />;
          const k = iso(d);
          const sel = selected && k === iso(selected);
          const disabled = (min && k < min) || (max && k > max);
          const isToday = k === today;
          return (
            <button key={k} type="button" disabled={disabled} onClick={() => onChange && onChange(k)}
              style={{ height: 32, border: "none", borderRadius: "var(--border-radius-small)", font: sel || isToday ? "var(--font-text2-medium)" : "var(--font-text2-normal)", cursor: disabled ? "not-allowed" : "pointer", background: sel ? "var(--primary-color)" : "transparent", color: disabled ? "var(--disabled-text-color)" : sel ? "var(--text-color-on-primary)" : isToday ? "var(--primary-color)" : "var(--primary-text-color)", transition: "background var(--motion-productive-short) ease-in" }}
              onMouseEnter={e => { if (!sel && !disabled) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
              onMouseLeave={e => { if (!sel) e.currentTarget.style.background = "transparent"; }}>
              {d.getDate()}
            </button>
          );
        })}
      </div>
      {showToday ? (
        <button type="button" onClick={() => { setView(new Date(new Date().getFullYear(), new Date().getMonth(), 1)); onChange && onChange(today); }}
          style={{ marginTop: "var(--space-12)", width: "100%", height: 32, border: "1px solid var(--ui-border-color)", borderRadius: "var(--border-radius-small)", background: "transparent", font: "var(--font-text2-normal)", color: "var(--primary-text-color)", cursor: "pointer" }}>Today</button>
      ) : null}
    </div>
  );
}
