# Combinations — 1,320 matrix + commands

Every TYPE (11) × LAYOUT (12) × STYLE (10) is valid. Total = **1,320**.

## Command shape

```
/landing --type <type> --layout <layout> --style <style> "<product>, <value prop>"
```

Install once:

```bash
npx skills add berlified/landing-skill -g -a claude-code
# project only: npx skills add berlified/landing-skill
# opencode/codex:  -a opencode / -a codex
```

## 30 curated recipes (copy-paste)

```
# SaaS classics
/landing --type sales --layout split-left --style minimal "Acme, AI invoicing for freelancers"
/landing --type sales --layout centered --style product "Acme, AI invoicing for freelancers"
/landing --type pricing --layout centered --style minimal "Acme, three plans"
/landing --type demo --layout formfirst --style minimal "Acme, 20-min live demo"

# Startup launch
/landing --type waitlist --layout centered --style glass "Nebula, AI habit tracker, launches March"
/landing --type waitlist --layout bento --style dark "Nebula, AI habit tracker"
/landing --type viral --layout centered --style bold "Nebula, invite friends skip the line"
/landing --type squeeze --layout singlescreen --style minimal "Free churn checklist"

# Long-form sellers
/landing --type sales --layout longscroll --style serif "Craft Course, sourdough masterclass"
/landing --type sales --layout zigzag --style photo "Fitband, smart fitness ring"
/landing --type sales --layout bento --style soft "Calmly, family budgeting app"

# Bold / brutalist
/landing --type sales --layout fullbleed --style bold "Ramen Lab, late-night ramen bar"
/landing --type viral --layout singlescreen --style brutalist "Poster drop, limited print"
/landing --type click-through --layout asymmetric --style brutalist "Bootcamp, design course pre-sell"

# Photo / editorial
/landing --type webinar --layout editorial --style serif "Live training, sourdough scoring"
/landing --type sales --layout editorial --style serif "Estate coffee subscription"
/landing --type click-through --layout fullbleed --style photo "Alpine lodge, winter booking"

# App + event
/landing --type app --layout split-right --style product "Pulse, running companion app"
/landing --type app --layout bento --style glass "Pulse, screenshots + ratings"
/landing --type webinar --layout centered --style minimal "Webinar, RevOps teardown"
/landing --type demo --layout split-left --style product "Datawise, warehouse analytics demo"

# Lead + trust
/landing --type lead-gen --layout formfirst --style soft "Dental studio, free whitening consult"
/landing --type lead-gen --layout split-left --style illustration "Pawplan, pet insurance quote"
/landing --type pricing --layout tabbed --style minimal "Cloudset, usage pricing"
/landing --type upsell --layout centered --style minimal "Thank you + annual upsell"
/landing --type demo --layout zigzag --style dark "Secstack, SOC2 demo"
/landing --type waitlist --layout singlescreen --style bold "AI summit, early access"
```

## Full matrix rule

For any triple not listed above, the command is mechanical:

```
/landing --type {lead-gen|click-through|sales|squeeze|waitlist|viral|pricing|demo|webinar|app|upsell} --layout {centered|split-left|split-right|fullbleed|asymmetric|formfirst|singlescreen|longscroll|zigzag|bento|editorial|tabbed} --style {minimal|bold|product|illustration|photo|dark|glass|brutalist|soft|serif} "<product + value prop>"
```

The preview site (`preview/`) generates this command for all 1,320 combos with a live skeleton. Counts: 11 types · 12 layouts · 10 styles.
