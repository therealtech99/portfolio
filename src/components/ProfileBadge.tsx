"use client";

import { useState } from "react";
import { ProfileLinks } from "@/components/ProfileLinks";
import { site } from "@/lib/site";

type ProfileBadgeProps = {
  tone?: "light" | "dark";
  className?: string;
};

export function ProfileBadge({
  tone = "dark",
  className = "",
}: ProfileBadgeProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(site.photo) && !photoFailed;
  const dark = tone === "dark";

  return (
    <div className={`flex flex-col items-start gap-4 ${className}`.trim()}>
      <div
        className={`relative h-20 w-20 overflow-hidden rounded-full border sm:h-24 sm:w-24 ${
          dark
            ? "border-white/15 bg-white/8 text-white"
            : "border-line bg-bg-elevated text-ink"
        }`}
      >
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={site.photo}
            alt={`${site.name} profile photo`}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center font-display text-2xl tracking-tight sm:text-3xl"
            aria-hidden="true"
          >
            {site.initials}
          </span>
        )}
      </div>

      <ProfileLinks tone={tone} />
    </div>
  );
}
