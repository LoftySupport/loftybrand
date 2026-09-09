import React from "react";
import { Icon } from "./Icon";

export function Chips({ label, color = "var(--lofty-orange-selected)", size = "medium", leftIcon = null, onDelete, readOnly = false, disabled = false, iconBasePath, style, ...rest }) {
  const small = size === "small";
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: small ? "var(--space-2)" : "var(--space-4)",
        height: small ? 24 : 32, padding: small ? "0 4px" : "0 8px",
        borderRadius: "var(--border-radius-small)", background: color,
        color: disabled ? "var(--disabled-text-color)" : "var(--primary-text-color)",
        font: "var(--font-text2-normal)", maxWidth: 240, userSelect: "none",
        cursor: readOnly || disabled ? "default" : "pointer", ...style
      }}
      {...rest}
    >
      {leftIcon}
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      {onDelete && !disabled ? (
        <button type="button" onClick={onDelete} aria-label={"Remove " + label}
          style={{ border: "none", background: "transparent", padding: 0, cursor: "pointer", color: "inherit", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, marginInlineEnd: -4, borderRadius: "var(--border-radius-small)", font: "inherit" }}>
          <Icon name="CloseSmall" size={small ? 12 : 14} basePath={iconBasePath} />
        </button>
      ) : null}
    </span>
  );
}
