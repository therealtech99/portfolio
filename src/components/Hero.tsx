"use client";

import dynamic from "next/dynamic";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { heroStack, site } from "@/lib/site";

const HeroWebGL = dynamic(() => import("@/components/HeroWebGL"), {
  ssr: false,
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0b0b0a] text-[#f3efe6]"
      aria-labelledby="hero-heading"
    >
      <HeroWebGL />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(11,11,10,0.18)_45%,rgba(11,11,10,0.78)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-[#0b0b0a] via-[#0b0b0a]/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
        <p className="hero-mask mb-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs tracking-[0.18em] text-white/60 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4a36a]" />
            Flutter · Remote-ready · {site.years}
          </span>
        </p>

        <p className="hero-mask font-display text-2xl italic text-white/50 sm:text-3xl">
          <span>Hi, I&apos;m</span>
        </p>
        <h1
          id="hero-heading"
          className="mt-2 font-display text-[3rem] leading-[0.9] tracking-[-0.045em] sm:text-7xl lg:text-[6.1rem]"
        >
          <span className="hero-mask">
            <span>Md Athar Ali</span>
          </span>
          <span className="hero-mask">
            <span className="delay-2">Ansari</span>
          </span>
        </h1>
        <p className="hero-mask mt-7 text-lg font-medium tracking-tight text-[#c4a36a] sm:text-xl">
          <span className="delay-3">{site.title}</span>
        </p>
        <p className="hero-mask mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          <span className="delay-4">{site.headline}</span>
        </p>
        <p className="hero-mask mt-4 max-w-xl text-base leading-relaxed text-white/50">
          <span className="delay-5">{site.supporting}</span>
        </p>

        <div className="hero-mask mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <span className="delay-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/projects"
              className="btn bg-white text-ink hover:bg-[#c4a36a] hover:text-[#0b0b0a]"
            >
              View My Work
            </a>
            <a
              href={site.resumePath}
              download={site.resumeFileName}
              className="btn border border-white/20 bg-white/5 text-white hover:border-white hover:bg-white/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn text-white/80 hover:bg-white/8 hover:text-white"
            >
              Contact Me
            </a>
          </span>
        </div>

        <div className="hero-mask mt-8 flex flex-wrap items-center gap-3">
          <span className="delay-7 flex flex-wrap gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            {site.github ? (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
          </span>
        </div>
      </div>

      <div className="absolute right-0 bottom-24 left-0 z-10 overflow-hidden border-y border-white/8 py-3">
        <div className="marquee text-[11px] tracking-[0.28em] text-white/35 uppercase">
          <div className="marquee-track">
            {[...heroStack, ...heroStack, ...heroStack].map((item, index) => (
              <span key={`${item}-${index}`} className="px-6">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-b from-transparent to-[var(--bg)]"
        aria-hidden="true"
      />
    </section>
  );
}
