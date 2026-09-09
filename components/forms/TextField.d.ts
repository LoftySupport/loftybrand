import * as React from "react";

/**
 * Single-line text input with label, trailing icon and validation sub-text.
 */
export interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 32 / 40 / 48 px. Default "medium". */
  size?: "small" | "medium" | "large";
  /** Colours the border and sub-text. */
  validation?: "error" | "success";
  /** Helper or validation text under the field. */
  message?: string;
  disabled?: boolean;
  readOnly?: boolean;
  /** Trailing icon stem from assets/icons. */
  icon?: string;
  iconBasePath?: string;
  type?: string;
  requiredAsterisk?: boolean;
  /** Appends "(optional)" to the label. Prefer marking optional fields when most are required. */
  optional?: boolean;
  style?: React.CSSProperties;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
