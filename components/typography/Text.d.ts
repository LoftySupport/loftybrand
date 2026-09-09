import * as React from "react";

/** Body copy primitive. Locks text to the three product sizes so nothing drifts off the scale. */
export interface TextProps {
  children?: React.ReactNode;
  /** Rendered tag. Default "p". */
  element?: keyof JSX.IntrinsicElements;
  /** "text1" 16/22 · "text2" 14/20 (default) · "text3" 12/16. Aliases: large/medium/small. */
  type?: "text1" | "text2" | "text3" | "large" | "medium" | "small";
  weight?: "normal" | "medium" | "bold";
  color?: "primary" | "secondary" | "disabled" | "onPrimary" | "onInverted" | "inherit";
  align?: React.CSSProperties["textAlign"];
  /** Single-line truncation. */
  ellipsis?: boolean;
  /** Clamp to N lines. Overrides ellipsis. */
  maxLines?: number;
  style?: React.CSSProperties;
}

export declare function Text(props: TextProps): JSX.Element;
