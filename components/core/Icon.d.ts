import * as React from "react";

/**
 * A single glyph from the icon set (290 SVGs in assets/icons), tinted with currentColor.
 */
export interface IconProps {
  /** File stem in assets/icons, e.g. "Search", "Board", "MoreActions". */
  name: string;
  /** Box size in px. Default 20. */
  size?: number;
  /** Accessible name. Omit for decorative icons (default: aria-hidden). */
  label?: string;
  /** Any CSS colour. Default "currentColor". */
  color?: string;
  /** Path to the icons folder, relative to the host page. Default "../../assets/icons". */
  basePath?: string;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
