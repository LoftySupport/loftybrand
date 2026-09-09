import * as React from "react";

export interface ButtonGroupOption {
  value: string;
  text: string;
  /** Icon stem from assets/icons. */
  icon?: string;
  disabled?: boolean;
}

/**
 * Single-select segmented group of buttons. Selected segment fills with the orange tint and a Crisp Orange border.
 */
export interface ButtonGroupProps {
  options?: (ButtonGroupOption | string)[];
  value?: string;
  onSelect?: (value: string) => void;
  /** "tertiary" drops the outer borders. Default "secondary". */
  kind?: "secondary" | "tertiary";
  /** 24 / 32 / 40 / 48 px. Default "medium". */
  size?: "xs" | "small" | "medium" | "large";
  disabled?: boolean;
  fullWidth?: boolean;
  groupAriaLabel?: string;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
