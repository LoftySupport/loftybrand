import * as React from "react";

/** One-of-many choice. Group by shared `name`; keep options to 2–5 and always show all of them. */
export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export declare function RadioButton(props: RadioButtonProps): JSX.Element;
