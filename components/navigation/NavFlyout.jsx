import React from "react";

function Eyebrow({ children }) {
  return <div style={{ font: "var(--font-text3-bold)", letterSpacing: ".06em", color: "var(--secondary-text-color)", padding: "var(--space-8) var(--space-8) var(--space-4)" }}>{children}</div>;
}

function FlyoutRow({ label, count, onClick }) {
  return (
    <button type="button" onClick={onClick}
      style={{ display: "flex", alignItems: "center", height: 32, width: "100%", padding: "0 var(--space-8)", gap: "var(--space-8)", border: "none", background: "transparent", borderRadius: "var(--border-radius-small)", cursor: "pointer", font: "var(--font-text2-normal)", color: "var(--primary-text-color)" }}
      onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-background-hover-color)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
      <span style={{ flex: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      {count != null ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{count}</span> : null}
    </button>
  );
}

/** The views panel that opens beside a hovered destination. Same component at both rail widths. */
export function NavFlyout({ title, newLabel, views = [], groupLabel, groups = [], left = 232, top = 0, onNew, onSelectView, style }) {
  const rule = <div style={{ height: 1, background: "var(--lofty-flint-200)", margin: "var(--space-8) var(--space-4)" }} />;
  return (
    <div role="menu" aria-label={title} style={{
      position: "absolute", left, top, width: 240, background: "var(--lofty-finisher-white)",
      border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)",
      padding: "var(--space-8)", boxShadow: "0 6px 20px rgba(65,64,66,.16)", zIndex: 40, ...style
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", padding: "0 var(--space-4)" }}>
        <span style={{ font: "var(--font-h3-bold)", letterSpacing: "-0.1px" }}>{title}</span>
        {newLabel ? (
          <button type="button" onClick={onNew} style={{ font: "var(--font-text2-normal)", border: "none", background: "transparent", color: "var(--primary-text-color)", cursor: "pointer", padding: "var(--space-4)", borderRadius: "var(--border-radius-small)" }}>+ New</button>
        ) : null}
      </div>
      {rule}
      <Eyebrow>VIEWS</Eyebrow>
      {views.map(v => <FlyoutRow key={v.label} {...v} onClick={() => onSelectView && onSelectView(v)} />)}
      {groups.length ? rule : null}
      {groups.length ? <Eyebrow>{"VIEW BY " + String(groupLabel || "").toUpperCase()}</Eyebrow> : null}
      {groups.map(g => <FlyoutRow key={g.label} {...g} />)}
    </div>
  );
}
