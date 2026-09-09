import React from "react";
import { Button } from "../core/Button";
import { IconButton } from "../core/IconButton";

export function Steps({ activeStep = 0, steps = [], onChange, type = "gallery", isContentOnTop = false, iconBasePath, style }) {
  const total = steps.length;
  const go = n => { if (n >= 0 && n < total && onChange) onChange(n); };
  const dots = (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-8)" }}>
      {type === "numbers"
        ? <span style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)" }}>{activeStep + 1} of {total}</span>
        : steps.map((_, i) => (
          <button key={i} type="button" aria-label={"Step " + (i + 1)} aria-current={i === activeStep} onClick={() => go(i)}
            style={{ width: i === activeStep ? 36 : 24, height: 24, padding: 0, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ display: "block", width: i === activeStep ? 20 : 8, height: 8, borderRadius: "var(--border-radius-pill)", background: i === activeStep ? "var(--primary-color)" : "var(--ui-border-color)", transition: "width var(--motion-productive-medium), background var(--motion-productive-medium)" }} />
          </button>
        ))}
    </div>
  );
  const nav = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-16)" }}>
      <IconButton icon="NavigationChevronLeft" ariaLabel="Previous step" size="small" disabled={activeStep === 0} onClick={() => go(activeStep - 1)} iconBasePath={iconBasePath} />
      {dots}
      {activeStep === total - 1
        ? <Button size="small" onClick={() => onChange && onChange(total)}>Done</Button>
        : <IconButton icon="NavigationChevronRight" ariaLabel="Next step" size="small" onClick={() => go(activeStep + 1)} iconBasePath={iconBasePath} />}
    </div>
  );
  const content = <div style={{ font: "var(--font-text2-normal)" }}>{steps[activeStep]}</div>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)", ...style }}>
      {isContentOnTop ? <>{content}{nav}</> : <>{nav}{content}</>}
    </div>
  );
}
