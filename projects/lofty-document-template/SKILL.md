---
name: lofty-document-template
description: Lofty's house document template — memo, report, proposal or quote, meeting minutes, scope of works, policy or procedure, letter, site or job report. Use whenever a Lofty-branded document is requested. Carries the A4 page setup, brand type scale, colour rules and section order for each document type.
---

# Lofty document template

Use this whenever asked for a Lofty document: memo, report, proposal or quote, meeting minutes, scope of works, policy or procedure, letter, site or job report.

## Start from the existing files, do not rebuild

| File | Use |
| --- | --- |
| `Lofty Document Template.dc.html` | Master. Brand fonts (Fieldwork Geo, embedded). Print and PDF. |
| `Lofty Document Template -Montserrat-.dc.html` | Same document, Montserrat throughout. For .docx a client will edit. |
| `Lofty Cover Page.dc.html` | Standalone cover, no header or footer. |
| `Lofty Cover Page v2.dc.html` | Standalone cover with the organic shape in the corner. |

Copy the master, rename it for the job, then delete the sections the document does not need. Keep the order of the sections that remain. Build a new file from scratch only if asked for one.

## Page setup

- A4, `<doc-page size="a4" margin="1cm 0.7in 1cm">`, one column, ranged left.
- Running header: Lofty logo 36px top-left, 1px `#e1e1d9` rule under it, 20px clear below the rule.
- Running footer: document name with `©` and the date beneath it on the left; version, confidentiality line and page number on the right. 28px clear above the rule.
- Page 1 (cover) and the last page (back page) cover the running chrome with `z-index: 3` and negative margins. In Word this is "different first page" plus a section break before the back page.
- `[data-pb]` dashed "page break" markers sit at each break, 100px clear either side, hidden at print.
- Page numbers are a placeholder. They only auto-increment once the file is in Word.

## Type — brand kit values

One typeface family. Headings never below 14pt at −0.01em tracking; body never below 8pt at −0.02em.

| Style | Font | Size / line | Tracking | Colour |
| --- | --- | --- | --- | --- |
| Title header | Geo Demi Bold | 8.5 / 11pt, uppercase | 0.14em | `#005058` |
| Title | Geo Demi Bold | 32 / 36pt | −0.01em | `#414042` |
| Subtitle | Geo Light | 13 / 19pt | −0.02em | `#67666a` |
| Level 1 | Geo Demi Bold | 32 / 36pt | −0.01em | `#414042` |
| Level 2 | Geo Demi Bold | 20 / 24pt | −0.01em | `#414042`, 2px `#f47e63` rule below |
| Level 3 | Geo Demi Bold | 16 / 21pt | −0.01em | `#414042` |
| Level 4 | Geo Demi Bold | 14 / 19pt | −0.01em | `#414042` |
| Level 5 | Geo Demi Bold | 10.5 / 17pt | −0.02em | `#414042` |
| Level 6 | Italic Light | 9.5 / 15pt | −0.02em | `#67666a` |
| Body | Geo Light | 10.5 / 17pt | −0.02em | `#414042` |

Fieldwork has no Regular or Medium cut — only Light (300) and Demi Bold (600). Never apply synthetic bold to a Light heading. Fallback order is Montserrat first, then Arial. Do not substitute Helvetica, Calibri or Aptos. Sending brand-font .docx requires Word's embed-fonts option.

Spacing: L2 26pt above / 10pt below; L3 18/8; L4 16/6; body 0/14; lists 8 above, 22 below, 6 between items; tables and figures 12 above, caption 8 below the object, 26 below the caption.

## Colour

- `#414042` Foundation Black — all headings and body.
- `#f47e63` Crisp Orange — the highlight. Section rules, callouts, pull-out bar.
- `#005058` Eco Green — once only, the cover title header.
- `#e1e1d9` layout rules, `#f9f9f6` table header fill, `#8a898d` / `#67666a` secondary text.
- Status colours (`#00854d`, `#d83a52`, `#ffcb00` tints) only inside status columns.

## Elements available in the master

Cover, contents, L1–L6 headings, bulleted and numbered lists (two levels maximum), callout box, data table with grey header and total row, key/value table, pull-out quote, photo placeholder with figure caption, section-order reference, approval table, signature blocks, Appendix A revision history, Appendix B type and font reference, Foundation Black back page with the white logo and address block.

## Section order by document type

- **Internal memo** — no cover. To, from, date, subject · Purpose · Background · Decision or ask · Next steps
- **Report** — Cover · Contents · Purpose and scope · Background · Findings · Recommendations · Next steps · Appendices
- **Proposal or quote** — Cover · Understanding of the brief · Approach · Schedule · Price schedule · Inclusions and exclusions · Terms · Acceptance and signature
- **Meeting minutes** — no cover. Attendees and apologies · Agenda items · Decisions · Actions table
- **Scope of works** — Cover · Site and contract details · Works included · Works excluded · Programme · Site requirements · Approvals
- **Policy or procedure** — Cover · Purpose · Who it applies to · Definitions · The policy · Procedure steps · Responsibilities · Revision history
- **Letter** — no cover, no contents. Recipient address · Date · Subject line · Body · Sign-off and signature block
- **Site or job report** — Cover · Job details · Work completed · Photographs · Issues raised · Hours and materials · Sign-off

## Copy

Sentence case in every heading and label. Australian English. No emoji, no exclamation marks. Bullets are one idea each. Captions state what the object shows. Update the footer version and date and the revision history on every reissue.

## Back page

Foundation Black, white logo centred, then:

```
Lofty Building Group Pty Ltd
11 King William Street,
Kent Town, SA 5067

+61 8 8266 0011
www.lofty.com.au
BLD: 271 885
```

## Assets

`assets/logo.png`, `assets/lofty-logo-white.png`, `assets/fonts/Fieldwork-*.woff`, `assets/lofty-lines-02-orange.svg` and `assets/lofty-shapes-*.svg` (backgrounds only, cropped by the page edge, never under text).
