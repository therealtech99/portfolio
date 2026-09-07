import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-ink">© 2026 {site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 transition-colors hover:border-ink hover:text-ink"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            {site.github ? (
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 transition-colors hover:border-ink hover:text-ink"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            ) : null}
            {site.email ? (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 transition-colors hover:border-ink hover:text-ink"
                >
                  <MailIcon className="h-4 w-4" />
                  Email
                </a>
              </li>
            ) : null}
            {site.phone ? (
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-bg-elevated px-3.5 transition-colors hover:border-ink hover:text-ink"
                >
                  Phone
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
