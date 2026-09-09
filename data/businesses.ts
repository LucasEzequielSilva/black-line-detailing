import fs from "node:fs";
import path from "node:path";
import placeholder from "./businesses.json";
import type { Business } from "./business-helpers";

export * from "./business-helpers";

// data/businesses.local.json (gitignored) tiene el dataset real scrapeado.
// Si no existe (ej: clon público del repo), se usa el placeholder ficticio.
const localPath = path.join(process.cwd(), "data", "businesses.local.json");
const raw = fs.existsSync(localPath) ? JSON.parse(fs.readFileSync(localPath, "utf-8")) : placeholder;

const businesses: Business[] = raw;

export function getAllBusinesses(): Business[] {
  return businesses;
}

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}
