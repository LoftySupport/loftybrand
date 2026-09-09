const DS = window.LoftyDesignSystem_491d68;
const { Button, IconButton, Icon, Avatar, AvatarGroup, Chips, Label, Text, Heading, Link, Divider, Kbd, TextField, TextArea, Search, Dropdown, Checkbox, RadioButton, Toggle, AttentionBox, Toast, ProgressBar, EmptyState, Tabs, Menu, Breadcrumbs, Table, Counter, Badge, Skeleton, Tooltip, Loader, MultiStepIndicator } = DS;
const { Section, Block, Rule, SpecTable } = window;
const { useState } = React;
const IB = "assets/icons";

function Row({ label, children, stack }) {
  return (
    <div className="comp-row">
      <div className="comp-label mono dim">{label}</div>
      <div className={stack ? "comp-demo stack" : "comp-demo"}>{children}</div>
    </div>
  );
}

function Buttons() {
  return (
    <Block title="Buttons" note="One filled primary action per view. Everything else is secondary or tertiary." wide>
      <Row label="kind">
        <Button kind="primary">Create job</Button>
        <Button kind="secondary">Assign crew</Button>
        <Button kind="tertiary">Cancel</Button>
        <Button kind="primary" color="negative">Delete job</Button>
      </Row>
      <Row label="size · 24/32/40/48">
        <Button size="xs">xs</Button>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </Row>
      <Row label="state">
        <Button kind="primary" loading>Publishing</Button>
        <Button kind="secondary" active>Active</Button>
        <Button kind="primary" disabled>Disabled</Button>
        <Button kind="secondary" leftIcon={<Icon name="Add" size={16} basePath={IB} />}>New job</Button>
      </Row>
      <Row label="icon only">
        <IconButton icon="Search" ariaLabel="Search" iconBasePath={IB} />
        <IconButton icon="Filter" ariaLabel="Filter" iconBasePath={IB} />
        <IconButton icon="MoreActions" ariaLabel="More actions" iconBasePath={IB} />
        <IconButton icon="Add" ariaLabel="Add" kind="primary" iconBasePath={IB} />
      </Row>
      <Rule good="Label buttons with a verb and the object: “Create job”, “Publish schedule”." bad="“Submit”, “OK”, “Yes” — or two filled orange buttons in one view." />
    </Block>
  );
}

function Forms() {
  const [name, setName] = useState("Kerbing — Lot 14");
  const [crew, setCrew] = useState("Crew A");
  const [notify, setNotify] = useState(true);
  const [priority, setPriority] = useState("standard");
  const [checked, setChecked] = useState(true);
  const [query, setQuery] = useState("");
  return (
    <Block title="Forms" note="Label above the control with a 4px gap, helper text below in one sentence. Errors say what to do next." wide>
      <div className="form-demo">
        <TextField label="Job name" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Work email" value="crew@" message="Enter a valid work email" validation="error" onChange={() => {}} />
        <Dropdown label="Crew" options={[{ value: "Crew A", label: "Crew A" }, { value: "Crew B", label: "Crew B" }, { value: "Crew C", label: "Crew C" }]} value={crew} onChange={v => typeof v === "string" && setCrew(v)} />
        <Search placeholder="Search jobs" value={query} onChange={v => setQuery(typeof v === "string" ? v : v?.target?.value ?? "")} onClear={() => setQuery("")} iconBasePath={IB} />
        <div className="field-stack">
          <span className="field-label">Notifications</span>
          <div className="inline-controls"><Toggle checked={notify} onChange={() => setNotify(v => !v)} ariaLabel="Notify crew" /><span className="field-help">Notify the crew when the schedule publishes</span></div>
        </div>
        <div className="field-stack">
          <span className="field-label">Priority</span>
          <RadioButton label="Standard" name="prio" checked={priority === "standard"} onChange={() => setPriority("standard")} />
          <RadioButton label="Urgent" name="prio" checked={priority === "urgent"} onChange={() => setPriority("urgent")} />
          <Checkbox label="Requires site approval" checked={checked} onChange={() => setChecked(v => !v)} />
        </div>
      </div>
    </Block>
  );
}

function Feedback() {
  return (
    <Block title="Feedback" note="Attention boxes explain, toasts confirm, empty states say what fills them." wide>
      <div className="feedback-stack">
        <AttentionBox title="Crew not assigned" text="Assign a crew before publishing the schedule." type="warning" iconBasePath={IB} />
        <AttentionBox title="Schedule published" text="128 jobs went out to 6 crews." type="success" iconBasePath={IB} />
        <Toast type="positive" iconBasePath={IB}>Schedule published</Toast>
        <div className="progress-demo">
          <ProgressBar value={91} />
          <span className="mono dim">91% on time</span>
        </div>
        <EmptyState title="Nothing here yet" description="Create your first job to start building the schedule." mainAction={{ text: "Create job" }} />
      </div>
    </Block>
  );
}

