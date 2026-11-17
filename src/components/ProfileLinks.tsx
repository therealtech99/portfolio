import {
  GitHubIcon,
  GlobeIcon,
  LinkIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/Icons";
import { profileLinks, type ProfileLinkIcon } from "@/lib/site";

type ProfileLinksProps = {
  /** Visual style for light or dark surfaces */
  tone?: "light" | "dark";
  className?: string;
  /** Icon-only compact buttons (good under a photo) */
  compact?: boolean;
};

function ProfileLinkIconView({
  icon,
  className,
}: {
  icon?: ProfileLinkIcon;
  className?: string;
}) {
  switch (icon) {
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "github":
      return <GitHubIcon className={className} />;
    case "mail":
      return <MailIcon className={className} />;
    case "phone":
      return <PhoneIcon className={className} />;
    case "globe":
      return <GlobeIcon className={className} />;
    case "link":
    default:
      return <LinkIcon className={className} />;
  }
}

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function ProfileLinks({
  tone = "light",
  className = "",
  compact = false,
}: ProfileLinksProps) {
  if (!profileLinks.length) return null;

  const dark = tone === "dark";
  const itemClass = dark
    ? compact
      ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/75 transition-colors hover:border-white/40 hover:text-white"
      : "inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
    : compact
      ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-elevated text-ink transition-colors hover:border-ink"
      : "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink";

  return (
    <ul
      className={`flex flex-wrap items-center gap-3 ${className}`.trim()}
      aria-label="Profile links"
    >
      {profileLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            {...(isExternal(link.href)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={itemClass}
            aria-label={link.label}
            title={link.label}
          >
            <ProfileLinkIconView icon={link.icon} className="h-4 w-4" />
            {compact ? null : <span>{link.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
