import * as React from "react";

/** 1px rule in the layout border colour. */
export interface DividerProps {
  direction?: "horizontal" | "vertical";
  /** Drop the built-in 8px (horizontal) / 4px (vertical) margin. */
  withoutMargin?: boolean;
  style?: React.CSSProperties;
}

export declare function Divider(props: DividerProps): JSX.Element;
