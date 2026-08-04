# IIA Properties

A modern real estate website for **Iwuba Ifediora & Associates (IIA)**, a registered firm of Estate Surveyors & Valuers based in Enugu, Nigeria. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Covers property sales, rentals, valuations, property management, property development, and business development, plus an admin dashboard for managing listings.

Company writeups (About, Services, Contact info) and the logo were sourced from the company's dormant site, [iiaproperties.com](http://iiaproperties.com), and the brand blue (`#075b9c`) was sampled directly from the official logo file.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 — brand colors/fonts are defined via the CSS-first `@theme` block in [app/globals.css](app/globals.css) (Tailwind 4 replaces `tailwind.config.js` with this approach), exposing utilities like `bg-brand-blue`, `text-brand-blue`, and `font-heading`
- Framer Motion for scroll/fade animations
- lucide-react for icons
- Poppins font via `next/font/google`
- File-based JSON data store (`data/properties.json`) via Next.js API routes

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the public site.

## Project Structure

```
app/
  (site)/            Public marketing site (shares Navbar/Footer layout)
    page.tsx          Home
    properties/       Listings page + /properties/[id] detail page
    services/         Valuations, Property Management, Development & Business Development + inquiry form
    about/            Company profile, vision/mission, core values
    contact/          Contact form + Enugu office info
  admin/
    login/            Admin login (not auth-gated)
    (dashboard)/      Auth-gated dashboard shell
      page.tsx         Listings table (edit/delete)
      new/              Add Property form
      properties/[id]/edit/  Edit Property form
  api/
    properties/        GET (list, ?status= filter), POST (create)
    properties/[id]/    GET, PUT, DELETE
    admin/login|logout/ Session cookie login/logout
components/            Shared UI (Navbar, Footer, PropertyCard, SearchBar, etc.)
components/admin/      Admin-only UI (AdminTable, PropertyForm, ConfirmDeleteModal)
lib/                   Types, utils, and the properties data-access layer
data/properties.json   Seed data / persisted listings
proxy.ts               Route protection for /admin/* (Next 16's middleware convention)
```

## Admin Dashboard

Visit [http://localhost:3000/admin](http://localhost:3000/admin) — you'll be redirected to `/admin/login` if not signed in.

**Demo credentials:**
- Email: `admin@iiaproperties.com`
- Password: `admin123`

> ⚠️ **Not production auth.** The credential check lives in [lib/auth.ts](lib/auth.ts) and the session is a single unsigned cookie set in [app/api/admin/login/route.ts](app/api/admin/login/route.ts). This is fine for a local demo, but before shipping, replace it with a real auth provider (NextAuth.js, Clerk, etc.) or a hashed-password + signed-session system.

### Add a property end-to-end

1. Log in at `/admin/login`.
2. Click **Add New Property**, fill in the form (title, price, status, address, details, image URLs, agent info), and submit.
3. The listing is written to `data/properties.json` and immediately appears on the public **Properties** page and, if "Featured" is checked, on the **Home** page.

### Remove a property end-to-end

1. From the admin dashboard table, click the trash icon on the listing you want to remove (e.g. once it's sold or rented).
2. Confirm in the dialog.
3. The listing is deleted from `data/properties.json` and disappears from the public site immediately — there's no "sold" state to manage, per the current workflow.

You can also **Edit** a listing in place via the pencil icon without deleting/re-adding it.

## Data & Persistence

Property data lives in [data/properties.json](data/properties.json) and is read/written by [lib/properties.server.ts](lib/properties.server.ts), which is only ever imported by server-side code (API routes and server components).

**This is a simple file-based store meant for local development and demos.** It doesn't handle concurrent writes safely and won't persist on most serverless hosts (e.g. Vercel's filesystem is read-only/ephemeral in production). Before going to production, swap `lib/properties.server.ts` for a real database (Postgres via Supabase/Neon, etc.) — the API route contracts (`GET/POST /api/properties`, `GET/PUT/DELETE /api/properties/[id]`) are designed to stay the same either way.

## Notes

- Inquiry forms (property inquiry, services inquiry, contact form) are UI-only — they simulate a submission and show a success state, but don't send email or persist anywhere. Wire them up to an email service or the data layer as needed.
- Map sections are static placeholders; swap in Google Maps/Mapbox embeds when ready.
- The property catalog in `data/properties.json` is still placeholder demo data (fictional US listings/agents) — swap in real IIA listings when available.
- Testimonials on the Home page are generic placeholder quotes (no fabricated client names) — replace with real client testimonials when available.
- The About page intentionally omits a "meet the team" section since no real staff bios/photos were available — add one if you'd like to feature real team members.
- No public company email address was found on the source site, so contact points are limited to phone + office address; add one if you have it.
