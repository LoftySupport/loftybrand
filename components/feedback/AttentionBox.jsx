import React from "react";
import { Icon } from "../core/Icon";

const TYPES = {
  primary: { bg: "var(--primary-selected-color)", icon: "Info" },
  positive: { bg: "var(--positive-color-selected)", icon: "Check" },
  negative: { bg: "var(--negative-color-selected)", icon: "Alert" },
  warning: { bg: "var(--warning-color-selected)", icon: "Warning" },
  neutral: { bg: "var(--allgrey-background-color)", icon: "Info" }
};

export function AttentionBox({ title, text, children, type = "primary", icon, onClose, iconBasePath, style }) {
  const t = TYPES[type] || TYPES.primary;
  return (
    <div role={type === "negative" ? "alert" : type === "warning" ? "status" : undefined} style={{
      width: "100%", boxSizing: "border-box", background: t.bg,
      borderRadius: "var(--border-radius-medium)", padding: "var(--space-12) var(--space-16)",
      display: "flex", gap: "var(--space-12)", alignItems: "flex-start", position: "relative", ...style
    }}>
      <Icon name={icon || t.icon} size={18} basePath={iconBasePath} style={{ marginTop: 2, color: "var(--primary-text-color)" }} />
      <div style={{ flex: 1 }}>
        {title ? <div style={{ font: "var(--font-text2-bold)", marginBottom: "var(--space-2)" }}>{title}</div> : null}
        <div style={{ font: "var(--font-text2-normal)", color: "var(--primary-text-color)" }}>{text || children}</div>
      </div>
      {onClose ? (
        <button type="button" aria-label="Dismiss" onClick={onClose}
          style={{ border: "none", background: "transparent", cursor: "pointer", padding: 0, width: 24, height: 24, margin: -3, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--border-radius-small)", color: "var(--primary-text-color)" }}>
          <Icon name="CloseSmall" size={14} basePath={iconBasePath} />
        </button>
      ) : null}
    </div>
  );
}
