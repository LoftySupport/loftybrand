import React from "react";
import { Icon } from "../../core/Icon";

const RAIL = "var(--lofty-foundation-black)";
const WASH = { rule: "rgba(255,255,255,.16)", hover: "rgba(255,255,255,.12)", selected: "rgba(255,255,255,.20)", muted: "rgba(255,255,255,.72)" };

function Row({ icon, label, count, selected, collapsed, iconSize = 20, onSelect, onHover, iconBasePath }) {
  const h = collapsed ? 44 : 40;
  return (
    <button type="button" title={collapsed ? label : undefined} aria-current={selected ? "page" : undefined}
      onClick={onSelect} onMouseEnter={onHover} onFocus={onHover}
      style={{
        display: "flex", alignItems: "center", gap: "var(--space-12)", width: collapsed ? 44 : "100%", height: h,
        padding: collapsed ? 0 : "0 var(--space-8)", justifyContent: collapsed ? "center" : "flex-start",
        border: "none", borderRadius: "var(--border-radius-small)", cursor: "pointer",
        background: selected ? WASH.selected : "transparent", color: "var(--lofty-finisher-white)",
        font: selected ? "var(--font-text2-bold)" : "var(--font-text2-normal)", transition: "background var(--motion-productive-short) var(--motion-timing-enter)"
      }}
      onMouseLeave={e => { e.currentTarget.style.background = selected ? WASH.selected : "transparent"; }}
      onMouseOver={e => { if (!selected) e.currentTarget.style.background = WASH.hover; }}>
      <Icon name={icon} size={iconSize} basePath={iconBasePath} />
      {collapsed ? null : <span style={{ flex: 1, textAlign: "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>}
      {!collapsed && count != null ? <span style={{ font: "var(--font-text3-normal)", color: WASH.muted }}>{count}</span> : null}
    </button>
  );
}

/** Persistent dark application rail. One component, two widths, four states. */
export function NavRail({
  collapsed = false, destinations = [], activeId, onSelect, onToggleCollapse, onHoverDestination,
  groups = null, footer = null, user = null, iconBasePath, style, children
}) {
  return (
    <nav aria-label="Main" style={{
      width: collapsed ? 64 : 224, flex: "none", display: "flex", flexDirection: "column",
      height: "100%", background: RAIL, borderRight: "1px solid " + WASH.rule, ...style
    }}>
      <div style={{
        height: 56, flex: "none", display: "flex", alignItems: "center",
        justifyContent: collapsed ? "center" : "space-between",
        padding: collapsed ? 0 : "0 var(--space-12) 0 var(--space-16)",
        borderBottom: collapsed ? "none" : "1px solid " + WASH.rule
      }}>
        {children}
        {collapsed ? null : (
          <button type="button" title="Collapse" onClick={onToggleCollapse}
            style={{ width: 32, height: 32, display: "grid", placeItems: "center", border: "none", background: "transparent", borderRadius: "var(--border-radius-small)", color: "var(--lofty-finisher-white)", cursor: "pointer" }}>
            <Icon name="NavigationDoubleChevronLeft" size={20} basePath={iconBasePath} />
          </button>
        )}
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: collapsed ? "var(--space-8) 0" : "var(--space-4) var(--space-8) var(--space-8)", display: "flex", flexDirection: "column", alignItems: collapsed ? "center" : "stretch", gap: 2 }}>
        {groups}
        {groups ? <div style={{ height: 1, background: WASH.rule, margin: collapsed ? "var(--space-8) 0" : "var(--space-12) var(--space-4)", width: collapsed ? 32 : "auto" }} /> : null}
        {destinations.map(d => (
          <Row key={d.id} {...d} collapsed={collapsed} selected={d.id === activeId}
            iconSize={d.iconSize ?? (collapsed ? 24 : 20)} iconBasePath={iconBasePath}
            onSelect={() => onSelect && onSelect(d.id)}
            onHover={() => onHoverDestination && onHoverDestination(d.id)} />
        ))}
      </div>

      <div style={{ flex: "none", borderTop: "1px solid " + WASH.rule, padding: "var(--space-8)", display: "flex", flexDirection: "column", alignItems: collapsed ? "center" : "stretch", gap: 2 }}>
        {collapsed ? (
          <button type="button" title="Expand" onClick={onToggleCollapse}
            style={{ width: 44, height: 40, display: "grid", placeItems: "center", border: "none", background: "transparent", borderRadius: "var(--border-radius-small)", color: "var(--lofty-finisher-white)", cursor: "pointer" }}>
            <Icon name="NavigationDoubleChevronLeft" size={20} basePath={iconBasePath} style={{ transform: "scaleX(-1)" }} />
          </button>
        ) : null}
        {footer}
        {user}
      </div>
    </nav>
  );
}

NavRail.wash = WASH;
