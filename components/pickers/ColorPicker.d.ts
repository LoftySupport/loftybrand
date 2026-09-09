import * as React from "react";

export interface ColorSwatch {
  /** Any CSS colour — prefer a brand token. */
  value: string;
  /** Accessible label and tooltip. */
  name?: string;
}

/** Choose from a curated swatch set. There is deliberately no free colour field. */
export interface ColorPickerProps {
  /** Defaults to the six brand swatches exported as BRAND_SWATCHES. */
  colors?: (ColorSwatch | string)[];
  value?: string;
  onChange?: (color: string) => void;
  size?: "small" | "medium" | "large";
  shape?: "square" | "circle";
  columns?: number;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare const BRAND_SWATCHES: ColorSwatch[];
export declare function ColorPicker(props: ColorPickerProps): JSX.Element;
