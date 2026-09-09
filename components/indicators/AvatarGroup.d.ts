import * as React from "react";

/** Overlapping row of avatars with a "+N" counter for the overflow. */
export interface AvatarGroupPerson {
  id?: string;
  /** Initials, one or two characters. */
  text?: string;
  /** Full name, used as the accessible label. */
  name?: string;
  src?: string;
  backgroundColor?: string;
}

export interface AvatarGroupProps {
  people?: AvatarGroupPerson[];
  /** Avatars shown before the counter takes over. Default 4. */
  max?: number;
  size?: "xs" | "small" | "medium" | "large";
  counterColor?: "primary" | "dark" | "negative" | "light";
  /** Makes the counter a button — open a Menu listing the rest. */
  onCounterClick?: () => void;
  style?: React.CSSProperties;
}

export declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;
