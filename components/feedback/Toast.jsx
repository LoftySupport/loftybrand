import React from "react";
import { Icon } from "../core/Icon";

const TYPES = {
  normal: { bg: "var(--primary-color)", fg: "var(--text-color-on-primary)" },
  positive: { bg: "var(--positive-color)", fg: "var(--text-color-on-status)" },
  negative: { bg: "var(--negative-color)", fg: "var(--text-color-on-status)" },
  warning: { bg: "var(--warning-color)", fg: "var(--text-color-on-warning)" },
  dark: { bg: "var(--inverted-color-background)", fg: "var(--text-color-on-inverted)" }
};

export function Toast({ children, type = "normal", icon, open = true, actionText, onAction, onClose, iconBasePath, style }) {
  if (!open) return null;
  const t = TYPES[type] || TYPES.normal;
  return (
    <div role={type === "negative" ? "alert" : "status"} aria-live={type === "negative" ? "assertive" : "polite"} style={{
      display: "flex", alignItems: "center", minWidth: 200, width: "auto", boxSizing: "border-box",
      padding: "var(--space-8)", borderRadius: "var(--border-radius-small)",
      background: t.bg, color: t.fg, boxShadow: "var(--box-shadow-medium)",
      font: "var(--font-text2-normal)", ...style
    }}>
      {icon ? <span style={{ display: "flex", marginInlineStart: "var(--space-8)" }}><Icon name={icon} size={18} basePath={iconBasePath} /></span> : null}
      <div style={{ margin: "0 var(--space-8)", flex: 1 }}>{children}</div>
      {actionText ? (
        <button type="button" onClick={onAction}
          style={{ background: "transparent", border: "1px solid currentColor", color: "inherit", borderRadius: "var(--border-radius-small)", padding: "0 var(--space-8)", minHeight: 32, font: "var(--font-text2-medium)", cursor: "pointer" }}>
          {actionText}
        </button>
      ) : null}
      {onClose ? (
        <button type="button" aria-label="Close" onClick={onClose}
          style={{ marginInlineStart: "var(--space-4)", background: "transparent", border: "none", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, padding: 0, borderRadius: "var(--border-radius-small)" }}>
          <Icon name="CloseSmall" size={14} basePath={iconBasePath} />
        </button>
      ) : null}
    </div>
  );
}
