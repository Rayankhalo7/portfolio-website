# Portfolio Website — Rayan Khalo

Public application / portfolio site for Rayan Khalo (Webentwickler / Fachinformatiker Anwendungsentwicklung).

## Purpose

German-language, mobile-first portfolio with:

- Home / About (profile + experience)
- Skills
- Projects (public demos + note on company samples)
- Contact form with mailto fallback

No street address or phone number is published on the site.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- `next-themes` (light / dark, preference persisted)
- Deploy target: Vercel

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Push this repository to a **new public** GitHub repo (e.g. `Rayankhalo7/portfolio-website`).
2. Import the project in [Vercel](https://vercel.com).
3. Use the default Next.js build settings (`npm run build`).
4. No required environment variables for the current scaffold.

Optional placeholders live in `.env.example`.

## License

MIT — Copyright (c) 2026 Rayan Khalo. See [LICENSE](./LICENSE).
