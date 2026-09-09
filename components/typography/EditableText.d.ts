import * as React from "react";

/** Text that becomes an input on click. Covers both editable text and editable heading cases. */
export interface EditableTextProps {
  value?: string;
  /** Fired on blur or Enter, only when the value actually changed. */
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "text1" | "text2" | "text3";
  weight?: "normal" | "medium" | "bold";
  /** Render at heading size instead of body size. */
  heading?: boolean;
  headingType?: "h1" | "h2" | "h3";
  multiline?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function EditableText(props: EditableTextProps): JSX.Element;
