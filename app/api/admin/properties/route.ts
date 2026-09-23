import { NextResponse } from "next/server";
import { getAllPropertiesForAdmin } from "@/lib/properties.server";

export async function GET() {
  const properties = await getAllPropertiesForAdmin();
  return NextResponse.json(properties);
}
