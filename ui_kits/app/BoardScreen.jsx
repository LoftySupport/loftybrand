const { Button, IconButton, Icon, Avatar, Label, Chips, Table, Tabs, Breadcrumbs, Dialog, Toast, AttentionBox, TextField, Dropdown, Checkbox } = window.LoftyDesignSystem_491d68;

const SEED = [
  { id: 4821, job: "Northline resurfacing", owner: "AK", status: "In progress", crew: "Northline", due: "12 Sep", progress: 60 },
  { id: 4822, job: "Depot 2 safety inspection", owner: "LM", status: "Complete", crew: "Depot 2", due: "8 Sep", progress: 100 },
  { id: 4823, job: "Bridge joint repair", owner: "JD", status: "Overdue", crew: "Contractor", due: "2 Sep", progress: 35 },
  { id: 4824, job: "Kerb replacement — Bell St", owner: "AK", status: "Not started", crew: "Unassigned", due: "19 Sep", progress: 0 },
  { id: 4825, job: "Line marking refresh", owner: "PT", status: "In progress", crew: "Northline", due: "22 Sep", progress: 20 }
];

const TONE = { "In progress": "primary", "Complete": "positive", "Overdue": "negative", "Not started": "dark" };

function BoardScreen() {
  const [rows, setRows] = React.useState(SEED);
  const [tab, setTab] = React.useState("table");
  const [adding, setAdding] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [name, setName] = React.useState("");
  const [crew, setCrew] = React.useState("Northline");

  const unassigned = rows.filter(r => r.crew === "Unassigned").length;

  function addJob() {
    if (!name.trim()) return;
    setRows([{ id: 4826 + rows.length, job: name, owner: "AK", status: "Not started", crew, due: "26 Sep", progress: 0 }, ...rows]);
    setAdding(false); setName("");
    setToast("Job created");
    setTimeout(() => setToast(null), 2600);
  }

  return (
    <div style={{ position: "relative", flex: 1, minWidth: 0, overflow: "auto", padding: "var(--space-24) var(--space-32)", background: "var(--primary-background-color)" }}>
      <Breadcrumbs items={[{ label: "Workspace", icon: "Workspace" }, { label: "Northline" }, { label: "Jobs" }]} />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: "var(--space-12)" }}>
        <div>
          <h1 style={{ font: "var(--font-h1-bold)", letterSpacing: "var(--letter-spacing-h1-bold)" }}>Jobs</h1>
          <p style={{ font: "var(--font-text2-normal)", color: "var(--secondary-text-color)", marginTop: "var(--space-4)" }}>{rows.length} jobs · week of 8 September</p>
        </div>
        <div style={{ display: "flex", gap: "var(--space-8)" }}>
          <Button kind="secondary" leftIcon={<Icon name="Filter" size={16} />}>Filter</Button>
          <Button leftIcon={<Icon name="Add" size={16} />} onClick={() => setAdding(true)}>New job</Button>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-16)" }}>
        <Tabs value={tab} onChange={setTab} tabs={[
          { id: "table", label: "Table", icon: "Table" },
          { id: "timeline", label: "Timeline", icon: "Timeline", counter: rows.length },
          { id: "map", label: "Map", icon: "Location" }
        ]} />
      </div>

      {unassigned > 0 ? (
        <div style={{ marginTop: "var(--space-16)" }}>
          <AttentionBox type="warning" title={unassigned + " job" + (unassigned > 1 ? "s" : "") + " unassigned"} text="Assign a crew before publishing this week's schedule." />
        </div>
      ) : null}

      <div style={{ marginTop: "var(--space-16)" }}>
        {tab === "table" ? (
          <Table rows={rows} columns={[
            { id: "sel", title: "", width: 40, render: () => <Checkbox /> },
            { id: "job", title: "Job", render: r => (<div><div style={{ font: "var(--font-text2-medium)" }}>{r.job}</div><div style={{ font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>JOB-{r.id}</div></div>) },
            { id: "owner", title: "Owner", width: 80, render: r => <Avatar text={r.owner} size="small" /> },
            { id: "status", title: "Status", width: 130, render: r => <Label text={r.status} color={TONE[r.status]} /> },
            { id: "crew", title: "Crew", width: 150, render: r => <Chips label={r.crew} color={r.crew === "Unassigned" ? "var(--lofty-flint-200)" : "var(--lofty-green-selected)"} /> },
            { id: "due", title: "Due", width: 90 },
            { id: "act", title: "", width: 56, align: "right", render: () => <IconButton icon="MoreActions" ariaLabel="Row actions" size="small" /> }
          ]} />
        ) : tab === "timeline" ? (
          <div style={{ border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", padding: "var(--space-16)" }}>
            {rows.map(r => (
              <div key={r.id} style={{ display: "flex", alignItems: "center", gap: "var(--space-16)", padding: "var(--space-8) 0" }}>
                <div style={{ width: 220, font: "var(--font-text2-normal)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.job}</div>
                <div style={{ flex: 1, height: 20, background: "var(--allgrey-background-color)", borderRadius: "var(--border-radius-pill)", position: "relative" }}>
                  <div style={{ position: "absolute", left: (r.id % 5) * 8 + "%", width: Math.max(18, r.progress) + "%", height: "100%", borderRadius: "var(--border-radius-pill)", background: r.status === "Overdue" ? "var(--negative-color)" : r.status === "Complete" ? "var(--positive-color)" : "var(--primary-color)" }} />
                </div>
                <div style={{ width: 70, font: "var(--font-text3-normal)", color: "var(--secondary-text-color)" }}>{r.due}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ border: "1px solid var(--layout-border-color)", borderRadius: "var(--border-radius-medium)", height: 320, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--allgrey-background-color)", color: "var(--secondary-text-color)", font: "var(--font-text2-normal)", flexDirection: "column", gap: "var(--space-8)" }}>
            <Icon name="Location" size={24} />
            Map view is not part of the supplied source material.
          </div>
        )}
      </div>

      <Dialog open={adding} title="New job" description="Jobs are added to the Northline workspace." width={440} onClose={() => setAdding(false)}
        footer={<><Button kind="tertiary" onClick={() => setAdding(false)}>Cancel</Button><Button onClick={addJob}>Create job</Button></>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-16)" }}>
          <TextField label="Job name" placeholder="e.g. Northline resurfacing" value={name} onChange={e => setName(e.target.value)} requiredAsterisk />
          <Dropdown label="Crew" options={["Northline", "Depot 2", "Contractor", "Unassigned"]} value={crew} onChange={setCrew} />
        </div>
      </Dialog>

      {toast ? (
        <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 50 }}>
          <Toast type="positive" icon="Check" onClose={() => setToast(null)}>{toast}</Toast>
        </div>
      ) : null}
    </div>
  );
}

Object.assign(window, { BoardScreen });
