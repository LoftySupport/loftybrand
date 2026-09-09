import * as React from "react";

/** Title primitive. Montserrat at the three product heading sizes, or Fieldwork Geo when brand is set. */
export interface HeadingProps {
  children?: React.ReactNode;
  /** h1 32/40 · h2 24/30 (default) · h3 18/24. */
  type?: "h1" | "h2" | "h3";
  weight?: "bold" | "medium" | "normal" | "light";
  /** Override the rendered tag without changing the size. */
  element?: keyof JSX.IntrinsicElements;
  color?: "primary" | "onInverted" | string;
  align?: React.CSSProperties["textAlign"];
  maxLines?: number;
  /** Switch to the Fieldwork Geo brand display cut — brand-led surfaces only. */
  brand?: boolean;
  style?: React.CSSProperties;
}

export declare function Heading(props: HeadingProps): JSX.Element;
