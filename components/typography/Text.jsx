import React from "react";

const SIZE = { small: "text3", medium: "text2", large: "text1" };
const COLOR = { primary: "var(--primary-text-color)", secondary: "var(--secondary-text-color)", disabled: "var(--disabled-text-color)", onPrimary: "var(--text-color-on-primary)", onInverted: "var(--text-color-on-inverted)", inherit: "inherit" };

export function Text({ children, element: El = "p", type = "text2", weight = "normal", color = "primary", align, ellipsis = false, maxLines, style, ...rest }) {
  const t = SIZE[type] || type;
  const clamp = maxLines ? { display: "-webkit-box", WebkitLineClamp: maxLines, WebkitBoxOrient: "vertical", overflow: "hidden" } : null;
  const one = ellipsis && !maxLines ? { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } : null;
  return <El style={{ font: `var(--font-${t}-${weight})`, color: COLOR[color] || color, textAlign: align, margin: 0, textWrap: "pretty", ...clamp, ...one, ...style }} {...rest}>{children}</El>;
}
