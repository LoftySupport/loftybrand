#!/usr/bin/env python3
# .claude/skills/lofty-smart-drawing/scripts/lofty_takeoff.py : Lofty residential drawing set -> Excel (tag counts, printed quantities, consistency checks)
"""Reads a vector PDF working-drawing set the way Lofty drafts it: windows tagged inline (AAW 24.12),
quantities printed on the plans, no schedule tables.

Usage: python3 -I lofty_takeoff.py set.pdf --out out/takeoff.xlsx

Every row carries its sheet and a status: Verified (read straight off the sheet), Inferred (worked out
from a code or a rule) or Review (a person must look). Nothing is measured from line geometry."""
import argparse
import json
import os
import re

import pymupdf
from collections import Counter
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

TAG_CODES = {"AAW": "Aluminium awning window", "AFW": "Aluminium fixed window", "ASD": "Aluminium sliding door"}
NUM = re.compile(r"^\d{2,3}\.\d{2}$")


def page_title(text):
    t = text.upper()
    return "Ground floor" if "GROUND FLOOR PLAN" in t else "First floor" if "FIRST FLOOR PLAN" in t else ""


def size_of(num):
    h, w = num.split(".")
    height = int(h) * 10 if len(h) == 3 and h[0] == "0" else int(h) if len(h) == 3 else int(h) * 100
    return height, int(w) * 100, len(h) == 3 and h[0] != "0"


def read_tags(doc):
    """A tag is a code word with a number word beside it (right, left, or above when rotated)."""
    tags = []
    for i, p in enumerate(doc):
        words = p.get_text("words")
        floor = page_title(p.get_text())
        for a in words:
            if a[4] not in TAG_CODES:
                continue
            cand = []
            for b in words:
                if not NUM.match(b[4]):
                    continue
                if abs(b[1] - a[1]) < 3 and -1 < b[0] - a[2] < 6:
                    cand.append((b[0] - a[2], b))
                elif abs(b[1] - a[1]) < 3 and -1 < a[0] - b[2] < 6:
                    cand.append((a[0] - b[2] + 3, b))
                elif abs(b[0] - a[0]) < 5 and -2 < a[1] - b[3] < 6:
                    cand.append((a[1] - b[3], b))
            if not cand:
                continue
            b = min(cand, key=lambda c: c[0])[1]
            cx, cy = (a[0] + a[2] + b[0] + b[2]) / 4, (a[1] + a[3] + b[1] + b[3]) / 4
            lowe = any("LOW" in w[4] and abs((w[0] + w[2]) / 2 - cx) < 45 and abs((w[1] + w[3]) / 2 - cy) < 30 for w in words)
            dg = any(w[4].strip("()") == "DG" and abs((w[0] + w[2]) / 2 - cx) < 60 and abs((w[1] + w[3]) / 2 - cy) < 40 for w in words)
            h, w_, odd = size_of(b[4])
            tags.append({"sheet": i + 1, "floor": floor, "code": a[4], "num": b[4], "h": h, "w": w_, "odd": odd, "lowe": lowe, "dg": dg})
    return tags


def read_areas(doc):
    """The AREAS table: labels in a column, values to their right, matched by nearest row."""
    for i, p in enumerate(doc):
        words = p.get_text("words")
        head = next((w for w in words if w[4] == "AREAS" and any(m[4].startswith("m") and abs(m[1] - w[1]) < 3 and 0 < m[0] - w[2] < 60 for m in words)), None)
        if not head:
            continue
        zone = [w for w in words if head[0] - 5 < w[0] < head[0] + 150 and head[3] < w[1] < head[3] + 110]
        nums = [w for w in zone if re.match(r"^\d+\.\d+$", w[4])]
        labels = {}
        for w in zone:
            if re.match(r"^[A-Z']+$", w[4]) and w[0] < head[0] + 60 and w[4] not in ("DATE", "REVISION"):
                key = round(w[1] / 4)
                labels.setdefault(key, []).append(w)
        rows = []
        for n in nums:
            near = min(labels.values(), key=lambda ls: abs(ls[0][1] - n[1]))
            if abs(near[0][1] - n[1]) < 6:
                rows.append((" ".join(x[4] for x in sorted(near, key=lambda x: x[0])).title(), float(n[4])))
        return i + 1, sorted(rows, key=lambda r: r[0] == "Total")
    return None, []


