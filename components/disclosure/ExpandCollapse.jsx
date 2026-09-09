import React, { useState } from "react";
import { Icon } from "../core/Icon";

export function ExpandCollapse({ title, subtitle, children, defaultOpen = false, open: controlled, onToggle, showBorder = true, iconPosition = "end", icon, iconBasePath, style }) {
  const [inner, setInner] = useState(defaultOpen);
  const open = controlled === undefined ? inner : controlled;
  const toggle = () => { const next = !open; if (controlled === undefined) setInner(next); if (onToggle) onToggle(next); };
  const leftIcon = iconPosition === "start";
  return (
    <div style={{ width: "100%", boxSizing: "border-box", color: "var(--primary-text-color)", borderRadius: "var(--border-radius-small)", border: showBorder ? "1px solid var(--ui-border-color)" : "none", ...style }}>
      <button type="button" aria-expanded={open} onClick={toggle}
        style={{ width: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: leftIcon ? "flex-start" : "space-between", gap: "var(--space-8)", padding: "var(--space-16)", background: "transparent", border: "none", borderBottom: open && showBorder ? "1px solid var(--ui-border-color)" : "none", cursor: "pointer", textAlign: "left", font: "inherit", color: "inherit" }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
        {leftIcon ? <Chevron open={open} iconBasePath={iconBasePath} /> : null}
        <span style={{ display: "flex", flexDirection: "column", flex: leftIcon ? "none" : 1, minWidth: 0 }}>
          <span style={{ font: "var(--font-text1-medium)" }}>{title}</span>
          {subtitle ? <span style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)" }}>{subtitle}</span> : null}
        </span>
        {icon ? <Icon name={icon} size={18} basePath={iconBasePath} style={{ color: "var(--icon-color)" }} /> : null}
        {!leftIcon ? <Chevron open={open} iconBasePath={iconBasePath} /> : null}
      </button>
      {open ? <div style={{ padding: "var(--space-16)", font: "var(--font-text2-normal)" }}>{children}</div> : null}
    </div>
  );
}

function Chevron({ open, iconBasePath }) {
  return <Icon name="DropdownChevronDown" size={18} basePath={iconBasePath}
    style={{ flex: "none", color: "var(--icon-color)", transform: open ? "rotate(-180deg)" : "rotate(0deg)", transition: "transform var(--motion-expressive-short) var(--motion-timing-transition)" }} />;
}
