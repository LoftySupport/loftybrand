import * as React from "react";

/** Search input with leading magnifier and a clear affordance once filled. */
export interface SearchProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Search(props: SearchProps): JSX.Element;
