import React from "react";

/** Delineated tab strip for a record's docked panel — heavier than Tabs, for tabs that must not read as text. */
export function RecordTabs({ tabs = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{
      display: "flex", alignItems: "stretch", background: "var(--lofty-flint-100)",
      borderBottom: "1px solid var(--layout-border-color)", ...style
    }}>
      {tabs.map((t, i) => {
        const active = t.id === value;
        return (
          <button key={t.id} type="button" role="tab" aria-selected={active} tabIndex={active ? 0 : -1}
            onClick={() => onChange && onChange(t.id)}
            style={{
              display: "flex", alignItems: "center", gap: "var(--space-8)", height: 36, padding: "0 var(--space-16)",
              border: "none", borderLeft: i === 0 ? "none" : "1px solid var(--lofty-flint-200)",
              borderBottom: "2px solid " + (active ? "var(--lofty-crisp-orange)" : "transparent"),
              background: active ? "var(--lofty-finisher-white)" : "transparent",
              borderRadius: active ? "var(--border-radius-small) var(--border-radius-small) 0 0" : 0,
              font: active ? "var(--font-text2-bold)" : "var(--font-text2-normal)",
              color: "var(--primary-text-color)", cursor: "pointer"
            }}>
            {t.label}
            {t.count != null ? (
              <span style={{ font: "var(--font-text3-normal)", background: "var(--lofty-flint-200)", borderRadius: "var(--border-radius-pill)", padding: "0 var(--space-8)" }}>{t.count}</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
