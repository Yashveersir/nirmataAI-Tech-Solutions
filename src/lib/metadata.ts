import type { Metadata } from "next";

const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.nirmataai.example";
const DEFAULT_SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "NirmataAI Tech Solution";
const DEFAULT_DESCRIPTION =
  "NirmataAI Tech Solution builds AI-powered software, modern web platforms, and digital experiences for ambitious teams.";

export interface CreateMetadataInput {
  title?: string;
  description?: string;
  keywords?: string | string[];
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

const DEFAULT_OG_IMAGE = "/og-default.png";

/**
 * Build a Next.js `Metadata` object with sensible Open Graph and Twitter card defaults.
 *
 * @param options.title       Page title (will be appended to site name).
 * @param options.description Page description.
 * @param options.keywords    SEO keywords for the page.
 * @param options.path        Path relative to site root, e.g. "/about".
 * @param options.image       Absolute URL or path to a social share image.
 * @param options.type        Open Graph type, defaults to "website".
 */
export function createMetadata({
  title,
  description,
  keywords,
  path = "/",
  image,
  type = "website",
  publishedTime,
  authors,
  noIndex = false,
}: CreateMetadataInput = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${DEFAULT_SITE_NAME}`
    : `${DEFAULT_SITE_NAME} — AI-Powered Software & Web Solutions`;
  const resolvedDescription = description ?? DEFAULT_DESCRIPTION;
  const url = new URL(path, DEFAULT_SITE_URL).toString();
  const resolvedImage = image
    ? image.startsWith("http")
      ? image
      : new URL(image, DEFAULT_SITE_URL).toString()
    : new URL(DEFAULT_OG_IMAGE, DEFAULT_SITE_URL).toString();

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    ...(keywords ? { keywords } : {}),
    metadataBase: new URL(DEFAULT_SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      url,
      title: resolvedTitle,
      description: resolvedDescription,
      siteName: DEFAULT_SITE_NAME,
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [resolvedImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const siteConfig = {
  name: DEFAULT_SITE_NAME,
  url: DEFAULT_SITE_URL,
  description: DEFAULT_DESCRIPTION,
} as const;
