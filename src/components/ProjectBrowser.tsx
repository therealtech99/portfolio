"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/lib/site";

type Filter = (typeof projectCategories)[number];

export function ProjectBrowser() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        filter === "All" ||
        project.categories.includes(filter as ProjectCategory);
      const haystack = [
        project.name,
        project.description,
        ...project.features,
        ...project.categories,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                filter === category
                  ? "bg-ink text-white"
                  : "border border-line bg-bg-elevated text-muted hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <label className="relative block w-full lg:max-w-xs">
          <span className="sr-only">Search projects</span>
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="input w-full pl-10"
          />
        </label>
      </div>

      <p className="mt-5 text-sm text-faint">
        {visible.length} of {projects.length} live projects
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={
                Boolean(project.featured) && filter === "All" && !query.trim()
              }
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-line px-6 py-16 text-center text-muted">
          No projects match that filter. Try another category or search term.
        </p>
      )}
    </div>
  );
}
