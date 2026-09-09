import * as React from "react";

/** Indeterminate spinner for in-flight work. */
export interface LoaderProps {
  /** Diameter in px. Default 24. */
  size?: number;
  /** Arc colour. Default Crisp Orange. */
  color?: string;
  style?: React.CSSProperties;
}

export declare function Loader(props: LoaderProps): JSX.Element;
