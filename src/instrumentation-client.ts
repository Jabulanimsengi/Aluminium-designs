type MonitoringEvent = {
  event: string;
  label?: string;
  destination?: string;
};

function textFrom(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("data-monitor-label") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    element.tagName.toLowerCase()
  ).slice(0, 160);
}

function cleanDestination(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === "null") return `${url.protocol}${url.pathname}`;
    return url.origin === window.location.origin ? url.pathname : `${url.origin}${url.pathname}`;
  } catch {
    return href.slice(0, 200);
  }
}

function report(event: MonitoringEvent) {
  const payload = JSON.stringify({
    ...event,
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  });

  try {
    const body = new Blob([payload], { type: "application/json" });
    if (navigator.sendBeacon("/api/monitoring-events", body)) return;
    void fetch("/api/monitoring-events", {
      method: "POST",
      body: payload,
      headers: { "content-type": "application/json" },
      keepalive: true,
    });
  } catch {
    // Event capture must never interfere with a visitor's click.
  }
}

function clickEvents(element: Element) {
  const link = element.closest("a[href]") as HTMLAnchorElement | null;
  const button = element.closest("button, [role='button']");
  const target = link?.href || "";
  const label = textFrom(link || button || element);
  const destination = target ? cleanDestination(target) : undefined;
  const events: MonitoringEvent[] = [];
  const isQuoteRequest = /quote|quotation/i.test(label) || /\/quote(?:$|[?#])/i.test(target);

  if (isQuoteRequest) events.push({ event: "quote_request_click", label, destination });
  if (/wa\.me|whatsapp/i.test(target)) events.push({ event: "whatsapp_click", label, destination });
  if (/google\.com\/maps|google\.com\/maps\/dir|maps\.app\.goo\.gl/i.test(target)) {
    events.push({ event: "maps_directions_click", label, destination });
  }
  if (/^tel:/i.test(target)) events.push({ event: "phone_call_click", label, destination });
  if (/^mailto:/i.test(target)) events.push({ event: "email_click", label, destination });

  if (events.length) return events;
  if (link) return [{ event: "navigation_click", label, destination }];
  if (button) return [{ event: "button_click", label }];
  return [];
}

if (typeof window !== "undefined") {
  report({ event: "page_view" });

  window.addEventListener(
    "click",
    (click) => {
      const element = click.target instanceof Element ? click.target : null;
      if (!element || element.closest("[data-monitor-event='false']")) return;
      for (const event of clickEvents(element)) report(event);
    },
    { capture: true },
  );
}

export function onRouterTransitionStart(url: string, navigationType: "push" | "replace" | "traverse") {
  report({ event: "route_navigation", label: navigationType, destination: cleanDestination(url) });
}
