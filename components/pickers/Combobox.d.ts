import * as React from "react";

export interface ComboboxOption {
  value?: string;
  label?: string;
  /** Rows sharing a category are grouped under one sticky heading. */
  category?: string;
  icon?: string;
  disabled?: boolean;
}

/** Search field plus filtered option list, in one panel. Dropdown's answer to long lists. */
export interface ComboboxProps {
  options?: (ComboboxOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  noResultsMessage?: string;
  /** Shows a create-this action in the empty state; receives the current query. */
  addNewLabel?: string;
  onAddNew?: (query: string) => void;
  stickyCategories?: boolean;
  maxHeight?: number;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Combobox(props: ComboboxProps): JSX.Element;
