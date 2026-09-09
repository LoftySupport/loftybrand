import React, { useState } from "react";

const SIZES = {
  xs: { height: 24, padding: "4px 8px", font: "var(--font-text2-normal)" },
  small: { height: 32, padding: "4px 8px", font: "var(--font-text2-normal)" },
  medium: { height: 40, padding: "8px 16px", font: "var(--font-text1-normal)" },
  large: { height: 48, padding: "12px 24px", font: "var(--font-text1-normal)" }
};

const COLORS = {
  primary: { base: "var(--primary-color)", hover: "var(--primary-hover-color)", tint: "var(--primary-selected-color)", fg: "var(--text-color-on-primary)", line: "var(--ui-border-color)", text: "var(--primary-text-color)" },
  positive: { base: "var(--positive-color)", hover: "var(--positive-color-hover)", tint: "var(--positive-color-selected)", fg: "var(--text-color-on-status)", line: "var(--positive-color)", text: "var(--positive-color)" },
  negative: { base: "var(--negative-color)", hover: "var(--negative-color-hover)", tint: "var(--negative-color-selected)", fg: "var(--text-color-on-status)", line: "var(--negative-color)", text: "var(--negative-color)" },
  secondary: { base: "var(--secondary-color)", hover: "var(--secondary-hover-color)", tint: "var(--secondary-selected-color)", fg: "var(--text-color-on-inverted)", line: "var(--secondary-color)", text: "var(--secondary-color)" },
  inverted: { base: "var(--inverted-color-background)", hover: "var(--secondary-text-color)", tint: "var(--primary-background-hover-color)", fg: "var(--text-color-on-inverted)", line: "var(--primary-text-color)", text: "var(--primary-text-color)" }
};

export function Button({
  children, kind = "primary", color = "primary", size = "medium", disabled = false,
  loading = false, active = false, leftIcon = null, rightIcon = null, onClick, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const [focus, setFocus] = useState(false);
  const s = SIZES[size] || SIZES.medium;
  const c = COLORS[color] || COLORS.primary;
  const on = (hover || active) && !disabled;

  let look;
  if (kind === "primary") {
    look = { background: on ? c.hover : c.base, color: c.fg, border: "1px solid transparent" };
    // The one filled orange action inverts on hover — fill drops out, orange becomes ink and line —
    // then presses to the pressed step. Every other filled colour just darkens.
    if (color === "primary") {
      if (press && !disabled) look = { background: "var(--lofty-orange-pressed)", color: c.fg, border: "1px solid var(--lofty-orange-pressed)" };
      else if (on) look = { background: "var(--primary-background-color)", color: "var(--primary-color)", border: "1px solid var(--primary-color)" };
    }
    if (disabled) look = { background: "var(--disabled-background-color)", color: "var(--disabled-text-color)", border: "1px solid transparent" };
  } else if (kind === "secondary") {
    look = { background: on ? "var(--primary-background-hover-color)" : "transparent", color: c.text, border: "1px solid " + c.line };
    if (active) look.background = c.tint;
    if (disabled) look = { background: "transparent", color: "var(--disabled-text-color)", border: "1px solid var(--disabled-text-color)" };
  } else {
    look = { background: on ? "var(--primary-background-hover-color)" : "transparent", color: c.text, border: "none" };
    if (active) look.background = c.tint;
    if (disabled) look = { background: "transparent", color: "var(--disabled-text-color)", border: "none" };
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      aria-busy={loading || undefined}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-8)",
        height: s.height, padding: s.padding, font: s.font, boxSizing: "border-box",
        borderRadius: "var(--border-radius-small)", whiteSpace: "nowrap", cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none", outline: "none",
        boxShadow: focus && !disabled ? "var(--focus-ring)" : "none",
        transition: "var(--motion-productive-short) transform, var(--motion-productive-medium) background-color, var(--motion-productive-medium) color, var(--motion-productive-medium) border-color",
        transform: press && !disabled ? "scale(0.95)" : "scale(1)",
        ...look, ...style
      }}
      {...rest}
    >
      {loading ? <Spinner /> : null}
      {!loading && leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
}

function Spinner() {
  return (
    <span style={{ width: 16, height: 16, borderRadius: "var(--border-radius-circle)", border: "2px solid currentColor", borderTopColor: "transparent", animation: "loftySpin 800ms linear infinite", display: "inline-block" }}>
      <style>{"@keyframes loftySpin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
