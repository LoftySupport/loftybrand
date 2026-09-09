import * as React from "react";
import { MenuProps } from "../navigation/Menu";

/** One default action plus its variants. The label runs the common case; the chevron opens the rest. */
export interface SplitButtonProps {
  /** Label of the default action. */
  children?: React.ReactNode;
  /** The variant actions in the chevron menu. */
  items?: MenuProps["items"];
  kind?: "primary" | "secondary";
  color?: "primary" | "negative";
  size?: "xs" | "small" | "medium" | "large";
  disabled?: boolean;
  /** Fired by the label half. */
  onClick?: () => void;
  /** Fired by a menu row. */
  onSelect?: (id: string) => void;
  align?: "start" | "end";
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function SplitButton(props: SplitButtonProps): JSX.Element;
