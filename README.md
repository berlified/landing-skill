# landing-skill

[![skills.sh](https://skills.sh/b/berlified/landing-skill)](https://skills.sh/berlified/landing-skill)

**Two skills, one repo — landing pages + isometric bento grids for AI agents + humans.**

| Skill | What it builds | Install |
|---|---|---|
| `landing` | Full landing pages from TYPE × LAYOUT × STYLE (1,320 combos) | `npx skills add berlified/landing-skill -g -a claude-code` |
| `iso-bento` | Isometric bento grids — extruded tiles, true 54°/45° projection, zero deps | `npx skills add berlified/landing-skill --skill iso-bento -g -a claude-code` |

## landing

**TYPE × LAYOUT × STYLE landing pages.**

```bash
npx skills add berlified/landing-skill -g -a claude-code
```

Then tell your agent — paste a prompt like this into Claude Code / Codex / OpenCode / Cursor:

```
/landing --type sales --layout split-left --style minimal "Acme, AI invoicing for freelancers"
```

…or in plain language (works in a fresh session with zero context):

> Using the landing skill (berlified/landing-skill), build a complete landing page for "Acme, AI invoicing for freelancers". Page type: sales. Layout orientation: split-left. Visual style: minimal.

No-install try: `npx skills use berlified/landing-skill --skill landing --agent claude-code`

- **11 types** (sales, lead-gen, waitlist, pricing, demo, webinar, app, squeeze, viral, click-through, upsell) → `skills/landing/references/types.md`
- **12 layouts** (centered, split-left, split-right, fullbleed, asymmetric, formfirst, singlescreen, longscroll, zigzag, bento, editorial, tabbed) → `skills/landing/references/layouts.md`
- **10 styles** (minimal, bold, product, illustration, photo, dark, glass, brutalist, soft, serif) → `skills/landing/references/styles.md`
- **1,320 combinations** with commands → `skills/landing/references/combinations.md`
- **Live explorer** → `cd preview && npm install && npm run dev` — pick triple, see skeleton preview, copy command.

## Repo layout

```
landing-skill/
├── README.md + skills.sh.json   ← repo index + discovery groupings
└── skills/
    ├── landing/                 ← landing skill
    │   ├── SKILL.md             ← what the agent reads
    │   ├── references/          ← types, layouts, styles, combinations
    │   ├── templates/           ← base.html + styles.css tokens
    │   ├── examples/            ← 3 built pages to copy
    │   └── preview/             ← Vite explorer (cd skills/landing/preview && npm run dev)
    └── iso-bento/               ← isometric bento skill (draft v1)
        ├── SKILL.md
        └── preview/             ← live CSS-3D showroom (cd skills/iso-bento/preview && npm run dev)
```

## iso-bento

Isometric bento grids — 6 layouts × 6 palettes × 8 tile kinds, tilt/spin/extrude sliders, float + orbit motion, one-click standalone HTML export and per-agent prompt generator. Full docs in [`skills/iso-bento/README.md`](skills/iso-bento/README.md).

```bash
npx skills add berlified/landing-skill --skill iso-bento -g -a claude-code
```

> Using the iso-bento skill (berlified/landing-skill), build an isometric bento grid for "Acme analytics". Layout: mosaic. Palette: lime. Tilt 54°.

## Preview site

Interactive explorer: choose TYPE × LAYOUT × STYLE → skeleton wireframe preview + generated `/landing` command + install snippet. Deploy `skills/landing/preview/` to Vercel/Netlify as-is.

## License

MIT © 2026 berlified
