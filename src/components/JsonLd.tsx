import { site } from "@/lib/site";

export function JsonLd() {
  const sameAs = [site.linkedin, site.github].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    description: site.seoDescription,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Mobile Development",
      "React.js",
      "Next.js",
    ],
    ...(site.email ? { email: `mailto:${site.email}` } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
