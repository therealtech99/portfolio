"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { heroStack, site } from "@/lib/site";

export function HeroScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 8, y: -12 });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setTilt({ x: 0, y: 0 });
    }
  }, []);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const node = stageRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -14, y: px * 18 });
  }

  function onLeave() {
    setTilt({ x: 8, y: -12 });
  }

  return (
    <div
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="scene-3d relative isolate h-[420px] sm:h-[460px]"
    >
      <div
        className="preserve-3d absolute inset-0 flex items-center justify-center"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 180ms ease-out",
        }}
      >
        <div className="absolute h-56 w-56 rounded-full border border-line/80 orbit" />
        <div className="absolute h-72 w-72 rounded-full border border-dashed border-line/60 orbit-reverse" />
        <div
          className="absolute h-40 w-40 rounded-full bg-accent/10 blur-2xl"
          style={{ transform: "translateZ(-40px)" }}
        />

        <article className="float-3d relative w-[min(100%,18.5rem)] overflow-hidden rounded-[1.6rem] border border-line bg-bg-elevated p-7 shadow-[0_30px_80px_-32px_rgba(18,17,15,0.55)]">
          <div className="sheen pointer-events-none absolute inset-0 mix-blend-soft-light" />
          <div className="relative">
            <div className="mb-7 flex items-end justify-between">
              <p className="font-display text-6xl leading-none tracking-tight text-ink">
                {site.initials}
              </p>
              <p className="kicker pb-1">Profile</p>
            </div>
            <dl className="grid gap-5">
              <div>
                <dt className="kicker">Experience</dt>
                <dd className="mt-2 font-display text-3xl text-ink">
                  {site.years}
                </dd>
              </div>
              <div className="h-px bg-line" />
              <div>
                <dt className="kicker">Core stack</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {heroStack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
}
