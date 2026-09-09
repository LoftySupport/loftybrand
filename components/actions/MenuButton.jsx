import React, { useEffect, useRef, useState } from "react";
import { Button } from "../core/Button";
import { IconButton } from "../core/IconButton";
import { Menu } from "../navigation/Menu";

export function MenuButton({ children, items = [], icon = "MoreActions", ariaLabel = "Open menu", kind = "tertiary", size = "medium", disabled = false, align = "start", onSelect, iconBasePath, style }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const away = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = e => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", esc); };
  }, [open]);
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex", ...style }}>
      {children
        ? <Button kind={kind} size={size} disabled={disabled} active={open} onClick={() => setOpen(o => !o)}>{children}</Button>
        : <IconButton icon={icon} ariaLabel={ariaLabel} size={size} kind={kind === "primary" ? "primary" : "tertiary"} disabled={disabled} active={open} onClick={() => setOpen(o => !o)} iconBasePath={iconBasePath} />}
      {open ? (
        <div style={{ position: "absolute", top: "calc(100% + 4px)", zIndex: 30, left: align === "start" ? 0 : "auto", right: align === "end" ? 0 : "auto" }}>
          <Menu items={items} iconBasePath={iconBasePath} onSelect={id => { setOpen(false); onSelect && onSelect(id); }} />
        </div>
      ) : null}
    </div>
  );
}
