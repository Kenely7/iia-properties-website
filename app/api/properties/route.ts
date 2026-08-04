import { NextRequest, NextResponse } from "next/server";
import { addProperty, getAllProperties } from "@/lib/properties.server";
import type { NewProperty } from "@/lib/types";

export async function GET(request: NextRequest) {
  const properties = await getAllProperties();
  const status = request.nextUrl.searchParams.get("status");

  const filtered =
    status === "for-sale" || status === "for-rent"
      ? properties.filter((p) => p.status === status)
      : properties;

  return NextResponse.json(filtered);
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as NewProperty;

  if (!body.title || !body.address || !body.status || !body.price) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const created = await addProperty(body);
  return NextResponse.json(created, { status: 201 });
}
