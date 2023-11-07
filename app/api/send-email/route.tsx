/*
import { NextResponse } from "@/node_modules/next/server";
import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "cecibot9@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Ceci" />,
  });

  return NextResponse.json({});
}
*/
