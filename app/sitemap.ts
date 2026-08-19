import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quizz.ohiszpanski.pl";

  // In a real app with a blog, we would fetch posts here and map them.
  // For now, we only have the home page.
  
  const routes = [
    "",
    // Add future routes here, e.g., "/blog", "/o-mnie"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  return [...routes];
}
