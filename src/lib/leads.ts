import { chmod, mkdir, open, stat } from "node:fs/promises";
import path from "node:path";

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

let pendingAppend: Promise<void> = Promise.resolve();

export function getLeadsDataDir() {
  const configuredPath =
    process.env.LEADS_DATA_PATH?.trim() ||
    process.env.MONITORING_EVENTS_PATH?.trim();

  if (process.env.NODE_ENV === "production" && !configuredPath) {
    throw new Error(
      "Lead storage is not configured. Set LEADS_DATA_PATH to durable storage outside the release directory.",
    );
  }

  return configuredPath || path.join(process.cwd(), "data");
}

export function getLeadsPath() {
  return path.join(getLeadsDataDir(), "leads.ndjson");
}

export function getLeadsMirrorDir() {
  const configuredPath = process.env.LEADS_MIRROR_PATH?.trim();

  if (process.env.NODE_ENV === "production" && !configuredPath) {
    throw new Error(
      "Live lead mirroring is not configured. Set LEADS_MIRROR_PATH to protected storage outside the release directory.",
    );
  }

  return configuredPath || path.join(process.cwd(), "data", "lead-mirror");
}

export function getLeadsMirrorPath() {
  return path.join(getLeadsMirrorDir(), "leads.ndjson");
}

function normalizeLead(lead: Partial<Lead>): Lead | null {
  if (!lead.name || !lead.timestamp) return null;
  return {
    name: lead.name,
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
  };
}

async function readLeadsFile(filePath: string): Promise<Lead[]> {

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
            const lead = normalizeLead(JSON.parse(line) as Partial<Lead>);
            return lead ? [lead] : [];
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
    throw error;
  }
}

export async function readLeads(): Promise<Lead[]> {
  const [primary, mirror] = await Promise.all([
    readLeadsFile(getLeadsPath()),
    readLeadsFile(getLeadsMirrorPath()),
  ]);
  const deduplicated = new Map<string, Lead>();
  for (const lead of [...primary, ...mirror]) {
    deduplicated.set(JSON.stringify(lead), lead);
  }
  return [...deduplicated.values()];
}

async function appendDurably(filePath: string, line: string) {
  const directory = path.dirname(filePath);
  await mkdir(directory, { recursive: true, mode: 0o700 });
  await chmod(directory, 0o700);
  const handle = await open(filePath, "a", 0o600);
  try {
    await handle.writeFile(line, "utf8");
    await handle.sync();
  } finally {
    await handle.close();
  }
  await chmod(filePath, 0o600);
}

export async function appendLead(lead: Lead) {
  const primaryPath = getLeadsPath();
  const mirrorPath = getLeadsMirrorPath();
  const line = `${JSON.stringify(lead)}\n`;
  const operation = pendingAppend.then(async () => {
    await appendDurably(mirrorPath, line);
    if (primaryPath !== mirrorPath) await appendDurably(primaryPath, line);
  });

  pendingAppend = operation.catch(() => undefined);
  await operation;
}
