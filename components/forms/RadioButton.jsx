import React from "react";

export function RadioButton({ label, name, value, checked = false, disabled = false, onChange, style, ...rest }) {
  return (
    <label style={{ display: "inline-grid", gridTemplateColumns: "24px auto", gap: "var(--space-4)", alignItems: "center", minHeight: 24, cursor: disabled ? "not-allowed" : "pointer", font: "var(--font-text2-normal)", ...style }}>
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
        <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={onChange}
          style={{ opacity: 0, width: 0, height: 0, margin: 0 }} {...rest} />
        <span style={{
          width: "1em", height: "1em", boxSizing: "border-box", borderRadius: "var(--border-radius-circle)",
          border: (checked ? "0.3em" : "0.1em") + " solid " + (disabled ? "var(--disabled-background-color)" : checked ? "var(--primary-color)" : "var(--ui-border-color)"),
          background: "var(--secondary-background-color)",
          transition: "border-width var(--motion-productive-medium) var(--motion-timing-enter)"
        }} />
      </span>
      <span style={{ color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)" }}>{label}</span>
    </label>
  );
}
