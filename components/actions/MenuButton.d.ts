import * as React from "react";
import { MenuProps } from "../navigation/Menu";

/** A control that opens a Menu. Owns the open state, outside-click and Escape. */
export interface MenuButtonProps {
  /** Label. Omit for an icon-only trigger. */
  children?: React.ReactNode;
  /** Menu rows — same shape as Menu's items. */
  items?: MenuProps["items"];
  /** Icon file stem for the icon-only form. Default "MoreActions". */
  icon?: string;
  ariaLabel?: string;
  kind?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "small" | "medium" | "large";
  disabled?: boolean;
  /** Which edge the menu aligns to. Default "start". */
  align?: "start" | "end";
  onSelect?: (id: string) => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function MenuButton(props: MenuButtonProps): JSX.Element;
