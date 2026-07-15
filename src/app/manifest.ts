import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEDYA TRAVEL",
    short_name: "MEDYA TRAVEL",
    description:
      "Individuelle und geführte Syrien-Reisen ab Deutschland.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    lang: "de",
  };
}
