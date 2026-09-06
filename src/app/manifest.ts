import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aluminium Designs - Custom Aluminium Doors, Windows & Steel Works",
    short_name: "Aluminium Designs",
    description:
      "Precision custom aluminium windows, sliding doors, folding stackers, security gates, burglar bars, and steel carports across Gauteng.",
    start_url: "/",
    display: "standalone",
    background_color: "#14181c",
    theme_color: "#14181c",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192 512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
