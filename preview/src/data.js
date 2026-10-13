export const TYPES = [
  { id: 'lead-gen', name: 'Lead Generation', goal: 'Capture qualified lead', sections: ['hero+form', 'logos', 'benefits×3', 'proof', 'faq×3', 'final CTA'], cta: 'Get free audit', blurb: 'Form + benefit bullets. Ebook, webinar, demo.' },
  { id: 'click-through', name: 'Click-Through', goal: 'Warm click → checkout', sections: ['hero', 'pains×3', 'solution', 'plans teaser', 'testimonial', 'CTA'], cta: 'Continue →', blurb: 'Pre-sell page that warms before pricing.' },
  { id: 'sales', name: 'Sales Long-form', goal: 'Sell on the page', sections: ['hero', 'logos', 'problem', 'solution', 'steps×3', 'features×6', 'proof', 'pricing', 'guarantee', 'faq×6'], cta: 'Buy / Start trial', blurb: 'Problem → agitate → proof → offer → FAQ.' },
  { id: 'squeeze', name: 'Squeeze', goal: 'Email only, no nav', sections: ['headline', 'email field', 'bullets×3', 'micro-proof'], cta: 'Send it to me', blurb: 'One headline, one field. Nothing else.' },
  { id: 'waitlist', name: 'Waitlist', goal: 'Notify-me + position', sections: ['teaser visual', 'headline', 'email + counter', 'share hint'], cta: 'Join waitlist', blurb: 'Coming-soon teaser with queue position.' },
  { id: 'viral', name: 'Viral / Referral', goal: 'Shares & invites', sections: ['hero + position', 'how it works×3', 'rewards×3', 'share buttons'], cta: 'Get my link', blurb: 'Invite friends, skip the line, unlock perks.' },
  { id: 'pricing', name: 'Pricing', goal: 'Convert on plans', sections: ['toggle', '3 plans', 'comparison', 'guarantee', 'faq'], cta: 'Choose plan', blurb: 'Plans, comparison table, guarantee.' },
  { id: 'demo', name: 'Demo / Book a Call', goal: 'Booked meeting', sections: ['hero + calendar', 'qualification', 'agenda×3', 'proof', 'faq'], cta: 'Book my demo', blurb: 'Calendar embed + qualification above fold.' },
  { id: 'webinar', name: 'Event / Webinar', goal: 'Registration', sections: ['date + countdown', 'learnings×4', 'speaker', 'register form'], cta: 'Save my seat', blurb: 'Date, learnings, speaker, register.' },
  { id: 'app', name: 'App Download', goal: 'Install', sections: ['QR + badges', 'screenshots×3', 'features×3', 'ratings'], cta: 'Download', blurb: 'Store badges, screenshots, ratings.' },
  { id: 'upsell', name: 'Thank You / Upsell', goal: 'Second conversion', sections: ['confirmation', 'next step', 'upsell offer', 'proof'], cta: 'Claim offer', blurb: 'Post-conversion + one more thing.' },
]

export const LAYOUTS = [
  { id: 'centered', name: 'Centered Stacked', desc: 'H1 center, CTA center, visual below', cols: '1 col' },
  { id: 'split-left', name: 'Split Left-Text', desc: 'Copy left 55% · visual right 45%', cols: '2 col 7/5' },
  { id: 'split-right', name: 'Split Right-Text', desc: 'Mirrored: visual left, copy right', cols: '2 col 5/7' },
  { id: 'fullbleed', name: 'Full-Bleed BG', desc: 'Text over image / gradient', cols: 'overlay' },
  { id: 'asymmetric', name: 'Asymmetric 60/40', desc: 'Off-center + overlapping card', cols: '12-col overlap' },
  { id: 'formfirst', name: 'Form-First', desc: 'Copy + sticky form card', cols: '2 col 3/2' },
  { id: 'singlescreen', name: 'Single-Screen', desc: '100vh, no scroll (squeeze)', cols: 'compact' },
  { id: 'longscroll', name: 'Long-Scroll', desc: '10 stacked sections, sticky nav', cols: '1 col linear' },
  { id: 'zigzag', name: 'Zig-Zag', desc: 'Alternating L/R feature rows', cols: 'alternating' },
  { id: 'bento', name: 'Bento Grid', desc: 'Hero + 2–4 col card mosaic', cols: '6-col mosaic' },
  { id: 'editorial', name: 'Editorial 2-col', desc: 'Reading col + sticky visual', cols: '5/7 reading' },
  { id: 'tabbed', name: 'Tabbed', desc: 'Tab bar + panel content', cols: 'tabs + panel' },
]

