import React, { useMemo, useState } from 'react'
import { TYPES, LAYOUTS, STYLES, COPY, INSTALL_CMD, landingCommand, parseProduct, TOTAL } from './data.js'

function copy(text, setCopied) {
  navigator.clipboard?.writeText(text).then(() => {
    setCopied(text.slice(0, 40))
    setTimeout(() => setCopied(''), 1600)
  })
}

const HEADING_FONT = {
  minimal: 'Inter,system-ui,-apple-system,sans-serif',
  bold: '"Arial Black",Archivo,"Space Grotesk",system-ui,sans-serif',
  product: 'Inter,system-ui,-apple-system,sans-serif',
  illustration: 'Nunito,Quicksand,ui-rounded,system-ui,sans-serif',
  photo: 'Inter,system-ui,-apple-system,sans-serif',
  dark: '"Space Grotesk",Inter,system-ui,sans-serif',
  glass: 'Inter,system-ui,-apple-system,sans-serif',
  brutalist: '"Archivo Black","Arial Black",Impact,monospace,sans-serif',
  soft: 'Inter,system-ui,-apple-system,sans-serif',
  serif: 'Fraunces,Georgia,"Times New Roman",serif',
}
const BODY_FONT = 'Inter,system-ui,-apple-system,sans-serif'

/* ---------- hero visual per TYPE: a realistic product mock, not a gray box ---------- */
function HeroVisual({ typeId, style, brand }) {
  const c = COPY[typeId]
  if (typeId === 'app') {
    return (
      <div className="rp-phone">
        <div className="rp-phone-notch" />
        <div className="rp-phone-brand">{brand}</div>
        <div className="rp-phone-balance">$12,480 <span>collected</span></div>
        {['Maya — $850 · Paid ✓', 'Jonas — $1,200 · Due Fri', 'Priya — $640 · Sent'].map((x, i) => (
          <div key={i} className="rp-phone-row">{x}</div>
        ))}
        <div className="rp-btn solid sm">{c.cta1}</div>
        <div className="rp-badges"><span> App Store</span><span> Google Play</span></div>
      </div>
    )
  }
  if (typeId === 'demo') {
    return (
      <div className="rp-cal">
        <div className="rp-cal-head">Pick a time · 20 min</div>
        <div className="rp-cal-days">{['M', 'T', 'W', 'T', 'F'].map((d, i) => <span key={i} className={i === 2 ? 'on' : ''}>{d}</span>)}</div>
        <div className="rp-cal-times">{['9:30', '11:00', '13:15', '15:45'].map((x, i) => <span key={i} className={i === 1 ? 'on' : ''}>{x}</span>)}</div>
        <div className="rp-btn solid sm">{c.cta1}</div>
      </div>
    )
  }
  if (typeId === 'webinar') {
    return (
      <div className="rp-video">
        <div className="rp-live">● LIVE · MAR 14</div>
        <div className="rp-play">▶</div>
        <div className="rp-count">{['02', '14', '33'].map((x, i) => <span key={i}>{x}</span>)}</div>
      </div>
    )
  }
  if (typeId === 'pricing') {
    return (
      <div className="rp-miniplans">
        {(c.plans.length ? c.plans : COPY.sales.plans).map((p, i) => (
          <div key={i} className={'rp-minip' + (i === 1 ? ' hot' : '')}>
            <b>{p[0]}</b><div className="rp-minip-price">{p[1]}<span>/mo</span></div>
            <i>{p[2][0]}</i>
          </div>
        ))}
      </div>
    )
  }
  if (typeId === 'waitlist' || typeId === 'viral') {
    return (
      <div className="rp-queue">
        <div className="rp-avatars">{['MK', 'JT', 'PS', '+'].map((x, i) => <span key={i}>{x}</span>)}</div>
        <div className="rp-pos">#2,431 in line</div>
        <div className="rp-bar"><i style={{ width: '68%' }} /></div>
        <div className="rp-link">nebula.app/r/maya-84 ⧉</div>
        <div className="rp-btn solid sm">{c.cta1}</div>
      </div>
    )
  }
  if (typeId === 'squeeze') {
    return (
      <div className="rp-mail">
        <div className="rp-mail-title">The 9-line late-payment killer</div>
        <div className="rp-field">you@studio.com</div>
        <div className="rp-btn solid sm">{c.cta1}</div>
        <div className="rp-micro2">Join 8,400 freelancers</div>
      </div>
    )
  }
  if (typeId === 'upsell') {
    return (
      <div className="rp-offer">
        <div className="rp-check">✓</div>
        <div className="rp-offer-title">Annual Studio</div>
        <div className="rp-offer-price"><s>$348</s> $278 <span>/yr</span></div>
        <div className="rp-btn solid sm">{c.cta1}</div>
      </div>
    )
  }
  // default: SaaS dashboard browser mock
  return (
    <div className="rp-browser">
      <div className="rp-bdots"><i /><i /><i /><span>{brand.toLowerCase()}.app</span></div>
      <div className="rp-bstat"><b>$12,480</b><span>collected · +38%</span></div>
      <div className="rp-chart">{[38, 62, 45, 80, 58, 92, 70].map((h, i) => <i key={i} style={{ height: h + '%' }} />)}</div>
      <div className="rp-brows">
        {['Invoice #1042 — Paid', 'Reminder → Jonas — Opened', 'Late fee — guarded'].map((x, i) => <div key={i} className="rp-brow">{x}</div>)}
      </div>
    </div>
  )
}

