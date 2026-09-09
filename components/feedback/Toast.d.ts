import * as React from "react";

/** Transient confirmation. Fixed to the top-centre of the viewport in product use. */
export interface ToastProps {
  children?: React.ReactNode;
  type?: "normal" | "positive" | "negative" | "warning" | "dark";
  icon?: string;
  /** Render nothing when false. */
  open?: boolean;
  /** Optional single action, outlined in the toast's own colour. */
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
