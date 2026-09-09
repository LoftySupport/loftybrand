import * as React from "react";

/** Inline, persistent message tied to the surrounding content. */
export interface AttentionBoxProps {
  title?: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
  type?: "primary" | "positive" | "negative" | "warning" | "neutral";
  /** Override the default glyph (stem from assets/icons). */
  icon?: string;
  onClose?: () => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function AttentionBox(props: AttentionBoxProps): JSX.Element;
