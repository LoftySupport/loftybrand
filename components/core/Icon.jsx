import React from "react";

/** Renders a Vibe SVG glyph from assets/icons as a mask so it inherits currentColor. */
export function Icon({ name, size = 20, color = "currentColor", basePath = "../../assets/icons", label, style, ...rest }) {
  const url = basePath + "/" + name + ".svg";
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      style={{
        display: "inline-block", width: size, height: size, flex: "0 0 auto",
        background: color,
        WebkitMaskImage: "url(" + url + ")", maskImage: "url(" + url + ")",
        WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
        WebkitMaskPosition: "center", maskPosition: "center",
        WebkitMaskSize: "contain", maskSize: "contain",
        ...style
      }}
      {...rest}
    />
  );
}
