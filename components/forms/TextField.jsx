import React, { useId, useState } from "react";
import { Icon } from "../core/Icon";

const H = { small: 32, medium: 40, large: 48 };

export function TextField({
  label, value, placeholder, onChange, size = "medium", validation, message, disabled = false,
  readOnly = false, icon, iconBasePath, type = "text", requiredAsterisk = false, optional = false, style, ...rest
}) {
  const uid = useId();
  const inputId = rest.id || uid + "-in", msgId = uid + "-msg";
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  let borderColor = "var(--ui-border-color)";
  if (hover) borderColor = "var(--primary-text-color)";
  if (focus) borderColor = "var(--primary-color)";
  if (validation === "error") borderColor = "var(--negative-color)";
  if (validation === "success") borderColor = "var(--positive-color)";

  return (
    <div style={{ width: "100%", font: "var(--font-text2-normal)", ...style }}>
      {label ? (
        <label htmlFor={inputId} style={{ display: "block", font: "var(--font-text2-normal)", color: "var(--primary-text-color)", padding: "var(--space-2) 0" }}>
          {label}{requiredAsterisk ? <span aria-hidden="true" style={{ color: "var(--negative-color)" }}> *</span> : null}{optional ? <span style={{ color: "var(--secondary-text-color)" }}> (optional)</span> : null}
        </label>
      ) : null}
      <div style={{ position: "relative", height: H[size] || 40 }}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <input
          id={inputId} type={type} value={value} placeholder={placeholder} disabled={disabled} readOnly={readOnly}
          aria-invalid={validation === "error" || undefined} aria-describedby={message ? msgId : undefined} aria-required={requiredAsterisk || undefined}
          onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: "100%", height: "100%", boxSizing: "border-box", outline: 0,
            background: disabled ? "var(--disabled-background-color)" : readOnly ? "var(--allgrey-background-color)" : "var(--secondary-background-color)",
            border: readOnly ? "none" : "1px solid " + borderColor,
            borderRadius: "var(--border-radius-small)",
            transition: "border-color var(--motion-productive-medium) ease-in",
            padding: icon ? "var(--space-8) var(--space-32) var(--space-8) var(--space-12)" : "var(--space-8) var(--space-12)",
            font: size === "small" ? "var(--font-text2-normal)" : "var(--font-text1-normal)",
            color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)"
          }}
          {...rest}
        />
        {icon ? (
          <span style={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", display: "flex", color: "var(--icon-color)" }}>
            <Icon name={icon} size={16} basePath={iconBasePath} />
          </span>
        ) : null}
      </div>
      {message ? (
        <div id={msgId} role={validation === "error" ? "alert" : undefined} style={{ font: "var(--font-text3-normal)", padding: "var(--space-2) 0", display: "flex", alignItems: "center", gap: "var(--space-4)", color: validation === "error" ? "var(--negative-color)" : validation === "success" ? "var(--positive-color)" : "var(--secondary-text-color)" }}>{validation === "error" ? <Icon name="Alert" size={12} basePath={iconBasePath} /> : validation === "success" ? <Icon name="Check" size={12} basePath={iconBasePath} /> : null}{message}</div>
      ) : null}
    </div>
  );
}
