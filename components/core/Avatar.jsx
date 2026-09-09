import React from "react";

const SIZES = { xs: 16, small: 24, medium: 32, large: 48 };

export function Avatar({ text, src, size = "medium", type = "circle", backgroundColor = "var(--secondary-color)", online = false, style, ...rest }) {
  const px = SIZES[size] || SIZES.medium;
  const radius = type === "square" ? "var(--border-radius-small)" : "var(--border-radius-circle)";
  return (
    <span style={{ position: "relative", display: "inline-block", width: px, height: px, ...style }} {...rest}>
      <span style={{
        display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%",
        borderRadius: radius, overflow: "hidden", border: "1px solid var(--primary-background-color)",
        background: src ? "var(--ui-background-color)" : backgroundColor,
        color: "var(--text-color-on-inverted)", font: px > 24 ? "var(--font-text2-medium)" : "var(--font-text3-medium)"
      }}>
        {src ? <img src={src} alt={text || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (text || "").slice(0, 2).toUpperCase()}
      </span>
      {online ? <span style={{ position: "absolute", right: -1, bottom: -1, width: Math.max(6, px / 4), height: Math.max(6, px / 4), borderRadius: "var(--border-radius-circle)", background: "var(--positive-color)", border: "2px solid var(--primary-background-color)" }} /> : null}
    </span>
  );
}
