import React from "react";

export function Toggle({ checked = false, disabled = false, size = "medium", onChange, ariaLabel, label, style, ...rest }) {
  const w = size === "small" ? 28 : 41;
  const h = size === "small" ? 16 : 24;
  const knob = size === "small" ? 12 : 18;
  const off = size === "small" ? 2 : 3;
  const onPos = w - knob - off;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-8)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--disabled-component-opacity)" : 1, ...style }}>
      <input type="checkbox" role="switch" aria-label={ariaLabel} checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        position: "relative", width: w, height: h, borderRadius: "var(--border-radius-pill)", flex: "0 0 auto",
        background: checked ? "var(--primary-color)" : "var(--ui-border-color)",
        transition: "background-color var(--motion-productive-medium) var(--motion-timing-transition)"
      }}>
        <span style={{
          position: "absolute", top: (h - knob) / 2, left: checked ? onPos : off, width: knob, height: knob,
          borderRadius: "var(--border-radius-circle)", background: "var(--primary-background-color)",
          transition: "left var(--motion-productive-medium) var(--motion-timing-transition)"
        }} />
      </span>
      {label ? <span style={{ font: "var(--font-text2-normal)" }}>{label}</span> : null}
    </label>
  );
}
