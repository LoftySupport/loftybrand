import React from "react";

const SPACE = { none: 0, xs: "var(--space-4)", small: "var(--space-8)", medium: "var(--space-16)", large: "var(--space-24)", xl: "var(--space-32)" };
const JUSTIFY = { start: "flex-start", end: "flex-end", center: "center", spaceBetween: "space-between", spaceAround: "space-around", stretch: "stretch" };
const ALIGN = { start: "flex-start", end: "flex-end", center: "center", stretch: "stretch", baseline: "baseline" };

export function Flex({ children, element: El = "div", direction = "row", justify = "start", align = "center", gap = "none", wrap = false, style, ...rest }) {
  return (
    <El style={{ display: "flex", flexDirection: direction, justifyContent: JUSTIFY[justify] || justify, alignItems: ALIGN[align] || align,
      gap: typeof gap === "number" ? gap : SPACE[gap] ?? gap, flexWrap: wrap ? "wrap" : "nowrap", ...style }} {...rest}>{children}</El>
  );
}
