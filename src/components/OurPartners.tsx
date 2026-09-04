import Image from "next/image";

const partners = [
  {
    name: "Alpeco",
    category: "Aluminium Systems & Extrusions",
    logo: "/images/partners/alpeco.png",
    width: 300,
    height: 100,
  },
  {
    name: "Conways",
    category: "Profiles, Hardware & Systems",
    logo: "/images/partners/conways.png",
    width: 1149,
    height: 239,
  },
  {
    name: "H-System",
    category: "Architectural Hardware & Locks",
    logo: "/images/partners/logo-hsystem.png",
    width: 512,
    height: 512,
  },
  {
    name: "AGW",
    category: "Architectural Glass & Wholesale",
    logo: "/images/partners/agw.logo.jpg",
    width: 350,
    height: 232,
  },
];

export default function OurPartners() {
  return (
    <section className="py-20 bg-surface-container-low border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
            Trusted Industry Network
          </span>
          <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
            Our Partners
          </h2>
          <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            We partner with South Africa&apos;s leading manufacturers and certified distributors to supply premium aluminium extrusions, certified safety glass, and high-security architectural hardware.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-outline-variant bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
            >
              <div className="relative flex h-16 sm:h-20 w-full items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-12 sm:max-h-14 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-sans text-sm sm:text-base font-bold uppercase tracking-tight text-primary">
                  {partner.name}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs text-on-surface-variant font-medium leading-tight">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
