import * as React from "react";

/** Paged content with dot navigation — onboarding tours, multi-page dialogs. */
export interface StepsProps {
  /** Zero-based. */
  activeStep?: number;
  /** One node per page. */
  steps?: React.ReactNode[];
  /** Receives the new index; receives steps.length when Done is pressed. */
  onChange?: (step: number) => void;
  /** "gallery" dots (default) or a "numbers" counter. */
  type?: "gallery" | "numbers";
  isContentOnTop?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Steps(props: StepsProps): JSX.Element;
