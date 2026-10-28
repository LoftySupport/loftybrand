<!-- projects/lofty-smart-drawing.md : 28 October 2026. Notes for the project index. -->
# Lofty Smart Drawing

Turns an architectural PDF drawing set into one clickable offline HTML file: doors, rooms, windows and wall types open their schedule rows, finish codes are decoded, detail bubbles jump to their sheet, and a search bar lights up every instance of a tag.

# Files

Vendored under [`lofty-smart-drawing/`](./lofty-smart-drawing/): `SKILL.md`, `scripts/` (Python, PyMuPDF and openpyxl), `hub_product_map.json`, `requirements.txt` and `UPSTREAM_LICENSE`. `scripts/lofty_takeoff.py` is Lofty's own addition: it reads a residential set and writes an Excel takeoff workbook.

# Source and licence

Adapted from [AutoConst smart-drawing](https://github.com/hamzaabduljabbar/autoConst-smart-drawing) by Hamza Jabbar, copied on 28 October 2026 at its default branch's head. The AutoConst Source Available License allows internal business use and modification with attribution and bars resale or rebranding as a product. Do not publish this folder outside Lofty. See `NOTICE.md`.

# What it consumes

Nothing from the design system yet. The viewer has its own styling (see `lofty-smart-drawing/HANDOFF.md`).
