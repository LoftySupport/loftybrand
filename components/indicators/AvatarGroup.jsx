import React from "react";
import { Avatar } from "../core/Avatar";

const SIZE = { xs: 20, small: 28, medium: 32, large: 50 };
const COUNTER = { primary: ["var(--text-color-on-primary)", "var(--primary-color)"], dark: ["var(--text-color-on-inverted)", "var(--inverted-color-background)"], negative: ["var(--text-color-on-status)", "var(--negative-color)"], light: ["var(--primary-text-color)", "var(--ui-background-color)"] };

export function AvatarGroup({ people = [], max = 4, size = "medium", counterColor = "light", onCounterClick, style, ...rest }) {
  const px = SIZE[size] || SIZE.medium;
  const shown = people.slice(0, max);
  const rest_ = people.length - shown.length;
  const [fg, bg] = COUNTER[counterColor] || COUNTER.light;
  return (
    <div style={{ display: "flex", alignItems: "center", ...style }} {...rest}>
      {shown.map((p, i) => (
        <span key={p.id ?? p.text ?? i} style={{ marginInlineStart: i === 0 ? 0 : "calc(var(--space-8) * -1)", zIndex: shown.length - i, borderRadius: "var(--border-radius-circle)", border: "1px solid var(--primary-background-color)", display: "inline-flex" }} title={p.name}>
          <Avatar text={p.text} src={p.src} size={size} backgroundColor={p.backgroundColor} />
        </span>
      ))}
      {rest_ > 0 ? (
        <button type="button" onClick={onCounterClick} style={{
          marginInlineStart: "calc(var(--space-8) * -1)", zIndex: 1, height: px, minWidth: px,
          borderRadius: "var(--border-radius-pill)", border: "1px solid var(--primary-background-color)",
          background: bg, color: fg, font: px <= 28 ? "var(--font-text3-medium)" : "var(--font-text2-medium)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          padding: px >= 50 ? "0 var(--space-4)" : "0 2px", cursor: onCounterClick ? "pointer" : "default", boxSizing: "border-box"
        }}>+{rest_}</button>
      ) : null}
    </div>
  );
}
