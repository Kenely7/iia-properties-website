// NOTE: This is a placeholder authentication scheme for demo purposes only —
// a single hardcoded admin credential checked against a plain session cookie.
// Replace this with a real auth provider (e.g. NextAuth.js, Clerk, or a
// database-backed session/JWT system with hashed passwords) before shipping
// to production.
export const ADMIN_EMAIL = "admin@iiaproperties.com";
export const ADMIN_PASSWORD = "admin123";

// NOTE: middleware.ts duplicates these two constants inline (Vercel's Edge
// Function bundler can't resolve the "@/" import from that file) — keep
// them in sync if changed here.
export const ADMIN_SESSION_COOKIE = "iia_admin_session";
export const ADMIN_SESSION_VALUE = "authenticated";
