import type { Metadata } from "next";
import { ProjectBrowser } from "@/components/ProjectBrowser";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${site.name}`,
  description:
    "Browse Flutter and web projects by Md Athar Ali Ansari, including VillageMart, Resume4u.in, Ujala Electric, SHIFA Digital Solution, AMLU, and Havocline Ventures.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="main" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="kicker">Project archive</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-6xl">
          Browse work
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
          VillageMart is the Flutter flagship — a live 3-app platform on Google
          Play. Filter to Mobile, or browse the client websites delivered
          alongside it.
        </p>
        <div className="mt-12">
          <ProjectBrowser />
        </div>
      </div>
    </main>
  );
}
