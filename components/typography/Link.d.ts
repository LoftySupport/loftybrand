import * as React from "react";

/** Text link. Underlines on hover rather than at rest. */
export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  /** Icon file stem shown before the label. */
  iconStart?: string;
  /** Icon file stem shown after the label — use "ExternalPage" for links that leave. */
  iconEnd?: string;
  color?: "primary" | "onPrimary" | "onInverted";
  /** Sit inside a sentence instead of on its own line. */
  inline?: boolean;
  /** Take the surrounding font size instead of text2. */
  inheritFontSize?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Link(props: LinkProps): JSX.Element;
