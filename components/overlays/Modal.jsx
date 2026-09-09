import React, { useEffect } from "react";
import { IconButton } from "../core/IconButton";

const W = { small: 480, medium: 580, large: 840, fullView: "auto" };
const MAXH = { small: "50%", medium: "80%", large: "80%", fullView: "100%" };

export function Modal({ open = false, title, description, children, footer, size = "medium", onClose, closeButtonAriaLabel = "Close", contained = false, headerAction, iconBasePath, style }) {
  useEffect(() => {
    if (!open) return;
    const esc = e => { if (e.key === "Escape" && onClose) onClose(); };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [open, onClose]);
  if (!open) return null;
  const full = size === "fullView";
  return (
    <div style={{ position: contained ? "absolute" : "fixed", inset: 0, zIndex: "var(--z-dialog)" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "var(--backdrop-color)", animation: "loftyModalFade 100ms cubic-bezier(0,0,.4,1)" }} />
      <div role="dialog" aria-modal="true" style={{
        position: "absolute", display: "flex", flexDirection: "column", boxSizing: "border-box",
        background: "var(--primary-background-color)", boxShadow: "var(--box-shadow-large)", overflow: "hidden",
        ...(full
          ? { inset: 0, top: 40, marginInline: "var(--space-24)", borderRadius: "var(--border-radius-big) var(--border-radius-big) 0 0", animation: "loftyModalFullView 250ms cubic-bezier(0,0,.4,1)" }
          : { top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: W[size] || W.medium, maxWidth: "calc(100% - 32px)", maxHeight: MAXH[size] || "80%", borderRadius: "var(--border-radius-big)", animation: "loftyModalPop 150ms cubic-bezier(0,0,.4,1)" }),
        ...style
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--space-16)", padding: "var(--space-24) var(--space-32)", paddingBottom: description ? "var(--space-16)" : "var(--space-16)" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {title ? <h2 style={{ font: "var(--font-h2-bold)", letterSpacing: "var(--letter-spacing-h2-bold)", margin: 0 }}>{title}</h2> : null}
            {description ? <p style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)", marginTop: "var(--space-4)" }}>{description}</p> : null}
          </div>
          {headerAction}
          {onClose ? <IconButton icon="CloseSmall" ariaLabel={closeButtonAriaLabel} size="small" onClick={onClose} iconBasePath={iconBasePath} /> : null}
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "0 var(--space-32)", font: "var(--font-text2-normal)" }}>{children}</div>
        {footer ? <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--space-8)", padding: "var(--space-24) var(--space-32)" }}>{footer}</div> : null}
        <style>{"@keyframes loftyModalFade{from{opacity:0}to{opacity:1}}@keyframes loftyModalPop{0%{opacity:0;transform:translate(-50%,-50%) scale(.8)}50%,100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}@keyframes loftyModalFullView{0%{opacity:.3;transform:translateY(30px)}33%{opacity:1}100%{opacity:1;transform:translateY(0)}}"}</style>
      </div>
    </div>
  );
}
