"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function Card3D({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `rotateX(${py * -7}deg) rotateY(${px * 9}deg)`;
  }

  return (
    <div className={`scene-3d ${className}`}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="card-3d h-full"
      >
        {children}
      </div>
    </div>
  );
}
