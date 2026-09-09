import React, { useState } from "react";
import { ExpandCollapse } from "./ExpandCollapse";

export function Accordion({ sections = [], allowMultiple = false, defaultIndex = null, iconBasePath, style }) {
  const [openSet, setOpenSet] = useState(() => new Set(defaultIndex == null ? [] : [defaultIndex]));
  const toggle = i => setOpenSet(prev => {
    const next = new Set(allowMultiple ? prev : []);
    if (prev.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <div style={{ height: "fit-content", boxSizing: "border-box", border: "1px solid var(--ui-border-color)", borderRadius: "var(--border-radius-small)", overflow: "hidden", ...style }}>
      {sections.map((s, i) => (
        <ExpandCollapse key={s.title ?? i} title={s.title} subtitle={s.subtitle} icon={s.icon}
          open={openSet.has(i)} onToggle={() => toggle(i)} showBorder={false} iconBasePath={iconBasePath}
          style={{ borderRadius: 0, borderTop: i === 0 ? "none" : "1px solid var(--ui-border-color)" }}>
          {s.content}
        </ExpandCollapse>
      ))}
    </div>
  );
}
