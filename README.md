# Ajé Bumi — V2 Homepage

A custom Next.js homepage translating the approved Ajé Bumi creative direction into a responsive web experience.

## V2 design direction
This version is built around:
- Sacred Feminine softness and self-possession
- Warm ivory as the primary canvas
- Espresso, blush, sage, antique gold, and restrained clay
- A dedicated deep-ocean section for water, reflection, memory, and becoming
- Editorial serif typography
- Thin rules, small symbolic marks, tracked labels, and generous negative space
- Earth / Ocean / Light / Adornment / Ritual material language
- Oracle + Curator style brand voice

## Important
The client has not yet supplied final product assets. This version does **not** invent:
- Product names
- Prices
- Materials
- Inventory
- Product claims
- Final campaign photography

Image areas are intentionally art-directed placeholders that can be replaced with approved campaign and product photography later.

## Uploading to GitHub
Replace the existing V1 files in the repository with the files inside this `aje-bumi` folder.

At minimum, V2 changes:
- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- all files in `components/`
- `README.md`

Keep `package.json` at Next.js `15.5.21` unless you intentionally upgrade it later.

Once the commit reaches the `main` branch, Vercel should automatically create a new production deployment.

## Local development
```bash
npm install
npm run dev
```

Open http://localhost:3000
