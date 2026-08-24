import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 2_000;

type CateringLead = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  date?: unknown;
  guests?: unknown;
  serviceType?: unknown;
  notes?: unknown;
};

function text(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: CateringLead;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lead = {
    name: text(payload.name, 120),
    email: text(payload.email, 254),
    phone: text(payload.phone, 50),
    date: text(payload.date, 50),
    guests: text(payload.guests, 50),
    serviceType: text(payload.serviceType, 120),
    notes: text(payload.notes),
  };

  if (!lead.name || !lead.email || !lead.phone || !lead.date) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CATERING_LEAD_FROM_EMAIL;
  const to = process.env.CATERING_LEAD_TO_EMAIL || "Estimecafe1@gmail.com";

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Online catering requests are not configured yet. Please call us at (732) 669-7581." },
      { status: 503 },
    );
  }

  const message = [
    "New catering quote request",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Event date: ${lead.date}`,
    `Guest count: ${lead.guests || "Not provided"}`,
    `Service type: ${lead.serviceType || "Not provided"}`,
    "",
    "Menu preferences / notes:",
    lead.notes || "Not provided",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `Catering quote: ${lead.name} — ${lead.date}`,
      text: message,
    }),
  });

  if (!response.ok) {
    console.error("Catering lead email delivery failed", response.status);
    return NextResponse.json(
      { error: "We could not send your request. Please call us at (732) 669-7581." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
