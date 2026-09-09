import * as React from "react";

export type BoxSpace = "none" | "xs" | "small" | "medium" | "large" | "xl";

/**
 * Generic container mapping the spacing, background, border, radius and shadow tokens to props.
 */
export interface BoxProps {
  children?: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  /** 0 / 4 / 8 / 16 / 24 / 32 px. */
  padding?: BoxSpace;
  paddingX?: BoxSpace;
  paddingY?: BoxSpace;
  margin?: BoxSpace;
  marginX?: BoxSpace;
  marginY?: BoxSpace;
  backgroundColor?: "primary" | "secondary" | "grey" | "inverted";
  border?: boolean;
  borderColor?: "default" | "layout";
  rounded?: "small" | "medium" | "big";
  shadow?: "xs" | "small" | "medium" | "large";
  scrollable?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Box(props: BoxProps): JSX.Element;
