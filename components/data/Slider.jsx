import React from "react";

export function Slider({ value = 0, min = 0, max = 100, step = 1, onChange, disabled = false, showValue = false, label, style }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ width: "100%", ...style }}>
      {label || showValue ? (
        <div style={{ display: "flex", justifyContent: "space-between", font: "var(--font-text3-normal)", color: "var(--secondary-text-color)", marginBottom: "var(--space-4)" }}>
          <span>{label}</span>{showValue ? <span>{value}</span> : null}
        </div>
      ) : null}
      <input type="range" value={value} min={min} max={max} step={step} disabled={disabled}
        onChange={e => onChange && onChange(Number(e.target.value))}
        style={{
          width: "100%", height: 16, appearance: "none", WebkitAppearance: "none", background: "transparent",
          cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--disabled-component-opacity)" : 1,
          backgroundImage: "linear-gradient(to right, var(--primary-color) " + pct + "%, var(--ui-background-color) " + pct + "%)",
          backgroundSize: "100% 4px", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "var(--border-radius-pill)"
        }} />
      <style>{".lofty-slider-thumb{}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:var(--border-radius-circle);background:var(--primary-color);border:2px solid var(--primary-background-color);box-shadow:var(--box-shadow-xs)}"}</style>
    </div>
  );
}
