<!-- momentum/components/HubRecordFamily.md : the Hub's built component, documented from the running app and its source. 12 October 2026. -->
# Record family

Built in the Lofty Hub (`@lofty/ui`) on Vibe, themed by Momentum's tokens. Pictures: `guidelines/hub-record-family.html`. Source: `app/src/lofty-ui/record/FieldRow.tsx, StageTrack.tsx` in LoftySupport/loftyprojectapp.

- **FieldRow** is one property row: a label column and a typed control on a 32px line. An empty field shows its control (a date box reading `dd/mm/yyyy`, a dropdown reading `Select`), never the word "Empty". **StageTrack** is the pipeline strip and the health pill as one signal.
- The strip has **five segments always**; the database has seven stages. Closed and Cancelled are not segments: they freeze the strip as it last was. A stage is `done`, `current` or `todo`, and short names stand in where a bar is narrow.
- The current stage takes the record's health colour (on track, at risk, overdue): the bold name says where you are, the bar says how it is going.
- Measured live: the done bars are `#414042` (Foundation Black), which Momentum reserves for the black lockup (Hub `BRAND_CHECK.md` F28). In Deep Eco the to-do segments draw their label in `#eef4f3` on `#e1e1d9` (1.2:1, computed) and the current segment is white on `#3fb37f` (2.6:1): both fail AA (F29).
