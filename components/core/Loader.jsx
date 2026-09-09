import React from "react";

export function Loader({ size = 24, color = "var(--primary-color)", style }) {
  return (
    <span style={{ display: "inline-block", width: size, height: size, ...style }}>
      <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "var(--border-radius-circle)", border: Math.max(2, Math.round(size / 10)) + "px solid var(--ui-background-color)", borderTopColor: color, animation: "loftyLoaderSpin 900ms linear infinite" }} />
      <style>{"@keyframes loftyLoaderSpin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
