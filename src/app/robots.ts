import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://medyatravel.de/sitemap.xml",
    host: "https://medyatravel.de",
  };
}