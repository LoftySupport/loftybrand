import * as React from "react";

export interface MenuItemDef {
  id?: string; label?: string; icon?: string; shortcut?: string;
  disabled?: boolean; destructive?: boolean;
  /** Renders a section heading instead of an item. */
  title?: string;
  /** Renders a divider line instead of an item. */
  divider?: boolean;
}

/** Action list for context and overflow menus. */
export interface MenuProps {
  items?: MenuItemDef[];
  onSelect?: (id: string) => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Menu(props: MenuProps): JSX.Element;
