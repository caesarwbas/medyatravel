import type { MetadataRoute } from "next";

const baseUrl = "https://medyatravel.de";

const languageAlternates = {
  en: baseUrl,
  de: `${baseUrl}/de`,
  ar: `${baseUrl}/ar`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: languageAlternates },
    },
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: languageAlternates },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: languageAlternates },
    },
  ];
}
