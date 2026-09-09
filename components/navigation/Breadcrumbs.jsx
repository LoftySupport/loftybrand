import React from "react";
import { Icon } from "../core/Icon";

export function Breadcrumbs({ items = [], onNavigate, iconBasePath, style }) {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", font: "var(--font-text2-normal)", ...style }}>
      {items.map((it, i) => {
        const label = it.label ?? it;
        const last = i === items.length - 1;
        return (
          <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-4)" }}>
            <span onClick={() => !last && onNavigate && onNavigate(it.id ?? label)}
              style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-4)", cursor: last ? "default" : "pointer", color: last ? "var(--primary-text-color)" : "var(--secondary-text-color)", padding: "2px 4px", borderRadius: "var(--border-radius-small)" }}>
              {it.icon ? <Icon name={it.icon} size={14} basePath={iconBasePath} /> : null}
              {label}
            </span>
            {!last ? <Icon name="NavigationChevronRight" size={12} basePath={iconBasePath} style={{ color: "var(--icon-color)" }} /> : null}
          </span>
        );
      })}
    </nav>
  );
}
