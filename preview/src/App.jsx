import React, { useMemo, useState } from 'react'
import { TYPES, LAYOUTS, STYLES, INSTALL_CMD, landingCommand, TOTAL } from './data.js'

function copy(text, setCopied) {
  navigator.clipboard?.writeText(text).then(() => {
    setCopied(text.slice(0, 40))
    setTimeout(() => setCopied(''), 1600)
  })
}

function Skeleton({ layout, style, typeName }) {
  const css = {
    '--skel-bg': style.bg, '--skel-ink': style.ink,
    '--skel-muted': style.muted, '--skel-accent': style.accent,
    '--skel-line': style.line, '--skel-radius': style.radius + 'px',
  }
  const nav = (
    <div className="skel-nav">
      <div className="skel-logo" />
      <div className="skel-links"><i /><i /><i /></div>
      <div className="skel-cta" />
    </div>
  )
  const h1 = (<><div className="skel-h1" /><div className="skel-h1 short" /></>)
  const subs = (<><div className="skel-sub s2" /><div className="skel-sub s3" /></>)
  const btns = (<div className="skel-btnrow"><div className="skel-btn" /><div className="skel-btn ghost" /></div>)
  const visual = (label = 'visual') => <div className="skel-visual">{label}</div>
  const cards3 = (
    <div className="skel-cards">
      {[0, 1, 2].map(i => <div key={i} className="skel-card"><i /><i /><i /></div>)}
    </div>
  )
  const form = (
    <div className="skel-form">
      <div className="skel-input" /><div className="skel-input" />
      <div className="skel-btn" style={{ width: '100%' }} />
    </div>
  )
  let body = null
  switch (layout) {
    case 'centered': body = (<><div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>{h1}{subs}{btns}</div>{visual(typeName)}</>); break
    case 'split-left': body = (<div className="skel-2col"><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}{btns}</div>{visual(typeName)}</div>); break
    case 'split-right': body = (<div className="skel-2col">{visual(typeName)}<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}{btns}</div></div>); break
    case 'fullbleed': body = (<div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'flex-end', background: `linear-gradient(135deg, ${style.muted}, ${style.bg})`, borderRadius: 10, padding: 14, border: `1px solid ${style.line}` }}>{h1}{subs}{btns}</div>); break
    case 'asymmetric': body = (<div className="skel-2col" style={{ gridTemplateColumns: '1.4fr .8fr' }}><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}{btns}{cards3}</div><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{visual('overlap card')}{visual('proof')}</div></div>); break
    case 'formfirst': body = (<div className="skel-2col"><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}<div className="skel-sub" />{cards3}</div>{form}</div>); break
    case 'singlescreen': body = (<div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center' }}>{h1}{subs}{form}</div>); break
    case 'longscroll': body = (<><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}{btns}</div>{visual('hero')}{cards3}{visual('proof')}{cards3}</>); break
    case 'zigzag': body = (<><div className="skel-2col"><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{h1}{subs}</div>{visual('row 1')}</div><div className="skel-2col">{visual('row 2')}<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{h1}{subs}</div></div></>); break
    case 'bento': body = (<><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{h1}{subs}</div><div className="skel-bento"><div /><div /><div /></div><div className="skel-bento" style={{ minHeight: 70 }}><div /><div /><div /></div></>); break
    case 'editorial': body = (<div className="skel-2col" style={{ gridTemplateColumns: '.9fr 1.1fr' }}><div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{h1}{subs}{subs}{subs}</div>{visual('sticky visual')}</div>); break
    case 'tabbed': body = (<><div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{h1}{subs}</div><div className="skel-tabs"><div className="skel-tab on" /><div className="skel-tab" /><div className="skel-tab" /><div className="skel-tab" /></div>{visual('tab panel')}</>); break
    default: body = (<>{h1}{subs}{btns}</>)
  }
  return (
    <div className="skel" style={css}>
      {nav}
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .55 }}>{typeName} · {layout} · {style.id}</div>
      {body}
    </div>
  )
}

