import * as React from "react";

/** Single-month calendar. Dates are ISO strings ("2026-09-03") in and out. */
export interface DatePickerProps {
  value?: string;
  onChange?: (isoDate: string) => void;
  /** Earliest selectable ISO date. */
  min?: string;
  /** Latest selectable ISO date. */
  max?: string;
  /** 1 = Monday (default, Australian weeks), 0 = Sunday. */
  weekStartsOn?: 0 | 1;
  showToday?: boolean;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function DatePicker(props: DatePickerProps): JSX.Element;
