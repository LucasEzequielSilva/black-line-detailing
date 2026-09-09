# Black Line Detailing — template 3D

Landing de car detailing con modelo 3D interactivo (React Three Fiber) y sistema multi-negocio (`data/businesses.ts` + rutas `/d/[slug]`).

## Notas para levantar el proyecto

- **Fuentes**: el diseño original usa Söhne (Klim Type Foundry, licencia paga) — no están incluidas en este repo. Para buildear sin ellas, cambiá `app/layout.tsx` para usar `next/font/google` (por ejemplo `Archivo`) en vez de `next/font/local`.
- **Datos de negocios**: `data/businesses.json` incluye solo un ejemplo ficticio. El dataset real (scrapeado) se mantiene fuera del repo en `data/businesses.local.json`.
- **Modelo 3D**: `public/car.glb` — reemplazar según licencia del modelo que se use.

## Stack

Next.js 16 (static export) + React 19 + Tailwind v4 + `@react-three/fiber`/`drei`.
