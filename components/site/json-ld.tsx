import { faqs } from "@/content/faq";
import { site } from "@/content/site";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Static data from content/, escaped so "</script>" can never break out.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function SoftwareAppJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: site.name,
        alternateName: site.nameLatin,
        description: site.description,
        url: site.url,
        image: `${site.url}/opengraph-image.png`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android",
        inLanguage: "ar",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "SAR" },
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}
