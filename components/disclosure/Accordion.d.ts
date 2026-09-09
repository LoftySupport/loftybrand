import * as React from "react";

export interface AccordionSection {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: string;
  content?: React.ReactNode;
}

/** A stack of ExpandCollapse sections in one bordered box. */
export interface AccordionProps {
  sections?: AccordionSection[];
  /** Allow several open at once. Default false — opening one closes the rest. */
  allowMultiple?: boolean;
  /** Index open on first render. */
  defaultIndex?: number | null;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