def read_site(doc):
    out = []
    for i, p in enumerate(doc):
        for line in p.get_text().split("\n"):
            m = re.match(r"^([A-Z. ]+):\s*([\d.]+)\s*m2\s*(?:\((.*)\))?$", line.strip())
            if m:
                out.append((i + 1, m.group(1).title(), float(m.group(2)), m.group(3) or ""))
    return out


def read_heights(doc):
    found = []
    for i, p in enumerate(doc):
        for m in re.finditer(r"(\d{4})\s?CH\b", p.get_text()):
            found.append((i + 1, int(m.group(1))))
    return found


PT_MM = 25.4 / 72


def scale_after(doc, keyword):
    """Return (page index, scale denominator) from the first 'SCALE 1:n' after a plan title."""
    for i, p in enumerate(doc):
        t = p.get_text().upper()
        k = t.find(keyword)
        if k < 0:
            continue
        m = re.search(r"SCALE\s+1:(\d+)", t[k:])
        if m:
            return i, int(m.group(1))
    return None, None


def outlines(page, k_mm, min_stroke=1.0, min_m2=1.0):
    """Closed outlines drawn in wall-weight lines: (area m2, width mm, height mm, perimeter mm, stroke mm)."""
    out = []
    for x in page.get_drawings():
        w = x.get("width") or 0
        if w < min_stroke:
            continue
        pts = []
        for it in x["items"]:
            if it[0] == "l":
                if not pts:
                    pts.append(it[1])
                pts.append(it[2])
            elif it[0] == "re":
                r = it[1]
                pts = [r.tl, r.tr, r.br, r.bl]
            elif it[0] == "qu":
                q = it[1]
                pts = [q.ul, q.ur, q.lr, q.ll]
        if len(pts) < 4:
            continue
        a = 0
        per = 0
        for p, q in zip(pts, pts[1:] + pts[:1]):
            a += p.x * q.y - q.x * p.y
            per += ((p.x - q.x) ** 2 + (p.y - q.y) ** 2) ** 0.5
        r = x["rect"]
        m2 = abs(a) / 2 * k_mm * k_mm / 1e6
        if m2 >= min_m2 and r.width < 1000:
            out.append((m2, r.width * k_mm, r.height * k_mm, per * k_mm, w * k_mm))
    return out


