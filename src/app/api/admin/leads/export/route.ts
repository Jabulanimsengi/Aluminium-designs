import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
import { readLeads, type Lead } from "@/lib/leads";

export const runtime = "nodejs";

const COLUMNS: Array<keyof Lead> = [
  "timestamp",
  "name",
  "phone",
  "location",
  "budget",
  "source",
  "page",
  "referrer",
  "ipAddress",
  "sessionId",
  "visitorId",
];

function csvCell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replaceAll('"', '""')}"`;
}

export async function GET() {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminSessionToken(session)) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "Cache-Control": "no-store" },
    });
  }

  const leads = (await readLeads()).sort(
    (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp),
  );

  const rows = [
    COLUMNS.map((column) => csvCell(column)).join(","),
    ...leads.map((lead) => COLUMNS.map((column) => csvCell(lead[column] || "")).join(",")),
  ];

  const filename = `leads-export-${new Date().toISOString().slice(0, 10)}.csv`;
  return new NextResponse(`\uFEFF${rows.join("\r\n")}\r\n`, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="${filename}"`,
      "cache-control": "private, no-store",
    },
  });
}