export const STYLES = [
  { id: 'minimal', name: 'Minimal SaaS', font: 'Inter', bg: '#ffffff', ink: '#0a0a0b', muted: '#f4f4f5', accent: '#4f46e5', line: '#e4e4e7', radius: 12, note: 'White · subtle border · 64px air' },
  { id: 'bold', name: 'Bold Typographic', font: 'Archivo 800', bg: '#fafaf9', ink: '#111111', muted: '#e7e5e4', accent: '#ff4d00', line: '#111111', radius: 4, note: '96px H1 · uppercase kickers' },
  { id: 'product', name: 'Product Shot', font: 'Inter', bg: '#f8fafc', ink: '#0f172a', muted: '#e2e8f0', accent: '#4f46e5', line: '#e2e8f0', radius: 16, note: 'Browser frame · deep shadow' },
  { id: 'illustration', name: 'Playful Illust.', font: 'Nunito 700', bg: '#fff7ed', ink: '#431407', muted: '#ffedd5', accent: '#ea580c', line: '#fed7aa', radius: 24, note: 'Cream · blobs · doodles' },
  { id: 'photo', name: 'Photo-Heavy', font: 'Inter', bg: '#1c1917', ink: '#fafaf9', muted: '#44403c', accent: '#ffffff', line: '#44403c', radius: 18, note: 'Full images · scrim overlay' },
  { id: 'dark', name: 'Dark Neon', font: 'Space Grotesk', bg: '#09090b', ink: '#fafafa', muted: '#27272a', accent: '#a3e635', line: '#27272a', radius: 14, note: 'Zinc · lime glow · grid dots' },
  { id: 'glass', name: 'Glass Gradient', font: 'Inter', bg: '#eef0ff', ink: '#1e1b4b', muted: '#ffffff', accent: '#7c3aed', line: '#c7d2fe', radius: 20, note: 'Aurora mesh · blur cards' },
  { id: 'brutalist', name: 'Neo-Brutalist', font: 'Archivo Black', bg: '#fffdf5', ink: '#000000', muted: '#fef08a', accent: '#ffd02b', line: '#000000', radius: 0, note: '3px borders · hard shadow' },
  { id: 'soft', name: 'Soft SaaS', font: 'Inter', bg: '#f6f9ff', ink: '#1e293b', muted: '#e0f2fe', accent: '#0ea5e9', line: '#bae6fd', radius: 28, note: 'Pills · pastel · friendly' },
  { id: 'serif', name: 'Editorial Serif', font: 'Fraunces serif', bg: '#faf6ef', ink: '#1c1917', muted: '#f5f0e8', accent: '#9a3412', line: '#e7e5e4', radius: 6, note: 'Cream · rules · drop caps' },
]

