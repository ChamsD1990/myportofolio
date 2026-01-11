import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY in environment variables");
    return NextResponse.json({ success: false, error: "Missing API key" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Acme <chamdani.nur90@gmail.com>",
      to: ["chamdani.nur90@gmail.com"],
      subject: "Hello World",
      html: "<p>It works!</p>",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.toString() });
  }
}
