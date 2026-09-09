import React from "react";
import { IconButton } from "../core/IconButton";
import { Icon } from "../core/Icon";

const BG = { primary: "var(--primary-color)", positive: "var(--positive-color)", negative: "var(--negative-color)", warning: "var(--warning-color)", dark: "var(--inverted-color-background)" };

export function AlertBanner({ children, backgroundColor = "primary", icon, actionText, onAction, onClose, iconBasePath, style }) {
  const warning = backgroundColor === "warning";
  const fg = warning ? "var(--text-color-on-warning)" : backgroundColor === "positive" || backgroundColor === "negative" ? "var(--text-color-on-status)" : backgroundColor === "dark" ? "var(--text-color-on-inverted)" : "var(--text-color-on-primary)";
  return (
    <div role="alert" style={{ height: 40, width: "100%", display: "flex", alignItems: "center", background: BG[backgroundColor] || backgroundColor, color: fg, boxSizing: "border-box", ...style }}>
      <div style={{ flex: "1 1 auto", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-8)", paddingInlineStart: "var(--space-16)" }}>
        {icon ? <Icon name={icon} size={18} basePath={iconBasePath} /> : null}
        <span style={{ font: "var(--font-text2-normal)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{children}</span>
        {actionText ? (
          <button type="button" onClick={onAction} style={{ background: "transparent", border: "none", color: fg, font: "var(--font-text2-medium)", textDecoration: "underline", cursor: "pointer", padding: 0, flex: "none" }}>{actionText}</button>
        ) : null}
      </div>
      <div style={{ flex: "0 0 40px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {onClose ? <IconButton icon="CloseSmall" ariaLabel="Dismiss" size="small" onClick={onClose} iconBasePath={iconBasePath} style={{ color: fg }} /> : null}
      </div>
    </div>
  );
}
