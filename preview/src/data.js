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

export const INSTALL_CMD = 'npx skills add berlified/landing-skill -g -a claude-code'

export function landingCommand(type, layout, style, product = 'Acme, AI invoicing for freelancers') {
  return `/landing --type ${type} --layout ${layout} --style ${style} "${product}"`
}

export const TOTAL = TYPES.length * LAYOUTS.length * STYLES.length // 1320
