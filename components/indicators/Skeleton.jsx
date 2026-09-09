import React from "react";

const TEXT_H = { h1: 40, h2: 30, h3: 24, text1: 22, text2: 20, text3: 16, small: 16 };

export function Skeleton({ type = "text", size = "text2", width, height, fullWidth = false, count = 1, style, ...rest }) {
  const one = i => {
    const box = type === "circle"
      ? { width: width || 38, height: height || 38, borderRadius: "var(--border-radius-circle)" }
      : type === "rectangle"
        ? { width: fullWidth ? "100%" : width || 100, height: height || 100, borderRadius: "var(--border-radius-small)" }
        : { width: fullWidth ? "100%" : width || 162, height: height || TEXT_H[size] || 20, borderRadius: "var(--border-radius-small)" };
    return <span key={i} style={{ display: "block", background: "var(--ui-background-color)", animation: "loftySkeletonShine 800ms steps(10,end) infinite alternate", ...box }} />;
  };
  return (
    <span style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", width: fullWidth ? "100%" : "fit-content", ...style }} {...rest}>
      {Array.from({ length: count }, (_, i) => one(i))}
      <style>{"@keyframes loftySkeletonShine{0%{opacity:.4}100%{opacity:1}}"}</style>
    </span>
  );
}
