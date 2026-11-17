import {
  education,
  experience,
  profileLinks,
  skillGroups,
  site,
  technicalHighlights,
} from "@/lib/site";

export function ResumeDocument() {
  return (
    <article className="print-resume mx-auto w-full max-w-[820px] overflow-hidden rounded-[1.4rem] border border-line bg-[#fffcf7] text-ink shadow-[0_40px_100px_-48px_rgba(18,17,15,0.55)]">
      <header className="relative overflow-hidden bg-ink px-8 py-10 text-white sm:px-12">
        <div className="sheen pointer-events-none absolute inset-0 opacity-40" />
        <p className="relative text-xs tracking-[0.22em] text-white/55 uppercase">
          {site.location}
        </p>
        <h1 className="relative mt-3 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="relative mt-3 text-lg text-white/80">{site.title}</p>
        <p className="relative mt-5 max-w-2xl text-sm leading-6 text-white/65">
          Flutter · Dart · Firebase · REST APIs · {site.years} shipping production
          mobile products. Also ships Next.js when a product needs the web.
        </p>
      </header>

      <div className="grid gap-8 px-8 py-10 sm:px-12 lg:grid-cols-[0.9fr_1.3fr]">
        <aside className="space-y-8">
          <section>
            <h2 className="kicker">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-ink">
                  {site.phone}
                </a>
              </li>
              {profileLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-ink">
                    {link.display ?? link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="kicker">Skills</h2>
            <div className="mt-4 space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    {group.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="kicker">Education</h2>
            {education.map((item) => (
              <div key={item.degree} className="mt-3">
                <p className="text-sm font-medium text-ink">{item.degree}</p>
                <p className="text-sm text-muted">
                  {item.school} · {item.year}
                </p>
              </div>
            ))}
          </section>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="kicker">Summary</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Flutter developer with 4+ years architecting and shipping
              production mobile applications in Dart. Founder of VillageMart, a
              live 3-app Flutter/Firebase grocery platform on Google Play.
              Comfortable owning architecture, API integration, payments, and
              post-launch stability. Also delivers Next.js products when a
              project needs a web surface.
            </p>
          </section>

          <section>
            <h2 className="kicker">Experience</h2>
            <div className="mt-5 space-y-7">
              {experience.map((item) => (
                <div key={item.organization}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-ink">
                      {item.role}
                    </h3>
                    <p className="text-xs tracking-[0.08em] text-faint">
                      {item.period}
                    </p>
                  </div>
                  <p className="text-sm text-accent">{item.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm leading-6 text-ink before:mr-2 before:text-accent before:content-['–']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="kicker">Technical highlights</h2>
            <ul className="mt-4 space-y-2">
              {technicalHighlights.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-6 text-ink before:mr-2 before:text-accent before:content-['–']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
