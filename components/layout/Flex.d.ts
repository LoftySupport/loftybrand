import * as React from "react";

/**
 * Flexbox row or column with token-scale gap.
 */
export interface FlexProps {
  children?: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "spaceBetween" | "spaceAround" | "stretch";
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  /** none / xs(4) / small(8) / medium(16) / large(24) / xl(32), or a px number. */
  gap?: "none" | "xs" | "small" | "medium" | "large" | "xl" | number;
  wrap?: boolean;
  style?: React.CSSProperties;
}

export declare function Flex(props: FlexProps): JSX.Element;
