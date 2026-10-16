# Forex Website Master Content & UI Contract

**Purpose:** This repository is the canonical content and information-architecture source for every future Adinova Labs forex-broker website design. The business concept, page purpose, educational content, forms, trading tools, account concepts, and navigation remain consistent. Only the visual design, layout, typography, colors, spacing, imagery, responsive treatment, and component styling may change per design brief.

**Source of truth:** Consolidated from the FXCentrum24/GO COIIN reference website and the FTwebdemo page library. Treat source/reference copy as editable draft content, not verified legal, regulatory, pricing, or execution claims. Never invent regulatory licences, company addresses, contact details, execution quality, spreads, leverage, fees, deposit methods, or guarantees. Keep placeholders where the business has not supplied approved values.

## Non-negotiable project rules

1. Preserve the full information architecture and all relevant page/subpage content when creating a new design.
2. A redesign is a **UI reskin**, not a content reset. Reuse the existing page catalogue, forms, tables, account information, market categories, platform descriptions, educational content, risk notices, legal page structure, and user journeys.
3. Keep all navigation destinations working. Every menu item and submenu must open its correct page on desktop and mobile; mobile menus must open on tap, not require a long press.
4. Keep **Payment** separate, with **Deposits** and **Withdrawals** as its sub-items. Do not bury payment under unrelated menus.
5. Default reference/demo experience: preserve the Forex Master Demo/FTwebdemo identity, homepage hero, phone mockup, four TradingView market cards, and bottom ticker unless the user explicitly requests a different design. On GO COIIN adaptations, apply GO COIIN branding/content while preserving these components when instructed.
6. Maintain the agreed eight-main-menu approach where used: Markets, Trading, Platforms, Accounts, Tools, Company, Partnership, Payment. Put Resources and Legal under Company; keep Login and Open Account as distinct header actions. If a design brief explicitly specifies a different header, change styling and grouping without dropping page destinations.
7. All pages must be page-specific. Do not reuse one generic page body for every route. Preserve each page's own heading, description, sections, tables, forms, FAQs/call-to-actions, and related links.
8. Keep responsive desktop, tablet, and mobile behaviour. Maintain readable contrast, visible text, keyboard accessibility, and touch-friendly controls.
9. Market widgets may display third-party live data only when configured. Label demo/static/sample prices clearly; never present hard-coded values as live.
10. Legal, risk, fee, account, and partnership copy must be reviewed and approved by the operator before production. Do not imply a licence or regulated status unless verified.

## Canonical navigation and page catalogue

### 1. Markets
- Forex — currency pairs, major/minor/exotic pair concepts, market overview, spread/market-hours explanation, trading risks, related instruments and CTA.
- Commodities — commodity market overview, examples such as precious metals and energy, instrument table, market drivers and risks.
- Indices — global index exposure, index examples/table, market drivers and risks.
- Shares CFDs — share/CFD concept, available-instrument table, corporate/market drivers, CFD risk disclosure.
- Cryptocurrency — digital-asset market overview, example instruments, volatility and market risks.
- Market Overview — market ticker/cards and chart area; distinguish live provider data from sample data.
- Market Tickers / Cryptocurrency / Advanced Real-Time Chart — chart-list or TradingView chart sections where configured.

### 2. Trading
- Account Opening / Open Account — application journey and form. Typical fields: first name, last name, email, phone/country code, country/residence, account type, preferred platform, password/confirmation only if a real secure backend supports it, consent/terms checkbox, privacy acknowledgement and submission state. Validate fields and provide clear errors/success states. Do not collect sensitive credentials in a static demo.
- Account Types — account comparison and tier cards/table. Existing reference concept includes Beginner, Regular and higher tiers; the account family pages also describe Standard, Premium and Professional. Keep names consistent within a given brand/version and use operator-approved specifications only.
- Trading Conditions — approved spread/commission/leverage/margin/swap/execution information, market hours, order execution explanation and pre-trade checklist. Use placeholders until verified.
- How to Start — simple three-step flow: open an account, choose/download or access a platform, learn/test and understand risk before trading.
- Deposit — funding information, available methods only after confirmation, instructions/QR section only when real payment configuration exists, status/help links.
- Withdrawal / Withdrawal Request — amount, currency, account/client reference, withdrawal method and method-specific bank/wallet fields; show review/status states and policy/processing information only when approved.
- Deposits and Withdrawals — combined explanatory overview, but keep Deposit and Withdrawal as distinct destinations and keep Payment navigation separate.
- Calculating Margin — margin concepts and calculator/explanation.
- How to Calculate Profit/Loss — worked examples and risk explanation.
- Financing Costs — overnight/swap/financing concepts and verified schedule placeholders.
- Holiday Trading Hours and Hours of Operation — instrument-specific schedule tables, timezone labels and holiday notes.
- Corporate Actions — corporate action overview and how CFD positions may be affected.
- Depth of Market — explain order-book/depth concepts and clearly label whether actual data is available.
- CFDs — CFD mechanics, leverage/margin and risk disclosure.

### 3. Platforms
- MetaTrader 4 — overview, workflow/features, device/platform availability, download/access CTA and risk reminder.
- MetaTrader 5 — overview, multi-asset/workflow features, device/platform availability, download/access CTA and risk reminder.
- WebTrader — browser-based workflow, supported-device/browser notes and access CTA.
- Trading Platforms — comparison of supported platforms and steps before download/access.
- FXTrade App — app overview and platform access information only when verified.

