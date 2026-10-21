<!-- momentum/components/HubRecordFamily.md : the Hub's built component, documented from the running app and its source. 12 October 2026; the drawer rules 21 October 2026. -->
# Record family

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-record-family.html`. Source: `app/src/lofty-ui/record/FieldRow.tsx, StageTrack.tsx` in LoftySupport/loftyprojectapp.

- **FieldRow** is one property row: a label column and a typed control on a 32px line. An empty field shows its control (a date box reading `dd/mm/yyyy`, a dropdown reading `Select`), never the word "Empty". **StageTrack** is the pipeline strip and the health pill as one signal.
- The strip has **five segments always**; the database has seven stages. Closed and Cancelled are not segments: they freeze the strip as it last was. A stage is `done`, `current` or `todo`, and short names stand in where a bar is narrow.
- The current stage takes the record's health colour (on track, at risk, overdue): the bold name says where you are, the bar says how it is going.
- Measured live: the done bars are `#414042` (Foundation Black), which Momentum reserves for the black lockup (Hub `BRAND_CHECK.md` F28). In Deep Eco the to-do segments draw their label in `#eef4f3` on `#e1e1d9` (1.2:1, computed) and the current segment is white on `#3fb37f` (2.6:1): both fail AA (F29).

## The record drawer (the Hub's `PATTERNS.md` section 25, Amber, 14 to 18 October 2026)

The approved job drawer mockup and Amber's marks, on every drawer since 15 October. The card `guidelines/hub-record-family.html` predates them.

- **Case and type.** Section titles and field labels are Title Case with the small words lowered; a question or sentence stays sentence case. A section heading is 16/500, a group head 14/500, a label 14/400 muted, a value 14/400 ink, meta and pills 12.
- **Rows.** A field row is a 144px label and a value that fills the row, right-aligned, locked ones too, with the lock beside the value. An editable empty field shows its control; an empty fact reads None.
- **Adding.** A section adds through the orange circle + on its heading (`AddButton`, Vibe's xs primary icon button), never a "+ Add" in the body.
- **Pills.** Every status pill is one size, Start and N/A included. A Workflow row is its name and its status pill on one line. A Workflow with no SLA (Maintenance, Company & Contacts and System Workflows) reads **No SLA** where a Lifecycle Workflow reads its health; that word shipped on 19 October 2026 (#767) and is waiting for Amber's sight.
- **Arrival.** Every section and the footer strip are shut when a drawer opens; the full-screen record opens them all and is one column with the notes a quarter of the width, never under 400px.
- **No explainers.** A description that is essential sits behind an info icon's tooltip (section 20).
