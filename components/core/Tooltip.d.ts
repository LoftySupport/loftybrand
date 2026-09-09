import * as React from "react";

/** Dark hover/focus hint on Foundation Black, max 240px wide. */
export interface TooltipProps {
  content: React.ReactNode;
  /** Optional bold first line. */
  title?: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
