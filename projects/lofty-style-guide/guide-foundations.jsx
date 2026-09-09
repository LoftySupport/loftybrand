const { Heading, Text, Label, Divider, Icon, Button, Chips } = window.LoftyDesignSystem_491d68;
const ICONS = "assets/icons";

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="sect">
      <header className="sect-h">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="sect-t">{title}</h2>
        {intro ? <p className="sect-i">{intro}</p> : null}
      </header>
      {children}
    </section>
  );
}

function Block({ title, note, children, wide }) {
  return (
    <div className={wide ? "block wide" : "block"}>
      {title ? <h3 className="block-t">{title}</h3> : null}
      {note ? <p className="note">{note}</p> : null}
      {children}
    </div>
  );
}

function Swatch({ name, value, token, usage, ink }) {
  return (
    <div className="sw">
      <div className="sw-chip" style={{ background: value, color: ink || "var(--lofty-finisher-white)" }}>
        <span>{name}</span>
      </div>
      <div className="sw-meta">
        <div className="mono">{value}</div>
        {token ? <div className="mono dim">{token}</div> : null}
        {usage ? <p className="usage">{usage}</p> : null}
      </div>
    </div>
  );
}

function Tile({ value, label, token, ink }) {
  return (
    <div className="tile">
      <div className="tile-chip" style={{ background: value, color: ink || "var(--lofty-finisher-white)" }}>{label}</div>
      <div className="mono dim">{token}</div>
    </div>
  );
}

function Rule({ good, bad }) {
  return (
    <div className="rules">
      <div className="rule ok">
        <span className="rule-k"><Icon name="Check" size={14} basePath={ICONS} /> Do</span>
        <p>{good}</p>
      </div>
      <div className="rule no">
        <span className="rule-k"><Icon name="CloseSmall" size={14} basePath={ICONS} /> Don't</span>
        <p>{bad}</p>
      </div>
    </div>
  );
}

