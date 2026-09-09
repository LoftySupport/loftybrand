import React from "react";
import { Icon } from "../core/Icon";

export function Tabs({ tabs = [], value, onChange, iconBasePath, style }) {
  const ids = tabs.map(t => t.id ?? t.label ?? t);
  const onKey = (e, i) => {
    const enabled = ids.filter((_, j) => !tabs[j].disabled);
    let n = null;
    if (e.key === "ArrowRight") n = 1; else if (e.key === "ArrowLeft") n = -1; else if (e.key === "Home") n = "home"; else if (e.key === "End") n = "end";
    if (n === null) return;
    e.preventDefault();
    const cur = enabled.indexOf(ids[i]);
    const next = n === "home" ? enabled[0] : n === "end" ? enabled[enabled.length - 1] : enabled[(cur + n + enabled.length) % enabled.length];
    onChange && onChange(next);
    const el = e.currentTarget.parentElement.children[ids.indexOf(next)];
    if (el) el.focus();
  };
  return (
    <div role="tablist" style={{ display: "flex", alignItems: "stretch", ...style }}>
      {tabs.map((t, i) => {
        const id = ids[i];
        const label = t.label ?? t;
        const active = id === value;
        return (
          <button key={id} type="button" role="tab" aria-selected={active} aria-disabled={t.disabled || undefined} tabIndex={active ? 0 : -1}
            onClick={() => !t.disabled && onChange && onChange(id)} onKeyDown={e => onKey(e, i)}
            style={{
              position: "relative", padding: "0 1px", border: "none", background: "transparent", font: "inherit", color: "inherit",
              borderBottom: "2px solid " + (active ? "var(--primary-color)" : "var(--ui-background-color)"),
              cursor: t.disabled ? "not-allowed" : "pointer", borderRadius: "var(--border-radius-small) var(--border-radius-small) 0 0"
            }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-8)",
              padding: "4px 16px", height: 36, marginBottom: 1, borderRadius: "var(--border-radius-small)",
              font: "var(--font-text1-normal)", userSelect: "none",
              color: t.disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)"
            }}
              onMouseEnter={e => { if (!t.disabled && !active) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              {t.icon ? <Icon name={t.icon} size={16} basePath={iconBasePath} style={{ color: "var(--icon-color)" }} /> : null}
              {label}
              {t.counter != null ? <span style={{ font: "var(--font-text3-medium)", background: "var(--ui-background-color)", borderRadius: "var(--border-radius-pill)", padding: "0 var(--space-8)" }}>{t.counter}</span> : null}
            </div>
          </button>
        );
      })}
    </div>
  );
}
