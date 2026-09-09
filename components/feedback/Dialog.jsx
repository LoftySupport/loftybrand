import React from "react";
import { IconButton } from "../core/IconButton";

export function Dialog({ open = true, title, description, children, footer, width = 520, onClose, iconBasePath, style }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, background: "var(--backdrop-color)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "var(--z-dialog)" }} onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{
        width, maxWidth: "calc(100% - 32px)", background: "var(--modal-background-color)",
        borderRadius: "var(--border-radius-medium)", boxShadow: "var(--box-shadow-large)",
        padding: "var(--space-24)", boxSizing: "border-box", ...style
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-16)" }}>
          <div>
            {title ? <h2 style={{ font: "var(--font-h3-bold)", letterSpacing: "var(--letter-spacing-h3-bold)", margin: 0 }}>{title}</h2> : null}
            {description ? <p style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)", marginTop: "var(--space-4)" }}>{description}</p> : null}
          </div>
          {onClose ? <IconButton icon="CloseSmall" ariaLabel="Close dialog" size="small" onClick={onClose} iconBasePath={iconBasePath} /> : null}
        </div>
        {children ? <div style={{ marginTop: "var(--space-16)", font: "var(--font-text2-normal)" }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: "var(--space-24)", display: "flex", justifyContent: "flex-end", gap: "var(--space-8)" }}>{footer}</div> : null}
      </div>
    </div>
  );
}
