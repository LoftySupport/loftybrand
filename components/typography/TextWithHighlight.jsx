import React from "react";

const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function TextWithHighlight({ text = "", highlightTerm = "", limit, ignoreCase = true, useEllipsis = false, maxLines = 1, type = "text2", weight = "normal", color = "primary", style, ...rest }) {
  const parts = [];
  if (highlightTerm) {
    const re = new RegExp("(" + esc(highlightTerm) + ")", ignoreCase ? "gi" : "g");
    let n = 0;
    text.split(re).forEach((p, i) => {
      const hit = i % 2 === 1 && (limit == null || n < limit);
      if (i % 2 === 1) n++;
      parts.push(hit ? <em key={i} style={{ fontStyle: "normal", background: "var(--primary-selected-color)", color: "var(--primary-text-color)", borderRadius: 2 }}>{p}</em> : p);
    });
  } else parts.push(text);
  const font = "var(--font-" + type + "-" + weight + ")";
  const c = color === "secondary" ? "var(--secondary-text-color)" : color === "disabled" ? "var(--disabled-text-color)" : "var(--primary-text-color)";
  const clamp = useEllipsis ? { display: "-webkit-box", WebkitLineClamp: maxLines, WebkitBoxOrient: "vertical", overflow: "hidden", wordBreak: "break-word" } : null;
  return <span style={{ font, color: c, ...clamp, ...style }} {...rest}>{parts}</span>;
}
