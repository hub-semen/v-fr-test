# VOdds Design System

**VOdds** — *"The Smarter Way To Bet"* — is a crypto-friendly online betting brand
spanning four product worlds: **Sports**, **Casino**, **Esports** and **Crypto/markets**
(Polymarket). The brand voice is loud, fast and promotional: heavy italic headlines,
bonus offers, odds boards and event tie-ins (Olympics, EURO, DreamLeague, US Open,
Wimbledon, FIFA WC).

This design system captures the brand's **marketing surfaces** — campaign **emails** and
**banners/social** — which is what the source file contains. It is *not* a recreation of
the betting platform UI (that product surface is not present in the source material).

## Sources

- **Figma:** "Vodds Emails (Copy).fig" — 3 pages (Cover, Draft, Banners), ~468 banner
  frames + email drafts across EN/ES/FR/PT/RU/UA/ZH locales. Components, the logo
  wordmark, social icons and the color variable collection were extracted from this file.
- **PDFs:** `uploads/Europ Liga VOdds.pdf`, `uploads/FIFA WC.pdf` — **referenced but not
  present** in the project filesystem at build time (the `uploads/` folder was empty).
  See Caveats.
- The brand entity: *Ole Group International B.V.*, Curaçao License No. 8048/JAZ.

---

## CONTENT FUNDAMENTALS

