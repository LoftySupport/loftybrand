import * as React from "react";

/** Compact, removable token for filters, tags and multi-select values. */
export interface ChipsProps {
  label: string;
  /** Background colour — use a brand tint (--lofty-orange-selected, --lofty-green-selected, --lofty-flint-200). */
  color?: string;
  /** 20 or 24 px. Default "medium". */
  size?: "small" | "medium";
  leftIcon?: React.ReactNode;
  /** Renders the close affordance. */
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Chips(props: ChipsProps): JSX.Element;
