import type { MetadataRoute } from "next";
import { destinationsPaths, journeyPaths, legalPaths } from "@/data/routes";
import type { Locale } from "@/types";

const baseUrl = "https://medyatravel.de";
const locales: Locale[] = ["en", "de", "ar"];

const absolute = (path: string) => `${baseUrl}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const homeAlternates = {
    en: baseUrl,
    de: `${baseUrl}/de`,
    ar: `${baseUrl}/ar`,
  };

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: homeAlternates },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: homeAlternates },
    },
  ];

  const destinationAlternates = Object.fromEntries(
    locales.map((locale) => [locale, absolute(destinationsPaths[locale])]),
  );
  const journeyAlternates = Object.fromEntries(
    locales.map((locale) => [locale, absolute(journeyPaths[locale])]),
  );

  for (const locale of locales) {
    entries.push({
      url: absolute(destinationsPaths[locale]),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: destinationAlternates },
    });
    entries.push({
      url: absolute(journeyPaths[locale]),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: journeyAlternates },
    });

    for (const path of Object.values(legalPaths[locale])) {
      entries.push({
        url: absolute(path),
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
      });
    }
  }

  return entries;
}
