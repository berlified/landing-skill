---
name: landing
description: Design and build a complete landing page from three picks — page TYPE (lead-gen, sales, waitlist, pricing, demo, webinar, app, squeeze, viral, click-through, upsell), LAYOUT orientation (centered, split-left, split-right, full-bleed, asymmetric, form-first, single-screen, long-scroll, zigzag, bento, editorial, tabbed), and visual STYLE (minimal, bold-type, product-shot, illustration, photo-heavy, dark-neon, glass-gradient, brutalist, soft-saas, editorial-serif). Use whenever someone wants a landing page, waitlist, sales page, pricing page, hero section, or marketing site. Generates semantic HTML + CSS, responsive, accessible, no dependencies unless asked. Preview all 1,320 combinations in preview/ (Vite site).
license: MIT
compatibility: Written for Claude Code; also runs in OpenCode, Codex, Cursor and any Agent Skills client. No dependencies. Optional Node 20+ for the preview site.
metadata:
  opencode/slash: "true"
---

# Landing

Build a landing page as **TYPE × LAYOUT × STYLE**. Ask for the three picks (or infer sensible defaults), then generate a complete, responsive page.

Install:

```bash
npx skills add berlified/landing-skill -g -a claude-code
```

Use:

```
/landing --type sales --layout split-left --style minimal "Acme, AI invoicing for freelancers"
```

In Codex the same command runs as `$landing ...`. In a fresh session with no context, plain language works too — the developer's prompt carries the whole triple:

> Using the landing skill, build a [TYPE] page for "[product]". Layout: [LAYOUT]. Style: [STYLE].

Treat any prompt of that shape as a complete brief: do not re-ask for type, layout or style, just confirm and build. Stacks with `frontend-design` (art direction) and `web-design-guidelines` (accessibility audit) when they are installed.

That's it. No API keys, nothing to `npm install` (except `npm install` inside `preview/` to run the visual explorer).

## The one idea that matters

**Goal decides structure, layout decides order, style decides surface.** Never mix them up:

- TYPE = what the page must *do* (collect email? sell? book a call?). It decides sections + copy + CTA.
- LAYOUT = how sections are *ordered on screen* (centered stack? split? bento?). It decides the wireframe.
- STYLE = how it *looks* (minimal? brutalist? dark neon?). It decides tokens only — never structure.

11 types × 12 layouts × 10 styles = **1,320 combinations**. Every combination is valid. Default to `sales × split-left × minimal` when the user says nothing.

## Workflow

Work in this order. Confirm the three picks before writing code.

1. **Collect the three picks.** Ask (or infer + confirm):
   - TYPE — one of the 11 in `references/types.md`
   - LAYOUT — one of the 12 in `references/layouts.md`
   - STYLE — one of the 10 in `references/styles.md`
   - Plus: product name, one-line value prop, primary CTA label + destination, 3 proof points.
   - If the user names only an idea ("landing for my bakery"), propose one full triple and build it. Don't interrogate.
2. **Pull the copy block.** Open `references/types.md`, find the TYPE row, use its section order + headline formulas verbatim. Don't invent sections.
3. **Pull the wireframe.** Open `references/layouts.md`, find the LAYOUT row, use its skeleton (order, columns, what goes above the fold). Start from `templates/base.html`.
4. **Pull the tokens.** Open `references/styles.md`, find the STYLE row, apply only its tokens (fonts, colors, radius, shadow, borders). Never let style change section order.
5. **Build one file.** Single self-contained HTML file with `<style>` in head, semantic landmarks (`header/nav/main/section/footer`), one H1, real `<form>` or `<a>` CTA, alt text, focus states. Responsive: desktop layout → stacked at ≤720px. Reduced-motion respected. No external CSS/JS unless the user asked for Tailwind/React.
6. **Verify like a critic.** Open it (or screenshot at 1440 + 390 wide): H1 readable in 3s, CTA above the fold, no horizontal scroll, tap targets ≥44px, contrast ≥4.5:1, form submittable with keyboard. Fix and re-check.

Full matrices, copy formulas and token tables: `references/combinations.md`.

## References

- `references/types.md` — the 11 page types: goal, sections, copy formula, CTA.
- `references/layouts.md` — the 12 layout orientations: wireframe, grid, above-the-fold rule.
- `references/styles.md` — the 10 visual styles: font, palette, radius, shadow, texture. Tokens only.
- `references/combinations.md` — the full 1,320 matrix, 30 curated recipes + command for every combo.
- `templates/base.html` — starter file. Copy it, then apply TYPE + LAYOUT + STYLE.
- `templates/styles.css` — all 10 style token sets as CSS variables. Import the one you need.
- `examples/` — three built pages to copy from. Open the closest one before you start.
  - `examples/saas-minimal/` — sales × split-left × minimal
  - `examples/waitlist-bento-dark/` — waitlist × bento × dark-neon
  - `examples/sales-longform/` — sales × long-scroll × editorial-serif
- `preview/` — Vite + React explorer. `cd preview && npm install && npm run dev`. Pick TYPE × LAYOUT × STYLE, see a skeleton preview + copy-paste `/landing` command.

## Craft rules (short form)

- **One H1, one primary CTA repeated.** Nav CTA + hero CTA + final CTA share the same label.
- **Above the fold wins.** Headline + subhead + CTA + proof (logo row / rating / screenshot) visible without scrolling on desktop and mobile.
- **No dead controls.** Every button submits, navigates, or opens something. No `href="#"`.
- **Real copy, never lorem.** Write the headline from the TYPE formula with the user's product filled in.
- **Solids over outlines for CTAs.** Primary CTA is always filled, ≥48px tall.
- **Proof near promise.** Testimonial / stat / logo within one viewport of the claim it supports.
- **Mobile stacks.** Every multi-column LAYOUT collapses to single column ≤720px, visual after copy (unless form-first).
- **Accessible by default.** Landmarks, label on every input, `:focus-visible` ring, `prefers-reduced-motion` disables animation.
