import React from "react";
import { Dropdown } from "../forms/Dropdown";

const pad = n => String(n).padStart(2, "0");

export function TimePicker({ value, onChange, minuteStep = 15, from = 0, to = 24, use24Hour = true, size = "medium", placeholder = "Select a time", iconBasePath, style }) {
  const options = [];
  for (let h = from; h < to; h++) {
    for (let m = 0; m < 60; m += minuteStep) {
      const v = pad(h) + ":" + pad(m);
      const h12 = h % 12 === 0 ? 12 : h % 12;
      options.push({ value: v, label: use24Hour ? v : h12 + ":" + pad(m) + " " + (h < 12 ? "am" : "pm") });
    }
  }
  return <Dropdown options={options} value={value} onChange={onChange} size={size} placeholder={placeholder} iconBasePath={iconBasePath} style={style} />;
}
