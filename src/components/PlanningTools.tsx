import Link from "next/link";
import { ArrowRight, Calculator, FileText, MapPinned, MessageCircle } from "lucide-react";

const tools = [
  {
    title: "Instant Quote Calculator",
    description: "Select your product, dimensions, glass type, and finish to get an estimated price range.",
    icon: Calculator,
    href: "/quote",
  },
  {
    title: "WhatsApp Quick Quote",
    description: "Send measurements and site photos directly for the fastest response from our team.",
    icon: MessageCircle,
    href: "https://wa.me/27871234567?text=Hi%20Aluminium%20Designs%2C%20I%20would%20like%20to%20send%20measurements%20for%20a%20quote.",
  },
  {
    title: "Service Area Check",
    description: "Confirm whether your Johannesburg, Pretoria, or Gauteng site is within our coverage.",
    icon: MapPinned,
    href: "/contact",
  },
  {
    title: "Project Spec Pack",
    description: "Attach photos, drawings, or CAD drafts for a detailed technical review and quotation.",
    icon: FileText,
    href: "/quote#quote-form-section",
  },
];

export default function PlanningTools() {
  return (
    <section className="border-b border-outline-variant bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
            Quick-Start Tools
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
            Get a Quote Faster
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Estimate your project cost, send measurements on the spot, check your area, or attach
            project specs for a detailed technical quote.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isExternal = tool.href.startsWith("http");
            const className =
              "border border-outline-variant bg-surface-container-lowest p-6 hover:border-primary hover:-translate-y-0.5 transition-all flex flex-col justify-between rounded-2xl";

            const content = (
              <>
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-outline-variant bg-surface-container text-secondary rounded-xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold uppercase text-primary tracking-tight">
                  {tool.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
                  {tool.description}
                </p>
                <span className="mt-5 inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                  Open Tool
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
