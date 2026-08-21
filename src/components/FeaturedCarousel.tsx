"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function FeaturedCarousel({ children }: { children: ReactNode[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = children.length;

  function go(dir: 1 | -1) {
    setIndex((i) => (i + dir + count) % count);
  }

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 2000);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous"
        className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-md text-navy hover:bg-navy hover:text-white transition-colors"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next"
        className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-md text-navy hover:bg-navy hover:text-white transition-colors"
      >
        →
      </button>

      {children[index]}

      <div className="mt-6 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-navy" : "w-2.5 bg-navy/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
