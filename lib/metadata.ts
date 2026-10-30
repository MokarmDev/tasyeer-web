import type { Metadata } from "next";

import { site } from "@/content/site";

// Pages that set `openGraph` do not inherit app/opengraph-image.png, so it is
// referenced explicitly.
const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` };

/** Title, description, canonical and Open Graph for one page. */
export function pageMetadata({
  title,
  description,
  path,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ar",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
