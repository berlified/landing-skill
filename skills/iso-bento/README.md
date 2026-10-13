# iso-bento

**Isometric bento grids for AI agents + humans.** A skill that teaches Claude Code, Codex, OpenCode and Cursor to build real 3D-tilted bento grids — extruded tiles, true isometric projection, shaded faces, float motion and hover lift — as one self-contained HTML file. No libraries. No build step.

```bash
npx skills add berlified/landing-skill --skill iso-bento -g -a claude-code
```

Then tell your agent — paste a prompt like this into Claude Code / Codex / OpenCode / Cursor:

> Using the iso-bento skill (berlified/landing-skill), build an isometric bento grid for "Acme analytics". Layout: mosaic, 3 columns. Palette: lime-dark. Tiles: big metric + sparkline, bar chart, avatar stack, code snippet, status list, CTA tile. Tilt 54°, extrude 26px, float on, hover lift on.

No-install try: `npx skills use berlified/landing-skill --skill iso-bento --agent claude-code`

## How it works

1. **Install the skill** — one command, your agent of choice (tabs in the preview site).
2. **Pick the grid** — layout × palette × tiles × tilt × motion in the live preview. Every combo renders as a real isometric scene, and every scene exports copy-paste HTML+CSS.
3. **Paste the prompt** — the site generates a complete brief (grid spec, tile list, projection angles, motion). Your agent builds it. First try.

## The three picks

- **LAYOUT** (6) — `classic` 3-col hero grid · `tower` varied heights · `steps` staircase · `mosaic` mixed spans · `strip` horizontal · `focus` one giant + satellites. `references/layouts.md`
- **PALETTE** (6) — `lime-dark` · `paper` · `indigo-glass` · `sunset` · `mono` · `candy`. Face-shading recipe included, never flat. `references/palettes.md`
- **TILES** (8) — `metric` · `sparkline` · `bars` · `avatars` · `code` · `image` · `ring` · `cta`. Every tile ships in three sizes and any extrude height. `references/tiles.md`

6 × 6 × tile-mixes × tilt × motion = thousands of grids. All valid. Default: `mosaic × lime-dark × mixed`.

## Repo layout

```
iso-bento/
├── SKILL.md                  ← the skill (draft v1 — perfected after previews)
├── references/               ← layouts, palettes, tiles, projection, motion
├── preview/                  ← Vite + React showroom: live iso scenes, code export
└── examples/                 ← built grids to copy (arrive with SKILL v2)
```

## The one idea

**Depth is data.** Height means importance — the tallest tile is the headline number, mid tiles are proof, flat tiles are context. Never extrude decoration. Camera stays at tilt ~54° / spin 45° unless the content demands drama. Faces shade top > left > right, always. Text lives on top faces; sides stay clean.

## License

MIT © 2026 berlified
