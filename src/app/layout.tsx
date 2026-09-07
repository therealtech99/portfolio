import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.seoTitle,
  description: site.seoDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  keywords: [
    "Md Athar Ali Ansari",
    "Flutter Developer",
    "Dart",
    "Flutter",
    "Firebase",
    "REST APIs",
    "React",
    "Next.js",
    "Bangalore",
    "Portfolio",
    "Resume",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
    siteName: site.name,
    title: site.seoTitle,
    description: site.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-ink">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
