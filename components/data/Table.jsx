import React from "react";
import { Skeleton } from "../indicators/Skeleton";
import { Button } from "../core/Button";
import { Icon } from "../core/Icon";

export function Table({ columns = [], rows = [], emptyState = "Nothing here yet", dense = false, loading = false, loadingRows = 4, error, onRetry, sortBy, sortDirection = "asc", onSort, caption, iconBasePath, style }) {
  const pad = dense ? "var(--space-8) var(--space-12)" : "var(--space-12) var(--space-16)";
  const stateCell = content => <tr><td colSpan={columns.length} style={{ padding: "var(--space-32)", textAlign: "center", color: "var(--secondary-text-color)" }}>{content}</td></tr>;
  return (
    <div style={{
      border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)",
      overflow: "hidden", background: "var(--primary-background-color)", ...style
    }}>
      <table aria-busy={loading || undefined} style={{ width: "100%", borderCollapse: "collapse", font: "var(--font-text2-normal)" }}>
        {caption ? <caption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{caption}</caption> : null}
        <thead>
          <tr style={{ background: "var(--allgrey-background-color)", position: "sticky", top: 0, zIndex: "var(--z-sticky)" }}>
            {columns.map(c => {
              const align = c.align || (c.numeric ? "right" : "left");
              const sorted = sortBy === c.id;
              const sortable = c.sortable && onSort;
              const inner = <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-4)" }}>{c.title}{sortable ? <Icon name={sorted && sortDirection === "desc" ? "DropdownChevronDown" : "DropdownChevronUp"} size={14} basePath={iconBasePath} style={{ opacity: sorted ? 1 : 0.4 }} /> : null}</span>;
              return (
                <th key={c.id ?? c.title} scope="col" aria-sort={sorted ? (sortDirection === "desc" ? "descending" : "ascending") : sortable ? "none" : undefined} style={{
                  textAlign: align, font: "var(--font-text3-medium)", color: "var(--secondary-text-color)", padding: sortable ? 0 : pad,
                  borderBottom: "1px solid var(--layout-border-color)", width: c.width, whiteSpace: "nowrap"
                }}>{sortable ? <button type="button" onClick={() => onSort(c.id, sorted && sortDirection === "asc" ? "desc" : "asc")} style={{ all: "unset", cursor: "pointer", display: "flex", width: "100%", boxSizing: "border-box", padding: pad, justifyContent: align === "right" ? "flex-end" : "flex-start", font: "inherit", color: "inherit", minHeight: 32 }}>{inner}</button> : inner}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading ? Array.from({ length: loadingRows }).map((_, i) => (
            <tr key={"s" + i} style={{ borderBottom: i === loadingRows - 1 ? "none" : "1px solid var(--layout-border-color)" }}>
              {columns.map(c => <td key={c.id ?? c.title} style={{ padding: pad }}><Skeleton type="text" size="text2" width={c.numeric ? 48 : "70%"} /></td>)}
            </tr>
          )) : error ? stateCell(
            <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "var(--space-12)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-8)", color: "var(--primary-text-color)" }}><Icon name="Alert" size={16} basePath={iconBasePath} style={{ color: "var(--negative-color)" }} />{error}</span>
              {onRetry ? <Button kind="secondary" size="small" onClick={onRetry}>Try again</Button> : null}
            </span>
          ) : rows.length === 0 ? stateCell(emptyState) : rows.map((r, i) => (
            <tr key={r.id ?? i} style={{ borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--layout-border-color)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--allgrey-background-color)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
              {columns.map(c => (
                <td key={c.id ?? c.title} style={{
                  textAlign: c.align || (c.numeric ? "right" : "left"), fontVariantNumeric: c.numeric ? "tabular-nums" : undefined,
                  padding: pad, color: "var(--primary-text-color)", verticalAlign: "middle", overflowWrap: "anywhere"
                }}>{c.render ? c.render(r) : r[c.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
