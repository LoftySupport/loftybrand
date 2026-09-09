import React from "react";

export function Checkbox({ label, checked = false, indeterminate = false, disabled = false, onChange, style, ...rest }) {
  const on = checked || indeterminate;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", width: "fit-content", minHeight: 24, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={{
        width: 16, height: 16, margin: 4, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
        border: "1px solid " + (on ? "transparent" : "var(--ui-border-color)"), borderRadius: "var(--border-radius-2)",
        background: disabled ? "var(--disabled-background-color)" : on ? "var(--primary-color)" : "var(--secondary-background-color)",
        transition: "background-color var(--motion-productive-short) var(--motion-timing-enter)", flex: "0 0 auto"
      }}>
        {indeterminate ? (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5h6" stroke={disabled ? "var(--disabled-text-color)" : "var(--text-color-on-primary)"} strokeWidth="2" strokeLinecap="round" /></svg>
        ) : checked ? (
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 5.2l2.4 2.3L8.5 2.6" fill="none" stroke={disabled ? "var(--disabled-text-color)" : "var(--text-color-on-primary)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        ) : null}
      </span>
      {label ? <span style={{ marginInlineStart: "var(--space-4)", font: "var(--font-text2-normal)", color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)", userSelect: "none" }}>{label}</span> : null}
    </label>
  );
}