function MiniWire({ layout }) {
  const b = { display: 'block', background: 'rgba(255,255,255,.28)', borderRadius: 3 }
  const a = { display: 'block', background: '#a3e635', borderRadius: 3 }
  const row = (l, r) => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 4 }}>
      <div>{l}</div><div>{r}</div>
    </div>
  )
  let inner = null
  if (layout === 'centered') inner = (<><i style={{ ...b, height: 8, width: '70%', margin: '0 auto' }} /><i style={{ ...a, height: 6, width: 44, margin: '4px auto' }} /><i style={{ ...b, height: 18, opacity: .4 }} /></>)
  else if (layout === 'split-left' || layout === 'split-right') inner = (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}><div><i style={{ ...b, height: 6 }} /><i style={{ ...a, height: 5, width: 30, marginTop: 3 }} /></div><i style={{ ...b, height: 26, opacity: .4 }} /></div>)
  else if (layout === 'bento') inner = (<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 3 }}><i style={{ ...a, height: 26, opacity: .7 }} /><i style={{ ...b, height: 26, opacity: .4 }} /><i style={{ ...b, height: 26, opacity: .4 }} /></div>)
  else if (layout === 'zigzag') inner = (<>{row(<i style={{ ...b, height: 12 }} />, <i style={{ ...b, height: 12, opacity: .4 }} />)}{row(<i style={{ ...b, height: 12, opacity: .4 }} />, <i style={{ ...b, height: 12 }} />)}</>)
  else if (layout === 'formfirst') inner = (<div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 4 }}><i style={{ ...b, height: 26 }} /><i style={{ ...a, height: 26, opacity: .5 }} /></div>)
  else if (layout === 'tabbed') inner = (<><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3 }}><i style={{ ...a, height: 6 }} /><i style={{ ...b, height: 6 }} /><i style={{ ...b, height: 6 }} /><i style={{ ...b, height: 6 }} /></div><i style={{ ...b, height: 20, opacity: .4, marginTop: 4 }} /></>)
  else if (layout === 'longscroll') inner = (<><i style={{ ...b, height: 6, width: '60%' }} /><i style={{ ...b, height: 10, opacity: .4, marginTop: 3 }} /><i style={{ ...b, height: 10, opacity: .25, marginTop: 3 }} /><i style={{ ...b, height: 10, opacity: .25, marginTop: 3 }} /></>)
  else inner = (<><i style={{ ...b, height: 7, width: '75%' }} /><i style={{ ...a, height: 5, width: 40, marginTop: 3 }} /><i style={{ ...b, height: 22, opacity: .35, marginTop: 4 }} /></>)
  return <div className="mini"><div style={{ display: 'flex', gap: 3, marginBottom: 5 }}><i style={{ ...b, width: 22, height: 5 }} /><i style={{ ...a, width: 26, height: 5, marginLeft: 'auto' }} /></div>{inner}</div>
}

