// Single source of truth: tile markup is HTML strings so the live preview
// and the exported standalone file render byte-identical tiles.

export const PALETTES = [
  { id: 'lime', name: 'Lime Dark', bg: '#090b06', card: '#151a0e', ink: '#f4f8ea', muted: '#98a37f', accent: '#b9e62f', line: 'rgba(185,230,47,.18)', sideL: '#263014', sideR: '#101507', note: 'Near-black · neon lime faces' },
  { id: 'paper', name: 'Paper', bg: '#f4f1ea', card: '#fffdf8', ink: '#1c1a15', muted: '#8a8474', accent: '#ff4d00', line: '#e3ddd0', sideL: '#e6e0d1', sideR: '#cfc8b4', note: 'Warm paper · signal orange' },
  { id: 'indigo', name: 'Indigo Glass', bg: '#0d1026', card: '#1b2150', ink: '#eef0ff', muted: '#8f96c9', accent: '#7c8cff', line: 'rgba(124,140,255,.22)', sideL: '#2c3474', sideR: '#12163e', note: 'Deep space · electric iris' },
  { id: 'sunset', name: 'Sunset', bg: '#1d0f0a', card: '#2b1710', ink: '#fff3e8', muted: '#c99a7d', accent: '#ff7a3c', line: 'rgba(255,122,60,.22)', sideL: '#48230f', sideR: '#1e0e06', note: 'Ember browns · hot coral' },
  { id: 'mono', name: 'Mono', bg: '#0b0b0c', card: '#171718', ink: '#f4f4f5', muted: '#8e8e93', accent: '#f4f4f5', line: 'rgba(255,255,255,.12)', sideL: '#2a2a2c', sideR: '#0e0e0f', note: 'Grayscale · white-hot top' },
  { id: 'candy', name: 'Candy', bg: '#160d1d', card: '#241331', ink: '#fbeeff', muted: '#b691c7', accent: '#f471b5', line: 'rgba(244,113,181,.22)', sideL: '#3a2150', sideR: '#160a20', note: 'Grape soda · bubblegum' },
]

export const TILE_META = [
  { id: 'metric', name: 'Metric', desc: 'Headline number + delta. Always the tallest tile.' },
  { id: 'spark', name: 'Sparkline', desc: 'One-line trend with area fill. Proof at a glance.' },
  { id: 'bars', name: 'Bars', desc: 'Seven-column rhythm. Compares without thinking.' },
  { id: 'avatars', name: 'Avatars', desc: 'Social proof stack. People, not logos.' },
  { id: 'code', name: 'Code', desc: 'Terminal snippet. Speaks to developers.' },
  { id: 'image', name: 'Image', desc: 'Gradient visual tile. The breather.' },
  { id: 'ring', name: 'Ring', desc: 'Progress dial. Goals feel physical.' },
  { id: 'cta', name: 'CTA', desc: 'The one action. Brightest tile in the grid.' },
]

