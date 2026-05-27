import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://gromatik.ar",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://gromatik.ar/demo",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
