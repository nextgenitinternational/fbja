"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = ["/images/hero-press-1.jpg", "/images/hero-press-2.jpg", "/images/hero-press-3.jpg"];

export default function HeroSlider({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={
        full
          ? "relative h-[52vh] min-h-85 overflow-hidden sm:h-[64vh] lg:h-[78vh]"
          : "relative h-55 overflow-hidden sm:h-75 lg:h-90"
      }
    >
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image src={src} alt="" fill priority={i === 0} className="object-cover" />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${i === active ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
