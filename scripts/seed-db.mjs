// One-off script to create the properties table and seed it from
// data/properties.json. Run with: node scripts/seed-db.mjs
// Requires DATABASE_URL to be set (e.g. via `vercel env pull .env.local`).

import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (!process.env.DATABASE_URL) {
  console.error("Missing DATABASE_URL. Run `vercel env pull .env.local` first.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS properties (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL,
      price NUMERIC NOT NULL,
      address TEXT NOT NULL DEFAULT '',
      city TEXT NOT NULL DEFAULT '',
      state TEXT NOT NULL DEFAULT '',
      property_type TEXT NOT NULL DEFAULT '',
      beds NUMERIC NOT NULL DEFAULT 0,
      baths NUMERIC NOT NULL DEFAULT 0,
      amenities TEXT[] NOT NULL DEFAULT '{}',
      images TEXT[] NOT NULL DEFAULT '{}',
      agent JSONB NOT NULL DEFAULT '{}',
      featured BOOLEAN NOT NULL DEFAULT false,
      date_added TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  console.log("Table ready.");

  const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM properties`;
  if (count > 0) {
    console.log(`Table already has ${count} rows — skipping seed.`);
    return;
  }

  const dataPath = join(__dirname, "..", "data", "properties.json");
  const properties = JSON.parse(readFileSync(dataPath, "utf-8"));

  for (const p of properties) {
    await sql`
      INSERT INTO properties (
        id, title, description, status, price, address, city, state,
        property_type, beds, baths, amenities, images, agent, featured, date_added
      ) VALUES (
        ${p.id}, ${p.title}, ${p.description}, ${p.status}, ${p.price},
        ${p.address}, ${p.city}, ${p.state}, ${p.propertyType},
        ${p.beds}, ${p.baths}, ${p.amenities}, ${p.images},
        ${JSON.stringify(p.agent)}, ${p.featured}, ${p.dateAdded}
      )
    `;
  }

  console.log(`Seeded ${properties.length} properties.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
