import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://omniquestui.vercel.app/omniquest", lastModified: new Date(), priority: 1.0 },
    { url: "https://omniquestui.vercel.app/eduQuest", lastModified: new Date(), priority: 0.9 },
    { url: "https://omniquestui.vercel.app/mbaWizards", lastModified: new Date(), priority: 0.9 },
  ];
}