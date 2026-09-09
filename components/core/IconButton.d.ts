import * as React from "react";

/** Square, glyph-only action. Tertiary by default so toolbars stay quiet. */
export interface IconButtonProps {
  /** Icon file stem in assets/icons. */
  icon: string;
  /** Accessible name — required whenever the glyph alone is ambiguous. */
  ariaLabel?: string;
  /** 24 / 32 / 40 / 48 px. Default "medium". */
  size?: "xs" | "small" | "medium" | "large";
  kind?: "primary" | "secondary" | "tertiary";
  /** Selected/toggled-on state (tertiary only). */
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Passed through to Icon when the page is not two levels below the project root. */
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
