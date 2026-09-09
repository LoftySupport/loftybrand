import * as React from "react";

export type ButtonKind = "primary" | "secondary" | "tertiary";
export type ButtonColor = "primary" | "secondary" | "positive" | "negative" | "inverted";
export type ButtonSize = "xs" | "small" | "medium" | "large";

/**
 * Primary action control. Crisp Orange fill for the single main action per view;
 * secondary (outline) and tertiary (text) for everything else.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = filled, secondary = outlined, tertiary = text only. Default "primary". */
  kind?: ButtonKind;
  /** Semantic colour role. Default "primary" (Crisp Orange). */
  color?: ButtonColor;
  /** 24 / 32 / 40 / 48 px heights. Default "medium". */
  size?: ButtonSize;
  disabled?: boolean;
  /** Replaces content with a spinner. */
  loading?: boolean;
  /** Renders the selected/pressed-on look. */
  active?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
