# Çağdaş Şen Brand Site

Production-oriented Next.js App Router site.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Main content / links

Edit `lib/siteConfig.js`.

### WhatsApp
Set `whatsapp` to the phone number in E.164 format without `+`, spaces or punctuation. Example:

```js
whatsapp: "905xxxxxxxxx"
```

## Deploy

Vercel: import the folder/repository and deploy. No special build settings are required.

## Status (2026-09-04)

- Verified: `npm run build` compiles clean, `npm run start` serves the hero and talks photos with a 200 response, confirmed with a rendered screenshot.
- Fixed a stray unmatched `</div>` in `app/page.js` that was breaking the production build.
- `next` pinned to `15.5.9` — earlier `15.5.2` was affected by CVE-2025-66478 (critical RSC RCE) and the follow-up CVE-2025-55183/55184.
- `public/` now holds exactly one copy of each served asset (`cagdas-sen-hero.webp`, `cagdas-sen-talks.webp`, `cagdas-sen-portrait.webp`, currently unused). No `-current` duplicates, no stray `preview*.html` or `index.html` mockups — this Next.js app is the only site.
- Full-resolution source PNGs (for future re-crops) live in `_source-assets/`, outside `public/`, so they're never accidentally served or referenced.

## Update (same day)

- Removed the "Selected Brands" pill panel that floated on top of the hero photo — it duplicated the full brand strip already shown in the Odak section, and overlaying opaque cards on a face photo read as cluttered rather than premium. The photo now only carries the "Role" tag, positioned off the face.
- Removed the second use of the photo in the Talks section (it was the identical portrait reused, not a distinct shot). Talks is now a text + event-list panel next to the WhatsApp AI panel, using the site's existing no-photo layout classes (`talksGridNoPhoto` / `talksTextOnly`). The photo now appears exactly once, in the hero.

## Update 2 (content overhaul from real LinkedIn/resume data)

- Rebuilt all content from the user's actual LinkedIn PDF export and a hand-provided list of 59 real Nebim-era ERP projects (2011–2017, with dates).
- Fixed a real bug: `.heroMetrics` (the "20+ / 59 / 10" stat cards) was being force-hidden by a leftover `display:none!important` rule from an old design iteration — the stats had never actually been visible on any version of this site. Removed that override.
- Replaced invented hero stats ("100+ proje", "11K+ LinkedIn topluluğu") with real ones: 20+ years, 59 Nebim-era ERP projects, 10 organizations since 2003.
- Replaced the wrong brand list (İpekyol/Boyner/Kiğılı/Lee Cooper/Schafer/B&G Store — none of these except İpekyol appear in the real project list) with verified brands from the actual Nebim project history: Koton, Levis, Penti, Damat, Birkenstock, New Balance, Madame Coco, İpekyol.
- Removed the fabricated "Talks & Events" section (PAX Worldwide Partner Conference / Tec FinTech Summit / WORLDEF Business Forum) — no evidence of these anywhere, including the user's own LinkedIn experience section. Not reused elsewhere.
- Added a new `#career` section: full real career timeline (10 roles, 2003–present) sourced directly from the LinkedIn export.
- Added a new `#nebim` section: all 59 real ERP client projects with year ranges, as a browsable grid.
- Dropped 2 of the 4 "Field Notes" article entries — could not verify "İpekyol'da müşteri tarafında ödeme deneyimi" and "Retail AI: mağazacılıkta gerçekten nerede değer yaratacak?" anywhere (perakende.org's author page only lists the other 2). Kept only the 2 confirmed articles. If these 2 are real, they need to be re-added with a source link.
- Data still not independently verifiable and taken as-is from the user's own documents: exact employment date ranges (LinkedIn PDF export), and the full Nebim project list. These are first-party sources, not fabricated, but weren't cross-checked against a second source.

## Update 3 (signature)

- Added the user's real signature (uploaded PNG, already transparent) to the footer, under the closing tagline. Processed into two ink colors for reuse: `public/cagdas-sen-signature-white.webp` (used, for the dark footer) and `public/cagdas-sen-signature-black.webp` (spare, for light backgrounds if needed elsewhere). Original full-res PNG kept in `_source-assets/`.
- Removed the generic circular "ÇŞ" monogram from the footer — the real signature replaces it as a stronger, more personal mark.

## Update 4 (motto + signature moved into hero)

- Added a real, verified personal quote (`siteConfig.quote`, sourced from the user's own perakende.org author bio) as a styled pull-quote in the hero, right under the stat cards.
- Placed the signature directly under that quote — as if signing the statement — using the black-ink version (hero background is light).
- Kept the signature in the footer too. This is intentional, not the earlier photo-duplication mistake: a signature bookending the page (front as an authenticity mark, back as a sign-off) is a normal personal-branding device; the two uses serve different purposes and the asset is a small mark, not the page's main visual.

## Update 5 (synced from preview — production-ready)

All the changes iterated on in the standalone preview HTML over many rounds are now applied to this real Next.js app:
- Hero: no floating badges, quote+signature as the main statement, clean stat row (23+ years / 500+ companies engaged / 10 different companies), circular contact icon buttons, no tag-pill row.
- Nav: plain wordmark (no circular monogram), reordered links, **working EN/TR language toggle** (client-side state in `app/page.js`, hero fully bilingual).
- Removed the Brand Manifesto section and the brand-logos strip in Odak entirely.
- Section order: Hero → Odak → Field Notes → Instagram → WhatsApp AI → Selected Projects → Nebim Dönemi (59 projects) → Deneyim (career timeline) → Footer.
- `npm run build` verified clean; screenshots confirmed pixel-parity with the last approved preview, in both languages.

**Before going fully live:**
- `whatsapp` in `lib/siteConfig.js` is still empty — the button shows "WhatsApp numarası eklenecek". Set it to a real E.164 number (e.g. `"905xxxxxxxxx"`) to activate it everywhere.
- Only the hero is bilingual right now. The rest of the page (career descriptions, all 59 Nebim project entries, Field Notes, Instagram, footer copy) stays Turkish regardless of the EN/TR toggle. Translate section by section when ready — same pattern as the hero (a `lang === "en" ? ... : ...` ternary per text block).
