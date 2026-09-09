import * as React from "react";

/** Full-width 40px strip pinned above the app shell. System-wide news only. */
export interface AlertBannerProps {
  children?: React.ReactNode;
  backgroundColor?: "primary" | "positive" | "negative" | "warning" | "dark";
  /** Icon file stem shown before the text. */
  icon?: string;
  /** Renders an underlined inline action after the text. */
  actionText?: string;
  onAction?: () => void;
  /** Adds the dismiss button. Omit for banners the user must not close. */
  onClose?: () => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function AlertBanner(props: AlertBannerProps): JSX.Element;