function SpecTable({ head, rows }) {
  return (
    <div className="spec">
      <table>
        <thead><tr>{head.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j === 0 ? "mono" : ""}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/* ---------- Sections ---------- */

function Brand() {
  return (
    <Section id="brand" eyebrow="01" title="Brand" intro="The lockup ships in four colourways. Pick the cut that matches its background rather than recolouring a file.">
      <div className="logo-grid">
        <div className="logo-cell" style={{ background: "var(--lofty-finisher-white)" }}>
          <img src="assets/brand/lofty-logo-black.png" alt="Lofty logo, Foundation Black" />
          <div className="logo-cap">Black on white — default</div>
        </div>
        <div className="logo-cell" style={{ background: "var(--lofty-gray-surface)" }}>
          <img src="assets/brand/lofty-logo-orange.png" alt="Lofty logo, Crisp Orange" />
          <div className="logo-cap">Orange on light neutral</div>
        </div>
        <div className="logo-cell" style={{ background: "var(--lofty-paper)" }}>
          <img src="assets/brand/lofty-logo-green.png" alt="Lofty logo, Eco Green" />
          <div className="logo-cap">Green on Paper</div>
        </div>
        <div className="logo-cell" style={{ background: "var(--lofty-foundation-black)" }}>
          <img src="assets/brand/lofty-logo-white.png" alt="Lofty logo, Finisher White" />
          <div className="logo-cap dark">White on Foundation Black</div>
        </div>
      </div>
      <div className="two">
        <Block title="Clear space and the app icon" note="Clear space on every side equals the height of the lockup's “L”. The square icon is the only cropped form of the mark.">
          <div className="clearspace">
            <div className="cs-frame"><img src="assets/brand/lofty-logo-black.png" alt="Lofty logo with clear space" /></div>
            <img className="app-icon" src="assets/brand/lofty-logo-orange-square.png" alt="Lofty app icon" />
          </div>
        </Block>
        <Block title="Rules">
          <Rule good="Place the orange lockup on white or a light neutral, the white lockup on Foundation Black." bad="Put the orange lockup on Eco Green, recolour a supplied file, or stretch the lockup." />
          <Rule good="Use a brand silhouette or a flat brand panel where a photo would sit." bad="Add gradients, grain, patterns or stock photography — none exist in the brand material." />
        </Block>
      </div>
    </Section>
  );
}

function Colour() {
  return (
    <Section id="colour" eyebrow="02" title="Colour" intro="Five brand colours in a fixed hierarchy, three warm softening neutrals, and status. Nothing else.">
      <Block title="Brand palette">
        <div className="sw-grid">
          <Swatch name="Foundation Black" value="#414042" token="--lofty-foundation-black" usage="Text, inverted surfaces, brand panels. The brand kit prints HEX #000000 beside RGB 65/64/66; the RGB is authoritative." />
          <Swatch name="Finisher White" value="#ffffff" ink="var(--lofty-foundation-black)" token="--lofty-finisher-white" usage="Pages, app shell, cards." />
          <Swatch name="Mid Grey" value="#d1d3d4" ink="var(--lofty-foundation-black)" token="--lofty-mid-gray" usage="Borders and rules inside controls." />
          <Swatch name="Crisp Orange" value="#f47e63" ink="var(--lofty-ink)" token="--lofty-crisp-orange" usage="Primary accent: one filled action per view, active tab underline, selected nav item, first data series." />
          <Swatch name="Eco Green" value="#005058" token="--lofty-eco-green" usage="Minimal highlight only: small decorative accents, later data series. Never a shell, a panel fill or a link colour." />
        </div>
      </Block>
      <div className="two">
        <Block title="Softening neutrals" note="Surfaces only — never text, never a control fill, and never in the same view as the cool #f6f7f7 grey.">
          <div className="tile-row">
            <Tile value="#fcfaee" label="Paper" ink="var(--lofty-foundation-black)" token="--warm-background-color" />
            <Tile value="#eae3df" label="Mineral" ink="var(--lofty-foundation-black)" token="--warm-surface-color" />
            <Tile value="#dbd0be" label="Stone" ink="var(--lofty-foundation-black)" token="--warm-border-color" />
          </div>
        </Block>
        <Block title="Status" note="Vibe's values are kept: the brand palette has no legible status greens or reds.">
          <div className="tile-row">
            <Tile value="#00854d" label="Positive" token="--positive-color" />
            <Tile value="#d83a52" label="Negative" token="--negative-color" />
            <Tile value="#ffcb00" label="Warning" ink="var(--lofty-foundation-black)" token="--warning-color" />
          </div>
        </Block>
      </div>
      <div className="two">
        <Block title="Derived steps" note="Tints and shades of the five brand colours. No new hues.">
          <div className="tile-row wrap">
            <Tile value="#d9634a" label="Orange hover" token="--primary-hover-color" />
            <Tile value="#c2543c" label="Orange pressed" token="--lofty-orange-pressed" />
            <Tile value="#fae4d5" label="Selected" ink="var(--lofty-foundation-black)" token="--primary-selected-color" />
            <Tile value="#f6d3bf" label="Selected hover" ink="var(--lofty-foundation-black)" token="--primary-selected-hover-color" />
            <Tile value="#fdf6f0" label="Highlight" ink="var(--lofty-foundation-black)" token="--primary-highlighted-color" />
            <Tile value="#003c42" label="Green hover" token="--highlight-hover-color" />
            <Tile value="#f6f7f7" label="Grey surface" ink="var(--lofty-foundation-black)" token="--allgrey-background-color" />
            <Tile value="#e7e8e9" label="Layout rule" ink="var(--lofty-foundation-black)" token="--layout-border-color" />
          </div>
        </Block>
        <Block title="Data series" note="Categorical order is fixed so two charts never disagree.">
          <div className="data-ramp">
            {[["1", "var(--lofty-crisp-orange)"], ["2", "var(--lofty-foundation-black)"], ["3", "var(--lofty-eco-green)"], ["4", "var(--lofty-mid-gray)"], ["5", "var(--lofty-orange-selected)"], ["6", "var(--lofty-green-selected)"]].map(([n, v]) => (
              <div key={n} className="ramp-cell" style={{ background: v }}><span>{n}</span></div>
            ))}
          </div>
        </Block>
      </div>
      <Block title="Ink on colour" note="Contrast is checked, not assumed. White on Crisp Orange is 2.6:1 and fails AA, so orange carries ink instead.">
        <div className="ink-row">
          <div className="ink" style={{ background: "#f47e63", color: "#191819" }}>Ink on Crisp Orange · 6.7:1</div>
          <div className="ink" style={{ background: "#414042", color: "#ffffff" }}>White on Foundation Black · 10.1:1</div>
          <div className="ink" style={{ background: "#005058", color: "#ffffff" }}>White on Eco Green · 8.9:1</div>
          <div className="ink" style={{ background: "#ffcb00", color: "#414042" }}>Black on Warning · 8.6:1</div>
        </div>
      </Block>
    </Section>
  );
}

function Typography() {
  const screen = [
    ["h1", "Poppins 32/40, −0.5px", "Every job, every crew", { font: "var(--font-h1-bold)", letterSpacing: "-0.5px" }],
    ["h2", "Poppins 24/30, −0.1px", "Delivery dashboard", { font: "var(--font-h2-bold)", letterSpacing: "-0.1px" }],
    ["h3", "Poppins 18/24, −0.1px", "Crew utilisation", { font: "var(--font-h3-medium)", letterSpacing: "-0.1px" }],
    ["text1", "Figtree 16/22", "Assign a crew before publishing the schedule.", { font: "var(--font-text1-normal)" }],
    ["text2", "Figtree 14/20", "Default product body size — tables, menus, fields.", { font: "var(--font-text2-normal)" }],
    ["text3", "Figtree 12/16", "Helper text, table headers, counters.", { font: "var(--font-text3-normal)" }]
  ];
  return (
    <Section id="type" eyebrow="03" title="Typography" intro="Two systems, chosen by surface. Poppins and Figtree on screen; Fieldwork on brand-led surfaces.">
      <Block title="Screen scale">
        {screen.map(([k, spec, sample, st]) => (
          <div className="type-row" key={k}>
            <div className="type-key"><span className="mono">{k}</span><span className="mono dim">{spec}</span></div>
            <div style={st}>{sample}</div>
          </div>
        ))}
      </Block>
      <div className="two">
        <Block title="Brand display — Fieldwork" note="Decks, print, proposals, hero statements. Geo Demi Bold for display, Hum Light for body; tracking −0.01em headings, −0.02em body.">
          <div className="brand-type">
            <div style={{ font: "var(--font-display-l)", letterSpacing: "var(--letter-spacing-brand-heading)" }}>Every job, every crew, one schedule.</div>
            <p style={{ font: "var(--font-brand-body)", letterSpacing: "var(--letter-spacing-brand-body)", margin: "var(--space-16) 0 0" }}>Fieldwork Hum Light sets brand body copy. Fieldwork ships in Light and Demi Bold only, so the brand scale uses 300 and 600 — there is no Regular or Medium.</p>
          </div>
        </Block>
        <Block title="Weights and substitutes">
          <SpecTable head={["Family", "Weights", "Where"]} rows={[
            ["Poppins", "300 / 500 / 600 / 700", "Product titles h1–h3"],
            ["Figtree", "400 / 600 / 700", "Product body text1–text3"],
            ["Fieldwork Geo", "300 / 600", "Brand display"],
            ["Fieldwork Hum", "300 / 600", "Brand body"],
            ["Montserrat", "—", "Print substitute for Fieldwork"]
          ]} />
          <Rule good="Set tracking negative on headings only." bad="Track body copy, or use Fieldwork inside product UI." />
        </Block>
      </div>
    </Section>
  );
}

function SpaceRadius() {
  const steps = [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80];
  const radii = [["2", "2px", "Checkbox, small label"], ["small", "4px", "Buttons, inputs, chips, tabs, menu items"], ["medium", "8px", "Cards, menus, dropdowns, dialogs"], ["large", "12px", "Panels, app icon"], ["big", "16px", "Full-view modal only"], ["pill", "100px", "Toggles, progress tracks, counters, badges"], ["circle", "50%", "Avatars, radios, loaders, knobs"]];
  return (
    <Section id="space" eyebrow="05" title="Spacing, radius, elevation" intro="One spacing scale, seven radii, four shadows. Never a literal value in component code.">
      <Block title="Spacing scale" note="2/4/8/12/16/20/24/32/40/48/64/80 — nothing off the scale, ever. No 6, no 10, no 14.">
        <div className="space-scale">
          {steps.map(s => (
            <div className="space-item" key={s}>
              <div className="space-bar" style={{ width: s }}></div>
              <span className="mono dim">{s}</span>
            </div>
          ))}
        </div>
      </Block>
      <div className="two">
        <Block title="Layout rhythm">
          <SpecTable head={["Value", "Applies to"]} rows={[
            ["56px", "Top bar height"],
            ["224px", "Side nav width"],
            ["24/32/40/48", "Button heights"],
            ["32px", "Menu and list rows"],
            ["40px", "Nav rows"],
            ["24px", "Content card padding"],
            ["16px", "Compact tile padding, stack gap in a card"],
            ["8px", "Gap between adjacent controls"],
            ["4px", "Gap from a label to its control"],
            ["32px", "Page gutters"]
          ]} />
        </Block>
        <Block title="Radius">
          <div className="radius-grid">
            {radii.map(([t, v, u]) => (
              <div className="radius-item" key={t}>
                <div className="radius-chip" style={{ borderRadius: v }}></div>
                <div><div className="mono">{v}</div><div className="mono dim">--border-radius-{t}</div><p className="usage">{u}</p></div>
              </div>
            ))}
          </div>
        </Block>
      </div>
      <Block title="Elevation" note="Cards have no shadow at rest. Shadow appears only when something floats, and is always neutral Foundation Black — never tinted orange.">
        <div className="elev-row">
          {[["xs", "Row hover"], ["small", "Dropdowns"], ["medium", "Menus, toasts, tooltips"], ["large", "Modals"]].map(([k, u]) => (
            <div className="elev" key={k} style={{ boxShadow: `var(--box-shadow-${k})` }}>
              <div className="mono">--box-shadow-{k}</div>
              <p className="usage">{u}</p>
            </div>
          ))}
        </div>
      </Block>
    </Section>
  );
}

function Motion() {
  return (
    <Section id="motion" eyebrow="06" title="Motion and states" intro="Two motion families and five interaction states. Press is a scale, focus is a ring, selected is a tint.">
      <div className="two">
        <Block title="Motion">
          <SpecTable head={["Token", "Duration", "Used for"]} rows={[
            ["productive-short", "70ms", "Press scale"],
            ["productive-medium", "100ms", "Hover wash, toggle knob"],
            ["productive-long", "150ms", "Tab underline, chevron rotation"],
            ["expressive-short", "250ms", "Toasts, attention boxes"],
            ["expressive-long", "400ms", "Dialogs, modals"]
          ]} />
          <SpecTable head={["Easing", "Curve"]} rows={[
            ["enter", "cubic-bezier(0,0,0.35,1)"],
            ["exit", "cubic-bezier(0.4,0,1,1)"],
            ["transition", "cubic-bezier(0.4,0,0.2,1)"],
            ["emphasize", "cubic-bezier(0,0,0.2,1.4)"]
          ]} />
          <p className="note">Nothing bounces except the chip pop. No parallax, no scroll-triggered animation.</p>
        </Block>
        <Block title="States" note="Hover the buttons and tab into the field to see the real behaviour.">
          <div className="state-list">
            <div className="state"><span className="state-k">Hover</span><p>Neutral wash <span className="mono">rgba(65,64,66,.08)</span> behind tertiary buttons, icon buttons, menu and table rows. Filled elements darken to their <span className="mono">-hover</span> step instead.</p></div>
            <div className="state"><span className="state-k">Press</span><p>Scale — buttons <span className="mono">0.95</span>, icon buttons <span className="mono">0.9</span>, over 70ms.</p></div>
            <div className="state"><span className="state-k">Focus</span><p>A 3px orange-at-50% ring plus a 1px inset (<span className="mono">--focus-ring</span>). Never removed, never replaced by a colour change alone.</p></div>
            <div className="state"><span className="state-k">Selected</span><p>Tinted, not filled: <span className="mono">#fae4d5</span> behind selected nav items, options and list rows. Text stays Foundation Black.</p></div>
            <div className="state"><span className="state-k">Disabled</span><p>Grey fill, 40% ink, no shadow, cursor not-allowed.</p></div>
          </div>
          <div className="state-demo">
            <Button kind="primary">Create job</Button>
            <Button kind="secondary" active>Selected</Button>
            <Button kind="tertiary">Tertiary</Button>
            <Button kind="primary" disabled>Disabled</Button>
            <input className="focus-demo" placeholder="Tab here for the focus ring" />
          </div>
        </Block>
      </div>
    </Section>
  );
}

function Iconography() {
  const names = ["Board", "MyWeek", "Calendar", "Time", "Person", "Delivery", "Materials", "Approval", "Costs", "Drawings", "Projects", "Reports", "Home", "Search", "Filter", "Sort", "Add", "Edit", "Duplicate", "Delete", "Attach", "Download", "Status", "Notifications", "Settings", "MoreActions", "Check", "CloseSmall", "NavigationChevronRight"];
  return (
    <Section id="icons" eyebrow="07" title="Iconography" intro="290 glyphs: 276 from Vibe plus 14 Lofty construction icons. Single-weight, mostly filled, 20×20 origin, rounded terminals.">
      <div className="icon-grid">
        {names.map(n => (
          <div className="icon-cell" key={n}>
            <Icon name={n} size={20} basePath={ICONS} />
            <span className="mono dim">{n}</span>
          </div>
        ))}
      </div>
      <div className="two">
        <Block title="Sizes">
          <div className="icon-sizes">
            {[14, 16, 18, 20, 24].map(s => (
              <div className="icon-size" key={s}><Icon name="Board" size={s} basePath={ICONS} /><span className="mono dim">{s}</span></div>
            ))}
          </div>
          <SpecTable head={["Size", "Context"]} rows={[["14", "xs controls"], ["16", "Buttons, table cells, menu items"], ["18", "Nav, attention boxes"], ["20", "Default"], ["24", "Empty states, large buttons"]]} />
        </Block>
        <Block title="Rules">
          <Rule good="Let icons inherit colour from their context — they render as a mask over currentColor." bad="Hard-code an icon colour, or use orange where the icon is not itself the action." />
          <Rule good="Reference by PascalCase file stem: name=&quot;MoreActions&quot;." bad="Substitute an icon font, a CDN set, emoji, or a Unicode glyph." />
        </Block>
      </div>
    </Section>
  );
}

Object.assign(window, { Section, Block, Swatch, Tile, Rule, SpecTable, Brand, Colour, Typography, SpaceRadius, Motion, Iconography, ICONS });
