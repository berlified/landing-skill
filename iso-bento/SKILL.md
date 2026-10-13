---
name: iso-bento
description: Build isometric bento grids — extruded 3D tiles on a true isometric projection (tilt ~54°, spin 45°) with shaded faces, float motion and hover lift, as one self-contained HTML file with inline CSS and zero dependencies. Use whenever someone wants an isometric grid, 3D bento, tilted feature grid, extruded dashboard, "Linear-style" iso tiles, or a dimensional stats section for a landing page, docs or dashboard.
license: MIT
compatibility: Written for Claude Code; also runs in Codex, OpenCode, Cursor and any Agent Skills client. No dependencies — pure CSS 3D. Optional Node 20+ for the preview site.
metadata:
  opencode/slash: "true"
---

# Iso-bento (draft v1 — previews first, perfecting next)

Build an isometric bento grid as **LAYOUT × PALETTE × TILES × PROJECTION × MOTION**. Confirm the picks, then generate one self-contained HTML file.

Install:

```bash
npx skills add berlified/landing-skill --skill iso-bento -g -a claude-code
```

Use:

```
/iso-bento --layout mosaic --palette lime --tilt 54 "Acme analytics"
```

In Codex the same command runs as `$iso-bento ...`. A pasted prompt of this shape is a complete brief — do not re-ask, just confirm and build:

> Using the iso-bento skill, build an isometric bento grid for "[product]". Layout: [id]. Palette: [id]. Tiles: [list]. Tilt [n]°, spin [n]°.

## The one idea that matters

**Depth is data.** Extrude height encodes importance: the headline metric is the tallest tile, proof sits mid-height, context stays nearly flat. A grid where everything is tall says nothing. Camera defaults to tilt 54° / spin 45° (true isometric); deviate only for drama, never by accident.

## Workflow (v1)

1. **Collect the picks.** Layout (one of 6 in `references/layouts.md`), palette (one of 6 in `references/palettes.md`), tile list with spans + heights (8 kinds in `references/tiles.md`), tilt/spin, motion on/off. If the user names only an idea, propose `mosaic × lime × mixed` and build it.
2. **Order tiles by height.** Tallest = headline number. No two adjacent tiles share the same height unless they are a deliberate pair (steps layout excepted — there the staircase IS the message).
3. **Build the box.** One `.tile` per cell: two side faces (`rotateY(-90°)` left wall, `rotateX(-90°)` front wall) + top `.card` at `translateZ(h)`. Shade top > left > right from the palette recipe. Text on top faces only — sides stay clean.
4. **Move it calmly.** Staggered float (`translateZ` ±10px, per-tile negative delay), hover brightens + accent outline. `prefers-reduced-motion` freezes everything. Under 720px: flatten toward top-down, single column.
5. **Verify.** Screenshot at 1280 + 390: no tile clips its neighbor's text, faces shade consistently, tallest tile is the headline, export file under 15KB.

## References

- `references/layouts.md` — 6 layouts: grid, spans, height maps. *(arrives with v2)*
- `references/palettes.md` — 6 palettes: face-shading recipes. *(arrives with v2)*
- `references/tiles.md` — 8 tile kinds: markup + size rules. *(arrives with v2)*
- `references/projection.md` — tilt/spin math, responsive flattening. *(arrives with v2)*
- `preview/` — the showroom. `cd preview && npm install && npm run dev`. Every scene exports its own standalone HTML — when in doubt, match the exporter's output structure exactly.
