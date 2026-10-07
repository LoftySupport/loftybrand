#!/usr/bin/env python3
# momentum/font-lab/measure-fonts.py : measures Fieldwork (this repository's assets/fonts) and each candidate body face (Google Fonts, open licence)
# and writes momentum/font-lab/metrics.json, which the Font Lab page embeds. 7 October 2026.
# Needs: pip install fonttools brotli. Needs internet to fetch the candidate files (cached in the folder given as the second argument).
# Usage: python3 momentum/font-lab/measure-fonts.py momentum/font-lab/metrics.json /tmp/lofty-font-cache
import re, sys, os, json, urllib.request, urllib.parse
from fontTools.ttLib import TTFont
from fontTools.pens.boundsPen import BoundsPen

OUT = sys.argv[1]
CACHE = sys.argv[2] if len(sys.argv) > 2 else "/tmp/lofty-font-cache"
REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
os.makedirs(CACHE, exist_ok=True)
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
FAMILIES = ["Hanken Grotesk", "Manrope", "Albert Sans", "Figtree", "Onest", "Plus Jakarta Sans", "Montserrat", "Jost", "Outfit", "Space Grotesk"]
LOWER = "abcdefghijklmnopqrstuvwxyz"

def fetch(url, dest):
    if not os.path.exists(dest):
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=40) as r, open(dest, "wb") as f:
            f.write(r.read())
    return dest

def google_latin(family, weight):
    css_url = "https://fonts.googleapis.com/css2?family=%s:wght@%d&display=swap" % (urllib.parse.quote_plus(family), weight)
    req = urllib.request.Request(css_url, headers={"User-Agent": UA})
    css = urllib.request.urlopen(req, timeout=40).read().decode()
    for block in re.finditer(r"/\*\s*([\w-]+)\s*\*/\s*@font-face\s*\{([^}]*)\}", css):
        if block.group(1) == "latin":
            url = re.search(r"url\((https://[^)]+)\)", block.group(2)).group(1)
            return fetch(url, os.path.join(CACHE, "%s-%d.woff2" % (family.replace(" ", ""), weight)))
    raise RuntimeError("no latin subset for %s %d" % (family, weight))

def stem_width(gs, glyph, y, upm):
    # Thickness of the first stroke the line y crosses on the glyph: a horizontal cross-section through the stem of the lowercase l,
    # at half the lowercase height, clear of serifs, tails and joins. Sampled every 2 font units.
    from fontTools.pens.pointInsidePen import PointInsidePen
    bp = BoundsPen(gs); gs[glyph].draw(bp); xmin, _, xmax, _ = bp.bounds
    run = 0; started = False; x = int(xmin)
    while x <= xmax:
        pen = PointInsidePen(gs, (x, y)); gs[glyph].draw(pen)
        if pen.getResult():
            run += 2; started = True
        elif started:
            break
        x += 2
    return run / upm

def measure(path):
    f = TTFont(path)
    upm = f["head"].unitsPerEm
    cmap = f.getBestCmap()
    gs = f.getGlyphSet()
    hmtx = f["hmtx"]
    def bounds(ch):
        bp = BoundsPen(gs)
        gs[cmap[ord(ch)]].draw(bp)
        return bp.bounds
    x = bounds("x")[3] / upm
    cap = bounds("H")[3] / upm
    adv = [hmtx[cmap[ord(c)]][0] for c in LOWER if ord(c) in cmap]
    stem = stem_width(gs, cmap[ord("l")], int(x * upm / 2), upm)
    return {"x": round(x, 3), "cap": round(cap, 3), "xcap": round(x / cap, 3), "avg": round(sum(adv) / len(adv) / upm, 3), "stem": round(stem, 3)}

rows = []
FW = [("Fieldwork Hum", "Light", "Fieldwork-Hum-Light.woff"), ("Fieldwork Hum", "DemiBold", "Fieldwork-Hum-DemiBold.woff"),
      ("Fieldwork Geo", "Light", "Fieldwork-Geo-Light.woff"), ("Fieldwork Geo", "Demibold", "Fieldwork-Geo-Demibold.woff")]
fw = {}
for name, cut, fn in FW:
    fw.setdefault(name, {})[cut] = measure(os.path.join(REPO, "assets", "fonts", fn))
for name, cuts in fw.items():
    light, bold = list(cuts.values())
    rows.append({"key": name, "brand": True, "x": light["x"], "cap": light["cap"], "xcap": light["xcap"],
                 "avg": round((light["avg"] + bold["avg"]) / 2, 3), "stem400": light["stem"], "stem600": bold["stem"],
                 "source": "Fieldwork Light (300) and DemiBold (600), assets/fonts"})
for fam in FAMILIES:
    m400 = measure(google_latin(fam, 400))
    m600 = measure(google_latin(fam, 600))
    rows.append({"key": fam, "brand": False, "x": m400["x"], "cap": m400["cap"], "xcap": m400["xcap"], "avg": m400["avg"],
                 "stem400": m400["stem"], "stem600": m600["stem"], "source": "Google Fonts latin subset, weights 400 and 600"})
json.dump(rows, open(OUT, "w"), indent=1)

# Refresh the measurements embedded in the page between the METRICS markers.
page = os.path.join(os.path.dirname(os.path.abspath(OUT)), "index.html")
if os.path.exists(page):
    html = open(page, encoding="utf-8").read()
    new = re.sub(r"/\*METRICS-START\*/.*?/\*METRICS-END\*/", lambda m: "/*METRICS-START*/const METRICS = " + json.dumps(rows) + ";/*METRICS-END*/", html, flags=re.S)
    open(page, "w", encoding="utf-8").write(new)
    print("updated", page)
print("%-20s %6s %6s %6s %6s %7s %7s" % ("font", "x/em", "cap/em", "x/cap", "avg", "stem400", "stem600"))
for r in rows:
    print("%-20s %6.3f %6.3f %6.3f %6.3f %7.3f %7.3f" % (r["key"], r["x"], r["cap"], r["xcap"], r["avg"], r["stem400"], r["stem600"]))