def measured_checks(doc, areas, site):
    """Each row: check, read from sheet, measured from drawing, difference, status, sheet. Tolerance is the drawn line width."""
    rows = []
    items = dict(areas[1]) if areas[1] else {}
    # site boundary
    i, sc = scale_after(doc, "SITE SETOUT PLAN")
    if i is not None:
        k = sc * PT_MM
        txt = doc[i].get_text()
        edges = sorted({float(v) for v in re.findall(r"B'RY\s*([\d.]+)\s*m", txt)}, reverse=True)
        sitearea = next((v for _, kk, v, _ in site if kk == "Site"), None)
        best = None
        for x in doc[i].get_drawings():
            r = x["rect"]
            if len(edges) >= 2 and abs(r.width * k - edges[0] * 1000) < edges[0] * 1000 * 0.03 and abs(r.height * k - edges[1] * 1000) < edges[1] * 1000 * 0.03:
                best = r
                break
        if best is not None and sitearea:
            w, h = best.width * k, best.height * k
            m2 = w * h / 1e6
            tol = sitearea * 0.01
            rows.append(("Site boundary size and area", f"Boundary {edges[0]:g} x {edges[1]:g} m, site {sitearea:g} m2", f"{w / 1000:.2f} x {h / 1000:.2f} m, {m2:.1f} m2", f"{m2 - sitearea:+.1f} m2 (within {tol:.1f} m2)", "PASS" if abs(m2 - sitearea) <= tol else "DIFF", i + 1))
        # outlines on the site plan against the areas table
        polys = outlines(doc[i], k, min_stroke=1.2)
        for label in ("Lower Living", "Garage", "Alfresco", "Porch"):
            if label not in items:
                continue
            printed = items[label]
            near = min(polys, key=lambda p: abs(p[0] - printed), default=None)
            if near and abs(near[0] - printed) <= max(0.05 * printed, near[3] * near[4] / 1e6):
                tol = max(0.05 * printed, near[3] * near[4] / 1e6)
                rows.append((f"{label} area", f"{printed:g} m2 in the areas table", f"{near[0]:.2f} m2 outline on site plan", f"{near[0] - printed:+.2f} m2 (within {tol:.2f} m2)", "PASS", i + 1))
            else:
                rows.append((f"{label} area", f"{printed:g} m2 in the areas table", "No outline within 5% found", "", "REVIEW", i + 1))
        got = [r for r in rows if r[0].endswith(" area") and r[5] == i + 1 and r[4] == "PASS"]
        cover = next((v for _, kk, v, _ in site if kk == "Sitecover"), None)
        if cover and len(got) == 4:
            tot = sum(float(r[2].split()[0]) for r in got)
            rows.append(("Site cover from measured outlines", f"{cover:g} m2 printed site cover", f"{tot:.2f} m2 (lower living, garage, alfresco, porch outlines)", f"{tot - cover:+.2f} m2", "PASS" if abs(tot - cover) <= 1.0 else "REVIEW", i + 1))
    # slab overall dimensions and footprint
    i, sc = scale_after(doc, "SLAB LAYOUT")
    if i is not None:
        k = sc * PT_MM
        txt = doc[i].get_text()
        overall = sorted({int(v) for v in re.findall(r"(\d{4,5})\s*-\s*OVERALL", txt)}, reverse=True)
        polys = outlines(doc[i], k, min_stroke=1.0, min_m2=20)
        if polys and overall:
            main = max(polys, key=lambda p: p[1] * p[2])
            tol = main[4]
            for printed, got, name in ((overall[0], main[1], "length"), (overall[-1], main[2], "depth")):
                rows.append((f"Slab overall {name}", f"{printed} mm printed", f"{got:.0f} mm measured", f"{got - printed:+.0f} mm (within {tol:.0f} mm line width)", "PASS" if abs(got - printed) <= tol else "DIFF", i + 1))
            living = items.get("Lower Living", 0) + items.get("Garage", 0)
            if living:
                tola = main[3] * main[4] / 1e6
                rows.append(("Slab footprint against ground floor areas", f"Lower living plus garage {living:.2f} m2 (porch {items.get('Porch', 0):g} m2 may be inside)", f"{main[0]:.2f} m2 slab outline", f"{main[0] - living:+.2f} m2 (within {tola:.2f} m2)", "PASS" if abs(main[0] - living) <= tola else "REVIEW", i + 1))
    return rows


