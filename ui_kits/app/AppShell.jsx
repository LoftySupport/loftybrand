const { Icon, IconButton, Avatar, Search, Tooltip } = window.LoftyDesignSystem_491d68;

const NAV = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "work", label: "My work", icon: "MyWeek" },
  { id: "jobs", label: "Jobs", icon: "Board" },
  { id: "dash", label: "Dashboards", icon: "Dashboard" },
  { id: "docs", label: "Docs", icon: "Doc" }
];

function TopBar({ onLogout }) {
  return (
    <div style={{ height: "var(--shell-topbar-h, 56px)", flex: "0 0 auto", background: "var(--shell-bg, var(--primary-background-color))", color: "var(--shell-fg, var(--primary-text-color))", borderBottom: "1px solid var(--shell-border, var(--ui-border-color))", display: "flex", alignItems: "center", gap: "var(--space-16)", padding: "0 var(--space-16)" }}>
      <img src="../../assets/lofty-logo-orange.png" alt="Lofty" style={{ height: 20 }} />
      <div style={{ width: 1, height: 24, background: "var(--shell-border, var(--layout-border-color))" }} />
      <div style={{ width: 280 }}>
        <Search placeholder="Search jobs, crews, docs" style={{ height: 32 }} />
      </div>
      <div style={{ flex: 1 }} />
      <span style={{ display: "inline-flex", gap: "var(--space-4)" }}>
        <IconButton icon="Notifications" ariaLabel="Notifications" size="small" />
        <IconButton icon="Help" ariaLabel="Help" size="small" />
      </span>
      <Tooltip content="Sign out" position="bottom">
        <span onClick={onLogout} style={{ cursor: "pointer" }}><Avatar text="AK" size="small" backgroundColor="var(--primary-color)" /></span>
      </Tooltip>
    </div>
  );
}

function SideNav({ page, setPage }) {
  return (
    <div style={{ width: 224, flex: "0 0 auto", borderRight: "1px solid var(--shell-border, var(--layout-border-color))", background: "var(--shell-bg, var(--primary-background-color))", color: "var(--shell-fg, var(--primary-text-color))", padding: "var(--space-12) var(--space-8)", display: "flex", flexDirection: "column", gap: 2 }}>
      {NAV.map(n => {
        const on = n.id === page;
        return (
          <div key={n.id} onClick={() => setPage(n.id)}
            style={{
              display: "flex", alignItems: "center", gap: "var(--space-8)", height: "var(--shell-nav-h, 40px)", padding: "0 var(--space-8)",
              borderRadius: "var(--border-radius-small)", cursor: "pointer", font: "var(--font-text2-normal)",
              background: on ? "var(--primary-selected-color)" : "transparent",
              color: on ? "var(--lofty-foundation-black)" : "var(--shell-fg, var(--primary-text-color))"
            }}
            onMouseEnter={e => { if (!on) e.currentTarget.style.background = "var(--shell-hover, var(--primary-background-hover-color))"; }}
            onMouseLeave={e => { if (!on) e.currentTarget.style.background = "transparent"; }}>
            <Icon name={n.icon} size={18} style={{ color: on ? "var(--primary-hover-color)" : "var(--shell-icon, var(--icon-color))" }} />
            {n.label}
          </div>
        );
      })}
      <div style={{ height: 1, background: "var(--shell-border, var(--layout-border-color))", margin: "var(--space-12) var(--space-8)" }} />
      <div style={{ font: "var(--font-text3-medium)", color: "var(--shell-muted, var(--secondary-text-color))", padding: "var(--space-4) var(--space-8)" }}>WORKSPACES</div>
      {["Northline", "Depot 2", "Contractors"].map(w => (
        <div key={w} style={{ display: "flex", alignItems: "center", gap: "var(--space-8)", height: 32, padding: "0 var(--space-8)", font: "var(--font-text2-normal)", color: "var(--shell-muted, var(--secondary-text-color))", borderRadius: "var(--border-radius-small)", cursor: "pointer" }}>
          <Icon name="Workspace" size={16} style={{ color: "var(--shell-icon, var(--icon-color))" }} />{w}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { TopBar, SideNav });
