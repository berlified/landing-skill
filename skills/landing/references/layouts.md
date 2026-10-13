# Layouts — 12 orientations

LAYOUT decides order + grid only. Never copy or tokens.

| # | id | Name | Wireframe (desktop) | Grid | Above-the-fold rule | Mobile (≤720px) |
|---|---|------|---------------------|------|---------------------|-----------------|
| 1 | `centered` | Centered Stacked | nav / H1 center / sub center / CTA center / visual below / logos | 1 col, max-w 720 hero | CTA centered, visual cropped to 320h | same, stacked |
| 2 | `split-left` | Split Left-Text / Right-Visual | nav / [copy 55% \| visual 45%] / logos | 2 col 7/5 | H1 + CTA left, product shot right | copy first, visual after |
| 3 | `split-right` | Split Right-Text / Left-Visual | mirrored split-left | 2 col 5/7 | visual left, H1 + CTA right | visual first (teaser), then copy |
| 4 | `fullbleed` | Full-Bleed Background | text over image/video/gradient, full viewport | 1 col overlay | contrast scrim required, CTA on image | text block bottom-anchored |
| 5 | `asymmetric` | Asymmetric 60/40 | off-center hero, overlapping card | 12-col, 7+5 overlap | overlapping proof card breaks grid | overlap becomes stack, card after |
| 6 | `formfirst` | Form-First / Sidebar Form | [copy 60% \| sticky form card 40%] | 2 col 3/2 | form visible without scroll | form after 2 bullets, sticky off |
| 7 | `singlescreen` | Single-Screen | everything in 100vh, no scroll cue | 1-2 col compact | no section below fold (squeeze/waitlist only) | 100dvh, compact type |
| 8 | `longscroll` | Long-Scroll Linear | hero → logos → problem → solution → steps → features → proof → pricing → FAQ → final | 1 col, alternating max-w | sticky nav with CTA | same order, full stack |
| 9 | `zigzag` | Alternating Zig-Zag | feature rows L/R/L/R | 2 col alternating | first row copy-left | all rows copy-first |
| 10 | `bento` | Bento Grid | hero top, 2-4 col card mosaic below | 6-col, spans 4+2/3+3/2+2+2 | 1 large + 2 small cards visible | 1 col, large first |
| 11 | `editorial` | Magazine Editorial 2-col | narrow text col + wide sticky visual | 2 col 5/7 reading | drop-cap / pull-quote in view | single reading column |
| 12 | `tabbed` | Tabbed / Horizontal | hero + tab bar + panel (features/use-cases) | 1 col + tabs | first tab pre-selected | tabs scroll-x, panel stacks |

Z-pattern (centered, split) vs F-pattern (longscroll, zigzag, editorial): match CTA repetition to pattern — Z = 2 CTAs, F = CTA every 2 viewports.
