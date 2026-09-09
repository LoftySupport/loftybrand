import React from "react";

export function Divider({ direction = "horizontal", withoutMargin = false, style }) {
  const v = direction === "vertical";
  return <div role="separator" aria-orientation={direction} style={{
    background: "var(--layout-border-color)", flex: "none",
    height: v ? "100%" : 1, width: v ? 1 : "100%",
    margin: withoutMargin ? 0 : v ? "0 var(--space-4)" : "var(--space-8) 0", ...style
  }} />;
}
