import * as React from "react";

/** Label / track / value row for comparing a handful of things. Use ProgressBar for task progress instead. */
export interface MeterRowProps {
  label: string;
  value?: number;
  max?: number;
  color?: string;
  /** Left column width in px. Default 96 — keep it equal across a stack. */
  labelWidth?: number;
  style?: React.CSSProperties;
}

export declare function MeterRow(props: MeterRowProps): JSX.Element;
