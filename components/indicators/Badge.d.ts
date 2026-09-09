import * as React from "react";

/** Anchors a dot or a Counter to the corner of whatever it wraps. */
export interface BadgeProps {
  /** The element being badged — an IconButton, Avatar or Button. */
  children?: React.ReactNode;
  anchor?: "topEnd" | "topStart" | "bottomEnd" | "bottomStart";
  /** "circular" insets the badge 15% so it sits on a round element's edge. */
  alignment?: "rectangular" | "circular";
  color?: "primary" | "negative" | "positive" | "dark";
  /** Diameter of the plain dot. Ignored when badgeContent is set. */
  dotSize?: number;
  /** Render a Counter (or Label) instead of a dot. */
  badgeContent?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