// tile: [kind, colSpan, rowSpan, extrudePx]
export const LAYOUTS = [
  { id: 'classic', name: 'Classic', cols: 3, desc: 'Hero 2×2 + satellites. The safe default.', tiles: [['metric', 2, 2, 34], ['spark', 1, 1, 18], ['bars', 1, 1, 22], ['avatars', 1, 1, 14], ['code', 2, 1, 16], ['ring', 1, 1, 20]] },
  { id: 'tower', name: 'Tower', cols: 3, desc: 'Heights do the talking. Tall = important.', tiles: [['metric', 1, 2, 46], ['bars', 1, 1, 18], ['spark', 1, 1, 26], ['image', 1, 2, 16], ['cta', 1, 1, 32], ['avatars', 2, 1, 14]] },
  { id: 'steps', name: 'Steps', cols: 3, desc: 'Staircase extrusion. Reads as a climb.', tiles: [['metric', 1, 1, 14], ['bars', 1, 1, 24], ['spark', 1, 1, 36], ['code', 2, 1, 20], ['ring', 1, 1, 30], ['avatars', 2, 1, 14], ['cta', 1, 1, 22]] },
  { id: 'mosaic', name: 'Mosaic', cols: 4, desc: 'Mixed spans, editorial rhythm. Most designed.', tiles: [['image', 2, 2, 18], ['metric', 2, 1, 32], ['ring', 1, 1, 22], ['code', 1, 1, 16], ['bars', 2, 1, 24], ['avatars', 1, 1, 14], ['cta', 1, 1, 28], ['spark', 2, 1, 18]] },
  { id: 'strip', name: 'Strip', cols: 4, desc: 'Dashboard row. Scans left to right.', tiles: [['spark', 1, 1, 16], ['bars', 1, 1, 24], ['metric', 1, 1, 34], ['ring', 1, 1, 20], ['code', 2, 1, 16], ['avatars', 1, 1, 14], ['cta', 1, 1, 26]] },
  { id: 'focus', name: 'Focus', cols: 3, desc: 'One giant + orbiters. Single message grid.', tiles: [['metric', 2, 2, 38], ['cta', 1, 1, 24], ['spark', 1, 1, 18], ['bars', 1, 1, 16], ['avatars', 1, 1, 14], ['ring', 1, 1, 26]] },
]

export const AGENTS = [
  { id: 'claude-code', name: 'Claude Code', install: 'npx skills add berlified/landing-skill --skill iso-bento -g -a claude-code', invoke: '/iso-bento', tryCmd: 'npx skills use berlified/landing-skill --skill iso-bento --agent claude-code' },
  { id: 'codex', name: 'Codex', install: 'npx skills add berlified/landing-skill --skill iso-bento -g -a codex', invoke: '$iso-bento', tryCmd: 'npx skills use berlified/landing-skill --skill iso-bento --agent codex' },
  { id: 'opencode', name: 'OpenCode', install: 'npx skills add berlified/landing-skill --skill iso-bento -g -a opencode', invoke: '/iso-bento', tryCmd: 'npx skills use berlified/landing-skill --skill iso-bento --agent opencode' },
  { id: 'cursor', name: 'Cursor', install: 'npx skills add berlified/landing-skill --skill iso-bento -g -a cursor', invoke: '/iso-bento', tryCmd: 'npx skills use berlified/landing-skill --skill iso-bento --agent cursor' },
]

export const INSTALL_CMD = AGENTS[0].install

// ---- tile markup (shared by preview + export) ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')

