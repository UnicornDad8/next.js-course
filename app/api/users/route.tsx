import { NextRequest, NextResponse } from "@/node_modules/next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ceci" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  return NextResponse.json({ id: 3, name: body.name }, { status: 201 });
}
