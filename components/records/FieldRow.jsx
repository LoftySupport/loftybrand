import React from "react";
import { Icon } from "../../core/Icon";

const CONTROL = {
  height: 28, width: "100%", boxSizing: "border-box", border: "1px solid var(--ui-border-color)",
  borderRadius: "var(--border-radius-small)", background: "var(--lofty-finisher-white)",
  font: "var(--font-text2-normal)", color: "var(--primary-text-color)", padding: "0 var(--space-8)",
  display: "flex", alignItems: "center", gap: "var(--space-8)", cursor: "pointer"
};

const EMPTY = { date: "dd/mm/yyyy", pick: "Select", person: "Select", text: "Enter text", link: "Add link" };
const GLYPH = { date: "DueDate", pick: "DropdownChevronDown", person: "Person", link: "ExternalPage", text: "Edit" };

/** One property row: label column, typed control, 32px tall. */
export function FieldRow({ label, value, type = "text", labelWidth = 120, controlWidth, onChange, iconBasePath, children }) {
  const empty = value == null || value === "";
  return (
    <div style={{ display: "grid", gridTemplateColumns: labelWidth + "px 1fr", alignItems: "center", gap: "var(--space-8)", minHeight: 32 }}>
      <span style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)" }}>{label}</span>
      <div style={{ width: controlWidth || "100%", maxWidth: "100%" }}>
        {children || (
          <div role={type === "text" ? "textbox" : "button"} tabIndex={0} onClick={onChange}
            style={{ ...CONTROL, color: empty ? "var(--placeholder-color)" : "var(--primary-text-color)" }}>
            <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{empty ? EMPTY[type] : value}</span>
            <Icon name={GLYPH[type]} size={16} basePath={iconBasePath} style={{ color: "var(--icon-color)", flex: "none" }} />
          </div>
        )}
      </div>
    </div>
  );
}

/** A column of FieldRows. Sets one label width and one control width for every child. */
export function FieldList({ variant = "drawer", children, style }) {
  const labelWidth = variant === "page" ? 136 : 120;
  const controlWidth = variant === "page" ? 300 : undefined;
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {React.Children.map(children, c => React.isValidElement(c) ? React.cloneElement(c, { labelWidth, controlWidth, ...c.props }) : c)}
    </div>
  );
}