export function tileHTML(kind, brand) {
  const b = esc(brand || 'Acme')
  const mask = 'mask-image:linear-gradient(to right,transparent,#000 12%,#000 88%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,#000 12%,#000 88%,transparent)'
  switch (kind) {
    case 'metric':
      return `<div class="t-kick">Collected · ${b}</div><div class="t-big"><span class="t-ticker" data-count="12480" data-prefix="$">$12,480</span></div><div class="t-delta">▲ +38% this month</div><div class="t-minibars"><i style="height:35%"></i><i style="height:60%"></i><i style="height:45%"></i><i style="height:80%"></i><i style="height:58%"></i><i style="height:95%"></i><i style="height:72%"></i></div>`
    case 'spark':
      return `<div class="t-kick">Payout speed</div><svg class="t-spark t-zoom" viewBox="0 0 120 44" preserveAspectRatio="none"><path class="fill" d="M2,36 L18,30 L34,33 L50,22 L66,25 L82,14 L98,17 L118,6 L118,44 L2,44 Z" fill="currentColor"/><path class="draw" pathLength="100" d="M2,36 L18,30 L34,33 L50,22 L66,25 L82,14 L98,17 L118,6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg><div class="t-sub">6.2 days avg</div>`
    case 'bars':
      return `<div class="t-kick">Invoices / week</div><div class="t-bars t-zoom"><i style="--i:0;height:38%"></i><i style="--i:1;height:62%"></i><i style="--i:2;height:45%"></i><i style="--i:3;height:80%"></i><i style="--i:4;height:58%"></i><i style="--i:5;height:92%"></i><i style="--i:6;height:70%"></i></div><div class="t-sub">Tue peak · 92</div>`
    case 'avatars': {
      const chips = [['MK', 'Maya'], ['JT', 'Jonas'], ['PS', 'Priya'], ['AR', 'Ana'], ['DL', 'Dev']]
        .map(c => `<span class="t-chip"><b>${c[0]}</b>${c[1]} joined</span>`).join('')
      return `<div class="t-kick">Members · live joins</div><div class="t-marquee" style="${mask}"><div class="t-track">${chips}${chips}</div></div><div class="t-sub">2,431 and climbing</div>`
    }
    case 'code':
      return `<div class="t-code"><span class="ln" style="--d:.25s"><span class="p">$</span> iso build --tilt 54</span><span class="ln" style="--d:.95s"><span class="g">✓</span> 6 tiles extruded</span><span class="ln" style="--d:1.65s"><span class="g">✓</span> faces shaded 3-tone</span><span class="ln" style="--d:2.35s"><span class="p">→</span> ship it <span class="caret"></span></span></div>`
    case 'image':
      return `<div class="t-kick">Nebula · live</div><div class="t-orbit t-zoom"><i class="o1"></i><i class="o2"></i><span class="core">◧</span></div><div class="t-sub">Rendering 60fps</div>`
    case 'ring':
      return `<div class="t-kick">Q3 goal</div><svg class="t-ring t-zoom" viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" opacity=".18" stroke-width="7"/><circle class="prog" cx="30" cy="30" r="24" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" transform="rotate(-90 30 30)"/></svg><div class="t-sub">72% of target</div>`
    case 'cta':
      return `<div class="t-kick">Start today</div><div class="t-ctatitle">Ship your grid</div><span class="t-btn t-shimmer">Build mine →</span><div class="t-sub">Free · no card</div>`
    default:
      return `<div class="t-kick">Tile</div>`
  }
}

export function gridSpec(layout, extrudeScale) {
  return layout.tiles.map(t => `${t[0]} ${t[1]}×${t[2]} @${Math.round(t[3] * extrudeScale)}px`).join(', ')
}

// Two-tone stepped extrude for the Designer (2.5D) view — layout-proof depth.
export function flatDepth(h) {
  return Math.max(4, Math.min(22, Math.round(h)))
}

export function flatShadow(h, sideL, sideR) {
  const d = flatDepth(h)
  const mid = Math.ceil(d / 2)
  const parts = []
  for (let i = 1; i <= d; i++) parts.push(`${i}px ${i}px 0 ${i <= mid ? sideL : sideR}`)
  parts.push(`0 ${d + 14}px ${d + 22}px rgba(0,0,0,.35)`)
  return parts.join(', ')
}

export function agentPromptIso(agentId, view, layout, palette, tilt, spin, extrudeScale, floatOn, brand) {
  const ag = AGENTS.find(a => a.id === agentId) || AGENTS[0]
  const proj = view === 'flat'
    ? `View: designer 2.5D — screen-aligned readable cards with two-tone stepped extrude (depth ∝ importance, max 22px). Text stays horizontal.`
    : `View: true isometric — tilt ${tilt}°, spin ${spin}°. Faces shade top > left > right. Text lives on top faces, keep it short.`
  return `Using the iso-bento skill (berlified/landing-skill), build an isometric bento grid for "${brand}".

Layout: ${layout.id} (${layout.name} — ${layout.desc.toLowerCase()}). ${layout.cols} columns.
Palette: ${palette.id} (${palette.name} — ${palette.note.toLowerCase()}).
Tiles in order: ${gridSpec(layout, extrudeScale)}.
${proj} Extrude scale ×${extrudeScale}. Float motion ${floatOn ? 'on (staggered, gentle)' : 'off'}. Hover: brighten + accent outline.

Rules: depth is data — tallest tile is the headline. Faces shade top > left > right. Text on top faces only, sides stay clean. Deliver one self-contained HTML file with inline CSS. No libraries. Responsive: flatten toward top-down under 720px. (Equivalent: ${ag.invoke} --layout ${layout.id} --palette ${palette.id} --tilt ${tilt} "${brand}")`
}

