import React, { useState } from "react";
import { Icon } from "../core/Icon";

export function Search({ value = "", onChange, onClear, placeholder = "Search", size = "medium", iconBasePath, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  const h = size === "small" ? 32 : size === "large" ? 48 : 40;
  return (
    <div style={{ position: "relative", height: h, width: "100%", ...style }}>
      <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", display: "flex", color: "var(--icon-color)" }}>
        <Icon name="Search" size={16} basePath={iconBasePath} />
      </span>
      <input
        type="search" value={value} placeholder={placeholder} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", height: "100%", boxSizing: "border-box", outline: 0,
          border: "1px solid " + (focus ? "var(--primary-color)" : "var(--ui-border-color)"),
          borderRadius: "var(--border-radius-small)", background: "var(--secondary-background-color)",
          padding: "0 var(--space-32) 0 var(--space-40)", font: "var(--font-text2-normal)", color: "var(--primary-text-color)",
          transition: "border-color var(--motion-productive-medium) ease-in", appearance: "textfield"
        }}
        {...rest}
      />
      {value ? (
        <button type="button" aria-label="Clear search" onClick={onClear}
          style={{ position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)", border: "none", background: "transparent", cursor: "pointer", color: "var(--icon-color)", display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, padding: 0, borderRadius: "var(--border-radius-small)" }}>
          <Icon name="CloseSmall" size={14} basePath={iconBasePath} />
        </button>
      ) : null}
    </div>
  );
}
