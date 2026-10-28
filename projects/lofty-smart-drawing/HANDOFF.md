<!-- projects/lofty-smart-drawing/HANDOFF.md : outstanding items only. Updated 28 October 2026. -->
# Handoff: Lofty smart drawing

Outstanding items only. What it is: `../lofty-smart-drawing.md`. How to run it: `SKILL.md`.

## Needs Amber

- **Viewer styling.** `scripts/viewer_template.html` keeps the upstream look (its own CSS). It is not on Lofty Momentum tokens. Restyling it is a new template and styling, so it needs your approval first.
- **Second drawing set.** `lofty_takeoff.py` has run on one set only (Job 1393, Rev F). Run it on a second drafter's set before relying on the tag patterns (AAW, AFW, ASD) and the area table layout.
- **Confirm tag meanings.** Type (AAW awning, AFW fixed, ASD sliding door) and size (24.12 as 2400 high x 1200 wide) are inferred. Confirm with whoever drafts the plans.
- **BoQ lines are drafts.** Windows are bought by quote in the Hub, so the lines map to `Windows as per Quote` (1330.001), `Garage Door/s as per Quote` (1620.0001), `Waterproof Window Sills` (1550.160, LM) and `Window Surrounds` (1445.080, LM). A person confirms each line. The Hub has no BoQ screens or write route yet (Estimating stage 3), so nothing is loaded.

## Next steps

- Decide whether it should read Lofty's Hub job number and SharePoint folder (output to the job folder) once a run is proven.
- Upstream's IndyGo example (5 MB `smart-drawing.html`, `index.db`) was left out on purpose. Fetch it from the upstream repository if you want a sample.
- Measured checks use the drawn line width as the tolerance and cover the site boundary, slab outline and four areas. Window sizes and room areas are not measured.
- OpenTakeoff (AGPL-3.0) measures from plans and may suit manual takeoffs. Vetting is not finished (see `LoftySupport/skills` `docs/vetting-log.md`).
- `--compare` was tested on an altered copy of the same set (an added sheet, one edited area), not on two real revisions. Run it on Rev E against Rev F.