// Real copy per type — drives the live page preview (headlines, bullets, proof, specials)
export const COPY = {
  'sales': {
    kicker: 'New · AI invoicing', h1: 'Get paid in days, not months', sub: 'Acme writes, sends and chases invoices for you — no awkward follow-ups, no spreadsheets.',
    cta1: 'Start free', cta2: 'See proof', micro: 'Free 14-day trial · No card · 4.9/5 from 2,300 freelancers',
    bullets: [['Auto-chase', 'Polite reminders on day 3, 7, 14.'], ['One-click pay', 'Card, bank & wallet links in every invoice.'], ['Late-fee guard', 'Terms enforced automatically.']],
    quote: 'Went from 41 days average to 6. It paid for itself by Tuesday.', author: 'Maya R. — freelance designer',
    plans: [['Starter', '$12', ['50 invoices/mo', 'Auto-reminders', '1 seat']], ['Studio', '$29', ['Unlimited invoices', 'Late-fee guard', '5 seats']], ['Firm', '$79', ['Everything + API', 'White-label', 'Priority support']]],
  },
  'lead-gen': {
    kicker: 'Free template', h1: 'Get the invoice kit that gets you paid', sub: 'The exact templates + chase scripts 2,300 freelancers use to cut late payments by 71%.',
    cta1: 'Get free audit', cta2: 'How it works', micro: 'Free PDF · 12 pages · No spam, ever',
    bullets: [['12 copy-paste templates', 'Invoices, reminders, late-fee notes.'], ['Chase calendar', 'Know exactly when to nudge.'], ['Pricing teardown', 'Stop undercharging quietly.']],
    quote: 'Used one template, got a 4-month-late invoice paid in 48h.', author: 'Jonas K. — photographer',
    plans: [],
  },
  'click-through': {
    kicker: 'Why Acme?', h1: 'The fastest way from work done to money in', sub: 'Three pains, one fix. See why independents switch — then continue to pricing when ready.',
    cta1: 'Continue →', cta2: 'Compare plans', micro: '2-min read · Then pick a plan',
    bullets: [['Pain: chasing', 'You spend Fridays writing “gentle bumps”.'], ['Pain: spreadsheets', 'Five tabs to know who owes what.'], ['Fix: autopilot', 'Acme does the follow-up for you.']],
    quote: 'I clicked through skeptical. Signed up at the pricing table.', author: 'Priya S. — consultant',
    plans: [],
  },
  'squeeze': {
    kicker: 'Free checklist', h1: 'Free: the 9-line late-payment killer', sub: 'One page. Nine lines to paste into every invoice. Paid 2× faster or delete it.',
    cta1: 'Send it to me', cta2: '', micro: 'Join 8,400 freelancers · Unsubscribe anytime',
    bullets: [['9 paste-in lines', 'Drop into any invoice tool.'], ['Works in 11 min', 'No new software needed.'], ['2,100+ wins', 'Screenshots inside.']],
    quote: 'Got a $3,200 invoice paid 3 days after using line #4.', author: 'Diego M. — developer',
    plans: [],
  },
  'waitlist': {
    kicker: 'Launching March', h1: 'Nebula is almost here', sub: 'The AI habit tracker that plans your day around your energy. Early members lock founding pricing forever.',
    cta1: 'Join waitlist', cta2: '', micro: '#2,431 in line · Invite friends to jump ahead',
    bullets: [['Founding price', '50% off for life for the first 1,000.'], ['Early access', 'iOS beta opens in 3 weeks.'], ['Vote on features', 'Members shape the roadmap.']],
    quote: 'The teaser alone fixed my mornings. I need the app.', author: 'Beta tester #118',
    plans: [],
  },
  'viral': {
    kicker: 'Skip the line', h1: 'Invite friends. Unlock the drop.', sub: 'Every friend moves you up 50 spots. Top 100 get the limited enamel pin + lifetime Pro.',
    cta1: 'Get my link', cta2: 'See rewards', micro: 'Your link is ready · 3 invites = 1 month Pro',
    bullets: [['3 invites → Pro month', 'Stack up to 12 months free.'], ['10 invites → pin', 'Numbered enamel drop.'], ['Top 100 → lifetime', 'Founding legend status.']],
    quote: 'Went from #4,102 to #37 in a weekend. Worth it.', author: 'Sam T. — referrer #37',
    plans: [],
  },
  'pricing': {
    kicker: 'Pricing', h1: 'Simple pricing that scales with you', sub: 'Start free. Upgrade when the money lands. Downgrade anytime with two clicks.',
    cta1: 'Choose Studio', cta2: 'Compare all', micro: 'Yearly saves 20% · 30-day money-back guarantee',
    bullets: [],
    quote: 'Studio paid for itself with the first chased invoice.', author: 'Lena W. — agency owner',
    plans: [['Starter', '$12', ['50 invoices/mo', 'Auto-reminders', '1 seat']], ['Studio', '$29', ['Unlimited invoices', 'Late-fee guard', '5 seats']], ['Firm', '$79', ['Everything + API', 'White-label', 'Priority support']]],
  },
  'demo': {
    kicker: 'Live 20-min demo', h1: 'See Acme on your own invoices', sub: 'Bring one messy client. We will chase them live and show you the money trail.',
    cta1: 'Book my demo', cta2: 'Watch 2-min tour', micro: 'Tue–Thu slots · No pitch-slides, real product',
    bullets: [['Your data live', 'We plug in one real client.'], ['Chase teardown', 'See the exact reminder flow.'], ['Q&A with founder', 'Ask anything, get numbers.']],
    quote: 'Booked Tuesday, paid-up Friday. The demo sold me.', author: 'Chris B. — studio lead',
    plans: [],
  },
  'webinar': {
    kicker: 'Free live training · Mar 14', h1: 'Get paid 2× faster: live teardown', sub: '60 minutes. 3 real freelancer inboxes fixed live. Replay free for 48 hours.',
    cta1: 'Save my seat', cta2: 'See agenda', micro: '1,842 registered · 200 seats left · Free replay 48h',
    bullets: [['The 3-email chase', 'Copy-paste sequence, live demo.'], ['Pricing fixes', 'Two tweaks that end haggling.'], ['Late-fee scripts', 'Firm without burning bridges.'], ['Live Q&A', 'Bring your worst client story.']],
    quote: 'Left with 4 templates. Used 2 the same night.', author: 'Attendee, Feb cohort',
    plans: [],
  },
  'app': {
    kicker: 'iOS + Android', h1: 'Invoicing in your pocket', sub: 'Snap a receipt, send an invoice, nudge a client — from the train. 4.9★ from 12k reviews.',
    cta1: 'Download', cta2: 'See screenshots', micro: '4.9★ · 12k ratings · Free plan included',
    bullets: [['Snap → invoice', 'Photo to sent in 40 seconds.'], ['Push on payment', 'Know the second money lands.'], ['Offline first', 'Tube, plane, basement. Works.']],
    quote: 'Sent an invoice from a ski lift. Paid before après.', author: 'Nina F. — 5★ review',
    plans: [],
  },
  'upsell': {
    kicker: 'You are in ✓', h1: 'Welcome! One more thing…', sub: 'Annual Studio saves you $70 and adds late-fee guard + white-label. Offer ends when this page closes.',
    cta1: 'Claim annual offer', cta2: 'Go to dashboard', micro: '30-day guarantee · Keep monthly if you prefer',
    bullets: [['Save $70/yr', 'Two months free, locked.'], ['Late-fee guard', 'Auto-enforced terms.'], ['White-label', 'Your logo, your domain.']],
    quote: 'Upgraded on the thank-you page. Zero regrets.', author: 'Tom H. — new member',
    plans: [],
  },
}

export const INSTALL_CMD = 'npx skills add berlified/landing-skill -g -a claude-code'

export function landingCommand(type, layout, style, product = 'Acme, AI invoicing for freelancers') {
  return `/landing --type ${type} --layout ${layout} --style ${style} "${product}"`
}

export function parseProduct(product) {
  const parts = String(product).split(',')
  const brand = (parts[0] || 'Acme').trim() || 'Acme'
  const tag = (parts.slice(1).join(',') || 'AI invoicing for freelancers').trim()
  return { brand, tag }
}

export const TOTAL = TYPES.length * LAYOUTS.length * STYLES.length // 1320
