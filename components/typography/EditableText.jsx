import React, { useEffect, useRef, useState } from "react";

export function EditableText({ value = "", onChange, placeholder = "Add a name", type = "text2", weight = "normal", heading = false, headingType = "h2", multiline = false, disabled = false, style, ...rest }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef(null);
  useEffect(() => setDraft(value), [value]);
  useEffect(() => { if (editing && ref.current) { ref.current.focus(); ref.current.select(); } }, [editing]);
  const font = heading ? `var(--font-${headingType}-bold)` : `var(--font-${type}-${weight})`;
  const shared = { font, color: draft ? "var(--primary-text-color)" : "var(--placeholder-color)", letterSpacing: heading ? `var(--letter-spacing-${headingType}-bold)` : undefined, padding: "2px var(--space-4)", margin: "-2px calc(var(--space-4) * -1)", borderRadius: "var(--border-radius-small)", boxSizing: "border-box", width: "100%", textAlign: "inherit" };
  const commit = () => { setEditing(false); if (draft !== value && onChange) onChange(draft); };
  if (editing && !disabled) {
    const El = multiline ? "textarea" : "input";
    return <El ref={ref} value={draft} rows={multiline ? 3 : undefined}
      onChange={e => setDraft(e.target.value)} onBlur={commit}
      onKeyDown={e => { if (e.key === "Enter" && !multiline) commit(); if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
      style={{ ...shared, background: "var(--primary-background-color)", border: "1px solid var(--primary-color)", outline: 0, resize: multiline ? "vertical" : undefined, ...style }} />;
  }
  return <div tabIndex={disabled ? -1 : 0} role="button" onClick={() => !disabled && setEditing(true)}
    onKeyDown={e => { if (!disabled && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setEditing(true); } }}
    onMouseEnter={e => { if (!disabled) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
    style={{ ...shared, border: "1px solid transparent", cursor: disabled ? "default" : "text", opacity: disabled ? "var(--disabled-component-opacity)" : 1, whiteSpace: multiline ? "pre-wrap" : "nowrap", overflow: "hidden", textOverflow: "ellipsis", transition: "background var(--motion-productive-short) ease-in", ...style }} {...rest}>
    {draft || placeholder}
  </div>;
}
