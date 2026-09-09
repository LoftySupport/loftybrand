import React from "react";
import { Button } from "../core/Button";
import { IconButton } from "../core/IconButton";

const ARROW = { top: { top: -6, left: "50%", marginLeft: -6 }, bottom: { bottom: -6, left: "50%", marginLeft: -6 }, left: { left: -6, top: "50%", marginTop: -6 }, right: { right: -6, top: "50%", marginTop: -6 } };

export function Tipseen({ title, children, position = "bottom", color = "primary", submitButtonText = "Got it", onSubmit, onClose, closeButtonAriaLabel = "Dismiss", width = 280, showArrow = true, iconBasePath, style }) {
  const bg = color === "dark" ? "var(--inverted-color-background)" : "var(--primary-color)";
  return (
    <div role="dialog" style={{ position: "relative", width, boxSizing: "border-box", background: bg, color: "var(--text-color-on-primary)", borderRadius: "var(--border-radius-medium)", boxShadow: "var(--box-shadow-medium)", padding: "var(--space-16)", animation: "loftyTipseenIn 250ms cubic-bezier(0,0,.35,1)", ...style }}>
      {showArrow ? <span style={{ position: "absolute", width: 12, height: 12, background: bg, transform: "rotate(45deg)", ...ARROW[position] }} /> : null}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-8)" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {title ? <div style={{ font: "var(--font-text1-medium)", marginBottom: "var(--space-4)" }}>{title}</div> : null}
          <div style={{ font: "var(--font-text2-normal)" }}>{children}</div>
        </div>
        {onClose ? <IconButton icon="CloseSmall" ariaLabel={closeButtonAriaLabel} size="xs" onClick={onClose} iconBasePath={iconBasePath} style={{ color: "var(--text-color-on-primary)" }} /> : null}
      </div>
      {submitButtonText ? (
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-16)" }}>
          <Button size="small" kind="primary" color="inverted" onClick={onSubmit || onClose}>{submitButtonText}</Button>
        </div>
      ) : null}
      <style>{"@keyframes loftyTipseenIn{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}"}</style>
    </div>
  );
}
