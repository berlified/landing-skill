import React, { useMemo, useState } from 'react'
import { PALETTES, TILE_META, LAYOUTS, AGENTS, INSTALL_CMD, tileHTML, gridSpec, agentPromptIso, buildStandalone, flatShadow, flatDepth } from './data.js'

function copy(text, setCopied) {
  navigator.clipboard?.writeText(text).then(() => {
    setCopied('done')
    setTimeout(() => setCopied(''), 1600)
  })
}

function download(filename, text) {
  const blob = new Blob([text], { type: 'text/html' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 2000)
}

/* ---------- live isometric scene (pure CSS 3D) ---------- */
function IsoScene({ layout, palette, tilt, spin, extrude, floatOn, orbitOn, cell, brand, tag, tall }) {
  const vars = {
    '--ib-bg': palette.bg, '--ib-card': palette.card, '--ib-ink': palette.ink,
    '--ib-muted': palette.muted, '--ib-accent': palette.accent, '--ib-line': palette.line,
    '--ib-sideL': palette.sideL, '--ib-sideR': palette.sideR,
    '--tilt': tilt + 'deg', '--spin': spin + 'deg',
    '--cols': layout.cols, '--cell': (cell || 118) + 'px',
  }
  return (
    <div className={'iso-viewport' + (orbitOn ? ' orbit' : '') + (floatOn ? '' : ' still') + (tall ? ' tall' : '')} style={vars}>
      <div className="iso-shadow" />
      <div className="iso-spun">
        <div className="iso-plane" key={layout.id + palette.id}>
          {layout.tiles.map((tl, i) => (
            <div key={i} className="iso-tile" style={{ gridColumn: 'span ' + tl[1], gridRow: 'span ' + tl[2], '--h': Math.round(tl[3] * extrude) + 'px', '--i': i }}>
              <div className="iso-rise">
                <div className="iso-side-l" />
                <div className="iso-side-r" />
                <div className="iso-card" dangerouslySetInnerHTML={{ __html: tileHTML(tl[0], brand) }} />
              </div>
              {tag ? <span className="iso-tag">{tl[0]}</span> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Designer view: readable cards, stepped extrude ---------- */
function FlatScene({ layout, palette, extrude, cell, brand, tag }) {
  const vars = {
    '--ib-bg': palette.bg, '--ib-card': palette.card, '--ib-ink': palette.ink,
    '--ib-muted': palette.muted, '--ib-accent': palette.accent, '--ib-line': palette.line,
    '--cols': layout.cols, '--cell': (cell || 118) + 'px',
  }
  return (
    <div className="flat-scene" style={vars}>
      <div className="flat-grid" key={layout.id + palette.id}>
        {layout.tiles.map((tl, i) => (
          <div key={i} className="flat-tile" style={{ gridColumn: 'span ' + tl[1], gridRow: 'span ' + tl[2], '--i': i, boxShadow: flatShadow(Math.round(tl[3] * extrude), palette.sideL, palette.sideR) }}>
            <div className="flat-card" dangerouslySetInnerHTML={{ __html: tileHTML(tl[0], brand) }} />
            {tag ? <span className="flat-tag">{tl[0]}</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function AgentTabs({ agent, setAgent }) {
  const ag = AGENTS.find(a => a.id === agent)
  return (
    <div className="agentbox">
      <div className="agenttabs">
        {AGENTS.map(a => (
          <button key={a.id} className={'agenttab' + (a.id === agent ? ' on' : '')} onClick={() => setAgent(a.id)}>{a.name}</button>
        ))}
      </div>
      <code className="agentcmd">{ag.install}</code>
    </div>
  )
}

const FAQS = [
  ['How does my agent build from a prompt?', 'Install once, then paste the generated prompt. It carries layout, palette, tile list with spans and extrude heights, projection angles and motion — a complete build spec, so a fresh session nails it first try.'],
  ['Why CSS 3D instead of SVG or WebGL?', 'Zero dependencies, copy-paste portable, and it inherits the page theme for free. True isometric projection (tilt 54.7°, spin 45°) with shaded faces reads as real depth without a single library.'],
  ['What does "depth is data" mean?', 'Extrude height encodes importance: the headline metric is tallest, proof sits mid, context stays flat. If every tile is tall, nothing is. The skill enforces the hierarchy.'],
]

export default function App() {
  const [layoutId, setLayoutId] = useState('mosaic')
  const [paletteId, setPaletteId] = useState('lime')
  const [view, setView] = useState('flat')
  const [tilt, setTilt] = useState(54)
  const [spin, setSpin] = useState(45)
  const [extrude, setExtrude] = useState(1)
  const [floatOn, setFloatOn] = useState(true)
  const [orbitOn, setOrbitOn] = useState(false)
  const [brand, setBrand] = useState('Acme')
  const [agent, setAgent] = useState('claude-code')
  const [copied, setCopied] = useState('')

  const layout = LAYOUTS.find(l => l.id === layoutId)
  const palette = PALETTES.find(p => p.id === paletteId)
  const ag = AGENTS.find(a => a.id === agent)
  const prompt = agentPromptIso(agent, view, layout, palette, tilt, spin, extrude, floatOn, brand)
  const code = useMemo(() => buildStandalone(view, layout, palette, tilt, spin, extrude, floatOn, brand), [view, layout, palette, tilt, spin, extrude, floatOn, brand])
  const spec = gridSpec(layout, extrude)

  const loadLayout = (id) => {
    setLayoutId(id)
    const el = document.getElementById('playground')
    if (el) el.scrollIntoView()
  }

  return (
    <React.Fragment>
      <div className="topbar"><div className="wrap topbar-inner">
        <div className="brand"><span className="brand-mark">◧</span> iso-bento <span className="badge">live iso · zero deps</span></div>
        <div className="topbar-links"><a href="#playground">Playground</a><a href="#gallery">Layouts</a><a href="#palettes">Palettes</a><a href="#tiles">Tiles</a><a href="https://github.com/berlified/landing-skill">GitHub</a></div>
        <button className="btn btn-small" onClick={() => copy(INSTALL_CMD, setCopied)}>{copied ? 'Copied ✓' : 'Copy install'}</button>
      </div></div>

      <div className="wrap">
        <header className="hero">
          <div>
            <span className="badge">◧ npx skills add berlified/landing-skill --skill iso-bento</span>
            <h1>Bento grids with <span className="grad">real depth.</span></h1>
            <p className="sub">iso-bento is a skill for <b>Claude Code, Codex, OpenCode and Cursor</b> that builds isometric bento grids — extruded tiles, shaded faces, float motion — as one dependency-free HTML file. Everything below is live CSS 3D. Pick a grid, copy the prompt, ship it.</p>
            <AgentTabs agent={agent} setAgent={setAgent} />
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => copy(prompt, setCopied)}>{copied ? 'Prompt copied ✓' : 'Copy prompt for ' + ag.name}</button>
              <a className="btn" href="#playground">Open the playground</a>
            </div>
            <div className="stats">
              <div className="stat"><b>6</b><span>layouts</span></div>
              <div className="stat"><b>6</b><span>palettes</span></div>
              <div className="stat"><b>8</b><span>tile kinds</span></div>
              <div className="stat"><b>54°</b><span>true iso tilt</span></div>
            </div>
          </div>
          <div>
            <FlatScene layout={LAYOUTS.find(l => l.id === 'mosaic')} palette={PALETTES[0]} extrude={1} cell={92} brand={brand} tag={false} />
            <div className="stage-note" style={{ marginTop: 10 }}>mosaic × lime-dark · {LAYOUTS.find(l => l.id === 'mosaic').tiles.length} tiles · hover any tile — it brightens. <a href="#playground" style={{ color: 'var(--accent)' }}>Remix this →</a></div>
          </div>
        </header>

        <div className="pg" id="playground">
          <div className="pg-head">
            <b>◧ Playground — {layout.name} × {palette.name}</b>
            <span>{layout.tiles.length} tiles · {view === 'flat' ? 'designer 2.5D' : 'tilt ' + tilt + '° · spin ' + spin + '°'} · ×{extrude}</span>
          </div>
          <div className="pg-body">
            <div className="pg-col">
              <h3>Layout — {LAYOUTS.length}</h3>
              {LAYOUTS.map(l => (
                <button key={l.id} className={'pick' + (l.id === layoutId ? ' active' : '')} onClick={() => setLayoutId(l.id)}>
                  <b><code style={{ color: '#b9e62f', fontSize: 11 }}>{l.id}</code> · {l.name}</b><span>{l.desc}</span>
                </button>
              ))}
              <h3>Palette — {PALETTES.length}</h3>
              <div className="swrow">
                {PALETTES.map(p => (
                  <button key={p.id} className={'sw' + (p.id === paletteId ? ' active' : '')} onClick={() => setPaletteId(p.id)}>
                    <i style={{ background: 'linear-gradient(135deg,' + p.accent + ',' + p.card + ')' }} />{p.name}
                  </button>
                ))}
              </div>
              <h3>View</h3>
              <div className="seg">
                <button className={view === 'flat' ? 'on' : ''} onClick={() => setView('flat')}>Designer</button>
                <button className={view === 'iso' ? 'on' : ''} onClick={() => setView('iso')}>True iso</button>
              </div>
              <div className="viewnote">{view === 'flat' ? 'Readable cards, stepped extrude. Text stays horizontal.' : 'Real projection: tilt + spin. Text follows faces — keep it short.'}</div>
              <h3>Projection</h3>
              <div className={'slider' + (view === 'flat' ? ' off' : '')}><label><span>Tilt</span><span>{tilt}°</span></label><input type="range" min="0" max="70" value={tilt} disabled={view === 'flat'} onChange={e => setTilt(+e.target.value)} /></div>
              <div className={'slider' + (view === 'flat' ? ' off' : '')}><label><span>Spin</span><span>{spin}°</span></label><input type="range" min="0" max="90" value={spin} disabled={view === 'flat'} onChange={e => setSpin(+e.target.value)} /></div>
              <div className="slider"><label><span>Extrude</span><span>×{extrude}</span></label><input type="range" min="0.4" max="1.6" step="0.1" value={extrude} onChange={e => setExtrude(+e.target.value)} /></div>
              <h3>Motion</h3>
              <div className="toggle"><span>Float</span><button className={floatOn ? 'on' : ''} onClick={() => setFloatOn(!floatOn)}>{floatOn ? 'on' : 'off'}</button></div>
              <div className="toggle"><span>Auto-orbit</span><button className={orbitOn ? 'on' : ''} onClick={() => setOrbitOn(!orbitOn)}>{orbitOn ? 'on' : 'off'}</button></div>
              <h3>Brand</h3>
              <input value={brand} onChange={e => setBrand(e.target.value)} style={{ width: '100%', background: '#0a0a0e', border: '1px solid var(--line)', borderRadius: 10, color: 'var(--ink)', padding: '10px 12px', font: 'inherit', fontSize: 13 }} />
            </div>
            <div className="stage">
              {view === 'flat' ? (
                <FlatScene layout={layout} palette={palette} extrude={extrude} cell={112} brand={brand} tag={true} />
              ) : (
                <IsoScene layout={layout} palette={palette} tilt={tilt} spin={spin} extrude={extrude} floatOn={floatOn} orbitOn={orbitOn} cell={112} brand={brand} tag={true} tall={false} />
              )}
              <div className="stage-note">Spec: {spec}. Tile tags show kind. {view === 'flat' ? 'Depth is stepped shadow — fully responsive.' : 'Drag the sliders — the projection is live.'}</div>
            </div>
            <div className="pg-col">
              <div className="cmdbox">
                <h4>{ag.name} prompt</h4>
                <code>{prompt}</code>
                <div className="row">
                  <button className="btn btn-primary btn-small" onClick={() => copy(prompt, setCopied)}>{copied ? 'Copied ✓' : 'Copy prompt'}</button>
                </div>
                <div className="agenttabs" style={{ marginTop: 10, marginBottom: 0 }}>
                  {AGENTS.map(a => (
                    <button key={a.id} className={'agenttab' + (a.id === agent ? ' on' : '')} onClick={() => setAgent(a.id)} style={{ fontSize: 11, padding: '5px 10px' }}>{a.name}</button>
                  ))}
                </div>
              </div>
              <div className="cmdbox">
                <h4>Standalone HTML — {(code.length / 1024).toFixed(1)} KB, zero deps</h4>
                <code>{'<html> ' + layout.tiles.length + ' tiles · ' + palette.id + ' · ' + view + ' view …full file →'}</code>
                <div className="row">
                  <button className="btn btn-primary btn-small" onClick={() => copy(code, setCopied)}>Copy code</button>
                  <button className="btn btn-small" onClick={() => download('iso-bento-' + layout.id + '-' + palette.id + '.html', code)}>Download .html</button>
                </div>
                {copied ? <div className="copied">Copied ✓</div> : null}
              </div>
              <div className="cmdbox">
                <h4>Install for {ag.name}</h4>
                <code>{ag.install}</code>
                <div className="row">
                  <button className="btn btn-small" onClick={() => copy(ag.install, setCopied)}>Copy install</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="gallery">
          <h2>Every layout, live</h2>
          <p className="lead">Not mockups — real CSS-3D scenes. Click any grid to remix it in the playground.</p>
          <div className="grid layouts">
            {LAYOUTS.map((l, li) => (
              <div key={l.id} className="card">
                <FlatScene layout={l} palette={PALETTES[li % PALETTES.length]} extrude={1} cell={52} brand={brand} tag={false} />
                <code>{l.id} · {l.cols} cols · {l.tiles.length} tiles</code>
                <b>{l.name}</b>
                <p>{l.desc}</p>
                <div style={{ marginTop: 10 }}><button className="btn btn-small" onClick={() => loadLayout(l.id)}>Remix →</button></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="palettes">
          <h2>6 palettes — faces shade themselves</h2>
          <p className="lead">Top face lightest, left mid, right dark. Pick one to repaint the playground.</p>
          <div className="grid pals">
            {PALETTES.map(p => (
              <button key={p.id} className={'card' + (p.id === paletteId ? ' sel' : '')} onClick={() => { setPaletteId(p.id); loadLayout(layoutId) }}>
                <div className="palprev" style={{ background: p.bg }}>
                  <div style={{ position: 'absolute', inset: '14px 16px', background: p.card, border: '1px solid ' + p.line, borderRadius: 8 }} />
                  <div style={{ position: 'absolute', left: 26, right: 26, bottom: 12, height: 10, background: p.accent, borderRadius: 99 }} />
                </div>
                <code>{p.id}</code><b>{p.name}</b><p>{p.note}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="tiles">
          <h2>8 tile kinds</h2>
          <p className="lead">Every tile ships in any span and any extrude height. Flat preview — they gain depth in the grid.</p>
          <div className="grid tiles">
            {TILE_META.map(tm => (
              <div key={tm.id} className="card">
                <div className="flattile" style={{ '--ib-card': palette.card, '--ib-ink': palette.ink, '--ib-muted': palette.muted, '--ib-accent': palette.accent, '--ib-line': palette.line, '--ib-bg': palette.bg }} dangerouslySetInnerHTML={{ __html: tileHTML(tm.id, brand) }} />
                <div className="tilename" style={{ marginTop: 10 }}>{tm.name}</div>
                <p>{tm.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <h2>Questions</h2>
          <div className="faq">
            {FAQS.map((f, i) => <details key={i} className="faqrow"><summary>{f[0]}</summary><p>{f[1]}</p></details>)}
          </div>
        </section>

        <footer>
          <b style={{ color: 'var(--ink)' }}>iso-bento</b> · MIT © 2026 berlified · <a href="https://github.com/berlified/landing-skill">github.com/berlified/iso-bento</a> · Install: <a href="#playground" onClick={e => { e.preventDefault(); copy(INSTALL_CMD, setCopied) }}>{INSTALL_CMD}</a> {copied ? '✓' : null}
        </footer>
      </div>
    </React.Fragment>
  )
}
