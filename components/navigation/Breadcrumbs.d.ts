import * as React from "react";

export interface BreadcrumbItem { id?: string; label: string; icon?: string; }

/** Path trail; the last item is the current page and is not clickable. */
export interface BreadcrumbsProps {
  items?: Array<BreadcrumbItem | string>;
  onNavigate?: (id: string) => void;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
