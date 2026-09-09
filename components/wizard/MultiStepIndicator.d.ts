import * as React from "react";

export interface MultiStep {
  titleText?: string;
  subtitleText?: string;
  /** "pending" · "active" · "fulfilled" (green tick) · "error" (red cross). */
  status?: "pending" | "active" | "fulfilled" | "error";
}

/** Horizontal progress through a fixed sequence. */
export interface MultiStepIndicatorProps {
  steps?: MultiStep[];
  /** "primary" shows labels; "compact" is dots and rules only. */
  type?: "primary" | "compact";
  /** Makes completed steps clickable — receives the index. */
  onClick?: (index: number) => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function MultiStepIndicator(props: MultiStepIndicatorProps): JSX.Element;
