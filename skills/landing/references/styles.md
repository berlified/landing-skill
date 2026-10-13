# Styles — 10 visual systems

STYLE decides tokens only. Never sections or order. Apply via `templates/styles.css` variables.

| # | id | Name | Font | Palette | Radius | Shadow / Border | Texture |
|---|---|------|------|---------|--------|-----------------|---------|
| 1 | `minimal` | Minimal SaaS | Inter/system | white `#fff`, ink `#0a0a0b`, accent `#4f46e5`, muted `#f4f4f5` | 12px | `1px #e4e4e7`, soft `0 8px 30px rgb(0 0 0/.06)` | none, 64px whitespace |
| 2 | `bold` | Bold Typographic | Archivo/Space Grotesk 800 | paper `#fafaf9`, ink `#111`, accent `#ff4d00` | 4px | thick `2px #111` | oversized 96px H1, uppercase kickers |
| 3 | `product` | Product Screenshot | Inter | `#f8fafc` bg, slate ink, indigo accent | 16px | browser chrome bar + `0 30px 80px rgb(2 6 23/.18)` | screenshot frame, floating badges |
| 4 | `illustration` | Playful Illustration | Nunito/Quicksand 700 | cream `#fff7ed`, ink `#431407`, accents `#fb923c #38bdf8 #a78bfa` | 24px | soft, blob shapes | pastel blobs, doodle underlines |
| 5 | `photo` | Photo-Heavy | Inter + serif accents | image-led, ink-on-image white, scrim `rgb(0 0 0/.45)` | 18px | image cards, no borders | full-bleed photos, duotone overlay |
| 6 | `dark` | Dark Neon | Inter/Space Grotesk | bg `#09090b`, panel `#131316`, text `#fafafa`, neon `#a3e635` or `#8b5cf6` | 14px | `1px rgb(255 255 255/.08)`, glow `0 0 40px accent/.25` | grid dots, glow orbs |
| 7 | `glass` | Glass Gradient | Inter | aurora `#6366f1→#a855f7→#ec4899` on `#fafaff`, glass `rgb(255 255 255/.6)` blur 20 | 20px | blur cards, gradient text | gradient mesh bg, noise 3% |
| 8 | `brutalist` | Neo-Brutalist | Archivo Black / monospace accents | paper `#fffdf5`, ink `#000`, accent `#ffd02b`, secondary `#ff90e8` | 0px | `3px #000`, hard `6px 6px 0 #000` | sticker badges rotated -2deg |
| 9 | `soft` | Soft SaaS | Inter rounded | bg `#f6f9ff`, ink `#1e293b`, accent `#0ea5e9`, tints `#e0f2fe #fef3c7` | 28px | pill buttons, `0 12px 40px rgb(14 165 233/.15)` | rounded blobs, friendly emoji-free icons |
| 10 | `serif` | Editorial Serif | Fraunces/Newsreader serif + Inter body | cream `#faf6ef`, ink `#1c1917`, accent `#9a3412`, rule `#e7e5e4` | 6px | hairline rules, no shadows | drop caps, pull quotes, footnote rules |

Contrast floor: body text ≥4.5:1 in every style (dark-neon uses `#fafafa` on `#09090b`, never neon body copy).
