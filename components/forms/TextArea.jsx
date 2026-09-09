import React, { useId, useState } from "react";

export function TextArea({ label, value, placeholder, onChange, size = "small", rows = 3, maxLength, showCharCount = false, validation, message, disabled = false, readOnly = false, resize = true, requiredAsterisk = false, optional = false, style, ...rest }) {
  const uid = useId();
  const inputId = rest.id || uid + "-ta", msgId = uid + "-msg";
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  let borderColor = "var(--ui-border-color)";
  if (hover) borderColor = "var(--primary-text-color)";
  if (focus) borderColor = "var(--primary-color)";
  if (validation === "error") borderColor = "var(--negative-color)";
  if (validation === "success") borderColor = "var(--positive-color)";
  const len = (value || "").length;
  const over = maxLength != null && len > maxLength;
  const subColor = validation === "error" || over ? "var(--negative-color)" : validation === "success" ? "var(--positive-color)" : disabled ? "var(--disabled-text-color)" : "var(--secondary-text-color)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", width: "100%", font: "var(--font-text2-normal)", ...style }}>
      {label ? <label htmlFor={inputId} style={{ color: "var(--primary-text-color)" }}>{label}{requiredAsterisk ? <span aria-hidden="true" style={{ color: "var(--negative-color)" }}> *</span> : null}{optional ? <span style={{ color: "var(--secondary-text-color)" }}> (optional)</span> : null}</label> : null}
      <textarea id={inputId} aria-invalid={validation === "error" || over || undefined} aria-describedby={message || showCharCount ? msgId : undefined} aria-required={requiredAsterisk || undefined} value={value} placeholder={placeholder} onChange={onChange} rows={rows} disabled={disabled} readOnly={readOnly}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          width: "100%", boxSizing: "border-box", outline: 0, resize: resize && !disabled && !readOnly ? "vertical" : "none",
          padding: size === "large" ? "var(--space-12)" : "var(--space-8)", font: size === "large" ? "var(--font-text1-normal)" : "var(--font-text2-normal)",
          background: disabled ? "var(--disabled-background-color)" : readOnly ? "var(--allgrey-background-color)" : "var(--secondary-background-color)",
          border: "1px solid " + (disabled || readOnly ? "transparent" : borderColor), borderRadius: "var(--border-radius-small)",
          color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)", fontFamily: "inherit",
          transition: "border-color var(--motion-productive-medium) ease-in"
        }} {...rest} />
      {message || showCharCount ? (
        <div id={msgId} role={validation === "error" || over ? "alert" : undefined} style={{ display: "flex", font: "var(--font-text3-normal)", color: subColor }}>
          <span style={{ flex: 1 }}>{message}</span>
          {showCharCount ? <span>{len}{maxLength != null ? "/" + maxLength : ""}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
