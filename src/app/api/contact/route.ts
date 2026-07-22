import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 10_000;
const MIN_COMPLETION_MS = 1_500;
const MAX_FORM_AGE_MS = 60 * 60 * 1000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentSubmissions = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const active = (recentSubmissions.get(key) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (active.length >= RATE_LIMIT_MAX) {
    recentSubmissions.set(key, active);
    return true;
  }

  active.push(now);
  recentSubmissions.set(key, active);
  return false;
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const { hostname } = new URL(origin);
    return (
      hostname === "globalfundreg.com" ||
      hostname === "www.globalfundreg.com" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  } catch {
    return false;
  }
}

async function getGraphAccessToken() {
  const tenantId = process.env.MS_GRAPH_TENANT_ID;
  const clientId = process.env.MS_GRAPH_CLIENT_ID;
  const clientSecret = process.env.MS_GRAPH_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Microsoft Graph contact form credentials are not configured.");
  }

  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope: "https://graph.microsoft.com/.default",
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Microsoft token request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Microsoft token response did not include a token.");
  return data.access_token;
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Request origin was not accepted." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json({ ok: false, error: "Request was too large." }, { status: 413 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const honeypot = cleanText(payload.website, 200);
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  const completionTime = Date.now() - startedAt;

  // Give bots a normal success response so they do not learn how the trap works.
  if (
    honeypot ||
    !startedAt ||
    completionTime < MIN_COMPLETION_MS ||
    completionTime > MAX_FORM_AGE_MS
  ) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanText(payload.name, 120);
  const email = cleanText(payload.email, 254).toLowerCase();
  const company = cleanText(payload.company, 160);
  const message = cleanText(payload.message, 3000);

  if (!name || !message || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { ok: false, error: "Please wait before sending another inquiry." },
      { status: 429 }
    );
  }

  const mailboxUser = process.env.CONTACT_MAILBOX_USER;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!mailboxUser || !recipient) {
    return NextResponse.json({ ok: false, error: "Contact delivery is unavailable." }, { status: 503 });
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const accessToken = await getGraphAccessToken();
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(mailboxUser)}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `Website inquiry from ${name}`,
            body: { contentType: "Text", content: body },
            toRecipients: [{ emailAddress: { address: recipient } }],
            replyTo: [{ emailAddress: { address: email, name } }],
          },
          saveToSentItems: true,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Microsoft Graph sendMail failed with status ${response.status}.`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your inquiry. Please email us directly." },
      { status: 502 }
    );
  }
}