def checks(doc, tags, areas, site, heights):
    rows = []
    sheet, items = areas
    if items:
        parts = [v for k, v in items if k != "Total"]
        total = next((v for k, v in items if k == "Total"), None)
        if total is not None:
            diff = round(sum(parts) - total, 2)
            rows.append(("Areas table adds to its total", f"{sum(parts):.2f} m2 against printed {total:.2f} m2", "PASS" if abs(diff) < 0.01 else "DIFF", sheet))
    s = {k: (v, note) for _, k, v, note in site}
    sheet1 = site[0][0] if site else ""
    if "Site" in s and "Sitecover" in s:
        pct = s["Sitecover"][0] / s["Site"][0] * 100
        printed = re.search(r"(\d+(?:\.\d+)?)%", s["Sitecover"][1])
        ok = printed and abs(pct - float(printed.group(1))) < 0.5
        rows.append(("Site cover percentage", f"{s['Sitecover'][0]:g} of {s['Site'][0]:g} m2 is {pct:.1f}%, printed {printed.group(1) if printed else 'none'}%", "PASS" if ok else "DIFF", sheet1))
    if items and "Sitecover" in s:
        ground = sum(v for k, v in items if k in ("Lower Living", "Garage", "Porch", "Alfresco"))
        diff = ground - s["Sitecover"][0]
        rows.append(("Site cover against ground floor areas", f"Lower living, garage, porch and alfresco add to {ground:.2f} m2, printed site cover {s['Sitecover'][0]:g} m2 (difference {diff:.2f} m2)", "REVIEW" if abs(diff) > 0.5 else "PASS", sheet1))
    if "Front Soft Landscaping" in s and "Rear Soft Landscaping" in s and "Total Soft Landscaping" in s:
        tot = s["Front Soft Landscaping"][0] + s["Rear Soft Landscaping"][0]
        rows.append(("Soft landscaping adds up", f"{tot:.2f} m2 against printed {s['Total Soft Landscaping'][0]:.2f} m2", "PASS" if abs(tot - s["Total Soft Landscaping"][0]) < 0.01 else "DIFF", sheet1))
        pct = s["Total Soft Landscaping"][0] / s["Site"][0] * 100
        pr = re.search(r"(\d+(?:\.\d+)?)%", s["Total Soft Landscaping"][1])
        if pr:
            rows.append(("Total soft landscaping percentage", f"{pct:.2f}% of site, printed {pr.group(1)}%", "PASS" if abs(pct - float(pr.group(1))) < 0.005 else "REVIEW", sheet1))
    vals = Counter(v for _, v in heights)
    odd = sorted(v for v in vals if v not in (3000, 2700))
    rows.append(("Ceiling heights on every sheet", "Only 3000 (ground) and 2700 (upper) are printed" if not odd else f"Other ceiling heights printed: {odd}. 3030 reads as the pitch height, likely 3000 plus 30 mm (inferred). Confirm.", "PASS" if not odd else "REVIEW", ", ".join(sorted({str(p) for p, v in heights})) or ""))
    noLowe = [t for t in tags if not t["lowe"] and not t["dg"]]
    dgOnly = [t for t in tags if not t["lowe"] and t["dg"]]
    if dgOnly:
        rows.append(("Windows marked (DG) instead of (LOW-E)", f"{len(dgOnly)} tags are marked (DG), double glazing, which matches the energy note for the family windows and meals stacker door: " + ", ".join(f"{t['code']} {t['num']}" for t in dgOnly), "PASS", ", ".join(sorted({str(t['sheet']) for t in dgOnly}))))
    if noLowe:
        rows.append(("Low-E note against tags", f"{len(noLowe)} of {len(tags)} tags have neither (LOW-E) nor (DG) beside them: " + ", ".join(f"{t['code']} {t['num']} ({t['floor'] or 'sheet ' + str(t['sheet'])})" for t in noLowe) + ". The energy note excludes family and dining. Check these against the plan.", "REVIEW" if noLowe else "PASS", ", ".join(sorted({str(t['sheet']) for t in noLowe}))))
    odd_h = [t for t in tags if t["odd"]]
    for t in odd_h:
        rows.append((f"Unusual tag height {t['code']} {t['num']}", f"Reads as {t['h']} high. Other tags are 450 or 2100 to 2400.", "REVIEW", t["sheet"]))
    cond = any("SILL HEIGHTS LESS THAN" in p.get_text().upper().replace("\n", " ") for p in doc)
    if cond:
        up = [t for t in tags if t["floor"] == "First floor"]
        rows.append(("Planning condition 2, upper storey windows", f"Sheet 1 says upper storey side and rear windows with sill under 1.5 m must be obscured and fixed or open 125 mm at most. {len(up)} first floor tags exist. Sill heights and which face the side or rear are not on the tags.", "REVIEW", 1))
    return rows



