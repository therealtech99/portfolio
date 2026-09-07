"use client";

import { FormEvent, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }

    if (site.email) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("Opening your email client…");
      return;
    }

    window.open(site.linkedin, "_blank", "noopener,noreferrer");
    setStatus("Email is not configured yet, so LinkedIn will open instead.");
  }

  return (
    <section
      id="contact"
      className="reveal border-t border-line"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-32">
        <div>
          <SectionHeader
            index="08"
            eyebrow="Contact"
            title="Let’s talk"
            description="Available for remote Flutter roles. For a conversation about product work or this portfolio, start with email, LinkedIn, or GitHub."
            titleId="contact-heading"
          />

          <ul className="mt-10 space-y-3">
            {site.email ? (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink"
                >
                  <MailIcon className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
            ) : null}
            {site.phone ? (
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phone}
                </a>
              </li>
            ) : null}
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink"
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
                  className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-bg-elevated px-4 text-sm text-ink transition-colors hover:border-ink"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-line bg-bg-elevated p-6 shadow-[var(--shadow)] sm:p-8"
          noValidate
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                className="input"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="input min-h-36 resize-y"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status ? (
              <p className="text-sm text-muted" role="status">
                {status}
              </p>
            ) : (
              <p className="text-sm text-faint">
                {site.email
                  ? "This form opens your email client. No data is stored on this site."
                  : "This form currently opens LinkedIn. No data is stored on this site."}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
