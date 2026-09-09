import * as React from "react";

/** Person or entity marker. Initials on Eco Green by default; image when available. */
export interface AvatarProps {
  /** Initials source — first two characters are shown. */
  text?: string;
  /** Image URL; overrides initials. */
  src?: string;
  /** 16 / 24 / 32 / 48 px. Default "medium". */
  size?: "xs" | "small" | "medium" | "large";
  /** "circle" (people) or "square" (entities). Default "circle". */
  type?: "circle" | "square";
  backgroundColor?: string;
  /** Shows a positive-colour presence dot. */
  online?: boolean;
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
