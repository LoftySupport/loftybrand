import * as React from "react";

/** Coach mark: a filled bubble pointing at the thing it explains. Positioning is the caller's job. */
export interface TipseenProps {
  title?: string;
  children?: React.ReactNode;
  /** Which edge the arrow sits on. Default "bottom" (the bubble is below the target). */
  position?: "top" | "bottom" | "left" | "right";
  color?: "primary" | "dark";
  /** Set to "" to hide the confirm button. */
  submitButtonText?: string;
  onSubmit?: () => void;
  onClose?: () => void;
  closeButtonAriaLabel?: string;
  width?: number;
  showArrow?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Tipseen(props: TipseenProps): JSX.Element;
