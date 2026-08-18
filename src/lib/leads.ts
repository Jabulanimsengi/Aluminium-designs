import { appendFile, mkdir, open, stat } from "node:fs/promises";
import path from "node:path";
import { getDataDir } from "@/lib/monitoring";

export type Lead = {
  name: string;
  phone: string;
  location: string;
  budget: string;
  source: string;
  page: string;
  referrer: string;
  ipAddress: string;
  sessionId: string;
  visitorId: string;
  timestamp: string;
};

const MAX_READ_BYTES = 5 * 1024 * 1024;

export function getLeadsPath() {
  return path.join(getDataDir(), "leads.ndjson");
}

export async function readLeads(): Promise<Lead[]> {
  const filePath = getLeadsPath();

  try {
    const fileStat = await stat(filePath);
    const start = Math.max(0, fileStat.size - MAX_READ_BYTES);
    const length = fileStat.size - start;
    const handle = await open(filePath, "r");

    try {
      const buffer = Buffer.alloc(length);
      await handle.read(buffer, 0, length, start);
      let content = buffer.toString("utf8");
      if (start > 0) content = content.slice(content.indexOf("\n") + 1);

      return content
        .split("\n")
        .filter(Boolean)
        .flatMap((line) => {
          try {
            const lead = JSON.parse(line) as Partial<Lead>;
            if (!lead.name || !lead.timestamp) return [];
            return [{
              name: lead.name || "",
              phone: lead.phone || "",
              location: lead.location || "",
              budget: lead.budget || "",
              source: lead.source || "",
              page: lead.page || "",
              referrer: lead.referrer || "",
              ipAddress: lead.ipAddress || "",
              sessionId: lead.sessionId || "",
              visitorId: lead.visitorId || "",
              timestamp: lead.timestamp,
            }];
          } catch {
            return [];
          }
        });
    } finally {
      await handle.close();
    }
  } catch (error) {
    const code = error instanceof Error && "code" in error ? error.code : undefined;
    if (code === "ENOENT") return [];
    console.error("Unable to read leads", error);
    return [];
  }
}

export async function appendLead(lead: Lead) {
  const filePath = getLeadsPath();
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(lead)}\n`, "utf8");
}
