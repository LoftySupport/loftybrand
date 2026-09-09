import React, { useState } from "react";
import { Icon } from "../core/Icon";

const H = { xs: 24, small: 32, medium: 40, large: 48 };
const FONT = { xs: "var(--font-text2-normal)", small: "var(--font-text2-normal)", medium: "var(--font-text1-normal)", large: "var(--font-text1-normal)" };

export function ButtonGroup({ options = [], value, onSelect, kind = "secondary", size = "medium", disabled = false, fullWidth = false, groupAriaLabel, iconBasePath, style }) {
  const [hover, setHover] = useState(null);
  const tertiary = kind === "tertiary";
  return (
    <div role="group" aria-label={groupAriaLabel} style={{ display: "flex", alignItems: "center", width: fullWidth ? "100%" : undefined, ...style }}>
      {options.map((o, i) => {
        const opt = typeof o === "string" ? { value: o, text: o } : o;
        const sel = opt.value === value;
        const dis = disabled || opt.disabled;
        const first = i === 0, last = i === options.length - 1;
        const border = tertiary ? "transparent" : sel ? "var(--primary-color)" : "var(--ui-border-color)";
        return (
          <button key={opt.value} type="button" disabled={dis} aria-pressed={sel}
            onClick={dis ? undefined : () => onSelect && onSelect(opt.value)}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-8)",
              flex: fullWidth ? 1 : undefined, height: H[size] || 40, padding: size === "xs" || size === "small" ? "4px 8px" : "8px 16px",
              font: FONT[size] || FONT.medium, color: dis ? "var(--disabled-text-color)" : "var(--primary-text-color)",
              background: dis ? "var(--disabled-background-color)" : sel ? "var(--primary-selected-color)" : hover === i ? "var(--primary-background-hover-color)" : "var(--primary-background-color)",
              borderStyle: "solid", borderColor: border, borderWidth: sel ? "1px" : "1px 0",
              borderInlineStartWidth: first || sel ? 1 : 0, borderInlineEndWidth: last || sel ? 1 : 0,
              marginInlineStart: sel && !first ? -1 : 0, position: sel ? "relative" : undefined, zIndex: sel ? 1 : 0,
              borderRadius: first && last ? "var(--border-radius-small)" : first ? "var(--border-radius-small) 0 0 var(--border-radius-small)" : last ? "0 var(--border-radius-small) var(--border-radius-small) 0" : 0,
              cursor: dis ? "not-allowed" : "pointer", opacity: dis ? 0.5 : 1, whiteSpace: "nowrap", outline: "none", userSelect: "none",
              transition: "background-color var(--motion-productive-medium)"
            }}>
            {opt.icon ? <Icon name={opt.icon} size={16} basePath={iconBasePath} /> : null}
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}