/* ---------- the real landing page ---------- */
function RealPage({ typeId, layout, style, product, mobile }) {
  const c = COPY[typeId]
  const { brand, tag } = parseProduct(product)
  const vars = {
    '--rp-bg': style.bg, '--rp-ink': style.ink, '--rp-accent': style.accent,
    '--rp-line': style.line, '--rp-radius': style.radius + 'px',
    '--rp-mutedbg': style.muted, '--rp-hfont': HEADING_FONT[style.id],
  }
  const noNav = typeId === 'squeeze' || typeId === 'upsell'
  const single = layout === 'singlescreen'

  const copyBlock = (center) => (
    <div className={'rp-copy' + (center ? ' center' : '')}>
      <div className="rp-kicker">{c.kicker}</div>
      <h1 className="rp-h1">{c.h1}</h1>
      <p className="rp-sub">{typeId === 'sales' || typeId === 'lead-gen' || typeId === 'click-through' ? `${brand}: ${tag}.` : c.sub}</p>
      <div className="rp-ctas">
        <span className="rp-btn solid">{c.cta1}</span>
        {c.cta2 && !single && <span className="rp-btn ghost">{c.cta2}</span>}
      </div>
      <div className="rp-micro2">★★★★★ {c.micro}</div>
    </div>
  )

  const formCard = (
    <div className="rp-formcard">
      <b>{typeId === 'demo' ? 'Book your 20 minutes' : typeId === 'webinar' ? 'Reserve your seat' : `Get started with ${brand}`}</b>
      <span className="rp-field">Name</span>
      <span className="rp-field">you@studio.com</span>
      <span className="rp-btn solid sm">{c.cta1}</span>
      <i>Free · No card · Cancel anytime</i>
    </div>
  )

  // HERO per layout
  let hero = null
  if (layout === 'centered' || layout === 'longscroll' || single) {
    hero = <div className="rp-hero-center">{copyBlock(true)}<HeroVisual typeId={typeId} style={style} brand={brand} /></div>
  } else if (layout === 'split-left') {
    hero = <div className="rp-hero-2">{copyBlock(false)}<HeroVisual typeId={typeId} style={style} brand={brand} /></div>
  } else if (layout === 'split-right') {
    hero = <div className="rp-hero-2"><HeroVisual typeId={typeId} style={style} brand={brand} />{copyBlock(false)}</div>
  } else if (layout === 'fullbleed') {
    hero = <div className="rp-hero-bleed"><div className="rp-bleed-copy">{copyBlock(false)}</div></div>
  } else if (layout === 'asymmetric') {
    hero = (
      <div className="rp-hero-asym">
        <div>{copyBlock(false)}</div>
        <div className="rp-asym-side"><HeroVisual typeId={typeId} style={style} brand={brand} />
          <div className="rp-overlap">▲ +38% collected<div>avg. first month</div></div>
        </div>
      </div>
    )
  } else if (layout === 'formfirst') {
    hero = <div className="rp-hero-2">{copyBlock(false)}{formCard}</div>
  } else if (layout === 'zigzag' || layout === 'editorial') {
    hero = <div className="rp-hero-2">{copyBlock(false)}<HeroVisual typeId={typeId} style={style} brand={brand} /></div>
  } else if (layout === 'bento' || layout === 'tabbed') {
    hero = <div className="rp-hero-center slim">{copyBlock(true)}</div>
  }

  // BODY per type+layout
  const features = c.bullets.length ? c.bullets : [['Fast setup', 'Live in an afternoon.'], ['Real support', 'Humans, under 2 min.'], ['Cancel anytime', 'Two clicks, keep data.']]
  let body = null
  if (!single) {
    if (layout === 'bento') {
      body = (
        <div className="rp-bento">
          <div className="rp-bcell big"><b>{features[0][0]}</b><p>{features[0][1]}</p><div className="rp-bignum">71%</div><span>faster payouts</span></div>
          <div className="rp-bcell"><b>{typeId === 'viral' ? 'Rewards' : 'Proof'}</b><p>“{c.quote}”</p></div>
          <div className="rp-bcell"><b>{features[1] ? features[1][0] : 'Live'}</b><p>{features[1] ? features[1][1] : ''}</p></div>
          <div className="rp-bcell"><b>Rating</b><p>★★★★★ 4.9 · 2,300 reviews</p></div>
          <div className="rp-bcell"><b>{features[2] ? features[2][0] : 'Guarantee'}</b><p>{features[2] ? features[2][1] : '30-day money-back.'}</p></div>
          <div className="rp-bcell accent"><b>{c.cta1}</b><p>{c.micro}</p></div>
        </div>
      )
    } else if (layout === 'zigzag') {
      body = (
        <div className="rp-zig">
          {features.map((f, i) => (
            <div key={i} className="rp-zrow">
              {i % 2 === 0 ? <><div><b>{f[0]}</b><p>{f[1]} Real customers use this daily — set it once, it runs itself, and the money trail is always visible.</p></div><div className="rp-zvis">{['⌁ chase flow', '◈ pay links', '⬣ guard'][i] || '◈ detail'}</div></>
                : <><div className="rp-zvis">{['◈ pay links', '⬣ guard', '⌁ chase flow'][i] || '⬣ detail'}</div><div><b>{f[0]}</b><p>{f[1]} Real customers use this daily — set it once, it runs itself, and the money trail is always visible.</p></div></>}
            </div>
          ))}
          <div className="rp-quote">“{c.quote}”<span>— {c.author}</span></div>
        </div>
      )
    } else if (layout === 'tabbed') {
      body = (
        <div className="rp-tabs">
          <div className="rp-tabbar">{['Invoices', 'Reminders', 'Guard', 'Reports'].map((x, i) => <span key={i} className={i === 0 ? 'on' : ''}>{x}</span>)}</div>
          <div className="rp-tabpanel"><b>{features[0][0]} — in one click</b><p>{features[0][1]} Switch tabs to explore reminders, guard and reports. Everything stays in the same calm view.</p><HeroVisual typeId={typeId} style={style} brand={brand} /></div>
        </div>
      )
    } else if (layout === 'editorial') {
      body = (
        <div className="rp-ed">
          <div className="rp-ed-main">
            <p><span className="rp-drop">{c.quote.charAt(0)}</span>{c.quote} That is what {brand} customers say within the first month — and the reason is unglamorous: the follow-up finally happens on time, every time.</p>
            <div className="rp-pull">“{c.quote}”</div>
            <p>{features.map(f => f[0]).join(' · ')}. Each one removes a Friday-afternoon chore from your calendar. The rest of this page shows exactly how — keep scrolling.</p>
          </div>
          <div className="rp-ed-side"><HeroVisual typeId={typeId} style={style} brand={brand} /><div className="rp-quote sm">— {c.author}</div></div>
        </div>
      )
    } else {
      body = (
        <>
          {(typeId === 'sales' || typeId === 'lead-gen' || typeId === 'click-through') && (
            <div className="rp-logos">{['FORBES', 'TC', 'WIRED', 'FASTCO', 'VERGE'].map((x, i) => <span key={i}>{x}</span>)}</div>
          )}
          {(typeId === 'pricing' || (typeId === 'sales' && layout === 'longscroll')) && (
            <div className="rp-plans">
              {(c.plans.length ? c.plans : COPY.sales.plans).map((p, i) => (
                <div key={i} className={'rp-plan' + (i === 1 ? ' hot' : '')}>
                  <b>{p[0]}</b><div className="rp-price">{p[1]}<span>/mo</span></div>
                  {p[2].map((f, j) => <span key={j} className="rp-feat">✓ {f}</span>)}
                  <span className="rp-btn solid sm">{i === 1 ? c.cta1 : 'Choose'}</span>
                </div>
              ))}
            </div>
          )}
          <div className="rp-feats">
            {features.map((f, i) => <div key={i} className="rp-feat-card"><div className="rp-ico">{['✦', '◈', '⬣', '⌁'][i % 4]}</div><b>{f[0]}</b><p>{f[1]}</p></div>)}
          </div>
          <div className="rp-quote">“{c.quote}”<span>— {c.author}</span></div>
          {layout === 'longscroll' && (
            <div className="rp-faq">{['How fast is setup?', 'What if clients hate reminders?', 'Can I cancel anytime?'].map((x, i) => <div key={i} className="rp-faqrow"><b>{x}</b><p>Under an afternoon. Polite by default, firm when needed. Two clicks to leave, data exports with you.</p></div>)}</div>
          )}
          <div className="rp-final"><b>{c.h1}</b><span className="rp-btn solid">{c.cta1}</span><i>{c.micro}</i></div>
        </>
      )
    }
  }

  return (
    <div className={`rp-outer${mobile ? ' mob' : ''}`}>
      <div className="rp-chrome"><i /><i /><i /><span>{brand.toLowerCase()}.com — {typeId} · {layout} · {style.id}</span></div>
      <div className={`rp st-${style.id}`} style={vars}>
        <div className="rp-fx" />
        {!noNav ? (
          <div className="rp-nav"><b className="rp-brand">{brand}</b><span className="rp-links">Features · Proof · Pricing</span><span className="rp-navcta">{c.cta1}</span></div>
        ) : (
          <div className="rp-nav mini"><b className="rp-brand">{brand}</b><span className="rp-links">No spam · Unsubscribe anytime</span></div>
        )}
        {hero}
        {body}
        <div className="rp-foot">© 2026 {brand} · Privacy · Terms · {style.name}</div>
      </div>
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
  const [mobile, setMobile] = useState(false)
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
      if (out.length >= 200) break
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
          <p className="sub">A <b>real page preview</b> for every triple — real headlines, real sections, real styling. Pick one, copy the <b>/landing</b> command into Claude.</p>
          <div className="install">
            <code>{INSTALL_CMD}</code>
            <button className="btn btn-primary" onClick={() => copy(INSTALL_CMD, setCopied)}>{copied ? 'Copied ✓' : 'Copy'}</button>
          </div>
          <div className="stats">
            <div className="stat"><b>11</b><span>page types</span></div>
            <div className="stat"><b>12</b><span>layouts</span></div>
            <div className="stat"><b>10</b><span>styles</span></div>
            <div className="stat"><b>{TOTAL.toLocaleString()}</b><span>live previews</span></div>
          </div>
        </header>

        <div className="playground" id="playground">
          <div className="pg-head">
            <b>◧ Playground — {t.name} × {l.name} × {s.name}</b>
            <span style={{ display: 'flex', gap: 8 }}>
              <button className={'btn btn-small' + (!mobile ? ' btn-primary' : '')} onClick={() => setMobile(false)}>Desktop</button>
              <button className={'btn btn-small' + (mobile ? ' btn-primary' : '')} onClick={() => setMobile(true)}>Mobile 390</button>
            </span>
          </div>
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
              <RealPage typeId={type} layout={layout} style={s} product={product} mobile={mobile} />
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Live page preview — scroll inside the browser frame. Structure = LAYOUT · copy + sections = TYPE · look = STYLE.</div>
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
          <h2>11 page types — different copy, sections & CTAs</h2>
          <p className="lead">Click any card to load a live preview into the playground.</p>
          <div className="grid types">
            {TYPES.map(x => (
              <button key={x.id} className={'card' + (x.id === type ? ' sel' : '')} onClick={() => { setType(x.id); document.getElementById('playground').scrollIntoView() }}>
                <code>{x.id}</code><b>{x.name}</b><p>{x.goal} · CTA: {x.cta}</p>
                <p style={{ marginTop: 6, color: 'var(--ink)', opacity: .8 }}>“{COPY[x.id].h1}”</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="layouts">
          <h2>12 layouts — different order & grid</h2>
          <p className="lead">Wireframe logic. The playground renders each one as a real page.</p>
          <div className="grid layouts">
            {LAYOUTS.map(x => (
              <button key={x.id} className={'card' + (x.id === layout ? ' sel' : '')} onClick={() => { setLayout(x.id); document.getElementById('playground').scrollIntoView() }}>
                <MiniWire layout={x.id} /><code>{x.id}</code><b>{x.name}</b><p>{x.desc} · {x.cols}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="styles">
          <h2>10 styles — different look, same structure</h2>
          <p className="lead">Fonts, palette, radius, shadow, texture. Try the same triple in dark vs brutalist vs serif.</p>
          <div className="grid styles">
            {STYLES.map(x => (
              <button key={x.id} className={'card' + (x.id === style ? ' sel' : '')} onClick={() => { setStyle(x.id); document.getElementById('playground').scrollIntoView() }} style={{ borderTop: `6px solid ${x.accent}` }}>
                <div style={{ background: x.bg, border: `1px solid ${x.line}`, borderRadius: 8, padding: 10, marginBottom: 10 }}>
                  <div style={{ fontFamily: HEADING_FONT[x.id], color: x.ink, fontWeight: 800, fontSize: 15 }}>Aa Headline</div>
                  <div style={{ display: 'flex', gap: 5, marginTop: 8 }}><span style={{ background: x.accent, borderRadius: 99, height: 16, width: 52, display: 'block' }} /><span style={{ background: x.muted, borderRadius: 99, height: 16, width: 52, display: 'block', border: `1px solid ${x.line}` }} /></div>
                </div>
                <code>{x.id}</code><b>{x.name}</b><p>{x.note}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="combos">
          <h2>All commands <span style={{ color: 'var(--muted)', fontSize: 16 }}>· showing {combos.length} of {TOTAL.toLocaleString()}</span></h2>
          <p className="lead">Every combination is mechanical: <code style={{ color: 'var(--accent)' }}>/landing --type TYPE --layout LAYOUT --style STYLE "product"</code>. Search, then Copy + preview loads the real page above.</p>
          <div className="toolbar"><input placeholder="Filter e.g. waitlist bento dark…" value={q} onChange={e => setQ(e.target.value)} /></div>
          <div className="combos">
            {combos.map((c, i) => {
              const cc = landingCommand(c.tt.id, c.ll.id, c.ss.id, product)
              return (
                <div key={i} className="combo">
                  <b>{c.tt.name} × {c.ll.name} × {c.ss.name}</b>
                  <code>{cc}</code>
                  <button className="btn btn-small" onClick={() => { copy(cc, setCopied); setType(c.tt.id); setLayout(c.ll.id); setStyle(c.ss.id); document.getElementById('playground').scrollIntoView() }}>Copy + preview</button>
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
