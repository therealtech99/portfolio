import type { Project } from "@/lib/site";

const palettes: Record<Project["visual"], string> = {
  villagemart: "from-[#dfe8e4] via-[#edefe8] to-[#f7f4ec]",
  resume: "from-[#e7e3d8] via-[#f3efe6] to-[#faf7f1]",
  electric: "from-[#e4e0d4] via-[#efe9dc] to-[#f7f3ea]",
  sifa: "from-[#d8e0df] via-[#eceae3] to-[#f8f5ee]",
  amlu: "from-[#e6e2d6] via-[#f1ece3] to-[#f8f5ee]",
  havocline: "from-[#dce6e2] via-[#e8eee8] to-[#f5f2ea]",
};

export function ProjectVisual({
  visual,
  name,
  featured = false,
  tall = false,
}: {
  visual: Project["visual"];
  name: string;
  featured?: boolean;
  tall?: boolean;
}) {
  const label = name.slice(0, 2).toUpperCase();

  return (
    <div
      className={`relative flex items-end overflow-hidden border-b border-line bg-gradient-to-br p-6 ${palettes[visual]} ${
        tall
          ? "h-64 sm:h-80"
          : featured
            ? "h-52 sm:h-56 lg:h-full lg:min-h-72 lg:border-b-0 lg:border-r"
            : "h-48 sm:h-52"
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22,54,63,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,54,63,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <svg
        viewBox="0 0 320 180"
        className="absolute inset-0 h-full w-full opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
        fill="none"
      >
        {visual === "villagemart" ? (
          <>
            <rect x="24" y="28" width="84" height="108" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <rect x="118" y="28" width="84" height="108" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <rect x="212" y="28" width="84" height="108" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <path d="M40 52h52M40 68h40M40 84h46" stroke="#16363f" strokeOpacity="0.45" />
            <circle cx="160" cy="82" r="18" stroke="#16363f" />
            <path d="M228 52h52M228 72h36M228 92h44" stroke="#16363f" strokeOpacity="0.45" />
          </>
        ) : null}
        {visual === "resume" ? (
          <>
            <rect x="70" y="22" width="180" height="136" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <path d="M92 48h136M92 64h110M92 86h136M92 102h120M92 118h96" stroke="#16363f" strokeOpacity="0.5" />
          </>
        ) : null}
        {visual === "electric" ? (
          <>
            <path d="M40 90h70l18-36 28 72 22-36h102" stroke="#16363f" strokeWidth="1.6" />
            <rect x="236" y="72" width="36" height="36" rx="4" stroke="#16363f" />
            <path d="M40 118h240" stroke="#16363f" strokeOpacity="0.25" />
          </>
        ) : null}
        {visual === "sifa" ? (
          <>
            <rect x="48" y="36" width="224" height="108" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <path d="M48 68h224M88 36v108" stroke="#16363f" strokeOpacity="0.4" />
            <rect x="108" y="84" width="44" height="44" rx="4" stroke="#16363f" />
            <rect x="164" y="84" width="44" height="44" rx="4" stroke="#16363f" />
          </>
        ) : null}
        {visual === "amlu" ? (
          <>
            <path d="M40 140 V48 h40 V140 M80 48 h40 V140 M160 140 V36 h40 V140 M200 36 h40 V140 M240 140 V56 h40 V140" stroke="#16363f" strokeWidth="1.4" />
            <path d="M36 140 h248" stroke="#16363f" />
          </>
        ) : null}
        {visual === "havocline" ? (
          <>
            <rect x="36" y="36" width="248" height="108" rx="8" stroke="#16363f" strokeWidth="1.4" />
            <circle cx="160" cy="90" r="22" stroke="#16363f" />
            <path d="M36 90 h248 M160 36 v108" stroke="#16363f" strokeOpacity="0.4" />
          </>
        ) : null}
      </svg>
      <span className="relative font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
        {label}
      </span>
    </div>
  );
}
