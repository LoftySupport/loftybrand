import * as React from "react";

export interface BarChartColumn {
  label: string;
  /** One value per series, bottom-up. */
  values: number[];
  /** Renders the whole column in the chart neutral (--data-5) — use for a forecast or projected column. */
  muted?: boolean;
}

export interface BarChartSeries {
  name: string;
  /** Defaults to --data-N by position. Stay inside the ramp. */
  color?: string;
}

/** Stacked column chart. Single accent: orange carries the series, neutrals carry the rest. */
export interface BarChartProps {
  data: BarChartColumn[];
  series: BarChartSeries[];
  /** Plot height in px. Default 180. */
  height?: number;
  style?: React.CSSProperties;
}

export declare function BarChart(props: BarChartProps): JSX.Element;
