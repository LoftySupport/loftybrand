import React from "react";

/** Record shell: header / scrolling body / docked footer, as three flex siblings. */
export function RecordDrawer({ width = 460, header, footer, children, style }) {
  return (
    <aside style={{
      width, display: "flex", flexDirection: "column", minHeight: 0, height: "100%",
      background: "var(--lofty-finisher-white)", borderLeft: "1px solid var(--layout-border-color)", ...style
    }}>
      <div style={{ flex: "none", height: 48, display: "flex", alignItems: "center", gap: "var(--space-8)", padding: "0 var(--space-8) 0 var(--space-16)", borderBottom: "1px solid var(--layout-border-color)" }}>{header}</div>
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "var(--space-16)", display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>{children}</div>
      {footer ? (
        <div style={{ flex: "none", marginTop: "var(--space-12)", borderTop: "1px solid var(--layout-border-color)", background: "var(--lofty-flint-100)" }}>{footer}</div>
      ) : null}
    </aside>
  );
}

/** A collapsible section inside a record. Open by default, rule above, 16px of air. */
export function RecordSection({ title, meta, open = true, onToggle, first = false, children }) {
  return (
    <section style={{ borderTop: first ? "none" : "1px solid var(--layout-border-color)", paddingTop: first ? 0 : "var(--space-16)" }}>
      <button type="button" aria-expanded={open} onClick={onToggle}
        style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", width: "100%", padding: 0, border: "none", background: "transparent", cursor: "pointer", font: "var(--font-text2-bold)", color: "var(--primary-text-color)" }}>
        <span aria-hidden="true" style={{ display: "inline-block", transition: "transform var(--motion-productive-medium) var(--motion-timing-enter)", transform: open ? "rotate(90deg)" : "none" }}>{"\u203A"}</span>
        <span style={{ flex: 1, textAlign: "left" }}>{title}</span>
        {meta ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{meta}</span> : null}
      </button>
      {open ? <div style={{ paddingTop: "var(--space-12)" }}>{children}</div> : null}
    </section>
  );
}
