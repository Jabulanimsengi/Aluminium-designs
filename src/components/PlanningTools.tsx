import Link from "next/link";
import { ArrowRight, ClipboardList, FileText, MapPinned, MessageCircle } from "lucide-react";
import { getWhatsAppQuoteUrl, whatsappQuoteUrl } from "@/lib/site";

const quoteOptions = [
  {
    title: "Request a Detailed Quote",
    description: "Tell us what you need and share your project details for a written quotation from our team.",
    icon: ClipboardList,
    href: whatsappQuoteUrl,
    action: "Start Request",
  },
  {
    title: "WhatsApp Quick Quote",
    description: "Send measurements and site photos directly for the fastest response from our team.",
    icon: MessageCircle,
    href: getWhatsAppQuoteUrl(
      "Hi Aluminium Designs, I would like to send measurements and site photos for a quotation."
    ),
    action: "Open WhatsApp",
  },
  {
    title: "Service Area Check",
    description: "Confirm whether your Johannesburg, Pretoria, or Gauteng site is within our coverage.",
    icon: MapPinned,
    href: "/contact",
    action: "Check Your Area",
  },
  {
    title: "Project Spec Pack",
    description: "Attach photos, drawings, or CAD drafts for a detailed technical review and quotation.",
    icon: FileText,
    href: getWhatsAppQuoteUrl(
      "Hi Aluminium Designs, I would like to share photos, drawings, or CAD drafts for a detailed quotation."
    ),
    action: "Send Project Details",
  },
];

export default function PlanningTools() {
  return (
    <section className="border-b border-outline-variant bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
            Quote Request Options
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
            Get a Quote Faster
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Request a written quote, send measurements on WhatsApp, confirm your service area, or
            attach project specifications for our team to review.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quoteOptions.map((tool) => {
            const Icon = tool.icon;
            const isExternal = tool.href.startsWith("http");
            const className =
              "border border-outline-variant bg-surface-container-lowest p-6 hover:border-primary hover:-translate-y-0.5 transition-all flex flex-col justify-between";

            const content = (
              <>
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-outline-variant bg-surface-container text-secondary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold uppercase text-primary tracking-tight">
                  {tool.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
                  {tool.description}
                </p>
                <span className="mt-5 inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                  {tool.action}
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </span>
              </>
            );

            if (isExternal) {
              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={tool.title} href={tool.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
