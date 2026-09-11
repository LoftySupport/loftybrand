import React from "react";
import { Icon } from "../../core/Icon";
import { FieldRow } from "../FieldRow/FieldRow";

const today = () => {
  const d = new Date();
  const p = n => String(n).padStart(2, "0");
  return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
};

/** Checklist of process steps. Progress and the summary derive from the ticks — never stored twice. */
export function ProcessSteps({ steps = [], openStep = null, onToggleStep, onOpenStep, visible, iconBasePath, style }) {
  const done = steps.filter(s => s.done).length;
  const shown = visible ? steps.slice(0, visible) : steps;
  return (
    <div style={{ background: "var(--lofty-flint-50)", border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", overflow: "hidden", ...style }}>
      <div style={{ height: 4, background: "var(--lofty-flint-200)" }}>
        <div style={{ height: "100%", width: (steps.length ? (done / steps.length) * 100 : 0) + "%", background: "var(--lofty-crisp-orange)", transition: "width var(--motion-productive-medium) var(--motion-timing-enter)" }} />
      </div>
      {shown.map((s, i) => {
        const open = openStep === i;
        return (
          <div key={s.name} style={{ borderTop: i ? "1px solid var(--lofty-flint-200)" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", height: 36, padding: "0 var(--space-12)" }}>
              <button type="button" aria-expanded={open} aria-label={"Details for " + s.name} onClick={() => onOpenStep && onOpenStep(open ? null : i)}
                style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", color: "var(--secondary-text-color)", transform: open ? "rotate(90deg)" : "none", transition: "transform var(--motion-productive-medium) var(--motion-timing-enter)" }}>{"\u203A"}</button>
              <input type="checkbox" id={"step-" + i} checked={!!s.done} onChange={() => onToggleStep && onToggleStep(i, s.done ? null : today())} />
              <label htmlFor={"step-" + i} style={{ flex: 1, font: "var(--font-text2-normal)", cursor: "pointer", color: s.done ? "var(--secondary-text-color)" : "var(--primary-text-color)", textDecoration: s.done ? "line-through" : "none" }}>{s.name}</label>
              <span style={{ font: "var(--font-text3-normal)", color: s.date ? "var(--secondary-text-color)" : "var(--placeholder-color)" }}>{s.date || "dd/mm/yyyy"}</span>
              {s.owner ? <Icon name="Person" size={16} basePath={iconBasePath} style={{ color: "var(--icon-color)" }} /> : null}
            </div>
            {open && s.fields ? (
              <div style={{ padding: "0 var(--space-12) var(--space-12) 40px", display: "flex", flexDirection: "column", gap: "var(--space-4)", background: "var(--lofty-finisher-white)" }}>
                {s.fields.map(f => <FieldRow key={f.label} label={f.label} value={f.value} type={f.type} labelWidth={120} iconBasePath={iconBasePath} />)}
              </div>
            ) : null}
          </div>
        );
      })}
      <div style={{ padding: "var(--space-8) var(--space-12)", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", borderTop: "1px solid var(--lofty-flint-200)" }}>
        {done + " of " + steps.length + " steps"}
      </div>
    </div>
  );
}
