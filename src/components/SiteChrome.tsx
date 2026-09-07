import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageFrame } from "@/components/PageFrame";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollProgress } from "@/components/ScrollProgress";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <RevealObserver />
      <PageFrame />
      <div className="relative z-10 flex min-h-full flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}
