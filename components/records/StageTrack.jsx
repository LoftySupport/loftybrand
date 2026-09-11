import React from "react";
import { Icon } from "../../core/Icon";

const HEALTH = {
  "on-track": { bg: "var(--positive-color)", ink: "var(--text-color-on-status)", icon: "Check" },
  "at-risk": { bg: "var(--warning-color-selected)", ink: "var(--primary-text-color)", icon: "Warning" },
  overdue: { bg: "var(--negative-color)", ink: "var(--lofty-finisher-white)", icon: "Warning" }
};

/** Health pill. The colour it carries is the same colour the current pipeline stage takes. */
export function HealthChip({ status = "at-risk", label, iconBasePath, style }) {
  const h = HEALTH[status] || HEALTH["at-risk"];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-4)", height: 24, padding: "0 var(--space-8)",
      borderRadius: "var(--border-radius-pill)", background: h.bg, color: h.ink, font: "var(--font-text3-bold)", ...style
    }}>
      <Icon name={h.icon} size={14} basePath={iconBasePath} />
      {label}
    </span>
  );
}

export function stageColor(state, status) {
  if (state === "done") return "var(--lofty-foundation-black)";
  if (state === "current") return (HEALTH[status] || HEALTH["at-risk"]).bg;
  return "var(--lofty-flint-200)";
}

/** Pipeline strip. "bars" in the drawer, a connected "track" on the page. */
export function StageTrack({ stages = [], status = "at-risk", variant = "bars", style }) {
  const connected = variant === "track";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + stages.length + ", 1fr)", gap: connected ? 0 : "var(--space-8)", ...style }}>
      {stages.map((s, i) => {
        const first = i === 0, last = i === stages.length - 1;
        const fill = stageColor(s.state, status);
        const onDark = s.state === "done";
        return (
          <div key={s.name} style={{ minWidth: 0 }}>
            {connected ? (
              <div style={{
                height: 32, display: "grid", placeItems: "center", background: fill,
                color: onDark ? "var(--lofty-finisher-white)" : "var(--primary-text-color)",
                font: "var(--font-text3-bold)", padding: "0 var(--space-8)",
                borderLeft: first ? "none" : "1px solid var(--lofty-finisher-white)",
                borderRadius: (first ? "var(--border-radius-small) 0 0 var(--border-radius-small)" : last ? "0 var(--border-radius-small) var(--border-radius-small) 0" : "0")
              }}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.name}</span>
              </div>
            ) : (
              <React.Fragment>
                <div style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", textAlign: s.state === "todo" ? "center" : "left", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.name}</div>
                <div style={{ height: 4, borderRadius: "var(--border-radius-pill)", background: fill, margin: "var(--space-4) 0" }} />
              </React.Fragment>
            )}
            <div style={{ paddingTop: "var(--space-4)", textAlign: connected ? "left" : (s.state === "todo" ? "center" : "left") }}>
              <div style={{ font: "var(--font-text3-bold)", color: "var(--primary-text-color)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.readoutLabel || ""}</div>
              <div style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{s.readoutValue || (s.state === "todo" ? "—" : "")}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
