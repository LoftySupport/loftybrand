import * as React from "react";

/** Determinate progress track. */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  color?: string;
  /** 4 / 8 / 12 px. Default "medium". */
  size?: "small" | "medium" | "large";
  /** Shows a caption row with the percentage. */
  label?: string;
  style?: React.CSSProperties;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
