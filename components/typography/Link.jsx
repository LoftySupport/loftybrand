import React, { useState } from "react";
import { Icon } from "../core/Icon";

export function Link({ children, href = "#", iconStart, iconEnd, color = "primary", inline = false, inheritFontSize = false, iconBasePath, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const c = color === "onPrimary" ? "var(--text-color-on-primary)" : color === "onInverted" ? "var(--text-color-on-inverted)" : hover ? "var(--link-hover-color)" : "var(--link-color)";
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: inline ? "inline-flex" : "flex", alignItems: inline ? "unset" : "center", gap: "var(--space-4)",
        color: c, font: inheritFontSize ? "inherit" : "var(--font-text2-normal)",
        textDecoration: hover ? "underline" : "none", width: "fit-content", ...style
      }} {...rest}>
      {iconStart ? <Icon name={iconStart} size={16} basePath={iconBasePath} /> : null}
      <span>{children}</span>
      {iconEnd ? <Icon name={iconEnd} size={16} basePath={iconBasePath} /> : null}
    </a>
  );
}
