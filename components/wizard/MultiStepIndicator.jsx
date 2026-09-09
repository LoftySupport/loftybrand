import React from "react";
import { Icon } from "../core/Icon";

const STATUS = {
  pending: { bg: "transparent", fg: "var(--secondary-text-color)", border: "var(--ui-border-color)" },
  active: { bg: "var(--primary-color)", fg: "var(--text-color-on-primary)", border: "var(--primary-color)" },
  fulfilled: { bg: "var(--positive-color)", fg: "var(--text-color-on-status)", border: "var(--positive-color)" },
  error: { bg: "var(--negative-color)", fg: "var(--text-color-on-status)", border: "var(--negative-color)" }
};

export function MultiStepIndicator({ steps = [], type = "primary", onClick, iconBasePath, style }) {
  const compact = type === "compact";
  const size = compact ? 24 : 32;
  return (
    <div style={{ display: "flex", alignItems: compact ? "center" : "flex-start", ...style }}>
      {steps.map((s, i) => {
        const st = STATUS[s.status] || STATUS.pending;
        const clickable = !!onClick && s.status !== "pending";
        return (
          <React.Fragment key={s.titleText ?? i}>
            <div onClick={() => clickable && onClick(i)} style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", cursor: clickable ? "pointer" : "default", minWidth: 0 }}>
              <span style={{ flex: "none", width: size, height: size, borderRadius: "var(--border-radius-circle)", boxSizing: "border-box", border: "1px solid " + st.border, background: st.bg, color: st.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", font: compact ? "var(--font-text3-medium)" : "var(--font-text2-medium)", transition: "background var(--motion-productive-medium)" }}>
                {s.status === "fulfilled" ? <Icon name="Check" size={compact ? 12 : 14} basePath={iconBasePath} />
                  : s.status === "error" ? <Icon name="CloseSmall" size={compact ? 12 : 14} basePath={iconBasePath} />
                  : i + 1}
              </span>
              {!compact ? (
                <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                  <span style={{ font: s.status === "active" ? "var(--font-text2-medium)" : "var(--font-text2-normal)", color: s.status === "pending" ? "var(--secondary-text-color)" : "var(--primary-text-color)", whiteSpace: "nowrap" }}>{s.titleText}</span>
                  {s.subtitleText ? <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", whiteSpace: "nowrap" }}>{s.subtitleText}</span> : null}
                </span>
              ) : null}
            </div>
            {i < steps.length - 1 ? <span style={{ height: 1, background: "var(--ui-border-color)", flex: compact ? "1 1 16px" : "none", width: compact ? undefined : 48, maxWidth: compact ? 40 : undefined, minWidth: compact ? 16 : undefined, margin: compact ? "0 var(--space-8)" : "16px" }} /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
