import { SectionHeader } from "@/components/SectionHeader";
import { aboutParagraphs, site } from "@/lib/site";

const facts = [
  `${site.years} shipping Flutter and mobile products`,
  "VillageMart: 3 Flutter apps in production",
  "1,000+ Google Play installs",
  "Firebase, REST APIs, and UPI payments",
  "Architecture through Play Store deployment",
  "Independent debugging and feature ownership",
];

export function About() {
  return (
    <section
      id="about"
      className="reveal border-t border-line"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-32">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="A Flutter engineer who ships to real users."
          titleId="about-heading"
        />
        <div>
          <div className="space-y-5 text-[1.05rem] leading-8 text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="rounded-xl border border-line bg-bg-elevated px-4 py-3 text-sm leading-6 text-ink"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