function Navigation() {
  const [tab, setTab] = useState("table");
  return (
    <Block title="Navigation" note="The active tab carries a 2px orange underline; the selected nav or menu row carries the peach tint." wide>
      <Row label="Tabs" stack>
        <Tabs tabs={[{ id: "table", label: "Table" }, { id: "timeline", label: "Timeline" }, { id: "dashboard", label: "Dashboard" }]} value={tab} onChange={setTab} iconBasePath={IB} />
      </Row>
      <Row label="Breadcrumbs" stack>
        <Breadcrumbs items={[{ id: "1", label: "Projects", icon: "Home" }, { id: "2", label: "Riverside stage 2" }, { id: "3", label: "Kerbing — Lot 14" }]} iconBasePath={IB} />
      </Row>
      <Row label="Menu" stack>
        <div className="menu-wrap">
          <Menu items={[{ id: "edit", label: "Edit job", icon: "Edit" }, { id: "dup", label: "Duplicate job", icon: "Duplicate" }, { divider: true }, { id: "del", label: "Delete job", icon: "Delete", kind: "danger" }]} iconBasePath={IB} />
        </div>
      </Row>
      <Row label="Steps" stack>
        <MultiStepIndicator steps={[{ titleText: "Job details", status: "fulfilled" }, { titleText: "Crew", status: "active" }, { titleText: "Schedule", status: "pending" }]} iconBasePath={IB} />
      </Row>
    </Block>
  );
}

function Indicators() {
  return (
    <Block title="Indicators and data" note="Labels carry status, chips carry user-chosen values, counters carry unrounded numbers." wide>
      <Row label="Label">
        <Label text="On time" color="positive" />
        <Label text="Overdue" color="negative" />
        <Label text="Awaiting approval" color="warning" />
        <Label text="Draft" kind="line" color="dark" />
      </Row>
      <Row label="Chips">
        <Chips label="Crew A" />
        <Chips label="Kerbing" color="var(--lofty-green-selected)" />
        <Chips label="Lot 14" leftIcon={<Icon name="Board" size={14} basePath={IB} />} />
      </Row>
      <Row label="Counter · Avatar">
        <Counter count={128} />
        <Counter count={6} color="dark" />
        <Avatar text="JM" />
        <Avatar text="RT" backgroundColor="var(--lofty-eco-green)" />
      </Row>
      <Row label="Table" stack>
        <Table
          columns={[{ id: "job", title: "Job", width: "40%" }, { id: "crew", title: "Crew" }, { id: "due", title: "Due" }, { id: "status", title: "Status", render: r => <Label text={r.status} color={r.status === "On time" ? "positive" : r.status === "Overdue" ? "negative" : "warning"} /> }]}
          rows={[
            { id: 1, job: "Kerbing — Lot 14", crew: "Crew A", due: "12 Sep", status: "On time" },
            { id: 2, job: "Driveway pour — Lot 22", crew: "Crew B", due: "9 Sep", status: "Overdue" },
            { id: 3, job: "Site prep — Riverside 2", crew: "Crew C", due: "18 Sep", status: "Awaiting approval" }
          ]}
        />
      </Row>
    </Block>
  );
}

function Components() {
  return (
    <Section id="components" eyebrow="08" title="Components" intro="Every component here is the built system rendering itself — sizes, states and copy as they ship.">
      <Buttons />
      <Forms />
      <Navigation />
      <Feedback />
      <Indicators />
    </Section>
  );
}

function Voice() {
  return (
    <Section id="voice" eyebrow="09" title="Voice and copy" intro="Australian English, sentence case, second person, active voice. The product never says “I”.">
      <div className="two">
        <Block title="Rules">
          <Rule good="Sentence case everywhere: “New job”, “Delivery dashboard”." bad="Title Case, or ALL CAPS outside the 12px nav eyebrow." />
          <Rule good="“Assign a crew before publishing the schedule.”" bad="“The crew must be assigned.”" />
          <Rule good="Labels are nouns, one to three words: “Job name”, “Crew”, “Due”." bad="Sentence-length labels or questions as labels." />
          <Rule good="“128 jobs”, “91% on time”, “+3 pts”." bad="“Dramatically improved”, “heaps faster”." />
          <Rule good="“Enter a valid work email.” Errors name the next action." bad="“Invalid input.”" />
          <Rule good="A completed action gets a plain toast: “Schedule published”." bad="Exclamation marks, congratulation, or emoji anywhere." />
        </Block>
        <Block title="Glossary">
          <SpecTable head={["Use", "Not"]} rows={[
            ["organise", "organize"],
            ["utilisation", "utilization"],
            ["kilometre", "kilometer"],
            ["job", "task, ticket"],
            ["crew", "team, resource"],
            ["schedule", "plan, calendar"],
            ["sign in", "log in, login"]
          ]} />
          <p className="note">Helper text is one sentence: state the constraint, then stop. Brand-led surfaces are allowed one bolder full-sentence statement — the Fieldwork display line — and nothing more.</p>
        </Block>
      </div>
    </Section>
  );
}

Object.assign(window, { Components, Voice });
