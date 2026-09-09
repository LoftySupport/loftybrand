import React from "react";
import { Icon } from "../core/Icon";

export function List({ items = [], selectedId, onSelect, size = "medium", role = "listbox", iconBasePath, style }) {
  const h = size === "small" ? 32 : size === "large" ? 48 : 40;
  const onKey = e => {
    if (!onSelect) return;
    const els = Array.from(e.currentTarget.querySelectorAll('[tabindex="0"]'));
    const i = els.indexOf(document.activeElement);
    let n = null;
    if (e.key === "ArrowDown") n = Math.min(els.length - 1, i + 1); else if (e.key === "ArrowUp") n = Math.max(0, i - 1); else if (e.key === "Home") n = 0; else if (e.key === "End") n = els.length - 1;
    if (n === null || !els.length) return;
    e.preventDefault(); els[n].focus();
  };
  return (
    <div role={role} onKeyDown={onKey} style={{ display: "flex", flexDirection: "column", padding: "var(--space-4)", boxSizing: "border-box", ...style }}>
      {items.map((it, i) => {
        if (it.divider) return <span key={"d" + i} style={{ height: 1, background: "var(--layout-border-color)", margin: "var(--space-4) 0" }} />;
        if (it.title) return <span key={"t" + i} style={{ font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", textTransform: "uppercase", letterSpacing: ".04em", padding: "var(--space-8) var(--space-8) var(--space-4)" }}>{it.title}</span>;
        const id = it.id ?? it.label, sel = id === selectedId;
        return (
          <div key={id} role={role === "listbox" ? "option" : "listitem"} aria-selected={role === "listbox" ? sel : undefined}
            onClick={() => !it.disabled && onSelect && onSelect(id)}
            tabIndex={onSelect && !it.disabled ? 0 : undefined} aria-disabled={it.disabled || undefined}
            onKeyDown={e => { if (onSelect && !it.disabled && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onSelect(id); } }}
            onFocus={e => { e.currentTarget.style.boxShadow = "var(--focus-ring)"; }}
            onBlur={e => { e.currentTarget.style.boxShadow = "none"; }}
            style={{ outline: "none", display: "flex", alignItems: "center", gap: "var(--space-8)", minHeight: h, padding: "0 var(--space-8)", borderRadius: "var(--border-radius-small)", font: "var(--font-text2-normal)", cursor: it.disabled ? "not-allowed" : onSelect ? "pointer" : "default", color: it.disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)", background: sel ? "var(--primary-selected-color)" : "transparent", transition: "background var(--motion-productive-short) ease-in" }}
            onMouseEnter={e => { if (!sel && !it.disabled && onSelect) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
            onMouseLeave={e => { if (!sel) e.currentTarget.style.background = "transparent"; }}>
            {it.icon ? <Icon name={it.icon} size={16} basePath={iconBasePath} style={{ flex: "none", color: "var(--icon-color)" }} /> : null}
            {it.avatar}
            <span style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.label}</span>
              {it.secondaryLabel ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.secondaryLabel}</span> : null}
            </span>
            {it.end}
          </div>
        );
      })}
    </div>
  );
}
