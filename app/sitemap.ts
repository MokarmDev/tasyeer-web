import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export const dynamic = "force-static";

// /terms/ is left out while it is a draft (it is also noindex).
const routes = ["/", "/features/", "/guide/", "/privacy/", "/support/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
