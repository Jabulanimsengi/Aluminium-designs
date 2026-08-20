import { ShieldCheck, BadgeCheck, Award, Factory, ClipboardCheck, Landmark } from "lucide-react";

const accreditations = [
  {
    name: "AAAMSA",
    full: "Association of Architectural Aluminium Manufacturers of South Africa",
    icon: Factory,
  },
  {
    name: "SABS",
    full: "South African Bureau of Standards",
    icon: ShieldCheck,
  },
  {
    name: "SANS",
    full: "South African National Standards",
    icon: BadgeCheck,
  },
  {
    name: "NHBRC",
    full: "National Home Builders Registration Council",
    icon: Landmark,
  },
  {
    name: "Master Builders SA",
    full: "Master Builders South Africa",
    icon: Award,
  },
  {
    name: "Qualicoat",
    full: "International powder coating quality standard",
    icon: ClipboardCheck,
  },
];

function Accreditation({
  item,
}: {
  item: (typeof accreditations)[number];
}) {
  const Icon = item.icon;

  return (
    <div
      className="flex shrink-0 items-center gap-2 text-secondary transition-colors hover:text-primary"
      title={item.full}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="font-sans text-sm font-bold uppercase tracking-wider">
        {item.name}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="border-b border-outline-variant bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Trusted By
        </p>

        <div className="mt-6 -mx-4 overflow-hidden sm:hidden">
          <div className="flex w-max min-w-full animate-trusted-by-marquee hover:[animation-play-state:paused]">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate}
                className="flex shrink-0 gap-8 pr-8"
              >
                {accreditations.map((item) => (
                  <Accreditation key={item.name} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:flex">
          {accreditations.map((item) => (
            <Accreditation key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
