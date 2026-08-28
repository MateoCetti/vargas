# Vargas — Productos Frescos

Marketing site for **Vargas**, a family-run fruit and vegetable wholesaler based in the Mercado de Abasto, Córdoba, Argentina. Built with Next.js (App Router) and Tailwind CSS.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling — no component library, everything is hand-rolled
- `next/font` for fonts: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (body) via Google Fonts, and a local display font `Choco` (`public/fonts/choco.woff2`) used for headings

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server hot-reloads on save.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # next lint
```

No environment variables are required — the Google Maps and YouTube embeds on the About Us page are plain public iframes, no API keys involved.

## Project structure

```
src/
  app/
    page.tsx                    Home page (Hero, About, Products, Repartos, Social sections)
    layout.tsx                  Root layout — fonts, metadata
    _sections/                  Home-page-only section components
    main/
      layout.tsx                Wraps /main/* routes with the shared Navbar + Footer
      about_us/page.tsx         Company history, mission/vision/values, team, location + map/video
      products/                 Product catalog (filterable grid) — page.tsx, productCard.tsx
  components/
    navbar.tsx, footer.tsx      Shared site chrome
    drawer.tsx                  Mobile nav drawer (admin nav only)
    wave-divider.tsx            Reusable SVG section divider (currently unused, kept for future use)
    icons/                      Hand-rolled inline SVG icons (no icon library)
  data/
    products.ts                 Product catalog data (name, image, category, seasonal copy, varieties)
  lib/
    fonts.ts                    Local `Choco` display font definition
  assets/ , public/             Images (product photos, logos, team photos) and fonts
```

Routes:

| Path | Description |
|---|---|
| `/` | Landing page |
| `/main/about_us` | Company history, values, team, and location (map + video) |
| `/main/products` | Filterable product catalog |
| `/main/find_us` | Redirects to `/main/about_us` (the old standalone page was merged in) |

## Notes for future work

- Product images are a mix of transparent PNG cutouts (`imageFit: "contain"`) and full-bleed photos (`imageFit: "cover"`) — see `src/data/products.ts`. Keep this field accurate when adding new products.
- `public/video_2.mov` is a large (~94MB) unused asset — worth removing or optimizing if it's not needed.
