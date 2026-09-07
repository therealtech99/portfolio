import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon, DownloadIcon } from "@/components/Icons";
import { ResumeDocument } from "@/components/ResumeDocument";
import { TiltStage } from "@/components/TiltStage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  description: site.seoDescription,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main id="main" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="no-print mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.resumePath}
              download={site.resumeFileName}
              className="btn btn-primary btn-sm"
            >
              <DownloadIcon className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Open PDF
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="no-print kicker">Interactive resume</p>
        <h1 className="no-print mt-3 mb-10 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Resume
        </h1>

        <TiltStage className="no-print-transform">
          <ResumeDocument />
        </TiltStage>
      </div>
    </main>
  );
}
