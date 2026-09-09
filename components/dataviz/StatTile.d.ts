import * as React from "react";

/** Dashboard stat tile: uppercase key, h2 value, muted detail line. Pads 16 on a card. */
export interface StatTileProps {
  label: string;
  value: React.ReactNode;
  /** One short qualifier under the number. Optional. */
  detail?: string;
  style?: React.CSSProperties;
}

export declare function StatTile(props: StatTileProps): JSX.Element;
