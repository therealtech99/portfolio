import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <section
      id="experience"
      className="reveal border-t border-line"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title="Flutter in production since 2021"
          description="VillageMart is a live Flutter product I architected and still maintain. Client web work is listed second. A complete employment history is in the resume."
          titleId="experience-heading"
        />

        <div className="relative mt-16">
          <span
            className="absolute top-2 bottom-2 left-[6px] w-px bg-line"
            aria-hidden="true"
          />
          <ol>
            {experience.map((item, index) => (
              <li
                key={`${item.organization}-${item.role}`}
                className="relative pb-14 pl-10 last:pb-0 sm:pl-12"
              >
                <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                <div className="grid gap-3 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div>
                    <p className="text-sm text-muted">{item.period}</p>
                    {item.location ? (
                      <p className="mt-1 text-sm text-faint">{item.location}</p>
                    ) : null}
                    <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-line bg-bg-elevated p-6 sm:p-7">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-base text-accent">
                      {item.organization}
                    </p>
                    <p className="mt-4 text-base leading-7 text-muted">
                      {item.summary}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="pl-4 text-sm leading-6 text-ink before:mr-3 before:-ml-4 before:text-accent before:content-['–']"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
