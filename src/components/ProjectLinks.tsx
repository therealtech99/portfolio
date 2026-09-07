import { ArrowUpRightIcon } from "@/components/Icons";
import type { Project } from "@/lib/site";

export function ProjectLinks({
  project,
  size = "sm",
}: {
  project: Project;
  size?: "sm" | "md";
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.links.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${index === 0 ? "btn-primary" : "btn-secondary"} ${
            size === "sm" ? "btn-sm" : ""
          }`}
        >
          {link.label}
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
