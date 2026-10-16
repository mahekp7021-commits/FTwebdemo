# FTwebdemo — Reusable Forex Website Master

FTwebdemo is the canonical base for the forex-broker website concept.

## Source of truth
Read **[FOREX_MASTER_CONTENT.md](./FOREX_MASTER_CONTENT.md)** before building or redesigning any forex website from this repository. It defines the reusable content system, page inventory, navigation, forms, tools, account/partner structures, shared components, and quality checklist.

## Project rule: same business content, customizable UI
- Keep the forex concept, content coverage, information architecture, page purposes, forms, user journeys, and required functionality consistent across future designs.
- Customize only the design layer for each new visual direction: colors, typography, spacing, layout, components, imagery, animation and responsive presentation.
- Do not drop pages, rewrite business concepts from scratch, or replace page-specific content with generic filler during a redesign.
- Preserve working navigation and routes, including **Payment > Deposits** and **Payment > Withdrawals**.
- In the default reference design, retain the homepage hero, phone mockup, four TradingView market cards and bottom ticker unless the current instruction explicitly changes them.
- Treat fees, account specifications, reward figures, regulatory claims, contact details and legal text as unverified until approved by the operator. Never present mock prices as live data.

## Repository structure
- `index.html` — homepage
- `pages/` — supporting website pages
- `styles/` — visual styling
- `scripts/` — interactions
- `images/` — visual assets
- `FOREX_MASTER_CONTENT.md` — canonical reusable content and build contract

## Before every redesign
Use the master content document as the checklist. First preserve the page/content system; then customize the UI. Test all routes and dropdowns on desktop and mobile.
