"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/Icons";
import { navItems, site } from "@/lib/site";

function isItemActive(href: string, pathname: string, activeHash: string) {
  if (href === "/projects") {
    return pathname.startsWith("/projects");
  }
  if (href === "/resume") {
    return pathname.startsWith("/resume") || activeHash === "#resume";
  }

  const hash = href.includes("#") ? `#${href.split("#")[1]}` : href;
  return !pathname.startsWith("/projects") && activeHash === hash;
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const id = item.href.includes("#") ? item.href.split("#")[1] : "";
        return id ? document.getElementById(id) : null;
      })
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const cinematic = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/90 bg-bg/80 shadow-[0_10px_30px_-24px_rgba(18,17,15,0.45)] backdrop-blur-xl"
          : cinematic
            ? "border-b border-white/8 bg-[#0b0b0a]/35 backdrop-blur-md"
            : "border-b border-transparent bg-bg/40 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-semibold tracking-wide ${
              cinematic ? "bg-white text-[#0b0b0a]" : "bg-ink text-white"
            }`}
          >
            {site.initials}
          </span>
          <span
            className={`hidden text-sm font-semibold tracking-tight sm:block ${
              cinematic ? "text-white" : "text-ink"
            }`}
          >
            {site.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const current = isItemActive(item.href, pathname, active);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition-colors ${
                    current
                      ? cinematic
                        ? "bg-white/12 text-white"
                        : "bg-accent-soft text-ink"
                      : cinematic
                        ? "text-white/60 hover:text-white"
                        : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.resumePath}
            download={site.resumeFileName}
            className={`btn btn-sm ${
              cinematic
                ? "bg-white text-[#0b0b0a] hover:bg-[#c4a36a]"
                : "btn-primary"
            }`}
          >
            <DownloadIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </a>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
              cinematic
                ? "border-white/15 bg-white/8 text-white"
                : "border-line bg-bg-elevated"
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-5 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-2 py-3 font-display text-4xl tracking-tight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
