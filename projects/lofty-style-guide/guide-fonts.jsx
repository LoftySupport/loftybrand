const { Icon } = window.LoftyDesignSystem_491d68;
const { Section, Block, Rule, SpecTable } = window;

function Specimen({ label, note, headFont, bodyFont, tracking, bg, border }) {
  return (
    <div className="spec-card" style={{ background: bg, borderColor: border }}>
      <div className="spec-card-h mono dim">{label}</div>
      <div style={{ font: headFont, letterSpacing: tracking }}>Every job, every crew, one schedule.</div>
      <p style={{ font: bodyFont, letterSpacing: "-0.02em", margin: "var(--space-12) 0 0" }}>Lofty delivers house and land packages, completed homes and residential developments across Adelaide.</p>
      <div className="spec-card-f usage">{note}</div>
    </div>
  );
}

function Fonts() {
  return (
    <Section id="fonts" eyebrow="04" title="Fonts by surface" intro="Which typeface you use is decided by where the words are rendered, not by the kind of document. Screen surfaces use the Google-hosted pair; brand and print surfaces use Fieldwork, with Montserrat as its named substitute.">
      <Block title="The two systems">
        <div className="spec-row">
          <Specimen label="Screen — Poppins + Figtree" headFont="600 32px/40px Poppins, sans-serif" bodyFont="400 16px/22px Figtree, sans-serif" tracking="-0.5px" bg="var(--lofty-finisher-white)" border="var(--layout-border-color)" note="Served from Google Fonts. Every product component resolves to this pair through --title-font-family and --font-family." />
          <Specimen label="Brand & print — Fieldwork" headFont="var(--font-display-l)" bodyFont="var(--font-brand-body)" tracking="var(--letter-spacing-brand-heading)" bg="var(--lofty-paper)" border="var(--lofty-paper-border)" note="Geo Demi Bold for display, Hum Light for body. Licensed .woff files ship with this system." />
          <Specimen label="Print substitute — Montserrat" headFont="600 32px/40px Montserrat, sans-serif" bodyFont="300 16px/22px Montserrat, sans-serif" tracking="-0.01em" bg="var(--lofty-paper)" border="var(--lofty-paper-border)" note="Named by the brand kit as the print substitute when Fieldwork is unavailable — including documents shared outside Lofty." />
        </div>
      </Block>
      <Block title="Surface matrix">
        <SpecTable head={["Surface", "Display", "Body", "Font source", "Sizing"]} rows={[
          ["Product app", "Poppins 600/700", "Figtree 400/600", "Google Fonts, loaded by the app", "px — 32/24/18 titles, 16/14/12 body"],
          ["Brand-led screens", "Fieldwork Geo Demi Bold", "Fieldwork Hum Light", ".woff in tokens/fonts.css", "px — one display line per surface"],
          ["Print & proposals", "Fieldwork Geo Demi Bold", "Fieldwork Hum Light", "Desktop .otf/.ttf, installed locally", "pt — 14pt headings, 8pt body minimum"],
          ["Word / Office templates", "Fieldwork Geo Demi Bold, else Montserrat", "Fieldwork Hum Light, else Montserrat", "Locally installed desktop fonts", "pt — same minimums as print"],
          ["Website", "To confirm", "To confirm", "WordPress theme, not in this system", "—"]
        ]} />
        <p className="note">The website at <a href="https://www.lofty.com.au" target="_blank" rel="noopener">lofty.com.au</a> runs on a separate 2021 WordPress theme (Lofty Building Group) that predates this system. Its typefaces were not supplied here, so they are recorded as unconfirmed rather than assumed. Bringing it in scope means either adopting Fieldwork for its display type or documenting its existing stack as a fourth surface.</p>
      </Block>
      <div className="two">
        <Block title="Fallback chains">
          <SpecTable head={["Token", "Resolves to"]} rows={[
            ["--title-font-family", "Poppins → Fieldwork Geo → Roboto → sans-serif"],
            ["--font-family", "Figtree → Fieldwork Hum → Roboto → sans-serif"],
            ["--brand-font-family", "Fieldwork Geo → Fieldwork → Poppins → sans-serif"],
            ["--brand-body-font-family", "Fieldwork Hum → Fieldwork → Figtree → sans-serif"]
          ]} />
          <p className="note">The screen chain falls back to Fieldwork, and the brand chain falls back to the screen pair, so a missing font never lands on a serif or a system default. Montserrat is the brand kit's print substitute and is not in the CSS chain — it is selected deliberately in the document, not inherited.</p>
          <p className="note">Fieldwork ships in Light and Demi Bold only, so the brand scale uses 300 and 600 exclusively. There is no Fieldwork Regular or Medium — do not let an application synthesise one.</p>
        </Block>
        <Block title="Word and Office">
          <Rule good="Install Fieldwork as desktop fonts before editing a Lofty template, and set the template's Heading and Body styles to the Fieldwork cuts." bad="Rely on the .woff files — Word cannot use them, and the document silently falls back." />
          <Rule good="Switch the template to Montserrat when the file will be edited outside Lofty, or embed fonts on export." bad="Substitute Calibri, Arial or Aptos, or leave the recipient's default in place." />
          <Rule good="Keep pt sizing and the brand kit's tracking: −0.01em headings, −0.02em body." bad="Carry the app's px sizes or its 8px spacing rhythm into a document." />
        </Block>
      </div>
      <Block title="App design vs document template">
        <div className="vs">
          <div className="vs-col">
            <div className="vs-h"><Icon name="Board" size={18} basePath={window.ICONS} /> App design</div>
            <ul>
              <li>Poppins and Figtree, px sizes, 14px default body</li>
              <li>Finisher White shell, <span className="mono">#f6f7f7</span> recessed areas, Mid Grey rules</li>
              <li>Crisp Orange carries one filled action per view</li>
              <li>8px spacing rhythm; 56px top bar, 224px side nav</li>
              <li>Sentence case, verb-plus-object buttons, no display type</li>
            </ul>
          </div>
          <div className="vs-col warm">
            <div className="vs-h"><Icon name="Drawings" size={18} basePath={window.ICONS} /> Document template</div>
            <ul>
              <li>Fieldwork Geo and Hum, pt sizes, 8pt body minimum</li>
              <li>Paper and Mineral grounds; never mixed with the cool grey</li>
              <li>Crisp Orange as a rule, a mark or a small accent</li>
              <li>Page margins and a baseline rhythm, not the control scale</li>
              <li>One bolder display statement is allowed to carry the page</li>
            </ul>
          </div>
        </div>
        <p className="note">The two surfaces share the palette, the logo and the voice. They do not share typefaces, sizing units or spacing. A cover page set in Poppins reads as a screenshot of the app; an app screen set in Fieldwork loses legibility at 14px.</p>
      </Block>
    </Section>
  );
}

Object.assign(window, { Fonts });
