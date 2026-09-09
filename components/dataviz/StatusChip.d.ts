import * as React from "react";

/** Status as an outline chip with an 8px dot. Never a colour field — a fill means a call to action. */
export interface StatusChipProps {
  label: string;
  /** Dot colour only. Default "neutral". */
  tone?: "positive" | "negative" | "warning" | "neutral";
  style?: React.CSSProperties;
}

export declare function StatusChip(props: StatusChipProps): JSX.Element;
