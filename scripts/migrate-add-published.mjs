// One-off migration: adds the `published` approval-gate column.
// Existing rows default to true (already-live listings stay live).
// Run with: node scripts/migrate-add-published.mjs
// Requires DATABASE_URL to be set (e.g. via `vercel env pull .env.local`).

import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.error("Missing DATABASE_URL. Run `vercel env pull .env.local` first.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function main() {
  await sql`
    ALTER TABLE properties
    ADD COLUMN IF NOT EXISTS published BOOLEAN NOT NULL DEFAULT true
  `;
  console.log("Migration complete: `published` column ready (existing rows default to true).");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
