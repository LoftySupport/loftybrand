import React from "react";

const DOT = { primary: "var(--primary-color)", negative: "var(--negative-color)", positive: "var(--positive-color)", dark: "var(--inverted-color-background)" };
const POS = {
  topEnd: { top: 0, right: 0, translate: "50% -50%" },
  topStart: { top: 0, left: 0, translate: "-50% -50%" },
  bottomEnd: { bottom: 0, right: 0, translate: "50% 50%" },
  bottomStart: { bottom: 0, left: 0, translate: "-50% 50%" }
};
const POS_CIRCULAR = {
  topEnd: { top: "15%", right: "15%", translate: "50% -50%" },
  topStart: { top: "15%", left: "15%", translate: "-50% -50%" },
  bottomEnd: { bottom: "15%", right: "15%", translate: "50% 50%" },
  bottomStart: { bottom: "15%", left: "15%", translate: "-50% 50%" }
};

export function Badge({ children, anchor = "topEnd", alignment = "rectangular", color = "negative", dotSize = 8, badgeContent, style, ...rest }) {
  const pos = (alignment === "circular" ? POS_CIRCULAR : POS)[anchor] || POS.topEnd;
  return (
    <div style={{ position: "relative", display: "inline-flex", ...style }} {...rest}>
      {children}
      <span style={{
        position: "absolute", zIndex: 1, ...pos,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--border-radius-pill)", border: "2px solid var(--primary-background-color)",
        background: badgeContent == null ? DOT[color] || color : undefined,
        width: badgeContent == null ? dotSize + 4 : undefined,
        height: badgeContent == null ? dotSize + 4 : undefined,
        boxSizing: "border-box"
      }}>{badgeContent}</span>
    </div>
  );
}
