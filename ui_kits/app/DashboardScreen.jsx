const { Icon, Label, ProgressBar, Table, Avatar, Button, Slider, Dropdown } = window.LoftyDesignSystem_491d68;

function Stat({ label, value, delta, tone }) {
  return (
    <div style={{ border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", padding: "var(--space-16)", background: "var(--primary-background-color)" }}>
      <div style={{ font: "var(--font-text3-medium)", color: "var(--secondary-text-color)" }}>{label}</div>
      <div style={{ font: "var(--font-h2-bold)", letterSpacing: "var(--letter-spacing-h2-bold)", marginTop: "var(--space-4)" }}>{value}</div>
      <div style={{ marginTop: "var(--space-8)" }}><Label text={delta} color={tone} kind="line" size="small" /></div>
    </div>
  );
}

function DashboardScreen() {
  const [range, setRange] = React.useState("This week");
  const [target, setTarget] = React.useState(85);
  const bars = [42, 58, 35, 74, 66, 48, 80];
  return (
    <div style={{ flex: 1, minWidth: 0, overflow: "auto", padding: "var(--space-24) var(--space-32)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <h1 style={{ font: "var(--font-h1-bold)", letterSpacing: "var(--letter-spacing-h1-bold)" }}>Delivery dashboard</h1>
          <p style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)", marginTop: "var(--space-4)" }}>Northline workspace</p>
        </div>
        <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "center" }}>
          <div style={{ width: 160 }}><Dropdown options={["This week", "This month", "Quarter"]} value={range} onChange={setRange} /></div>
          <Button kind="secondary" leftIcon={<Icon name="Download" size={16} />}>Export</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-16)", marginTop: "var(--space-24)" }}>
        <Stat label="Jobs completed" value="128" delta="+12 vs last week" tone="positive" />
        <Stat label="On-time rate" value="91%" delta="+3 pts" tone="positive" />
        <Stat label="Overdue" value="6" delta="+2" tone="negative" />
        <Stat label="Crews active" value="14" delta="No change" tone="dark" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-16)", marginTop: "var(--space-16)" }}>
        <div style={{ border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", padding: "var(--space-16)" }}>
          <div style={{ font: "var(--font-text2-medium)" }}>Completions per day</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--space-12)", height: 180, marginTop: "var(--space-16)" }}>
            {bars.map((b, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-8)" }}>
                <div style={{ width: "100%", height: b + "%", background: i === 6 ? "var(--data-2)" : "var(--data-1)", borderRadius: "var(--border-radius-small) var(--border-radius-small) 0 0" }} />
                <span style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", padding: "var(--space-16)", display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>
          <div style={{ font: "var(--font-text2-medium)" }}>Crew utilisation</div>
          {[["Northline", 82], ["Depot 2", 64], ["Contractor", 47]].map(([n, v]) => (
            <ProgressBar key={n} label={n} value={v} color={v > target ? "var(--negative-color)" : "var(--primary-color)"} />
          ))}
          <Slider label="Utilisation alert threshold" value={target} onChange={setTarget} min={50} max={100} showValue />
        </div>
      </div>

      <div style={{ marginTop: "var(--space-16)" }}>
        <Table dense rows={[
          { id: 1, crew: "Northline", lead: "AK", jobs: 24, ontime: "94%" },
          { id: 2, crew: "Depot 2", lead: "LM", jobs: 18, ontime: "88%" },
          { id: 3, crew: "Contractor", lead: "JD", jobs: 11, ontime: "76%" }
        ]} columns={[
          { id: "crew", title: "Crew" },
          { id: "lead", title: "Lead", width: 90, render: r => <Avatar text={r.lead} size="small" /> },
          { id: "jobs", title: "Jobs", width: 90, align: "right" },
          { id: "ontime", title: "On time", width: 110, align: "right" }
        ]} />
      </div>
    </div>
  );
}

Object.assign(window, { DashboardScreen });
