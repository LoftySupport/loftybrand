import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../core/Icon";
import { Menu } from "../navigation/Menu";

const SIZES = { xs: 24, small: 32, medium: 40, large: 48 };

export function SplitButton({ children, items = [], kind = "primary", color = "primary", size = "medium", disabled = false, onClick, onSelect, align = "end", iconBasePath, style }) {
  const [open, setOpen] = useState(false);
  const [hoverMain, setHoverMain] = useState(false);
  const [hoverArrow, setHoverArrow] = useState(false);
  const ref = useRef(null);
  const h = SIZES[size] || 40;
  useEffect(() => {
    if (!open) return;
    const away = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, [open]);
  const filled = kind === "primary";
  const base = filled
    ? { background: color === "negative" ? "var(--negative-color)" : "var(--primary-color)", color: color === "negative" ? "var(--text-color-on-status)" : "var(--text-color-on-primary)", border: "none" }
    : { background: "transparent", color: "var(--primary-text-color)", border: "1px solid var(--ui-border-color)" };
  const hoverBg = filled
    ? (color === "negative" ? "var(--negative-color-hover)" : "var(--primary-hover-color)")
    : "var(--primary-background-hover-color)";
  const seg = (hovered, extra) => ({
    ...base, height: h, display: "inline-flex", alignItems: "center", justifyContent: "center",
    font: size === "medium" || size === "large" ? "var(--font-text1-normal)" : "var(--font-text2-normal)",
    cursor: disabled ? "not-allowed" : "pointer", outline: "none", boxSizing: "border-box",
    background: disabled ? "var(--disabled-background-color)" : hovered ? hoverBg : base.background,
    color: disabled ? "var(--disabled-text-color)" : base.color,
    transition: "background-color var(--motion-productive-medium)", ...extra
  });
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex", ...style }}>
      <button type="button" disabled={disabled} onClick={onClick}
        onMouseEnter={() => setHoverMain(true)} onMouseLeave={() => setHoverMain(false)}
        style={seg(hoverMain, { padding: size === "large" ? "0 var(--space-24)" : "0 var(--space-16)", borderRadius: "var(--border-radius-small) 0 0 var(--border-radius-small)" })}>
        {children}
      </button>
      <span style={{ width: 1, background: filled ? "rgba(255,255,255,.4)" : "var(--ui-border-color)", flex: "none" }} />
      <button type="button" disabled={disabled} aria-label="More options" aria-expanded={open} onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHoverArrow(true)} onMouseLeave={() => setHoverArrow(false)}
        style={seg(hoverArrow || open, { width: h * 0.7, borderRadius: "0 var(--border-radius-small) var(--border-radius-small) 0", borderInlineStart: filled ? "none" : undefined })}>
        <Icon name="DropdownChevronDown" size={16} basePath={iconBasePath} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--motion-productive-medium)" }} />
      </button>
      {open ? (
        <div style={{ position: "absolute", top: "calc(100% + 4px)", zIndex: 30, left: align === "start" ? 0 : "auto", right: align === "end" ? 0 : "auto" }}>
          <Menu items={items} iconBasePath={iconBasePath} onSelect={id => { setOpen(false); onSelect && onSelect(id); }} />
        </div>
      ) : null}
    </div>
  );
}
