import * as React from "react";

/** One collapsible section. Controlled when `open` is passed, self-managing otherwise. */
export interface ExpandCollapseProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  /** Pass to control externally. */
  open?: boolean;
  onToggle?: (open: boolean) => void;
  showBorder?: boolean;
  /** Which side the chevron sits on. Default "end". */
  iconPosition?: "start" | "end";
  /** An extra static icon beside the chevron. */
  icon?: string;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function ExpandCollapse(props: ExpandCollapseProps): JSX.Element;
