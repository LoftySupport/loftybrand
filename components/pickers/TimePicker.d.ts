import * as React from "react";

/** Time of day as a fixed-interval list. Values are 24-hour "HH:MM" strings. */
export interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  /** Minutes between options. Default 15. */
  minuteStep?: number;
  /** First hour offered (0-23). */
  from?: number;
  /** Hour after the last one offered (1-24). */
  to?: number;
  /** Display format. The value stays 24-hour either way. */
  use24Hour?: boolean;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  iconBasePath?: string;
  style?: React.CSSProperties;
}

export declare function TimePicker(props: TimePickerProps): JSX.Element;
