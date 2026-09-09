import * as React from "react";

/** Loading placeholder in the shape of the content that is coming. */
export interface SkeletonProps {
  type?: "text" | "circle" | "rectangle";
  /** For type="text": which line height to match. */
  size?: "h1" | "h2" | "h3" | "text1" | "text2" | "text3" | "small";
  width?: number | string;
  height?: number | string;
  fullWidth?: boolean;
  /** Stack N identical bars, 8px apart. */
  count?: number;
  style?: React.CSSProperties;
}

export declare function Skeleton(props: SkeletonProps): JSX.Element;
