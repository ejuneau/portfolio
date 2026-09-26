import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";


import type { MetaFunction } from "react-router";

const SITE_URL = "https://ejuneau.me";
const OG_IMAGE = `${SITE_URL}/headshot-full.png`; 

const TITLE = "Eve Juneau | Games Marketing & Content Specialist | Montréal";
const DESCRIPTION =
  "Games-industry content & marketing specialist in Montréal. 600% social growth, 91% newsletter CTR, and a technical foundation in React/front-end dev.";

export const meta: MetaFunction = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  { name: "theme-color", content: "#EEE7D7", media: "(prefers-color-scheme:light)" },
  { name: "theme-color", content: "#2E2F2F", media: "(prefers-color-scheme:dark)" },

  // Canonical URL — prevents duplicate-content issues if the site is ever reachable via multiple URLs
  { tagName: "link", rel: "canonical", href: SITE_URL },

  // Open Graph (LinkedIn, Facebook, Discord, Bluesky previews)
  { property: "og:type", content: "profile" },
  { property: "og:title", content: TITLE },
  { property: "og:description", content: DESCRIPTION },
  { property: "og:url", content: SITE_URL },
  { property: "og:image", content: OG_IMAGE },
  { property: "og:site_name", content: "Eve Juneau's Portfolio" },
  { property: "og:locale", content: "en_US" },
  { property: "og:locale:alternate", content: "fr_CA" },

  // Twitter/X card
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: TITLE },
  { name: "twitter:description", content: DESCRIPTION },
  { name: "twitter:image", content: OG_IMAGE },

  // JSON-LD structured data — helps Google understand this is a Person/profile page
  {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Eve Juneau",
      url: SITE_URL,
      image: OG_IMAGE,
      jobTitle: "Content & Marketing Specialist",
      description: DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      knowsLanguage: ["English", "French"],
      sameAs: [
        "https://www.linkedin.com/in/ejuneau/",
        "https://bsky.app/profile/ejuneau.me",
        "https://www.instagram.com/rcjuneau/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Exothermic Games",
      },
    },
  },
];

export default function Home() {
  return <Welcome />;
}
