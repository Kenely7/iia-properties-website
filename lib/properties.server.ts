import "server-only";
import { neon } from "@neondatabase/serverless";
import type { NewProperty, Property } from "./types";

const sql = neon(process.env.DATABASE_URL!);

interface PropertyRow {
  id: string;
  title: string;
  description: string;
  status: string;
  price: string;
  address: string;
  city: string;
  state: string;
  property_type: string;
  beds: string;
  baths: string;
  amenities: string[];
  images: string[];
  featured: boolean;
  date_added: string;
}

function rowToProperty(row: PropertyRow): Property {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    status: row.status as Property["status"],
    price: Number(row.price),
    address: row.address,
    city: row.city,
    state: row.state,
    propertyType: row.property_type,
    beds: Number(row.beds),
    baths: Number(row.baths),
    amenities: row.amenities,
    images: row.images,
    featured: row.featured,
    dateAdded: new Date(row.date_added).toISOString(),
  };
}

export async function getAllProperties(): Promise<Property[]> {
  const rows = (await sql`
    SELECT * FROM properties ORDER BY date_added DESC
  `) as PropertyRow[];
  return rows.map(rowToProperty);
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  const rows = (await sql`
    SELECT * FROM properties WHERE id = ${id}
  `) as PropertyRow[];
  return rows[0] ? rowToProperty(rows[0]) : undefined;
}

export async function addProperty(data: NewProperty): Promise<Property> {
  const id = `p${Date.now()}`;
  const dateAdded = new Date().toISOString();

  const rows = (await sql`
    INSERT INTO properties (
      id, title, description, status, price, address, city, state,
      property_type, beds, baths, amenities, images, featured, date_added
    ) VALUES (
      ${id}, ${data.title}, ${data.description}, ${data.status}, ${data.price},
      ${data.address}, ${data.city}, ${data.state}, ${data.propertyType},
      ${data.beds}, ${data.baths}, ${data.amenities}, ${data.images},
      ${data.featured}, ${dateAdded}
    )
    RETURNING *
  `) as PropertyRow[];

  return rowToProperty(rows[0]);
}

export async function updateProperty(
  id: string,
  data: Partial<NewProperty>
): Promise<Property | undefined> {
  const existing = await getPropertyById(id);
  if (!existing) return undefined;

  const merged: NewProperty = { ...existing, ...data };

  const rows = (await sql`
    UPDATE properties SET
      title = ${merged.title},
      description = ${merged.description},
      status = ${merged.status},
      price = ${merged.price},
      address = ${merged.address},
      city = ${merged.city},
      state = ${merged.state},
      property_type = ${merged.propertyType},
      beds = ${merged.beds},
      baths = ${merged.baths},
      amenities = ${merged.amenities},
      images = ${merged.images},
      featured = ${merged.featured}
    WHERE id = ${id}
    RETURNING *
  `) as PropertyRow[];

  return rows[0] ? rowToProperty(rows[0]) : undefined;
}

export async function deleteProperty(id: string): Promise<boolean> {
  const rows = (await sql`
    DELETE FROM properties WHERE id = ${id} RETURNING id
  `) as { id: string }[];
  return rows.length > 0;
}
