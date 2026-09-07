import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@/components/Icons";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectVisual } from "@/components/ProjectVisual";
import {
  getAdjacentProjects,
  getProject,
  projects,
  site,
} from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: `Projects | ${site.name}` };

  return {
    title: `${project.name} | ${site.name}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <main id="main" className="border-t border-line">
      <article className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          All projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-2xl border border-line">
          <ProjectVisual
            visual={project.visual}
            name={project.name}
            tall
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="kicker">Case file</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              {project.description}
            </p>
            <div className="mt-8">
              <ProjectLinks project={project} size="md" />
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-bg-elevated p-6 sm:p-7">
            <h2 className="kicker">Role</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              {project.contribution}
            </p>
            <h2 className="kicker mt-8">Type</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <li key={category} className="chip">
                  {category}
                </li>
              ))}
            </ul>
            {project.technologies.length > 0 ? (
              <>
                <h2 className="kicker mt-8">Technologies</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip bg-bg">
                      {tech}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </aside>
        </div>

        <section className="mt-12 border-t border-line pt-10">
          <h2 className="text-xl font-semibold tracking-tight text-ink">
            Key functionality
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-line bg-bg-elevated px-4 py-3 text-sm leading-6 text-ink"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <nav
          aria-label="Adjacent projects"
          className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="rounded-2xl border border-line bg-bg-elevated p-5 transition-colors hover:border-line-strong"
            >
              <p className="kicker">Previous</p>
              <p className="mt-2 text-lg font-medium text-ink">{prev.name}</p>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="rounded-2xl border border-line bg-bg-elevated p-5 text-right transition-colors hover:border-line-strong"
            >
              <p className="kicker">Next</p>
              <p className="mt-2 text-lg font-medium text-ink">{next.name}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
