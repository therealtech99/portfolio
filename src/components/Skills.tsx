import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/lib/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="reveal border-t border-line"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          index="02"
          eyebrow="Technical skills"
          title="The stack I ship Flutter products with"
          titleId="skills-heading"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`card rounded-2xl p-7 ${
                index === skillGroups.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <h3 className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip bg-bg">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
