import { MailIcon } from "@/components/Icons";
import { ProfileLinks } from "@/components/ProfileLinks";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium text-ink">© 2026 {site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-3">
          <ProfileLinks tone="light" />
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
