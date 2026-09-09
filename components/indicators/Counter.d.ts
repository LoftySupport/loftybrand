import * as React from "react";

/** Pill-shaped number: unread items, filter hits, notification totals. */
export interface CounterProps {
  count?: number;
  /** Digits before it rolls to "999+". Default 3. */
  maxDigits?: number;
  kind?: "fill" | "line";
  color?: "primary" | "dark" | "negative" | "light";
  size?: "xs" | "small" | "large";
  /** Rendered before the number, e.g. "+". */
  prefix?: string;
  style?: React.CSSProperties;
}

export declare function Counter(props: CounterProps): JSX.Element;