// ---- standalone export: the exact scene as one HTML file ----
export function buildStandalone(view, layout, palette, tilt, spin, extrudeScale, floatOn, brand) {
  if (view === 'flat') {
    const tiles = layout.tiles.map((t, i) => {
      const h = Math.round(t[3] * extrudeScale)
      return `    <div class="tile" style="grid-column:span ${t[1]};grid-row:span ${t[2]};--i:${i};box-shadow:${flatShadow(h, palette.sideL, palette.sideR)}"><div class="card">${tileHTML(t[0], brand)}</div></div>`
    }).join('\n')
    return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(brand)} — bento grid (${layout.id} · ${palette.id})</title>
<style>
*{box-sizing:border-box;margin:0}body{background:${palette.bg};min-height:100vh;display:grid;place-items:center;padding:48px 20px;font-family:-apple-system,BlinkMacSystemFont,Inter,system-ui,sans-serif}
.grid{display:grid;grid-template-columns:repeat(${layout.cols},minmax(0,1fr));grid-auto-rows:118px;gap:26px;width:min(860px,100%)}
.tile{position:relative;min-width:0;animation:tileIn .45s ease-out both;animation-delay:calc(var(--i)*60ms)}
.card{height:100%;background:${palette.card};border:1px solid ${palette.line};border-top-color:rgba(255,255,255,.14);border-radius:14px;padding:14px;color:${palette.ink};overflow:hidden;font-size:13px}
.tile:hover .card{filter:brightness(1.1);border-color:${palette.accent}}
@keyframes tileIn{from{opacity:0;filter:blur(6px);transform:translateY(14px)}to{opacity:1;filter:blur(0);transform:none}}
.t-kick{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${palette.accent}}
.t-big{font-size:clamp(22px,3vw,30px);font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.t-ticker{font-variant-numeric:tabular-nums}.t-delta{font-size:11px;font-weight:700;color:${palette.accent}}
.t-sub{font-size:10.5px;color:${palette.muted};margin-top:4px}.t-minibars{display:flex;align-items:flex-end;gap:3px;height:26px;margin-top:6px}
.t-minibars i{flex:1;background:${palette.accent};border-radius:2px;opacity:.85}.t-spark{width:100%;height:60px;color:${palette.accent};margin-top:4px}
.t-spark .draw{stroke-dasharray:100;stroke-dashoffset:100;animation:draw 1.4s .25s ease-out forwards}.t-spark .fill{opacity:0;animation:fadein .6s ease-out 1.3s forwards}
@keyframes draw{to{stroke-dashoffset:0}}@keyframes fadein{to{opacity:.18}}
.t-bars{display:flex;align-items:flex-end;gap:4px;height:64px;margin-top:6px}.t-bars i{flex:1;background:linear-gradient(180deg,${palette.accent},transparent);border-radius:3px;transform:scaleY(0);transform-origin:bottom;animation:grow .55s cubic-bezier(.2,.7,.3,1.2) forwards;animation-delay:calc(.2s + var(--i,0)*.07s)}
@keyframes grow{to{transform:scaleY(1)}}
.t-marquee{overflow:hidden;margin:8px -4px 2px}.t-track{display:flex;gap:6px;width:max-content;animation:scrollX 16s linear infinite}.t-marquee:hover .t-track{animation-play-state:paused}
@keyframes scrollX{to{transform:translateX(-50%)}}
.t-chip{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:600;border:1px solid ${palette.line};border-radius:99px;padding:4px 10px 4px 4px;white-space:nowrap}
.t-chip b{width:20px;height:20px;border-radius:99px;background:${palette.accent};color:${palette.bg};font-size:8px;font-weight:800;display:grid;place-items:center}
.t-code{font-family:ui-monospace,monospace;font-size:11px;line-height:1.7}.t-code .p{color:${palette.accent}}.t-code .g{color:#4ade80}
.t-code .ln{display:block;opacity:0;animation:lineIn .3s ease-out forwards;animation-delay:var(--d,0s)}@keyframes lineIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.t-code .caret{display:inline-block;width:7px;height:12px;background:${palette.accent};vertical-align:-1px;animation:blink 1.1s steps(2) infinite}@keyframes blink{50%{opacity:0}}
.t-orbit{position:relative;height:92px;margin:2px 0}.t-orbit .o1,.t-orbit .o2{position:absolute;left:50%;top:50%;border:1px solid ${palette.accent};border-radius:99px;opacity:.55}
.t-orbit .o1{width:76px;height:76px;margin:-38px 0 0 -38px;animation:spinSlow 14s linear infinite}.t-orbit .o2{width:50px;height:50px;margin:-25px 0 0 -25px;opacity:.8;animation:spinRev 9s linear infinite}
.t-orbit .o1::before,.t-orbit .o2::before{content:'';position:absolute;top:-3px;left:50%;width:6px;height:6px;margin-left:-3px;border-radius:99px;background:${palette.accent}}
.t-orbit .core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:22px;color:${palette.ink}}
@keyframes spinSlow{to{transform:rotate(360deg)}}@keyframes spinRev{to{transform:rotate(-360deg)}}
.t-ring{width:72px;height:72px;color:${palette.accent};margin-top:2px}.t-ring .prog{animation:ringFill 1.5s .35s cubic-bezier(.3,.7,.3,1) forwards}@keyframes ringFill{to{stroke-dashoffset:28}}
.t-ctatitle{font-size:17px;font-weight:800;margin:2px 0 6px}
.t-btn{display:inline-block;background:${palette.accent};color:${palette.bg};font-weight:800;font-size:11.5px;border-radius:99px;padding:8px 14px}
.t-btn.t-shimmer{position:relative;overflow:hidden;isolation:isolate}.t-btn.t-shimmer::after{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-130%);animation:shine 2.8s ease-in-out infinite}
@keyframes shine{55%,100%{transform:translateX(130%)}}
.t-zoom{transition:transform .3s ease-out}.tile:hover .t-zoom{transform:scale(1.05)}
@media(max-width:720px){.grid{grid-template-columns:1fr 1fr;grid-auto-rows:96px}}
@media(prefers-reduced-motion:reduce){.tile{animation:none}.t-spark .draw{stroke-dashoffset:0;animation:none}.t-spark .fill{opacity:.18;animation:none}.t-bars i{transform:none;animation:none}.t-track{animation:none}.t-code .ln{opacity:1;animation:none}.t-code .caret{animation:none}.t-orbit .o1,.t-orbit .o2{animation:none}.t-ring .prog{stroke-dashoffset:28;animation:none}.t-btn.t-shimmer::after{display:none}}
</style></head>
<body><div class="grid">
${tiles}
</div><script>(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.querySelectorAll('.t-ticker').forEach(function(el){var target=+el.dataset.count,prefix=el.dataset.prefix||'',t0=performance.now(),dur=1600;function fmt(n){return prefix+Math.round(n).toLocaleString('en-US')}function step(t){var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=fmt(target*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)})})();</script></body></html>`
  }
  const tiles = layout.tiles.map((t, i) => {
    const h = Math.round(t[3] * extrudeScale)
    return `    <div class="tile" style="grid-column:span ${t[1]};grid-row:span ${t[2]};--h:${h}px;--i:${i}"><div class="rise"${floatOn ? '' : ' style="animation:none"'}><div class="sideL"></div><div class="sideR"></div><div class="card">${tileHTML(t[0], brand)}</div></div></div>`
  }).join('\n')
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(brand)} — isometric bento (${layout.id} · ${palette.id})</title>
<style>
*{box-sizing:border-box;margin:0}body{background:${palette.bg};min-height:100vh;display:grid;place-items:center;padding:48px 20px;font-family:Inter,system-ui,sans-serif}
.scene{--tilt:${tilt}deg;--spin:${spin}deg;--cols:${layout.cols};--cell:120px;--card:${palette.card};--ink:${palette.ink};--muted:${palette.muted};--accent:${palette.accent};--line:${palette.line};--sideL:${palette.sideL};--sideR:${palette.sideR};perspective:1400px;width:min(860px,100%)}
.spin{transform-style:preserve-3d;transform:rotateZ(var(--spin))}.plane{transform-style:preserve-3d;transform:rotateX(var(--tilt));display:grid;grid-template-columns:repeat(var(--cols),1fr);grid-auto-rows:var(--cell);gap:22px}
.tile{position:relative;transform-style:preserve-3d;min-width:0;animation:tileIn .45s ease-out both;animation-delay:calc(var(--i)*60ms)}
.rise{position:absolute;inset:0;transform-style:preserve-3d;animation:floaty 5s ease-in-out infinite;animation-delay:calc(var(--i)*-.7s)}
.sideL{position:absolute;top:0;left:0;height:100%;width:var(--h);transform-origin:left center;transform:rotateY(-90deg);background:var(--sideL)}
.sideR{position:absolute;bottom:0;left:0;width:100%;height:var(--h);transform-origin:center bottom;transform:rotateX(-90deg);background:var(--sideR)}
.card{position:absolute;inset:0;transform:translateZ(var(--h));background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px;color:var(--ink);overflow:hidden;font-size:13px}
.tile:hover .card{filter:brightness(1.14);border-color:var(--accent)}
@keyframes floaty{0%,100%{transform:translateZ(0)}50%{transform:translateZ(9px)}}
@keyframes tileIn{from{opacity:0;filter:blur(6px);transform:translateY(14px)}to{opacity:1;filter:blur(0);transform:none}}
.t-kick{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)}
.t-big{font-size:clamp(22px,3vw,30px);font-weight:800;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.t-ticker{font-variant-numeric:tabular-nums}.t-delta{font-size:11px;font-weight:700;color:var(--accent)}
.t-sub{font-size:10.5px;color:var(--muted);margin-top:4px}.t-minibars{display:flex;align-items:flex-end;gap:3px;height:26px;margin-top:6px}
.t-minibars i{flex:1;background:var(--accent);border-radius:2px;opacity:.85}.t-spark{width:100%;height:60px;color:var(--accent);margin-top:4px}
.t-spark .draw{stroke-dasharray:100;stroke-dashoffset:100;animation:draw 1.4s .25s ease-out forwards}.t-spark .fill{opacity:0;animation:fadein .6s ease-out 1.3s forwards}
@keyframes draw{to{stroke-dashoffset:0}}@keyframes fadein{to{opacity:.18}}
.t-bars{display:flex;align-items:flex-end;gap:4px;height:64px;margin-top:6px}.t-bars i{flex:1;background:linear-gradient(180deg,var(--accent),transparent);border-radius:3px;transform:scaleY(0);transform-origin:bottom;animation:grow .55s cubic-bezier(.2,.7,.3,1.2) forwards;animation-delay:calc(.2s + var(--i,0)*.07s)}
@keyframes grow{to{transform:scaleY(1)}}
.t-marquee{overflow:hidden;margin:8px -4px 2px}.t-track{display:flex;gap:6px;width:max-content;animation:scrollX 16s linear infinite}.t-marquee:hover .t-track{animation-play-state:paused}
@keyframes scrollX{to{transform:translateX(-50%)}}
.t-chip{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:600;border:1px solid var(--line);border-radius:99px;padding:4px 10px 4px 4px;white-space:nowrap}
.t-chip b{width:20px;height:20px;border-radius:99px;background:var(--accent);color:${palette.bg};font-size:8px;font-weight:800;display:grid;place-items:center}
.t-code{font-family:ui-monospace,monospace;font-size:11px;line-height:1.7}.t-code .p{color:var(--accent)}.t-code .g{color:#4ade80}
.t-code .ln{display:block;opacity:0;animation:lineIn .3s ease-out forwards;animation-delay:var(--d,0s)}@keyframes lineIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.t-code .caret{display:inline-block;width:7px;height:12px;background:var(--accent);vertical-align:-1px;animation:blink 1.1s steps(2) infinite}@keyframes blink{50%{opacity:0}}
.t-orbit{position:relative;height:92px;margin:2px 0}.t-orbit .o1,.t-orbit .o2{position:absolute;left:50%;top:50%;border:1px solid var(--accent);border-radius:99px;opacity:.55}
.t-orbit .o1{width:76px;height:76px;margin:-38px 0 0 -38px;animation:spinSlow 14s linear infinite}.t-orbit .o2{width:50px;height:50px;margin:-25px 0 0 -25px;opacity:.8;animation:spinRev 9s linear infinite}
.t-orbit .o1::before,.t-orbit .o2::before{content:'';position:absolute;top:-3px;left:50%;width:6px;height:6px;margin-left:-3px;border-radius:99px;background:var(--accent)}
.t-orbit .core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:22px;color:var(--ink)}
@keyframes spinSlow{to{transform:rotate(360deg)}}@keyframes spinRev{to{transform:rotate(-360deg)}}
.t-ring{width:72px;height:72px;color:var(--accent);margin-top:2px}.t-ring .prog{animation:ringFill 1.5s .35s cubic-bezier(.3,.7,.3,1) forwards}@keyframes ringFill{to{stroke-dashoffset:28}}
.t-ctatitle{font-size:17px;font-weight:800;margin:2px 0 6px}
.t-btn{display:inline-block;background:var(--accent);color:${palette.bg};font-weight:800;font-size:11.5px;border-radius:99px;padding:8px 14px}
.t-btn.t-shimmer{position:relative;overflow:hidden;isolation:isolate}.t-btn.t-shimmer::after{content:'';position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-130%);animation:shine 2.8s ease-in-out infinite}
@keyframes shine{55%,100%{transform:translateX(130%)}}
.t-zoom{transition:transform .3s ease-out}.tile:hover .t-zoom{transform:scale(1.05)}
@media(max-width:720px){.scene{--cell:96px}.spin{transform:none}.plane{transform:none}}
@media(prefers-reduced-motion:reduce){.tile{animation:none}.rise{animation:none}.t-spark .draw{stroke-dashoffset:0;animation:none}.t-spark .fill{opacity:.18;animation:none}.t-bars i{transform:none;animation:none}.t-track{animation:none}.t-code .ln{opacity:1;animation:none}.t-code .caret{animation:none}.t-orbit .o1,.t-orbit .o2{animation:none}.t-ring .prog{stroke-dashoffset:28;animation:none}.t-btn.t-shimmer::after{display:none}}
</style></head>
<body><div class="scene"><div class="spin"><div class="plane">
${tiles}
</div></div></div><script>(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.querySelectorAll('.t-ticker').forEach(function(el){var target=+el.dataset.count,prefix=el.dataset.prefix||'',t0=performance.now(),dur=1600;function fmt(n){return prefix+Math.round(n).toLocaleString('en-US')}function step(t){var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=fmt(target*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)})})();</script></body></html>`
}
