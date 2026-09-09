import * as React from "react";

export interface TabDef { id: string; label: string; icon?: string; counter?: number; disabled?: boolean; }

/** Horizontal view switcher with a Crisp Orange 2px underline on the active tab. */
export interface TabsProps {
  tabs?: Array<TabDef | string>;
  value?: string;
  onChange?: (id: string) => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
