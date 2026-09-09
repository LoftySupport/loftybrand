import * as React from "react";

/** Modal panel over a Foundation Black 70% backdrop. Positions against the nearest positioned ancestor. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Action row, right-aligned; pass Buttons. */
  footer?: React.ReactNode;
  /** Panel width in px. Default 520. */
  width?: number;
  onClose?: () => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): JSX.Element;
