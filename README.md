# landing-skill

[![skills.sh](https://skills.sh/b/berlified/landing-skill)](https://skills.sh/berlified/landing-skill)

**TYPE × LAYOUT × STYLE landing pages for AI agents + humans.**

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

- **11 types** (sales, lead-gen, waitlist, pricing, demo, webinar, app, squeeze, viral, click-through, upsell) → `references/types.md`
- **12 layouts** (centered, split-left, split-right, fullbleed, asymmetric, formfirst, singlescreen, longscroll, zigzag, bento, editorial, tabbed) → `references/layouts.md`
- **10 styles** (minimal, bold, product, illustration, photo, dark, glass, brutalist, soft, serif) → `references/styles.md`
- **1,320 combinations** with commands → `references/combinations.md`
- **Live explorer** → `cd preview && npm install && npm run dev` — pick triple, see skeleton preview, copy command.

## Repo layout

```
landing-skill/
├── SKILL.md                  ← the skill (what the agent reads)
├── references/               ← types, layouts, styles, combinations
├── templates/                ← base.html + styles.css tokens
├── examples/                 ← 3 built pages to copy
└── preview/                  ← Vite + React explorer site
```

## Preview site

Interactive explorer: choose TYPE × LAYOUT × STYLE → skeleton wireframe preview + generated `/landing` command + install snippet. Deploy `preview/` to Vercel/Netlify as-is.

## License

MIT © 2026 berlified
