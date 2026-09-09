import * as React from "react";

/** One-figure donut. Filled arc in --data-1, remainder in --surface-recessed-color. */
export interface DonutStatProps {
  value?: number;
  max?: number;
  /** Outer diameter in px. Default 132. */
  size?: number;
  color?: string;
  /** Centre text. Defaults to the rounded percentage. */
  label?: string;
  /** Muted line under the ring. */
  caption?: string;
  style?: React.CSSProperties;
}

export declare function DonutStat(props: DonutStatProps): JSX.Element;
