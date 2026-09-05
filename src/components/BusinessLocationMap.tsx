import { Clock3, ExternalLink, MapPin } from "lucide-react";
import { businessContact, businessHours } from "@/lib/site";
import GoogleMapEmbed from "./GoogleMapEmbed";

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  businessContact.fullAddress,
)}`;

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  businessContact.fullAddress,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export default function BusinessLocationMap() {

  return (
    <section className="border-b border-outline-variant bg-surface-container-low py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-5 sm:gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="order-2 flex flex-col justify-center border border-outline-variant bg-surface-container-lowest p-5 sm:p-10 lg:order-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Visit Our Workshop
            </span>
            <h2 className="mt-3 font-sans text-2xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              Find Aluminium Designs in Katlehong
            </h2>
            <div className="mt-4 flex items-start gap-3 text-on-surface-variant sm:mt-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <address className="text-sm not-italic leading-relaxed">
                {businessContact.streetAddress}
                <br />
                {businessContact.addressLocality}, {businessContact.addressCity}
                <br />
                {businessContact.addressRegion}, South Africa
              </address>
            </div>

            <div className="mt-6 border-t border-outline-variant pt-5 sm:mt-8">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-accent" />
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Trading hours
                </h3>
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-on-surface-variant">Monday - Friday</dt>
                  <dd className="font-bold text-primary">{businessHours.weekdays}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-on-surface-variant">Saturday - Sunday</dt>
                  <dd className="font-bold text-outline">{businessHours.weekends}</dd>
                </div>
              </dl>
              <p className="mt-4 font-mono text-[9px] font-bold uppercase tracking-wider text-outline">
                {businessHours.appointmentNote}
              </p>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent-hover sm:mt-8"
            >
              Get Directions
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="order-1 relative min-h-[280px] overflow-hidden border border-outline-variant bg-surface-container-high sm:min-h-[420px] lg:order-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute right-4 top-4 z-20 hidden sm:inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-accent-hover"
            >
              Get Directions
              <ExternalLink className="h-4 w-4" />
            </a>
            <GoogleMapEmbed
              title="Google Map showing Aluminium Designs in Katlehong"
              mapUrl={mapUrl}
              directionsUrl={directionsUrl}
              minHeightClass="min-h-[280px] sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
