import "server-only";
import fs from "fs/promises";
import path from "path";
import type { NewProperty, Property } from "./types";

// NOTE: This is a simple file-based data store suitable for local development
// and demos only. It is not safe for concurrent writes or multi-instance
// deployments. Swap this module for a real database (e.g. Postgres/Supabase)
// before going to production.
const DATA_FILE = path.join(process.cwd(), "data", "properties.json");

export async function getAllProperties(): Promise<Property[]> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Property[];
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  const properties = await getAllProperties();
  return properties.find((p) => p.id === id);
}

async function saveAllProperties(properties: Property[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(properties, null, 2), "utf-8");
}

export async function addProperty(data: NewProperty): Promise<Property> {
  const properties = await getAllProperties();
  const newProperty: Property = {
    ...data,
    id: `p${Date.now()}`,
    dateAdded: new Date().toISOString(),
  };
  properties.unshift(newProperty);
  await saveAllProperties(properties);
  return newProperty;
}

export async function updateProperty(
  id: string,
  data: Partial<NewProperty>
): Promise<Property | undefined> {
  const properties = await getAllProperties();
  const index = properties.findIndex((p) => p.id === id);
  if (index === -1) return undefined;
  properties[index] = { ...properties[index], ...data };
  await saveAllProperties(properties);
  return properties[index];
}

export async function deleteProperty(id: string): Promise<boolean> {
  const properties = await getAllProperties();
  const next = properties.filter((p) => p.id !== id);
  if (next.length === properties.length) return false;
  await saveAllProperties(next);
  return true;
}
