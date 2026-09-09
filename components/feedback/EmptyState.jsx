import React from "react";
import { Heading } from "../typography/Heading";
import { Text } from "../typography/Text";
import { Button } from "../core/Button";
import { Link } from "../typography/Link";

export function EmptyState({ title, description, visual, mainAction, supportingAction, layout = "default", style }) {
  const compact = layout === "compact";
  const main = mainAction && (React.isValidElement(mainAction) ? mainAction : <Button kind={mainAction.kind || "primary"} size={compact ? "small" : "medium"} onClick={mainAction.onClick} disabled={mainAction.disabled}>{mainAction.text}</Button>);
  const support = supportingAction && (React.isValidElement(supportingAction) ? supportingAction
    : supportingAction.href ? <Link href={supportingAction.href} onClick={supportingAction.onClick}>{supportingAction.text}</Link>
    : <Button kind="tertiary" size={compact ? "small" : "medium"} onClick={supportingAction.onClick}>{supportingAction.text}</Button>);
  return (
    <div style={{ width: "100%", boxSizing: "border-box", padding: compact ? "var(--space-16)" : "var(--space-24)", background: "var(--primary-background-color)", ...style }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: compact ? "var(--space-8)" : "var(--space-16)" }}>
        {visual ? <div style={{ display: "flex", justifyContent: "center", marginBottom: compact ? 0 : "var(--space-8)" }}>{visual}</div> : null}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-4)", maxWidth: 500 }}>
          {title ? <Heading type={compact ? "h3" : "h2"} weight="bold" align="center" style={{ margin: 0 }}>{title}</Heading> : null}
          {description ? (typeof description === "string" ? <Text type={compact ? "text2" : "text1"} color="secondary" align="center" style={{ margin: 0 }}>{description}</Text> : description) : null}
        </div>
        {main || support ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "var(--space-8)", flexWrap: "wrap" }}>{main}{support}</div> : null}
      </div>
    </div>
  );
}
