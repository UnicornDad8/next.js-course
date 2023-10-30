import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}
