import { SectionHeader } from "@/components/SectionHeader";
import { education } from "@/lib/site";

export function Education() {
  return (
    <section
      id="education"
      className="reveal border-t border-line"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          index="04"
          eyebrow="Education"
          title="Academic background"
          titleId="education-heading"
        />
        <ul className="mt-12">
          {education.map((item) => (
            <li
              key={item.degree}
              className="flex flex-col justify-between gap-3 rounded-2xl border border-line bg-bg-elevated p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.school}</p>
              </div>
              <p className="font-mono text-sm tracking-[0.12em] text-faint">
                {item.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
