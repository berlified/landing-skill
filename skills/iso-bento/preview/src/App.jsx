import React, { useMemo, useState } from 'react'
import { PALETTES, TILE_META, LAYOUTS, AGENTS, INSTALL_CMD, tileHTML, agentPromptIso, buildStandalone, flatShadow } from './data.js'

function copy(text, setCopied) {
  navigator.clipboard?.writeText(text).then(() => {
    setCopied('done')
    setTimeout(() => setCopied(''), 1600)
  })
}

function openStandalone(code) {
  const blob = new Blob([code], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
  setTimeout(() => URL.revokeObjectURL(url), 10000)
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

/* ---------- True iso view: pure CSS 3D ---------- */
function IsoScene({ layout, palette, tilt, spin, extrude, floatOn, orbitOn, cell, brand, tag }) {
  const vars = {
    '--ib-bg': palette.bg, '--ib-card': palette.card, '--ib-ink': palette.ink,
    '--ib-muted': palette.muted, '--ib-accent': palette.accent, '--ib-line': palette.line,
    '--ib-sideL': palette.sideL, '--ib-sideR': palette.sideR,
    '--tilt': tilt + 'deg', '--spin': spin + 'deg',
    '--cols': layout.cols, '--cell': (cell || 118) + 'px',
  }
  return (
    <div className={'iso-viewport' + (orbitOn ? ' orbit' : '') + (floatOn ? '' : ' still')} style={vars}>
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

function Scene({ view, layout, palette, tilt, spin, extrude, floatOn, orbitOn, cell, brand, tag }) {
  if (view === 'flat') return <FlatScene layout={layout} palette={palette} extrude={extrude} cell={cell} brand={brand} tag={tag} />
  return <IsoScene layout={layout} palette={palette} tilt={tilt} spin={spin} extrude={extrude} floatOn={floatOn} orbitOn={orbitOn} cell={cell} brand={brand} tag={tag} />
}

const FAQS = [
  ['How does my agent build from a prompt?', 'Install once, then paste the generated prompt. It carries layout, palette, tile list with spans and extrude heights, projection angles and motion — a complete build spec, so a fresh session nails it first try.'],
  ['Designer view or true iso?', 'Designer is readable 2.5D: horizontal text, stepped extrude — use it for dashboards and landing sections. True iso is real projection for drama and hero moments. Both export to standalone HTML.'],
  ['Why pure CSS instead of a 3D library?', 'Zero dependencies, copy-paste portable, themeable with variables. True isometric projection with shaded faces reads as real depth without shipping a renderer.'],
  ['What does "depth is data" mean?', 'Extrude height encodes importance: the headline metric is tallest, proof sits mid-height, context stays nearly flat. If every tile is tall, nothing is.'],
]

const FILTERS = [
  { id: 'all', name: 'All' },
  { id: 'layouts', name: 'Layouts' },
  { id: 'palettes', name: 'Palettes' },
  { id: 'tiles', name: 'Tiles' },
]

export default function App() {
  const [layoutIdx, setLayoutIdx] = useState(3)
  const [paletteId, setPaletteId] = useState('lime')
  const [view, setView] = useState('flat')
  const [canvasTab, setCanvasTab] = useState('preview')
  const [customize, setCustomize] = useState(false)
  const [tilt, setTilt] = useState(54)
  const [spin, setSpin] = useState(45)
  const [extrude, setExtrude] = useState(1)
  const [floatOn, setFloatOn] = useState(true)
  const [orbitOn, setOrbitOn] = useState(false)
  const [brand, setBrand] = useState('Acme')
  const [agent, setAgent] = useState('claude-code')
  const [filter, setFilter] = useState('all')
  const [copied, setCopied] = useState('')

  const layout = LAYOUTS[layoutIdx]
  const palette = PALETTES.find(p => p.id === paletteId)
  const ag = AGENTS.find(a => a.id === agent)
  const prompt = agentPromptIso(agent, view, layout, palette, tilt, spin, extrude, floatOn, brand)
  const code = useMemo(() => buildStandalone(view, layout, palette, tilt, spin, extrude, floatOn, brand), [view, layout, palette, tilt, spin, extrude, floatOn, brand])

  const prevLayout = () => setLayoutIdx(i => (i - 1 + LAYOUTS.length) % LAYOUTS.length)
  const nextLayout = () => setLayoutIdx(i => (i + 1) % LAYOUTS.length)
  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView() }

  const totalCount = LAYOUTS.length + PALETTES.length + TILE_META.length
  const showLayouts = filter === 'all' || filter === 'layouts'
  const showPalettes = filter === 'all' || filter === 'palettes'
  const showTiles = filter === 'all' || filter === 'tiles'

  return (
    <React.Fragment>
      <div className="topbar"><div className="wrap topbar-inner">
        <a className="brand" href="#top"><span className="brand-mark">◧</span> iso-bento</a>
        <nav className="navlinks">
          <a href="#blocks">Blocks</a><a href="#all">Components</a><a href="#skills">Skills</a><a href="#why">Why</a><a href="#faq">FAQ</a>
        </nav>
        <div className="navright">
          <button className="searchbtn" onClick={() => scrollTo('skills')}>Search skills… <kbd>⌘K</kbd></button>
          <a className="iconbtn" href="https://github.com/berlified/landing-skill" title="GitHub">⌁</a>
          <button className="btn btn-primary btn-small" onClick={() => copy(ag.install, setCopied)}>{copied ? 'Copied ✓' : 'Copy install'}</button>
        </div>
      </div></div>

      <div className="wrap" id="top">
        <header className="hero">
          <a className="pill" href="#blocks"><span className="new">New</span> True-iso + Designer views · zero dependencies →</a>
          <h1>Isometric bento grids <span className="grad">for React and AI workflows</span></h1>
          <p className="sub">Production-ready 3D tile blocks with real structure, spacing and hierarchy — so <b>Claude Code, Cursor and Codex</b> build your grids with one pasted prompt. Pick a block, customize it, copy the code.</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => copy(prompt, setCopied)}>{copied ? 'Prompt copied ✓' : 'Copy prompt for ' + ag.name}</button>
            <button className="btn" onClick={() => scrollTo('blocks')}>Explore blocks</button>
          </div>
          <div className="trusted"><span>Works with</span><b>Claude Code</b><span className="dotsep">·</span><b>Codex</b><span className="dotsep">·</span><b>OpenCode</b><span className="dotsep">·</span><b>Cursor</b></div>
        </header>

        <section className="viewer-section" id="blocks">
          <div className="viewer-head">
            <h2>Try it live! Switch blocks and customize them</h2>
            <p>Every block below renders live — no mockups, no screenshots.</p>
          </div>
          <div className="viewer">
            <div className="viewer-top">
              <span className="viewer-cat">Layouts /</span>
              <select className="select" value={layoutIdx} onChange={e => setLayoutIdx(+e.target.value)}>
                {LAYOUTS.map((l, i) => <option key={l.id} value={i}>{l.name}</option>)}
              </select>
              <span className="viewer-count">{layout.name} · {layoutIdx + 1} of {LAYOUTS.length}</span>
              <div className="viewer-nav">
                <button className="btn btn-small" onClick={prevLayout}>← Prev</button>
                <button className="btn btn-small" onClick={nextLayout}>Next →</button>
              </div>
            </div>
            <div className="viewer-bar">
              <button className={'btn btn-small' + (customize ? ' btn-primary' : '')} onClick={() => setCustomize(!customize)}>Customize</button>
              <div className="seg">
                <button className={view === 'flat' ? 'on' : ''} onClick={() => setView('flat')}>Designer</button>
                <button className={view === 'iso' ? 'on' : ''} onClick={() => setView('iso')}>True iso</button>
              </div>
              <div className="seg">
                <button className={canvasTab === 'preview' ? 'on' : ''} onClick={() => setCanvasTab('preview')}>Preview</button>
                <button className={canvasTab === 'code' ? 'on' : ''} onClick={() => setCanvasTab('code')}>Code</button>
              </div>
              <span className="spacer" />
              <button className="btn btn-small" onClick={() => openStandalone(code)}>Open in new tab ↗</button>
              <button className="btn btn-small" onClick={() => copy(code, setCopied)}>{copied ? 'Copied ✓' : 'Copy code'}</button>
            </div>
            {canvasTab === 'preview' ? (
              <div className="viewer-canvas">
                <Scene view={view} layout={layout} palette={palette} tilt={tilt} spin={spin} extrude={extrude} floatOn={floatOn} orbitOn={orbitOn} cell={view === 'flat' ? 128 : 124} brand={brand} tag={false} />
              </div>
            ) : (
              <pre className="viewer-code">{code}</pre>
            )}
            {customize ? (
              <div className="viewer-custom">
                <div>
                  <h3>Layout</h3>
                  {LAYOUTS.map((l, i) => (
                    <button key={l.id} className={'pick' + (i === layoutIdx ? ' active' : '')} onClick={() => setLayoutIdx(i)}>
                      <b><code>{l.id}</code> · {l.name}</b><span>{l.desc}</span>
                    </button>
                  ))}
                </div>
                <div>
                  <h3>Palette</h3>
                  <div className="swrow">
                    {PALETTES.map(p => (
                      <button key={p.id} className={'sw' + (p.id === paletteId ? ' active' : '')} onClick={() => setPaletteId(p.id)}>
                        <i style={{ background: 'linear-gradient(135deg,' + p.accent + ',' + p.card + ')' }} />{p.name}
                      </button>
                    ))}
                  </div>
                  <h3 style={{ marginTop: 16 }}>Brand</h3>
                  <input className="textinput" value={brand} onChange={e => setBrand(e.target.value)} />
                  <div className="viewnote">{view === 'flat' ? 'Designer: readable cards, stepped extrude.' : 'True iso: tilt + spin projection. Text follows faces.'}</div>
                </div>
                <div>
                  <h3>Projection {view === 'flat' ? '(true-iso only)' : ''}</h3>
                  <div className={'slider' + (view === 'flat' ? ' off' : '')}><label><span>Tilt</span><span>{tilt}°</span></label><input type="range" min="0" max="70" value={tilt} disabled={view === 'flat'} onChange={e => setTilt(+e.target.value)} /></div>
                  <div className={'slider' + (view === 'flat' ? ' off' : '')}><label><span>Spin</span><span>{spin}°</span></label><input type="range" min="0" max="90" value={spin} disabled={view === 'flat'} onChange={e => setSpin(+e.target.value)} /></div>
                  <div className="slider"><label><span>Extrude</span><span>×{extrude}</span></label><input type="range" min="0.4" max="1.6" step="0.1" value={extrude} onChange={e => setExtrude(+e.target.value)} /></div>
                </div>
                <div>
                  <h3>Motion</h3>
                  <div className="toggle"><span>Float</span><button className={floatOn ? 'on' : ''} onClick={() => setFloatOn(!floatOn)}>{floatOn ? 'on' : 'off'}</button></div>
                  <div className="toggle"><span>Auto-orbit</span><button className={orbitOn ? 'on' : ''} onClick={() => setOrbitOn(!orbitOn)}>{orbitOn ? 'on' : 'off'}</button></div>
                </div>
              </div>
            ) : null}
            <div className="viewer-foot">
              <code>{layout.id} · {layout.tiles.length} tiles · {palette.id} · {view}</code>
              <span className="spacer" style={{ flex: 1 }} />
              <button className="btn btn-primary btn-small" onClick={() => copy(prompt, setCopied)}>{copied ? 'Prompt copied ✓' : 'Copy ' + ag.name + ' prompt'}</button>
            </div>
          </div>
        </section>

        <section className="section" id="all">
          <div className="section-head">
            <h2>Browse all {totalCount} pieces</h2>
          </div>
          <p className="lead">Layouts, palettes and tiles with real structure, spacing and hierarchy. Click anything to load it into the viewer.</p>
          <div className="chips">
            {FILTERS.map(f => (
              <button key={f.id} className={'chip' + (filter === f.id ? ' on' : '')} onClick={() => setFilter(f.id)}>
                {f.name}<span>{f.id === 'all' ? totalCount : f.id === 'layouts' ? LAYOUTS.length : f.id === 'palettes' ? PALETTES.length : TILE_META.length}</span>
              </button>
            ))}
          </div>
          {filter === 'all' || filter === 'layouts' ? (
            <React.Fragment>
              <h3 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '22px 0 12px' }}>Layouts</h3>
              <div className="grid blocks">
                {LAYOUTS.map((l, i) => (
                  <button key={l.id} className={'bcard' + (i === layoutIdx ? ' sel' : '')} onClick={() => { setLayoutIdx(i); scrollTo('blocks') }}>
                    <div className="bprev"><FlatScene layout={l} palette={palette} extrude={1} cell={56} brand={brand} tag={false} /></div>
                    <div className="bmeta"><span className="bcount">{l.tiles.length} tiles · {l.cols} cols</span><b>{l.name}</b><p>{l.desc}</p></div>
                  </button>
                ))}
              </div>
            </React.Fragment>
          ) : null}
          {filter === 'all' || filter === 'palettes' ? (
            <React.Fragment>
              <h3 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '22px 0 12px' }}>Palettes</h3>
              <div className="grid pals">
                {PALETTES.map(p => (
                  <button key={p.id} className={'card' + (p.id === paletteId ? ' sel' : '')} onClick={() => { setPaletteId(p.id); scrollTo('blocks') }}>
                    <div className="palprev" style={{ background: p.bg }}>
                      <div style={{ position: 'absolute', inset: '14px 16px', background: p.card, border: '1px solid ' + p.line, borderRadius: 8 }} />
                      <div style={{ position: 'absolute', left: 26, right: 26, bottom: 12, height: 10, background: p.accent, borderRadius: 99 }} />
                    </div>
                    <code>{p.id}</code><b>{p.name}</b><p>{p.note}</p>
                  </button>
                ))}
              </div>
            </React.Fragment>
          ) : null}
          {filter === 'all' || filter === 'tiles' ? (
            <React.Fragment>
              <h3 style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', margin: '22px 0 12px' }}>Tiles</h3>
              <div className="grid tilesgrid">
                {TILE_META.map(tm => (
                  <div key={tm.id} className="card">
                    <div className="flattile" style={{ '--ib-card': palette.card, '--ib-ink': palette.ink, '--ib-muted': palette.muted, '--ib-accent': palette.accent, '--ib-line': palette.line, '--ib-bg': palette.bg }} dangerouslySetInnerHTML={{ __html: tileHTML(tm.id, brand) }} />
                    <div className="tilename" style={{ marginTop: 10 }}>{tm.name}</div>
                    <p>{tm.desc}</p>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ) : null}
        </section>

        <section className="section" id="skills">
          <div className="section-head"><h2>Agent skills for your editor</h2></div>
          <p className="lead">Install once, then build grids inside Claude Code, Cursor and Codex just by pasting a prompt.</p>
          <div className="skillgrid">
            <div className="agentbox">
              <div className="agenttabs">
                {AGENTS.map(a => (
                  <button key={a.id} className={'agenttab' + (a.id === agent ? ' on' : '')} onClick={() => setAgent(a.id)}>{a.name}</button>
                ))}
              </div>
              <code className="agentcmd">{ag.install}</code>
              <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                <button className="btn btn-primary btn-small" onClick={() => copy(ag.install, setCopied)}>{copied ? 'Copied ✓' : 'Copy install'}</button>
              </div>
            </div>
            <div className="promptbox">
              <div className="promptbox-head"><b>Prompt — {layout.id} · {palette.id} · {view}</b><button className="btn btn-primary btn-small" onClick={() => copy(prompt, setCopied)}>{copied ? 'Copied ✓' : 'Copy'}</button></div>
              <pre>{prompt}</pre>
              <div className="promptbox-foot">Fresh session? Run the install first · or one-shot: <code>{ag.tryCmd}</code></div>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="section-head"><h2>iso-bento vs hand-rolled</h2></div>
          <p className="lead">Hand-rolled 3D grids work — this just skips the assembly.</p>
          <div className="compare"><table>
            <thead><tr><th></th><th>Hand-rolled CSS</th><th>iso-bento</th></tr></thead>
            <tbody>
              <tr><th>True isometric projection</th><td className="mut">Math it yourself</td><td className="yes">Tilt + spin built in</td></tr>
              <tr><th>Readable designer view</th><td className="mut">Second build</td><td className="yes">One toggle</td></tr>
              <tr><th>Depth-as-data hierarchy</th><td className="mut">Eyeball it</td><td className="yes">Enforced by the skill</td></tr>
              <tr><th>Zero-dependency export</th><td className="mid">If you're careful</td><td className="yes">Copy / download / new tab</td></tr>
              <tr><th>AI build prompt</th><td className="no">Write your own brief</td><td className="yes">Generated per grid</td></tr>
            </tbody>
          </table></div>
        </section>

        <section className="section" id="faq">
          <div className="section-head"><h2>Questions</h2></div>
          <div className="faq">
            {FAQS.map((f, i) => <details key={i} className="faqrow"><summary>{f[0]}</summary><p>{f[1]}</p></details>)}
          </div>
        </section>
      </div>

      <footer className="footer"><div className="wrap">
        <div className="fcols">
          <div>
            <a className="brand" href="#top" style={{ marginBottom: 12 }}><span className="brand-mark">◧</span> iso-bento</a>
            <p style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 260 }}>Isometric bento grids your agent can build. MIT licensed.</p>
          </div>
          <div><h4>Product</h4><a href="#blocks">Blocks</a><a href="#all">Components</a><a href="#skills">Agent skills</a><a href="#why">Why iso-bento</a></div>
          <div><h4>Resources</h4><a href="https://github.com/berlified/landing-skill">Documentation</a><a href="https://github.com/berlified/landing-skill">Changelog</a><a href="https://github.com/berlified/landing-skill">License</a><a href="#faq">FAQs</a></div>
          <div><h4>Socials</h4><a href="https://github.com/berlified/landing-skill">GitHub</a></div>
        </div>
        <div className="fbottom"><span>© 2026 berlified · MIT</span><span>Install: <a href="#skills" onClick={e => { e.preventDefault(); copy(INSTALL_CMD, setCopied) }}>{INSTALL_CMD}</a></span></div>
      </div></footer>
    </React.Fragment>
  )
}
