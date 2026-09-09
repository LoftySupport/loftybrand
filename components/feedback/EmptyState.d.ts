import * as React from "react";

export interface EmptyStateAction {
  text: string;
  onClick?: () => void;
  /** For mainAction: "primary" | "secondary". */
  kind?: "primary" | "secondary";
  /** For supportingAction: renders a Link instead of a tertiary Button. */
  href?: string;
  disabled?: boolean;
}

/**
 * Centred placeholder for empty lists, boards and search results: optional visual, title, description and up to two actions.
 */
export interface EmptyStateProps {
  title?: string;
  description: string | React.ReactNode;
  /** Illustration, icon or image shown above the text. */
  visual?: React.ReactNode;
  mainAction?: React.ReactElement | EmptyStateAction;
  supportingAction?: React.ReactElement | EmptyStateAction;
  /** "compact" tightens padding and steps type down one size. Default "default". */
  layout?: "default" | "compact";
  style?: React.CSSProperties;
}

export declare function EmptyState(props: EmptyStateProps): JSX.Element;
