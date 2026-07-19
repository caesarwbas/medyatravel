import type { MetadataRoute } from "next";

const baseUrl = "https://medyatravel.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
          de: `${baseUrl}/de`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: baseUrl,
          de: `${baseUrl}/de`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
  ];
}
