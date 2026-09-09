import * as React from "react";

/** Short status or category marker. Fill for status, line for quieter metadata. */
export interface LabelProps {
  text: string;
  /** "fill" (solid) or "line" (outlined). Default "fill". */
  kind?: "fill" | "line";
  color?: "primary" | "secondary" | "dark" | "positive" | "negative";
  size?: "small" | "medium";
  style?: React.CSSProperties;
}

export declare function Label(props: LabelProps): JSX.Element;
