import * as React from "react";

/** Single-value range control on a 4px track with a Crisp Orange thumb. */
export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  /** Shows the current value on the caption row. */
  showValue?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

export declare function Slider(props: SliderProps): JSX.Element;
