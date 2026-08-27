"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { RefreshCw } from "lucide-react";

const intervals = [
  { label: "Off", milliseconds: 0 },
  { label: "30s", milliseconds: 30_000 },
  { label: "60s", milliseconds: 60_000 },
  { label: "5 min", milliseconds: 300_000 },
];

export function RefreshControls() {
  const router = useRouter();
  const [intervalMs, setIntervalMs] = useState(0);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!intervalMs) return;
    const id = window.setInterval(() => startTransition(() => router.refresh()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, router]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <select
        aria-label="Auto refresh interval"
        value={intervalMs}
        onChange={(event) => setIntervalMs(Number(event.target.value))}
        className="rounded-full border border-outline-variant bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary"
      >
        {intervals.map((option) => (
          <option key={option.milliseconds} value={option.milliseconds}>
            Auto: {option.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => startTransition(() => router.refresh())}
        className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${isPending ? "animate-spin" : ""}`} /> Refresh
      </button>
    </div>
  );
}
