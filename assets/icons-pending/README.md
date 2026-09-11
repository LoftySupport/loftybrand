# Three traced glyphs held back

`Contacts.svg`, `Dashboard.svg` and `Team.svg` arrived with the Lofty Hub icon re-supply
(see [`../../docs/icons-lofty-audit.md`](../../docs/icons-lofty-audit.md)). The merge map sends
all fourteen traced SVGs to `assets/icons/`. These three are held here instead, because
**`assets/icons/` already carries a different glyph under each of those names** — and they are
not weight variants of the same mark, they are different drawings:

| Name | What `assets/icons/` holds today | What the traced file draws |
| --- | --- | --- |
| `Contacts` | Three filled people, 20×20 | An address card with ruled lines, 24×24 stroked |
| `Dashboard` | The design-system glyph | The Lofty construction glyph |
| `Team` | The design-system glyph | The Lofty construction glyph |

Copying over them would silently change the icon everywhere the existing name is used, which is
the blanket-replacement failure the handoff brief warns about. The other eleven were safe and are
merged: four replaced PNG-wrapping placeholders of the same mark, seven were new names.

`ICONS.md` lists sixteen glyphs that *should* use the design-system version rather than a Lofty
one — Settings, Person, Location, Bookmark, Search, Note, Group, the chevrons, Warning, Calendar,
Folder, ExternalPage, Edit, CloseSmall, Fullscreen, Add. These three are not on that list.

**But this repository's own rule points the other way.** `CLAUDE.md`: *"default to the Vibe icon
set in `assets/icons` unless a Lofty-drawn icon is supplied. Construction/domain icons are the
Lofty additions, drawn to the same rules."* Contacts, Dashboard and Team are not construction or
domain concepts — they are generic application concepts Vibe already covers, unlike Job,
JobMeasure, Projects, Maintenance, Reports, Design and Documents, which are exactly the domain
additions that rule describes. On that reading the Vibe glyphs stay and these three are the ones
that need another name.

## The decision needed

Either the Lofty glyph wins for these three and the existing design-system icons move aside under
another name, or the Lofty ones take distinct names (`ContactsLofty`, or a `lofty/` subfolder).
Whoever decides should look at both drawings side by side — `icon-proof.html` in the source
package shows the traces against their PNGs.

Nothing references this folder. Delete it once the three are placed.