def boq_lines(doc, tags):
    """Draft BoQ lines and a window schedule. Hub codes come from hub_product_map.json (read from the live products table, never from this script)."""
    m = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "hub_product_map.json")))
    wins = [t for t in tags if t["code"] != "ASD"]
    doors = [t for t in tags if t["code"] == "ASD"]
    run = sum(t["w"] for t in wins) / 1000
    perim = sum(2 * (t["w"] + t["h"]) for t in wins) / 1000
    garage = None
    for p_i, p in enumerate(doc):
        g = re.search(r"(\d{2})\.(\d{2})\s+AUTO PANEL LIFT", p.get_text())
        if g:
            garage = (int(g.group(1)) * 100, int(g.group(2)) * 100, p_i + 1)
            break
    lines = []
    w = m["windows_quote"]
    lines.append(["Windows and stacker door for a window package", w["code"], w["description"], 1, w["unit"], f"{len(wins)} windows and {len(doors)} sliding door tagged on the plans, see Window schedule", "Needs a person: supplier quote, sizes inferred from tag codes", ", ".join(sorted({str(t['sheet']) for t in tags}))])
    if garage:
        g = m["garage_door_quote"]
        lines.append(["Garage door", g["code"], g["description"], 1, g["unit"] or "", f"Panel lift {garage[1]} x {garage[0]} mm noted on the plan", "Needs a person: supplier quote", garage[2]])
    s_ = m["window_sills"]
    lines.append(["Window sill length", s_["code"], s_["description"], round(run, 1), s_["unit"], f"Sum of the {len(wins)} window widths from tag codes", "Needs a person: confirm which windows take a waterproofed sill", ", ".join(sorted({str(t['sheet']) for t in wins}))])
    su = m["window_surrounds"]
    lines.append(["Window surround length", su["code"], su["description"], round(perim, 1), su["unit"], f"Perimeter of the {len(wins)} windows from tag codes", "Needs a person: confirm which windows take surrounds", ", ".join(sorted({str(t['sheet']) for t in wins}))])
    groups = {}
    for t in tags:
        groups.setdefault((t["code"], t["num"]), []).append(t)
    sched = []
    for (code, num), ts in sorted(groups.items()):
        glaze = sorted({"LOW-E" if t["lowe"] else "DG" if t["dg"] else "None noted" for t in ts})
        sched.append([f"{code} {num}", TAG_CODES[code], ts[0]["h"], ts[0]["w"], len(ts), sum(t["floor"] == "Ground floor" for t in ts), sum(t["floor"] == "First floor" for t in ts), ", ".join(glaze), ", ".join(sorted({str(t["sheet"]) for t in ts}))])
    return lines, sched


def page_lines(page):
    out = []
    for l in page.get_text().split("\n"):
        l = re.sub(r"\s+", " ", l.strip().upper())
        if len(l) >= 2:
            out.append(l)
    return out


def chrome_of(pages):
    """Lines repeated on most sheets (title block, notices). Compared once, not per sheet."""
    c = Counter()
    for ls in pages:
        c.update(set(ls))
    return {l for l, n in c.items() if n >= max(2, 0.6 * len(pages))}


def revision_of(doc):
    m = re.search(r"REV:\s*([A-Z])\b", doc[0].get_text().upper())
    return m.group(1) if m else ""


