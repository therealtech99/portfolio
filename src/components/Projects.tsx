import { ProjectBrowser } from "@/components/ProjectBrowser";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <section
      id="projects"
      className="reveal border-t border-line"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          index="05"
          eyebrow="Featured projects"
          title="Flutter first, then shipped web"
          description="Start with VillageMart — a live 3-app Flutter platform. Filter to Mobile, or browse client websites I delivered alongside it."
          titleId="projects-heading"
        />
        <div className="mt-12">
          <ProjectBrowser />
        </div>
      </div>
    </section>
  );
}