**Voice — direct, second person, high-energy promo.** Copy speaks *to you* ("Bet on
your favorite team", "Are you ready to earn big?", "Join VOdds today and get a special
bonus"). It opens with a hook question, states the offer in concrete numbers, then a
single imperative CTA.

**Headlines are heavy, short, UPPERCASE and often italic.** Examples from the file:
"EXCELLENCE IN EVERY PLAY", "BET ON YOUR FAVORITE TEAM", "CHECK THE BEST ODDS FOR THE
EURO 2024 MATCH". Numbers are the hero — `$3000`, `150 USDT`, `1.31` — set large.

**The offer is always specific.** A bonus amount (`$3000` / `150 USDT`), a promo code
(`CRB150`), a funding method (BTC / USDT) and a deadline ("this weekend"). Disclaimers
are small, italic, low-contrast: `*Terms and Conditions Apply`, `*Odds are accurate at
the time of writing and might be subject to change.`

**Casing & punctuation.** Headlines UPPERCASE. Body sentence case. CTAs uppercase
("CLAIM YOUR BONUS", "GET ACCOUNT NOW", "BET NOW"). Currency written as `150 USDT`,
`$3000`, `€1500`. Sign-off is warm and brief: "Cheers, VOdds Team".

**Emoji / symbols.** No decorative emoji in body copy. Flags (🇩🇪) and crypto glyphs
(₿, ₮) appear functionally on odds/matchup blocks. Vertical worlds get a single leading
glyph on their tag.

**Vibe:** confident, urgent, reward-driven — a sportsbook hype reel, not a finance app.

---

## VISUAL FOUNDATIONS

**Color.** A near-black **ink** (`#010203`) base, an electric **red** (`#FF2929`, the
logo "V" and every primary CTA) and a hotter **magenta/pink** (`#FF1560`, the single
most-used fill in the file) as the brand accent. On top sit three **vertical accent
worlds**: SPORTS = blue/navy (`#2F6BFF` / `#142A63`, Olympic navy), CASINO = purple +
gold (`#460359` / `#903AD4` / `#FFC632`), ESPORTS = neon green (`#1FEF1A` / `#87FF84`).
Emails use a light `#F5F5F5` body; banners and odds boards are dark.

**Type.** Display is **Gunterz** — a heavy, wide geometric grotesque, used Bold/Black and
frequently *italic* + UPPERCASE for headlines. Body is **Plus Jakarta Sans**. Odds,
prices, promo codes and countdowns use a **squared techno face (Benzin)**. Quinn appears
occasionally for serif-flavored headline accents. (Substitutions — see Caveats.)

**Backgrounds.** Bold **diagonal gradients** per vertical (135–160°), often with a soft
radial light-bloom in one corner; layered photographic athletes/cups for hero emails;
flat dark panels for odds boards. No subtle textures or noise as a system rule.

**Shape & elevation.** CTA buttons are pills at **10px** radius; cards/odds chips at
**14–20px**; badges/tags fully round. Cards are flat dark panels with a 1px slate border
(dark) or a soft `0 8px 30px` shadow (light). The brand's signature elevation is a
**neon glow** (`box-shadow` in the element's own color) on hover/active CTAs and on live
odds — red glow on primary, green on esports, gold on casino/bonus.

**Motion & states.** Hover = brighter fill + colored glow; press = `scale(0.97)`. Quick
140–180ms eases. No bouncy or looping decorative animation in content.

**Layout.** Email column is **640px**; hero banners run wide (≈1128 / 3456@2x); social is
**1080×1080**. Logo locks top-left. Generous 40px email gutters; centered headline +
body + single CTA stacks.

---

## ICONOGRAPHY

- **Logo:** custom **VODDS** wordmark — an angular red "V" (always `--vo-red`) fused to
  the word "ODDS", with the letterspaced tagline **THE SMARTER WAY TO BET**. The real
  vector marks were lifted from the Figma file into `components/brand/Logo.jsx`
  (light/dark tone, optional tagline). Do **not** retype it as text.
- **Social icons:** rounded-square buttons (Facebook, Instagram, Telegram, X, YouTube)
  in email/banner footers — `components/feedback/SocialBar.jsx`. White squares on dark,
  dark glyph squares on light. (The brand's own Telegram/VK/YouTube/Instagram icon
  components are also bundled in `assets/fig/Components.bundle.js`.)
- **Functional glyphs:** flags (🇩🇪 🏴) on matchups, crypto symbols (₿ ₮) for funding,
  one leading emoji per vertical Tag. No general decorative icon set; no icon font.
- **Imagery:** photographic athletes/players, tournament cups and crypto-coin 3D renders,
  usually cut out and layered over a vertical gradient. Warm, high-contrast, energetic.

---

## INDEX / MANIFEST

**Foundations**
- `styles.css` — global entry (import this). `tokens/` → `colors.css`, `typography.css`,
  `spacing.css`, `effects.css`, `fonts.css`.
- `guidelines/*.card.html` — color, type, spacing & glow specimen cards.

**Components** (`window.VOddsDesignSystem_b9b154.*`)
- Brand: `Logo`
- Core: `Button`, `Badge`, `Tag`, `PromoCode`, `SectionHeading`
- Betting: `OddsChip`, `MatchupCard`, `Avatar`, `BonusCard`
- Feedback: `SocialBar`

**UI Kits**
- `ui_kits/email/` — interactive campaign email (sports / casino / esports).
- `ui_kits/banners/` — marketing banner set (hero / VS / social), switchable vertical.

**Other**
- `assets/fig/Components.bundle.js` — brand social-icon + CTA components extracted from
  Figma (optional; load via its own script tag).
- `SKILL.md` — Agent-Skill manifest.

---

## CAVEATS — please help me make this perfect

1. **Fonts are substituted.** Gunterz → **Archivo**, Benzin → **Chakra Petch** (Plus
   Jakarta Sans is exact). These are close but not pixel-identical. **Please upload the
   licensed `Gunterz` and `Benzin` `.woff2` files** and I'll wire real `@font-face` rules.
2. **The two PDFs weren't readable** — `uploads/` was empty at build time. If you'd like
   their content (Europ Liga / FIFA WC promos) reflected, **please re-attach them.**
3. **No platform UI.** The source is marketing only, so there's no sportsbook/casino app
   kit. If you want one, share the product Figma/codebase and I'll add it.
4. **Imagery is placeholder.** Avatars/heroes use rings + gradients, not the real
   cut-out athlete photos. Point me at the approved image library to swap them in.

**Tell me which of these to tackle first** and I'll iterate.