def compare_docs(new, old, tags_new, areas_new, site_new, chk_new):
    """Rows: area, sheet in new, sheet in old, change, item, old value, new value. Old is the earlier version."""
    rows = []
    pn = [page_lines(p) for p in new]
    po = [page_lines(p) for p in old]
    cn, co = chrome_of(pn), chrome_of(po)
    rows.append(["Revision", "", "", "Version", "Revision letter on sheet 1", revision_of(old) or "not found", revision_of(new) or "not found"])
    if len(old) != len(new):
        rows.append(["Revision", "", "", "Sheets", "Sheet count", len(old), len(new)])
    for l in sorted(cn - co):
        rows.append(["Title block", "", "", "Added", l, "", l])
    for l in sorted(co - cn):
        rows.append(["Title block", "", "", "Removed", l, l, ""])
    # match sheets by text similarity
    sims = []
    for i, a in enumerate(pn):
        sa = set(a) - cn
        for j, b in enumerate(po):
            sb = set(b) - co
            u = len(sa | sb)
            sims.append((len(sa & sb) / u if u else 1.0, i, j))
    used_i, used_j, pairs = set(), set(), []
    for sim, i, j in sorted(sims, reverse=True):
        if i in used_i or j in used_j or sim < 0.3:
            continue
        used_i.add(i)
        used_j.add(j)
        pairs.append((i, j, sim))
    for i in range(len(pn)):
        if i not in used_i:
            rows.append(["Sheet", i + 1, "", "Added sheet", "No matching sheet in the earlier version", "", f"Sheet {i + 1}"])
    for j in range(len(po)):
        if j not in used_j:
            rows.append(["Sheet", "", j + 1, "Removed sheet", "No matching sheet in the later version", f"Sheet {j + 1}", ""])
    for i, j, sim in sorted(pairs):
        a = set(pn[i]) - cn
        b = set(po[j]) - co
        for l in sorted(b - a):
            rows.append(["Text", i + 1, j + 1, "Removed", l, l, ""])
        for l in sorted(a - b):
            rows.append(["Text", i + 1, j + 1, "Added", l, "", l])
    # tags
    tags_old = read_tags(old)
    cn_, co_ = Counter(f"{t['code']} {t['num']}" for t in tags_new), Counter(f"{t['code']} {t['num']}" for t in tags_old)
    for k in sorted(set(cn_) | set(co_)):
        if cn_[k] != co_[k]:
            rows.append(["Tags", "", "", "Count changed" if cn_[k] and co_[k] else "Added" if cn_[k] else "Removed", k, co_[k], cn_[k]])
    # printed quantities
    ao, so = read_areas(old), read_site(old)
    qo = {k: v for k, v in ao[1]}
    qo.update({k: v for _, k, v, _ in so})
    qn = {k: v for k, v in areas_new[1]}
    qn.update({k: v for _, k, v, _ in site_new})
    for k in sorted(set(qn) | set(qo)):
        if qn.get(k) != qo.get(k):
            rows.append(["Quantity", "", "", "Changed" if k in qn and k in qo else "Added" if k in qn else "Removed", k, qo.get(k, ""), qn.get(k, "")])
    # checks
    old_chk = {r[0]: r for r in measured_checks(old, ao, so)}
    for r in chk_new:
        o = old_chk.get(r[0])
        if o and (o[4] != r[4] or o[2] != r[2]):
            rows.append(["Check", r[5], o[5], "Result changed", r[0], f"{o[2]} ({o[4]})", f"{r[2]} ({r[4]})"])
    return rows


