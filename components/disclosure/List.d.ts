import * as React from "react";

export interface ListItem {
  id?: string;
  label?: React.ReactNode;
  /** Quieter second line. */
  secondaryLabel?: React.ReactNode;
  /** Icon file stem. */
  icon?: string;
  /** An Avatar element, shown instead of an icon. */
  avatar?: React.ReactNode;
  /** Trailing content — a Counter, Label or IconButton. */
  end?: React.ReactNode;
  disabled?: boolean;
  /** Renders a rule instead of a row. */
  divider?: boolean;
  /** Renders an uppercase group heading instead of a row. */
  title?: string;
}

/** Selectable row list. Menu is for actions; List is for content and options. */
export interface ListProps {
  items?: ListItem[];
  selectedId?: string;
  /** Omit to render a static, non-interactive list. */
  onSelect?: (id: string) => void;
  size?: "small" | "medium" | "large";
  /** "listbox" for selection (default), "list" for static content. */
  role?: "listbox" | "list";
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function List(props: ListProps): JSX.Element;