### 4. Accounts
- Standard Account — account-specific description and approved specifications.
- Premium Account — account-specific description and approved specifications.
- Professional Account — account-specific description and approved specifications.
- Account Comparison — side-by-side comparison with consistent fields. Do not invent spreads, commissions, leverage, minimum deposits, execution claims or perks.
- Account benefits / account cards — retain card hierarchy and CTA while allowing redesign of presentation.

### 5. Tools and Resources
- Economic Calendar — upcoming economic events, date/time/timezone, country/currency, impact, event and actual/forecast/previous where a data provider supports them. If static, label it as a demo.
- Live Markets / market widgets — TradingView or another configured provider; include the existing four market cards and ticker in the default reference design.
- Forex education — forex basics, currency pairs, spread, pip, lot, leverage, margin, risk management, trading plans and beginner learning resources.
- Tools pages should be usable and descriptive; avoid fake live values or fake functionality.

### 6. Company
- About Us — company overview, service approach and approved business facts.
- Benefits — clearly described service/product features; only verifiable claims.
- Contact Us — contact routes and form with name, email, subject/category, message, consent and validation. Keep official address, phone and customer-service details as editable placeholders until supplied.
- Resources — education, market tools, calendar and trading guides.
- Legal — links to each approved legal document.

### 7. Partnership
- Partnership overview — partner proposition, process, benefits, eligibility and FAQs.
- Partner Account Opening — six-step partner-registration journey where present in the source: collect personal/contact details, residence/business details as applicable, referral/partner profile, payment details only when required, review/consents, submit and confirmation. Exact steps and fields may be adjusted to the approved business process.
- Partnership rewards — reference content mentions $25 per lot and a 10% second tier. Treat both as **unverified reference figures**; do not publish as current offer until the operator confirms them.
- Partner payment/withdrawal details — secure, method-specific fields and clear status/error states. Never expose private banking data in the UI or logs.

### 8. Payment
- Deposit
- Withdrawal
- Deposits and Withdrawals overview
- Funding/processing/fees/limits pages or sections where supplied and verified.
Payment remains a distinct main menu, with Deposits and Withdrawals as visible tap/click submenus.

### 9. Legal and risk pages
- Terms and Conditions
- Privacy Policy
- Risk Disclosure
- AML Policy
- Client Agreement
Each page should retain its own structured sections and clear navigation. These are content scaffolds only, not legal advice or proof of regulatory compliance. Avoid duplicating old aliases as separate visible menu items unless needed for backwards-compatible routes.

## Shared components and interactions

- Header with logo, main navigation, working dropdowns/submenus, Login and Open Account actions.
- Mobile hamburger/drawer with tap-to-open nested menus, clear close action, focus management and no hover-only interaction.
- Hero section with heading, supporting copy and primary/secondary CTAs.
- Market cards: default four TradingView cards in the reference/demo design.
- Market ticker strip at the bottom of the main market area.
- Account tier cards and comparison tables.
- Platform cards for MT4, MT5 and WebTrader.
- Form components with labels, input validation, inline errors, loading/submitted states and accessible feedback.
- FAQs, breadcrumbs, related links and clear footer/legal navigation.
- Footer with Company, Markets, Platforms, Tools/Resources, Payment and Legal links.
- Consistent empty/error/loading states; no dead buttons or misleading success messages.

## Page inventory from the reference site

The reference package includes these main content groups/routes; preserve their equivalent destinations in FTwebdemo and future redesigns:
- `/` home
- `markets/forex`, `markets/commodities`, `markets/indices`, `markets/shares-cfds`, `markets/cryptocurrency`
- `trading/account-opening`, `trading/account-types`, `trading/trading-conditions`, `trading/how-to-start`, `trading/platforms`, `trading/deposit`, `trading/withdrawal`
- `accounts/standard`, `accounts/premium`, `accounts/professional`
- `platforms/metatrader-4`, `platforms/metatrader-5`, `platforms/webtrader`
- `tools/economic-calendar`
- `company/about`, `company/benefits`, `company/contact`
- `partnership/`, `partnership/account-opening`
- `legal/terms-and-conditions`, `legal/privacy-policy`, `legal/risk-disclosure`, `legal/aml-policy`, `legal/client-agreement`
- Additional educational/market pages: CFDs, financing costs, calculating margin, profit/loss calculation, trading hours, holiday trading hours, corporate actions, depth of market, deposits and withdrawals, and FXTrade app.
- Shared sections: accounts, market categories, platforms and market overview.
- Widget references: Finlogix examples exist in the source package; use the agreed TradingView market/chart widgets for the FTwebdemo design when applicable. Do not keep Finlogix merely because a legacy source file exists.

## Content migration and redesign checklist

Before declaring any future forex design complete:
- [ ] Compare the navigation and route list against this master.
- [ ] Preserve all page content/sections and form fields relevant to the route.
- [ ] Confirm every desktop dropdown and mobile submenu works on tap.
- [ ] Confirm Payment > Deposits and Payment > Withdrawals work independently.
- [ ] Confirm all internal links point to the redesigned site's routes, not the old source domain.
- [ ] Confirm the hero, phone mockup, four TradingView cards and bottom ticker remain when required by the current design brief.
- [ ] Confirm each page has unique, relevant content rather than duplicated generic copy.
- [ ] Confirm account/partner figures and legal claims are verified or marked as placeholders.
- [ ] Confirm no dummy market values are presented as live.
- [ ] Test desktop, tablet and mobile widths; verify contrast and readable text.
- [ ] Keep this master updated whenever a new page, field, content section or business rule is approved.

**Core principle:** One forex business/content system; many visual themes. Keep the meaning and user journeys stable while the UI is customized for each new design.
