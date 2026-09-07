import Link from "next/link";
import { Card3D } from "@/components/Card3D";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Card3D className={featured ? "lg:col-span-2" : undefined}>
      <article
        className={`group card overflow-hidden rounded-2xl ${
          featured ? "lg:grid lg:grid-cols-2" : "flex flex-col"
        }`}
      >
      <Link
        href={`/projects/${project.slug}`}
        className={featured ? "block h-full min-h-52" : "block"}
      >
        <ProjectVisual
          visual={project.visual}
          name={project.name}
          featured={featured}
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-accent">
              {project.name}
            </h3>
          </Link>
          <ul className="flex flex-wrap gap-2">
            {project.featured ? (
              <li className="chip bg-accent-soft text-accent">Featured</li>
            ) : null}
            {project.categories.map((category) => (
              <li key={category} className="chip">
                {category}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
        <ul className="mt-5 space-y-1.5">
          {project.features.slice(0, featured ? 4 : 3).map((feature) => (
            <li
              key={feature}
              className="text-sm leading-6 text-ink before:mr-2 before:text-accent before:content-['–']"
            >
              {feature}
            </li>
          ))}
        </ul>
        {project.technologies.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip bg-bg">
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <ProjectLinks project={project} />
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
    </Card3D>
  );
}
