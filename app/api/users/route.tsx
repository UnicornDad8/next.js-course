import { NextRequest, NextResponse } from "@/node_modules/next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ceci" },
    { id: 2, name: "John" },
  ]);
}
