import { SectionHeader } from "@/components/SectionHeader";
import { whyHireMe } from "@/lib/site";

export function WhyHireMe() {
  return (
    <section
      className="reveal border-t border-line"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          index="07"
          eyebrow="Why work with me"
          title="Why a Flutter team hires me"
          titleId="why-heading"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {whyHireMe.map((item, index) => (
            <article
              key={item.title}
              className="card relative overflow-hidden rounded-2xl p-7 sm:p-8"
            >
              <p className="pointer-events-none absolute top-4 right-5 font-display text-6xl text-[rgba(18,17,15,0.06)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="font-mono text-[11px] tracking-[0.16em] text-faint">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
