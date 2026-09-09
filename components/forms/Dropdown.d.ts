import * as React from "react";

export interface DropdownOption { value: string; label: string; }

/** Single-select picker with a menu panel. Options may be strings or {value,label}. */
export interface DropdownProps {
  label?: string;
  options?: Array<DropdownOption | string>;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Dropdown(props: DropdownProps): JSX.Element;