def style(ws, widths):
    for c in ws[1]:
        c.font = Font(bold=True, color="081A1C")
        c.fill = PatternFill("solid", fgColor="F47E63")
        c.alignment = Alignment(vertical="center")
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[chr(64 + i)].width = w
    for row in ws.iter_rows(min_row=2):
        for c in row:
            c.alignment = Alignment(wrap_text=True, vertical="top")
    ws.freeze_panes = "A2"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("--out", required=True)
    ap.add_argument("--compare", help="an earlier version of the same set, to list what changed")
    a = ap.parse_args()
    doc = pymupdf.open(a.pdf)
    if not any(p.get_text().strip() for p in doc):
        raise SystemExit("No text layer: this is a scanned set and the skill does not OCR.")
    tags, areas, site, heights = read_tags(doc), read_areas(doc), read_site(doc), read_heights(doc)
    meas = measured_checks(doc, areas, site)
    chk = [(r[0], r[1], "Not measured: " + ("printed figures only" if r[2] == "PASS" else "needs a person or the plan"), "", r[2], r[3]) for r in checks(doc, tags, areas, site, heights)]
    chk = meas + chk
    wb = Workbook()
    ws = wb.active
    ws.title = "Summary"
    ws.append(["Item", "Value", "Status"])
    ws.append(["Source file", a.pdf.split("/")[-1], ""])
    ws.append(["Sheets read", len(doc), "Verified"])
    ws.append(["Window and door tags found", len(tags), "Verified"])
    ws.append(["Checks passed", sum(1 for r in chk if r[4] == "PASS"), ""])
    ws.append(["Checks to review or in difference", sum(1 for r in chk if r[4] != "PASS"), ""])
    ws.append(["Checks measured from the drawing geometry", len(meas), "Tolerance is the drawn line width"])
    ws.append(["Not done", "No window sizes measured, no pricing, no spec comparison", ""])
    style(ws, [34, 70, 12])
    ws = wb.create_sheet("Tags")
    ws.append(["Sheet", "Floor", "Tag", "Type (inferred)", "Height mm (inferred)", "Width mm (inferred)", "Glazing note beside tag", "Status"])
    for t in tags:
        ws.append([t["sheet"], t["floor"], f"{t['code']} {t['num']}", TAG_CODES[t["code"]], t["h"], t["w"], "LOW-E" if t["lowe"] else "DG" if t["dg"] else "None", "Review" if t["odd"] else "Inferred"])
    style(ws, [8, 14, 14, 26, 18, 18, 16, 10])
    ws = wb.create_sheet("Counts")
    ws.append(["Tag", "Type (inferred)", "Size mm H x W (inferred)", "Ground floor", "First floor", "Total"])
    groups = {}
    for t in tags:
        groups.setdefault((t["code"], t["num"]), []).append(t)
    for (code, num), ts in sorted(groups.items()):
        ws.append([f"{code} {num}", TAG_CODES[code], f"{ts[0]['h']} x {ts[0]['w']}", sum(t["floor"] == "Ground floor" for t in ts), sum(t["floor"] == "First floor" for t in ts), len(ts)])
    ws.append(["Total", "", "", sum(r[3] for r in ws.iter_rows(min_row=2, values_only=True) if r[0] != "Total"), sum(r[4] for r in ws.iter_rows(min_row=2, values_only=True) if r[0] != "Total"), len(tags)])
    style(ws, [14, 26, 24, 14, 12, 8])
    ws = wb.create_sheet("Printed quantities")
    ws.append(["Item", "Value", "Unit", "Sheet", "Status"])
    for k, v in areas[1]:
        ws.append([k, v, "m2", areas[0], "Verified"])
    for sh, k, v, note in site:
        ws.append([k + (f" ({note})" if note else ""), v, "m2", sh, "Verified"])
    for sh, v in sorted(set(heights)):
        ws.append(["Ceiling height printed", v, "mm", sh, "Verified"])
    for p_i, p in enumerate(doc):
        t = p.get_text()
        for m in re.finditer(r"(\d+) RISERS AT ([\d.]+)mm", t):
            ws.append(["Stair risers", int(m.group(1)), f"at {m.group(2)} mm", p_i + 1, "Verified"])
        for m in re.finditer(r"(\d+) GOINGS AT (\d+)mm", t):
            ws.append(["Stair goings", int(m.group(1)), f"at {m.group(2)} mm", p_i + 1, "Verified"])
    style(ws, [44, 12, 14, 8, 10])
    ws = wb.create_sheet("Checks")
    ws.append(["Check", "Read from sheet", "Measured from drawing", "Difference", "Status", "Sheet"])
    for r in chk:
        ws.append(list(r))
    style(ws, [36, 44, 44, 30, 10, 8])
    lines, sched = boq_lines(doc, tags)
    ws = wb.create_sheet("BoQ lines (draft)")
    ws.append(["Line", "Hub product code", "Hub product", "Quantity", "Unit", "Basis", "Status", "Sheet"])
    for r in lines:
        ws.append(r)
    style(ws, [34, 14, 30, 10, 8, 52, 46, 12])
    ws = wb.create_sheet("Window schedule")
    ws.append(["Tag", "Type (inferred)", "Height mm (inferred)", "Width mm (inferred)", "Qty", "Ground floor", "First floor", "Glazing note", "Sheets"])
    for r in sched:
        ws.append(r)
    style(ws, [14, 26, 18, 18, 6, 12, 10, 16, 10])
    if a.compare:
        old = pymupdf.open(a.compare)
        crows = compare_docs(doc, old, tags, areas, site, meas)
        ws = wb.create_sheet("Changes", 1)
        ws.append(["Area", "Sheet (this version)", "Sheet (earlier version)", "Change", "Item", "Earlier", "This version"])
        for r in crows:
            ws.append(r)
        style(ws, [12, 12, 12, 16, 60, 40, 40])
        summ = wb["Summary"]
        summ.append(["Compared with", a.compare.split("/")[-1], f"{len(crows)} changes listed on the Changes sheet"])
        print(f"compared with {a.compare.split('/')[-1]}: {len(crows)} changes")
    wb.save(a.out)
    print(f"{len(tags)} tags, {len(chk)} checks ({sum(1 for r in chk if r[4] != 'PASS')} to review, {len(meas)} measured) -> {a.out}")


if __name__ == "__main__":
    main()
