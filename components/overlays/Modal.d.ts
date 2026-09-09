import * as React from "react";

/** The large overlay: a task with its own header, scrolling body and footer. Dialog is the small sibling. */
export interface ModalProps {
  open?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** Action buttons, right-aligned. */
  footer?: React.ReactNode;
  /** 480 / 580 / 840px, or a near-fullscreen sheet. Default "medium". */
  size?: "small" | "medium" | "large" | "fullView";
  onClose?: () => void;
  closeButtonAriaLabel?: string;
  /** Position against the nearest positioned ancestor instead of the viewport — for prototypes inside a device frame. */
  contained?: boolean;
  /** An extra control beside the close button, e.g. a MenuButton. */
  headerAction?: React.ReactNode;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Modal(props: ModalProps): JSX.Element;
