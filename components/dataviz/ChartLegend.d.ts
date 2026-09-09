import * as React from "react";

export interface ChartLegendItem {
  name: string;
  /** Defaults to --data-1 … --data-6 by position. */
  color?: string;
}

/** Swatch-and-label row under a chart. 10px square swatches, text3 muted. */
export interface ChartLegendProps {
  items: ChartLegendItem[];
  style?: React.CSSProperties;
}

export declare function ChartLegend(props: ChartLegendProps): JSX.Element;
