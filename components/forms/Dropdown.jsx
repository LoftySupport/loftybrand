import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../core/Icon";

export function Dropdown({ label, options = [], value, placeholder = "Select", onChange, disabled = false, size = "medium", iconBasePath, style }) {
  const [open, setOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState(-1);
  const listRef = useRef(null);
  const h = size === "small" ? 32 : size === "large" ? 48 : 40;
  const vals = options.map(o => o.value ?? o);
  useEffect(() => { if (open) setFocusIdx(Math.max(0, vals.indexOf(value))); }, [open]);
  useEffect(() => { if (open && listRef.current && listRef.current.children[focusIdx]) listRef.current.children[focusIdx].focus(); }, [open, focusIdx]);
  const onKey = e => {
    if (disabled) return;
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ")) { e.preventDefault(); setOpen(true); return; }
    if (!open) return;
    if (e.key === "Escape") { e.preventDefault(); setOpen(false); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); setFocusIdx(i => Math.min(vals.length - 1, i + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setFocusIdx(i => Math.max(0, i - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setFocusIdx(0); }
    else if (e.key === "End") { e.preventDefault(); setFocusIdx(vals.length - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onChange && onChange(vals[focusIdx]); setOpen(false); }
    else if (e.key === "Tab") setOpen(false);
  };
  const selected = options.find(o => (o.value ?? o) === value);
  const selectedLabel = selected ? (selected.label ?? selected) : null;
  return (
    <div style={{ position: "relative", width: "100%", ...style }} onKeyDown={onKey} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      {label ? <label style={{ display: "block", font: "var(--font-text2-normal)", padding: "var(--space-2) 0" }}>{label}</label> : null}
      <button type="button" disabled={disabled} onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}
        style={{
          width: "100%", height: h, display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "var(--space-8)", padding: "0 var(--space-8) 0 var(--space-12)", boxSizing: "border-box",
          border: "1px solid " + (open ? "var(--primary-color)" : "var(--ui-border-color)"),
          borderRadius: "var(--border-radius-small)", background: disabled ? "var(--disabled-background-color)" : "var(--secondary-background-color)",
          font: "var(--font-text2-normal)", color: selectedLabel ? "var(--primary-text-color)" : "var(--placeholder-color)",
          cursor: disabled ? "not-allowed" : "pointer", outline: "none"
        }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{selectedLabel || placeholder}</span>
        <Icon name="DropdownChevronDown" size={16} basePath={iconBasePath} style={{ color: "var(--icon-color)", transform: open ? "rotate(180deg)" : "none", transition: "transform var(--motion-productive-medium)" }} />
      </button>
      {open ? (
        <div role="listbox" ref={listRef} aria-activedescendant={undefined} style={{
          position: "absolute", zIndex: "var(--z-dropdown)", top: "calc(100% + 4px)", left: 0, right: 0,
          background: "var(--primary-background-color)", border: "1px solid var(--layout-border-color)",
          borderRadius: "var(--border-radius-medium)", boxShadow: "var(--box-shadow-medium)",
          padding: "var(--space-4)", maxHeight: 240, overflowY: "auto"
        }}>
          {options.map((o, i) => {
            const v = o.value ?? o, l = o.label ?? o;
            const isSel = v === value;
            return (
              <div key={v} role="option" aria-selected={isSel} tabIndex={-1} onClick={() => { onChange && onChange(v); setOpen(false); }}
                onFocus={() => setFocusIdx(i)}
                style={{ outline: "none", boxShadow: focusIdx === i ? "var(--focus-ring)" : "none",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)",
                  height: 32, padding: "0 var(--space-8)", borderRadius: "var(--border-radius-small)",
                  font: "var(--font-text2-normal)", cursor: "pointer",
                  background: isSel ? "var(--primary-selected-color)" : "transparent"
                }}
                onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
                onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = "transparent"; }}>
                <span>{l}</span>
                {isSel ? <Icon name="Check" size={14} basePath={iconBasePath} /> : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
