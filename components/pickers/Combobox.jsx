import React, { useMemo, useState } from "react";
import { Icon } from "../core/Icon";
import { Search } from "../forms/Search";
import { Button } from "../core/Button";

export function Combobox({ options = [], value, onChange, size = "medium", placeholder = "Search", noResultsMessage = "Nothing matched", addNewLabel, onAddNew, stickyCategories = true, maxHeight = 280, iconBasePath, style }) {
  const [query, setQuery] = useState("");
  const [focusIdx, setFocusIdx] = useState(-1);
  const searchH = size === "small" ? 32 : size === "large" ? 48 : 40;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter(o => (o.label ?? o).toLowerCase().includes(q)) : options;
  }, [options, query]);
  const groups = useMemo(() => {
    const out = [];
    filtered.forEach(o => {
      const cat = o.category || "";
      const last = out[out.length - 1];
      if (last && last.category === cat) last.items.push(o); else out.push({ category: cat, items: [o] });
    });
    return out;
  }, [filtered]);
  const flat = filtered.filter(o => !o.disabled);
  const onKey = e => {
    if (e.key === "ArrowDown") { e.preventDefault(); setFocusIdx(i => Math.min(flat.length - 1, i + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setFocusIdx(i => Math.max(0, i - 1)); }
    else if (e.key === "Enter") { e.preventDefault(); if (flat[focusIdx]) onChange && onChange(flat[focusIdx].value ?? flat[focusIdx]); else if (!flat.length && onAddNew) onAddNew(query); }
    else if (e.key === "Escape") { setQuery(""); setFocusIdx(-1); }
  };
  const activeId = flat[focusIdx] ? "cbx-opt-" + String(flat[focusIdx].value ?? flat[focusIdx]).replace(/\W/g, "_") : undefined;
  return (
    <div onKeyDown={onKey} role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-activedescendant={activeId} style={{ display: "flex", flexDirection: "column", position: "relative", background: "var(--primary-background-color)", border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", boxShadow: "var(--box-shadow-small)", padding: "var(--space-8)", boxSizing: "border-box", maxHeight, overflow: "hidden", ...style }}>
      <div style={{ position: "sticky", top: 0, zIndex: 2, background: "var(--primary-background-color)", paddingBottom: "var(--space-4)" }}>
        <Search value={query} size={size} placeholder={placeholder} onChange={e => { setQuery(e.target.value); setFocusIdx(0); }} onClear={() => setQuery("")} iconBasePath={iconBasePath} aria-autocomplete="list" />
      </div>
      <div role="listbox" style={{ overflowY: "auto", padding: "0 var(--space-4)", marginInline: "calc(var(--space-4) * -1)" }}>
        {filtered.length === 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center", padding: "var(--space-24) var(--space-16)" }}>
            <span style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)", textAlign: "center" }}>{noResultsMessage}</span>
            {addNewLabel ? <Button kind="secondary" size="small" style={{ width: "100%" }} onClick={() => onAddNew && onAddNew(query)}>{addNewLabel}</Button> : null}
          </div>
        ) : groups.map((g, gi) => (
          <div key={g.category + gi}>
            {g.category ? <div style={{ position: stickyCategories ? "sticky" : "static", top: 0, background: "var(--secondary-background-color)", zIndex: 1, font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", textTransform: "uppercase", letterSpacing: ".04em", padding: "var(--space-8) var(--space-8) var(--space-4)" }}>{g.category}</div> : null}
            {g.items.map(o => {
              const v = o.value ?? o, l = o.label ?? o, sel = v === value;
              const kb = flat.indexOf(o) === focusIdx;
              return (
                <div key={v} id={"cbx-opt-" + String(v).replace(/\W/g, "_")} role="option" aria-selected={sel} aria-disabled={o.disabled || undefined} onClick={() => !o.disabled && onChange && onChange(v)}
                  style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", height: 32, padding: "0 var(--space-8)", borderRadius: "var(--border-radius-small)", font: "var(--font-text2-normal)", cursor: o.disabled ? "not-allowed" : "pointer", color: o.disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)", background: sel ? "var(--primary-selected-color)" : kb ? "var(--primary-background-hover-color)" : "transparent", boxShadow: kb ? "var(--focus-ring)" : "none" }}
                  onMouseEnter={e => { if (!sel && !o.disabled) e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
                  onMouseLeave={e => { if (!sel) e.currentTarget.style.background = "transparent"; }}>
                  {o.icon ? <Icon name={o.icon} size={16} basePath={iconBasePath} /> : null}
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l}</span>
                  {sel ? <Icon name="Check" size={14} basePath={iconBasePath} /> : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
