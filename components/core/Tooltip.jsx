import React, { useState } from "react";

export function Tooltip({ content, title, position = "top", children, style }) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }
  }[position];
  return (
    <span style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open ? (
        <span role="tooltip" style={{
          position: "absolute", zIndex: "var(--z-tooltip)", ...pos,
          background: "var(--inverted-color-background)", color: "var(--text-color-on-inverted)",
          borderRadius: "var(--border-radius-small)", boxShadow: "var(--box-shadow-medium)",
          padding: "var(--space-8) var(--space-16)", font: "var(--font-text2-normal)",
          maxWidth: 240, width: "max-content", whiteSpace: "pre-wrap", pointerEvents: "none"
        }}>
          {title ? <span style={{ display: "block", font: "var(--font-text2-bold)" }}>{title}</span> : null}
          {content}
        </span>
      ) : null}
    </span>
  );
}
