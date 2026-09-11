import React from "react";

/** Three-level record breadcrumb: object › parent › record. */
export function RecordBreadcrumb({ items = [], onNavigate, style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", minWidth: 0, ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.label}>
            {i ? <span aria-hidden="true" style={{ color: "var(--lofty-flint-300)" }}>{"\u203A"}</span> : null}
            {last ? (
              <span aria-current="page" style={{ font: "var(--font-text3-bold)", color: "var(--primary-text-color)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.label}</span>
            ) : (
              <button type="button" onClick={() => onNavigate && onNavigate(it)} style={{ font: "inherit", color: "inherit", border: "none", background: "transparent", padding: 0, cursor: "pointer", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--primary-hover-color)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "inherit"; }}>{it.label}</button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

/** Job title with the project number carried as a quiet link: "1209-002 - EVANSTON PARK, 14/24 Wandoo Road". */
export function JobTitle({ jobNumber, location, size = "drawer", onOpenProject, style }) {
  const project = String(jobNumber).slice(0, 4);
  const rest = String(jobNumber).slice(4);
  return (
    <h2 style={{
      margin: 0, font: size === "page" ? "var(--font-h2-bold)" : "var(--font-text1-bold)",
      fontFamily: "var(--title-font-family)", letterSpacing: "-0.1px", color: "var(--primary-text-color)", ...style
    }}>
      <button type="button" onClick={onOpenProject}
        style={{ font: "inherit", color: "inherit", border: "none", background: "transparent", padding: 0, cursor: "pointer", borderBottom: "1px solid var(--lofty-flint-300)" }}>{project}</button>
      {rest + " - " + location}
    </h2>
  );
}
