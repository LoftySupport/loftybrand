import React from "react";
import { Icon } from "../core/Icon";

export function Menu({ items = [], onSelect, iconBasePath, style }) {
  const onKey = e => {
    const els = Array.from(e.currentTarget.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])'));
    const i = els.indexOf(document.activeElement);
    let n = null;
    if (e.key === "ArrowDown") n = (i + 1) % els.length; else if (e.key === "ArrowUp") n = (i - 1 + els.length) % els.length; else if (e.key === "Home") n = 0; else if (e.key === "End") n = els.length - 1;
    if (n === null || !els.length) return;
    e.preventDefault(); els[n].focus();
  };
  return (
    <div role="menu" onKeyDown={onKey} style={{
      minWidth: 220, background: "var(--primary-background-color)",
      border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)",
      boxShadow: "var(--box-shadow-medium)", padding: "var(--space-4)", boxSizing: "border-box", ...style
    }}>
      {items.map((it, i) => {
        if (it.divider) return <div key={"d" + i} style={{ height: 1, background: "var(--layout-border-color)", margin: "var(--space-4) 0" }} />;
        if (it.title) return <div key={"t" + i} style={{ font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", padding: "var(--space-8) var(--space-8) var(--space-4)" }}>{it.title}</div>;
        return (
          <div key={it.id ?? it.label} role="menuitem" tabIndex={it.disabled ? -1 : 0} aria-disabled={it.disabled || undefined}
            onClick={() => !it.disabled && onSelect && onSelect(it.id ?? it.label)}
            onKeyDown={e => { if (!it.disabled && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onSelect && onSelect(it.id ?? it.label); } }}
            style={{ outline: "none",
              display: "flex", alignItems: "center", gap: "var(--space-8)", height: 32,
              padding: "0 var(--space-8)", borderRadius: "var(--border-radius-small)",
              font: "var(--font-text2-normal)", cursor: it.disabled ? "not-allowed" : "pointer",
              color: it.disabled ? "var(--disabled-text-color)" : it.destructive ? "var(--negative-color)" : "var(--primary-text-color)"
            }}
            onMouseEnter={e => { if (!it.disabled) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
            onFocus={e => { if (!it.disabled) e.currentTarget.style.boxShadow = "var(--focus-ring)"; }}
            onBlur={e => { e.currentTarget.style.boxShadow = "none"; }}>
            {it.icon ? <Icon name={it.icon} size={16} basePath={iconBasePath} /> : null}
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.shortcut ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{it.shortcut}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
