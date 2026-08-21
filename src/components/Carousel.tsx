"use client";

import { useRef, useState, type ReactNode } from "react";

export default function Carousel({ children }: { children: ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pages = Math.max(1, children.length - 2);

  function scrollBy(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * (track.clientWidth * 0.85), behavior: "smooth" });
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild instanceof HTMLElement ? track.firstElementChild.offsetWidth + 24 : 1;
    setActive(Math.min(pages - 1, Math.round(track.scrollLeft / cardWidth)));
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} className="shrink-0 snap-start w-64 sm:w-72">
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        aria-label="Previous"
        className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-md text-navy hover:bg-navy hover:text-white transition-colors"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        aria-label="Next"
        className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-md text-navy hover:bg-navy hover:text-white transition-colors"
      >
        →
      </button>

      {pages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-6 bg-navy" : "w-2.5 bg-navy/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
