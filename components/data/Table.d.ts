import * as React from "react";

export interface TableColumn {
  id: string;
  title: string;
  width?: number | string;
  align?: "left" | "center" | "right";
  /** Right-aligns and uses tabular figures. */
  numeric?: boolean;
  /** Renders the header as a sort button; wire onSort. */
  sortable?: boolean;
  /** Cell renderer; receives the whole row. */
  render?: (row: any) => React.ReactNode;
}

/**
 * Data grid with a sticky grey header row, 1px rules, row hover, and loading / empty / error states built in.
 */
export interface TableProps {
  columns?: TableColumn[];
  rows?: any[];
  /** Shown when rows is empty and nothing is loading. Pass an EmptyState for first-use screens. */
  emptyState?: React.ReactNode;
  dense?: boolean;
  /** Renders skeleton rows in place of data. */
  loading?: boolean;
  loadingRows?: number;
  /** Error message; replaces the body. Pair with onRetry. */
  error?: React.ReactNode;
  onRetry?: () => void;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (columnId: string, direction: "asc" | "desc") => void;
  /** Visually hidden caption for screen readers. */
  caption?: string;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function Table(props: TableProps): JSX.Element;
