import * as React from "react";

/**
 * Numeric input with stepper buttons, min/max clamping and an optional unit suffix.
 */
export interface NumberFieldProps {
  label?: string;
  /** null when empty. */
  value?: number | null;
  onChange?: (value: number | null, event: React.SyntheticEvent) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  /** Increment for the steppers and arrow keys. Default 1. */
  step?: number;
  /** 32 / 40 / 48 px. Default "medium". */
  size?: "small" | "medium" | "large";
  validation?: "error" | "success";
  message?: string;
  disabled?: boolean;
  readOnly?: boolean;
  /** Leading icon stem from assets/icons. */
  leftIcon?: string;
  /** Short suffix shown inside the field, e.g. "m²" or "hrs". */
  unit?: string;
  requiredAsterisk?: boolean;
  optional?: boolean;
  /** Skip clamping to min/max. Default false. */
  allowOutOfBounds?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function NumberField(props: NumberFieldProps): JSX.Element;
