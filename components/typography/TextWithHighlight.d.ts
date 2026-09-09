import * as React from "react";

/**
 * Body text with every match of a search term wrapped in an orange-tint highlight.
 */
export interface TextWithHighlightProps {
  text: string;
  highlightTerm?: string;
  /** Max number of matches to highlight. */
  limit?: number;
  ignoreCase?: boolean;
  /** Clamp to maxLines with an ellipsis. */
  useEllipsis?: boolean;
  maxLines?: number;
  type?: "text1" | "text2" | "text3";
  weight?: "normal" | "medium" | "bold";
  color?: "primary" | "secondary" | "disabled";
  style?: React.CSSProperties;
}

export declare function TextWithHighlight(props: TextWithHighlightProps): JSX.Element;
