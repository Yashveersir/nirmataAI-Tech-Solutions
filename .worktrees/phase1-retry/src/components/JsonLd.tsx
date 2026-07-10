import type { JSX } from "react";

export type JsonLdType = "Organization" | "WebSite" | "Service" | "BlogPosting";

interface JsonLdProps {
  type: JsonLdType;
  data: Record<string, unknown>;
}

/**
 * Render a JSON-LD structured data block for SEO.
 *
 * The `@context` and `@type` are added automatically.
 */
export function JsonLd({ type, data }: JsonLdProps): JSX.Element {
  const payload = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
