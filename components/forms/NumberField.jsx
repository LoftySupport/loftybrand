import React, { useId, useState } from "react";
import { Icon } from "../core/Icon";

const H = { small: 32, medium: 40, large: 48 };
const clamp = (n, min, max) => Math.min(max ?? Infinity, Math.max(min ?? -Infinity, n));

export function NumberField({ label, value = null, onChange, placeholder, min, max, step = 1, size = "medium", validation, message, disabled = false, readOnly = false, leftIcon, unit, requiredAsterisk = false, optional = false, allowOutOfBounds = false, iconBasePath, style, ...rest }) {
  const uid = useId();
  const inputId = rest.id || uid + "-nf", msgId = uid + "-msg";
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(null);
  let borderColor = "var(--ui-border-color)";
  if (hover) borderColor = "var(--primary-text-color)";
  if (focus) borderColor = "var(--primary-color)";
  if (validation === "error") borderColor = "var(--negative-color)";
  if (validation === "success") borderColor = "var(--positive-color)";
  const h = H[size] || 40;
  const locked = disabled || readOnly;
  const emit = (n, e) => { if (onChange) onChange(n == null || Number.isNaN(n) ? null : allowOutOfBounds ? n : clamp(n, min, max), e); };
  const bump = (dir, e) => emit((value ?? 0) + dir * step, e);
  const btn = (dir, name) => (
    <button type="button" tabIndex={-1} aria-label={dir > 0 ? "Increase" : "Decrease"} disabled={locked || (dir > 0 && max != null && value >= max) || (dir < 0 && min != null && value <= min)}
      onClick={e => bump(dir, e)} onMouseEnter={() => setHoverBtn(name)} onMouseLeave={() => setHoverBtn(null)}
      style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", border: 0, padding: 0, width: 32, minHeight: 0, cursor: locked ? "not-allowed" : "pointer", color: locked ? "var(--disabled-text-color)" : "var(--icon-color)", background: hoverBtn === name && !locked ? "var(--primary-background-hover-color)" : "transparent", borderRadius: 2 }}>
      <Icon name={dir > 0 ? "DropdownChevronUp" : "DropdownChevronDown"} size={14} basePath={iconBasePath} />
    </button>
  );
  return (
    <div style={{ width: "100%", font: "var(--font-text2-normal)", ...style }}>
      {label ? <label htmlFor={inputId} style={{ display: "block", color: "var(--primary-text-color)", padding: "var(--space-2) 0" }}>{label}{requiredAsterisk ? <span aria-hidden="true" style={{ color: "var(--negative-color)" }}> *</span> : null}{optional ? <span style={{ color: "var(--secondary-text-color)" }}> (optional)</span> : null}</label> : null}
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ display: "flex", alignItems: "stretch", height: h, boxSizing: "border-box",
          background: disabled ? "var(--disabled-background-color)" : readOnly ? "var(--allgrey-background-color)" : "var(--secondary-background-color)",
          border: "1px solid " + (locked ? "transparent" : borderColor), borderRadius: "var(--border-radius-small)",
          transition: "border-color var(--motion-productive-medium) ease-in", overflow: "hidden" }}>
        {leftIcon ? <span style={{ display: "flex", alignItems: "center", paddingInlineStart: "var(--space-12)", color: "var(--icon-color)" }}><Icon name={leftIcon} size={16} basePath={iconBasePath} /></span> : null}
        <input id={inputId} type="text" inputMode="decimal" role="spinbutton" aria-valuenow={value ?? undefined} aria-valuemin={min} aria-valuemax={max}
          aria-invalid={validation === "error" || undefined} aria-describedby={message ? msgId : undefined} aria-required={requiredAsterisk || undefined}
          value={value == null ? "" : String(value)} placeholder={placeholder} disabled={disabled} readOnly={readOnly}
          onChange={e => { const t = e.target.value.trim(); emit(t === "" || t === "-" ? null : Number(t), e); }}
          onKeyDown={e => { if (locked) return; if (e.key === "ArrowUp") { e.preventDefault(); bump(1, e); } if (e.key === "ArrowDown") { e.preventDefault(); bump(-1, e); } }}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", padding: "0 var(--space-12)", fontFamily: "inherit",
            font: size === "small" ? "var(--font-text2-normal)" : "var(--font-text1-normal)", color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)" }} {...rest} />
        {unit ? <span style={{ display: "flex", alignItems: "center", paddingInlineEnd: "var(--space-8)", color: "var(--secondary-text-color)", font: "var(--font-text2-normal)" }}>{unit}</span> : null}
        {!readOnly ? <div style={{ display: "flex", flexDirection: "column", borderInlineStart: "1px solid var(--ui-border-subtle-color)" }}>{btn(1, "up")}{btn(-1, "down")}</div> : null}
      </div>
      {message ? <div id={msgId} role={validation === "error" ? "alert" : undefined} style={{ font: "var(--font-text3-normal)", padding: "var(--space-2) 0", color: validation === "error" ? "var(--negative-color)" : validation === "success" ? "var(--positive-color)" : "var(--secondary-text-color)" }}>{message}</div> : null}
    </div>
  );
}
