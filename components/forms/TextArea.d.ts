import * as React from "react";

/**
 * Multi-line text input with label, helper text and optional character count.
 */
export interface TextAreaProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** small = text2 / 8px padding, large = text1 / 12px padding. Default "small". */
  size?: "small" | "large";
  rows?: number;
  maxLength?: number;
  /** Shows "n/max" at the end of the sub-text row. */
  showCharCount?: boolean;
  validation?: "error" | "success";
  message?: string;
  disabled?: boolean;
  readOnly?: boolean;
  /** Allow vertical drag-resize. Default true. */
  resize?: boolean;
  requiredAsterisk?: boolean;
  optional?: boolean;
  style?: React.CSSProperties;
}

export declare function TextArea(props: TextAreaProps): JSX.Element;
