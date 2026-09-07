import { ArrowUpRightIcon, DownloadIcon } from "@/components/Icons";
import { TiltStage } from "@/components/TiltStage";
import { site } from "@/lib/site";

export function Resume() {
  return (
    <section
      id="resume"
      className="reveal border-t border-line"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <TiltStage>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-white shadow-[0_40px_90px_-40px_rgba(18,17,15,0.8)] sm:px-12 sm:py-16 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="text-xs tracking-[0.2em] text-white/55 uppercase">
                06 — Resume
              </p>
              <h2
                id="resume-heading"
                className="mt-4 font-display text-4xl tracking-tight sm:text-5xl"
              >
                Download my resume
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                A concise record of Flutter product work, VillageMart, and
                related delivery. Use this with the live projects above.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.resumePath}
                  download={site.resumeFileName}
                  className="btn bg-white text-ink hover:bg-[#f3f0e8]"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download Resume
                </a>
                <a href={site.resumePage} className="btn border border-white/20 bg-transparent text-white hover:bg-white/10">
                  View Resume
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-6 font-mono text-xs text-white/40">
                {site.resumePage} · {site.resumePath}
              </p>
            </div>
          </div>
        </TiltStage>
      </div>
    </section>
  );
}
