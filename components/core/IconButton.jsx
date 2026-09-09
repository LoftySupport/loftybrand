import React, { useState } from "react";
import { Icon } from "./Icon";

const SIZES = { xs: 24, small: 32, medium: 40, large: 48 };
const GLYPH = { xs: 14, small: 16, medium: 20, large: 24 };

export function IconButton({ icon, ariaLabel, size = "medium", kind = "tertiary", active = false, disabled = false, onClick, iconBasePath, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const box = SIZES[size] || SIZES.medium;
  const on = hover && !disabled;
  let look;
  if (kind === "primary") look = { background: on ? "var(--primary-hover-color)" : "var(--primary-color)", color: "var(--text-color-on-primary)", border: "none" };
  else if (kind === "secondary") look = { background: on ? "var(--primary-background-hover-color)" : "transparent", color: "var(--primary-text-color)", border: "1px solid var(--ui-border-color)" };
  else look = { background: active ? "var(--primary-selected-color)" : on ? "var(--primary-background-hover-color)" : "transparent", color: "var(--icon-color)", border: "none" };
  if (disabled) look = { background: "transparent", color: "var(--disabled-text-color)", border: kind === "secondary" ? "1px solid var(--disabled-text-color)" : "none" };

  return (
    <button type="button" aria-label={ariaLabel || icon} disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        width: box, height: box, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--border-radius-small)", cursor: disabled ? "not-allowed" : "pointer", padding: 0, outline: "none",
        transition: "var(--motion-productive-short) transform, var(--motion-productive-medium) background-color",
        transform: press && !disabled ? "scale(0.9)" : "scale(1)", ...look, ...style
      }} {...rest}>
      <Icon name={icon} size={GLYPH[size] || 20} basePath={iconBasePath} />
    </button>
  );
}
