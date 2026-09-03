import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aluminium Designs | Custom Aluminium Doors, Windows & Steel Works Gauteng",
    short_name: "Aluminium Designs",
    description:
      "Custom aluminium doors, windows, security gates, burglar bars, steel carports & glass installations across Gauteng. SABS certified. Request a free quote.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f2a43",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
