import { NextRequest, NextResponse } from "@/node_modules/next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from db

  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Ceci" });
}