export default function App() {
  const [type, setType] = useState('sales')
  const [layout, setLayout] = useState('split-left')
  const [style, setStyle] = useState('minimal')
  const [product, setProduct] = useState('Acme, AI invoicing for freelancers')
  const [copied, setCopied] = useState('')
  const [q, setQ] = useState('')

  const t = TYPES.find(x => x.id === type)
  const l = LAYOUTS.find(x => x.id === layout)
  const s = STYLES.find(x => x.id === style)
  const cmd = landingCommand(type, layout, style, product)

  const combos = useMemo(() => {
    const out = []
    for (const tt of TYPES) for (const ll of LAYOUTS) for (const ss of STYLES) {
      const label = `${tt.id} ${ll.id} ${ss.id} ${tt.name} ${ll.name} ${ss.name}`
      if (!q || label.toLowerCase().includes(q.toLowerCase())) out.push({ tt, ll, ss })
      if (out.length >= 240) break
    }
    return out
  }, [q])

  return (
    <>
      <div className="topbar"><div className="wrap topbar-inner">
        <div className="brand"><span className="brand-mark">◧</span> landing-skill <span className="badge">{TOTAL.toLocaleString()} combos</span></div>
        <div className="topbar-links"><a href="#playground">Playground</a><a href="#types">Types</a><a href="#layouts">Layouts</a><a href="#styles">Styles</a><a href="#combos">All commands</a><a href="https://github.com/berlified/landing-skill">GitHub</a></div>
        <button className="btn btn-small" onClick={() => copy(INSTALL_CMD, setCopied)}>{copied ? 'Copied ✓' : 'Copy install'}</button>
      </div></div>

      <div className="wrap">
        <header className="hero">
          <span className="badge">npx skills add berlified/landing-skill</span>
          <h1>Every landing page is<br /><span className="grad">TYPE × LAYOUT × STYLE</span></h1>
          <p className="sub">Pick the goal, pick the orientation, pick the look. Get a skeleton preview + a copy-paste <b>/landing</b> command. 11 types · 12 layouts · 10 styles.</p>
          <div className="install">
            <code>{INSTALL_CMD}</code>
            <button className="btn btn-primary" onClick={() => copy(INSTALL_CMD, setCopied)}>{copied ? 'Copied ✓' : 'Copy'}</button>
          </div>
          <div className="stats">
            <div className="stat"><b>11</b><span>page types</span></div>
            <div className="stat"><b>12</b><span>layouts</span></div>
            <div className="stat"><b>10</b><span>styles</span></div>
            <div className="stat"><b>{TOTAL.toLocaleString()}</b><span>combinations</span></div>
          </div>
        </header>

        <div className="playground" id="playground">
          <div className="pg-head"><b>◧ Playground — build your triple</b><span>preview updates live · command copies to Claude</span></div>
          <div className="pg-body">
            <div className="pg-col">
              <h3>1 · Type — {TYPES.length}</h3>
              {TYPES.map(x => (
                <button key={x.id} className={'pick' + (x.id === type ? ' active' : '')} onClick={() => setType(x.id)}>
                  <b><code style={{ color: '#a3e635', fontSize: 11 }}>{x.id}</code> · {x.name}</b><span>{x.blurb}</span>
                </button>
              ))}
              <h3 style={{ marginTop: 18 }}>2 · Layout — {LAYOUTS.length}</h3>
              {LAYOUTS.map(x => (
                <button key={x.id} className={'pick' + (x.id === layout ? ' active' : '')} onClick={() => setLayout(x.id)}>
                  <b><code style={{ color: '#a3e635', fontSize: 11 }}>{x.id}</code> · {x.name}</b><span>{x.desc}</span>
                </button>
              ))}
              <h3 style={{ marginTop: 18 }}>3 · Style — {STYLES.length}</h3>
              {STYLES.map(x => (
                <button key={x.id} className={'pick' + (x.id === style ? ' active' : '')} onClick={() => setStyle(x.id)}>
                  <b><span className="swatch-dot" style={{ background: x.accent, border: '1px solid rgba(255,255,255,.3)' }} />{x.name}</b><span>{x.note}</span>
                </button>
              ))}
            </div>
            <div className="preview-stage">
              <Skeleton layout={layout} style={s} typeName={t.name} />
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Skeleton wireframe — structure shows LAYOUT, colors show STYLE, sections show TYPE. Real copy is generated by the skill.</div>
            </div>
            <div className="pg-col">
              <div className="cmdbox">
                <h4>/landing command</h4>
                <code>{cmd}</code>
                <div className="row">
                  <button className="btn btn-primary btn-small" onClick={() => copy(cmd, setCopied)}>Copy cmd</button>
                  <button className="btn btn-small" onClick={() => copy(`${INSTALL_CMD}\n${cmd}`, setCopied)}>Install + cmd</button>
                </div>
                {copied && <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 8 }}>Copied ✓ paste into Claude</div>}
              </div>
              <label style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', display: 'block', margin: '14px 0 6px' }}>Product + value prop</label>
              <input value={product} onChange={e => setProduct(e.target.value)} style={{ width: '100%', background: '#0a0a0e', border: '1px solid var(--line)', borderRadius: 10, color: 'var(--ink)', padding: '10px 12px', font: 'inherit', fontSize: 13 }} />
              <ul className="sect-list">
                <li><b style={{ color: 'var(--ink)' }}>Goal:</b> {t.goal}</li>
                <li><b style={{ color: 'var(--ink)' }}>CTA:</b> {t.cta}</li>
                {t.sections.map(x => <li key={x}>▸ {x}</li>)}
              </ul>
              <div className="tokens">
                <span className="token" style={{ background: s.bg, color: s.ink, borderColor: s.line }}>bg {s.bg}</span>
                <span className="token" style={{ background: s.accent, color: '#000' }}>accent {s.accent}</span>
                <span className="token">{s.font}</span>
                <span className="token">r={s.radius}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="types">
          <h2>11 page types</h2>
          <p className="lead">Goal decides sections + copy + CTA. Click any card to load it into the playground.</p>
          <div className="grid types">
            {TYPES.map(x => (
              <button key={x.id} className={'card' + (x.id === type ? ' sel' : '')} onClick={() => { setType(x.id); document.getElementById('playground').scrollIntoView() }}>
                <code>{x.id}</code><b>{x.name}</b><p>{x.goal} · CTA: {x.cta}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="layouts">
          <h2>12 layout orientations</h2>
          <p className="lead">Order + grid only. Every layout stacks to single column on mobile.</p>
          <div className="grid layouts">
            {LAYOUTS.map(x => (
              <button key={x.id} className={'card' + (x.id === layout ? ' sel' : '')} onClick={() => { setLayout(x.id); document.getElementById('playground').scrollIntoView() }}>
                <MiniWire layout={x.id} /><code>{x.id}</code><b>{x.name}</b><p>{x.desc} · {x.cols}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="styles">
          <h2>10 visual styles</h2>
          <p className="lead">Tokens only — fonts, palette, radius, shadow. Never changes structure.</p>
          <div className="grid styles">
            {STYLES.map(x => (
              <button key={x.id} className={'card' + (x.id === style ? ' sel' : '')} onClick={() => { setStyle(x.id); document.getElementById('playground').scrollIntoView() }} style={{ borderTop: `6px solid ${x.accent}` }}>
                <div style={{ background: x.bg, border: `1px solid ${x.line}`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ fontFamily: x.font, color: x.ink, fontWeight: 800, fontSize: 15 }}>Aa Headline</div>
                  <div style={{ display: 'flex', gap: 5, marginTop: 8 }}><span style={{ background: x.accent, borderRadius: 99, height: 16, width: 52, display: 'block' }} /><span style={{ background: x.muted, borderRadius: 99, height: 16, width: 52, display: 'block', border: `1px solid ${x.line}` }} /></div>
                </div>
                <code>{x.id}</code><b>{x.name}</b><p>{x.note}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="combos">
          <h2>All commands <span style={{ color: 'var(--muted)', fontSize: 16 }}>· showing {combos.length} of {TOTAL.toLocaleString()}</span></h2>
          <p className="lead">Every combination is mechanical: <code style={{ color: 'var(--accent)' }}>/landing --type TYPE --layout LAYOUT --style STYLE "product"</code>. Search to filter, click to copy.</p>
          <div className="toolbar"><input placeholder="Filter e.g. waitlist bento dark…" value={q} onChange={e => setQ(e.target.value)} /></div>
          <div className="combos">
            {combos.map((c, i) => {
              const cc = landingCommand(c.tt.id, c.ll.id, c.ss.id, product)
              return (
                <div key={i} className="combo">
                  <b>{c.tt.name} × {c.ll.name} × {c.ss.name}</b>
                  <code>{cc}</code>
                  <button className="btn btn-small" onClick={() => { copy(cc, setCopied); setType(c.tt.id); setLayout(c.ll.id); setStyle(c.ss.id) }}>Copy + preview</button>
                </div>
              )
            })}
          </div>
        </section>

        <footer>
          <b style={{ color: 'var(--ink)' }}>landing-skill</b> · MIT © 2026 berlified · <a href="https://github.com/berlified/landing-skill">github.com/berlified/landing-skill</a> · Install: <a href="#playground" onClick={e => { e.preventDefault(); copy(INSTALL_CMD, setCopied) }}>{INSTALL_CMD}</a> {copied && '✓'}
        </footer>
      </div>
    </>
  )
}
