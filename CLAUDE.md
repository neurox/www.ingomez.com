# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev           # Dev server (http://localhost:4321)
pnpm build         # Production build → docs/
pnpm preview       # Preview production build
```

No tests, linters, or CI pipelines exist.

## Architecture

This is an **Astro static site** for INGOMEZ (Juan Gomez's web + AI studio based in Cuernavaca, Morelos, Mexico). It publishes to `docs/` for GitHub Pages deployment on `www.ingomez.com`.

### i18n

- **Spanish** (default, `es`) at `/`
- **English** at `/en/`
- Routing: `prefixDefaultLocale: false`
- All UI strings in `src/i18n/translations.ts` — a nested dictionary with a `t(key, locale)` helper
- Pages: `src/pages/index.astro` (ES), `src/pages/en/index.astro` (EN), `src/pages/404.astro` (bilingual)

### Styles

- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin (NOT `@astrojs/tailwind`)
- Brand tokens in `src/styles/global.css` via `@theme`: `--color-brand-bg` (#f4ebe1), `--color-brand-navy` (#0c1b2f), `--color-brand-orange` (#b4532b), `--color-brand-brown` (#8b6d53)
- Fonts: Oswald (display, uppercase headlines) + Inter (body), imported via Google Fonts in `global.css`
- Component patterns: `.btn-primary`, `.card-outline`, `.card-dark`, `.thick-divider`

### Page Structure (single-page site)

Sections in order: Hero → Differentiators → Services → Process → Model → About (with ContactForm)
Each section is an Astro component in `src/components/`.

### Contact Form

Uses FormSubmit.co AJAX endpoint + reCAPTCHA v2 checkbox. No server-side code needed. Env vars in `.env`:
- `PUBLIC_RECAPTCHA_SITE_KEY` — reCAPTCHA site key (public)
- `PUBLIC_FORMSUBMIT_HASH` — FormSubmit.co endpoint hash

### Deployment

GitHub Pages serves from `docs/` on `main`. Run `pnpm build`, commit the `docs/` output. Static assets in `public/` (favicons, `CNAME`, `.nojekyll`) are copied to `docs/` on build.
