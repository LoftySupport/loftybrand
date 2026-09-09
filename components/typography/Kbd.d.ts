import * as React from "react";

/** A single keyboard key rendered inline. */
export interface KbdProps {
  children?: React.ReactNode;
  size?: "small" | "medium";
  style?: React.CSSProperties;
}

export declare function Kbd(props: KbdProps): JSX.Element;
