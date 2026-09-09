import * as React from "react";

/** Switch for settings that apply immediately (no Save step). */
export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  /** 28×16 or 41×24 px. Default "medium". */
  size?: "small" | "medium";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  label?: string;
  style?: React.CSSProperties;
}

export declare function Toggle(props: ToggleProps): JSX.Element;
