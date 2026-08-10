import "server-only";

// These SheetDB endpoints back the firm's existing valuation report and
// offer letter QR-verification workflow (Google Sheet + Apps Script). This
// module only ever reads from them — nothing here writes back to the sheet.
const VALUATION_SHEETDB_URL = process.env.SHEETDB_VALUATION_URL;
const OFFER_SHEETDB_URL = process.env.SHEETDB_OFFER_URL;

export interface ValuationReport {
  token: string;
  reportNumber: string;
  clientName: string;
  issueDate: string;
  status: string;
  driveLink: string;
}

export interface OfferLetter {
  token: string;
  reportNumber: string;
  clientName: string;
  issueDate: string;
  subjectProperty: string;
  driveLink: string;
}

async function searchSheet<T>(baseUrl: string | undefined, token: string): Promise<T | null> {
  if (!baseUrl) {
    throw new Error("Missing SheetDB URL environment variable.");
  }

  const res = await fetch(
    `${baseUrl}/search?token=${encodeURIComponent(token)}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const rows = (await res.json()) as T[];
  return rows[0] ?? null;
}

export function getValuationReport(token: string) {
  return searchSheet<ValuationReport>(VALUATION_SHEETDB_URL, token);
}

export function getOfferLetter(token: string) {
  return searchSheet<OfferLetter>(OFFER_SHEETDB_URL, token);
}
