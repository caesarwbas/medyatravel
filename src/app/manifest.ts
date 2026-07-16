import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEDYA TRAVEL",
    short_name: "MEDYA TRAVEL",
    description:
      "Bespoke private journeys and cultural travel experiences across Syria.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    lang: "en",
  };
}
