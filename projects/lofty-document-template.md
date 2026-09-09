# Lofty Document Template

Lofty's house document master: memo, report, proposal or quote, meeting
minutes, scope of works, policy or procedure, letter, site or job report.

**Design project:** https://claude.ai/design/p/4f301362-e8f0-4e5b-8ed3-9f8786261924

## Files

Vendored under [`lofty-document-template/`](./lofty-document-template/), with
`assets/` (logos, brand shapes, the six Fieldwork cuts) and `doc-page.js`.

| File | Use |
| --- | --- |
| `Lofty Document Template.dc.html` | Master. Fieldwork Geo, embedded. Print and PDF |
| `Lofty Document Template -Montserrat-.dc.html` | Same document in Montserrat, for a .docx a client will edit |
| `Lofty Cover Page.dc.html` | Standalone cover, no running chrome |
| `Lofty Cover Page v2.dc.html` | Standalone cover with the organic shape in the corner |

It ships its own `SKILL.md`, so Claude Code can produce a correct Lofty
document from the folder alone.

## What it consumes

The brand palette by value, the six Fieldwork `.woff` cuts, the white and
orange logos, and the lines/shapes silhouettes. It does **not** use the screen
type scale, the semantic token layer or the component bundle — this is a
brand-led print surface, and the divergence is deliberate.

## Why it diverges

Print carries different constraints. Type is set in points against A4 with a
14pt heading and 8pt body floor. Colour is applied to ink on white rather than
through a themed semantic layer, and there is no dark mode. Fieldwork has only
Light (300) and Demi Bold (600) cuts, so the document scale uses those two
weights exclusively and never applies synthetic bold to a Light heading.

The values still come from the same brand kit: Foundation Black `#414042` for
all text, Crisp Orange `#f47e63` as the highlight, Eco Green `#005058` used
once on the cover title header.

## Page setup

A4 via `<doc-page size="a4" margin="1cm 0.7in 1cm">`, one column, ranged left.
Running header carries the logo and a rule; running footer carries the document
name, date, version, confidentiality line and page number. Cover and back page
cover the running chrome — in Word that is "different first page" plus a
section break before the back page. Page numbers only auto-increment once the
file is in Word.

## If the brand palette changes here

This project holds brand values as literals, not token references. A brand
colour change requires a find-and-replace across all four `.dc.html` files and
its `SKILL.md` colour table.
