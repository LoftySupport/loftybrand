import React from "react";

const SPACE = { none: 0, xs: "var(--space-4)", small: "var(--space-8)", medium: "var(--space-16)", large: "var(--space-24)", xl: "var(--space-32)" };
const BG = { primary: "var(--primary-background-color)", secondary: "var(--secondary-background-color)", grey: "var(--allgrey-background-color)", inverted: "var(--inverted-color-background)" };
const BORDER = { default: "1px solid var(--ui-border-color)", layout: "1px solid var(--layout-border-color)" };
const RADIUS = { small: "var(--border-radius-small)", medium: "var(--border-radius-medium)", big: "var(--border-radius-big)" };
const SHADOW = { xs: "var(--box-shadow-xs)", small: "var(--box-shadow-small)", medium: "var(--box-shadow-medium)", large: "var(--box-shadow-large)" };

export function Box({ children, element: El = "div", padding, paddingX, paddingY, margin, marginX, marginY, backgroundColor, border, borderColor = "default", rounded, shadow, scrollable = false, disabled = false, style, ...rest }) {
  const px = paddingX ?? padding, py = paddingY ?? padding, mx = marginX ?? margin, my = marginY ?? margin;
  return (
    <El style={{
      boxSizing: "border-box", overflow: scrollable ? "auto" : "hidden",
      paddingInline: SPACE[px], paddingBlock: SPACE[py], marginInline: SPACE[mx], marginBlock: SPACE[my],
      background: BG[backgroundColor], border: border ? BORDER[borderColor] || BORDER.default : undefined,
      borderRadius: RADIUS[rounded], boxShadow: SHADOW[shadow],
      color: backgroundColor === "inverted" ? "var(--text-color-on-inverted)" : undefined,
      opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : undefined, ...style
    }} {...rest}>{children}</El>
  );
}
